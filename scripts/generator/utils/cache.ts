import crypto from 'crypto'
import fs from 'fs/promises'
import path from 'path'

const CACHE_DIR = './.cache/generator'

export class GeneratorCache {
  private memoryCache: Map<string, any> = new Map()
  
  constructor() {
    this.initCache()
  }
  
  private async initCache() {
    await fs.mkdir(CACHE_DIR, { recursive: true })
  }
  
  private generateKey(input: any): string {
    const hash = crypto.createHash('sha256')
    hash.update(JSON.stringify(input))
    return hash.digest('hex')
  }
  
  async get<T>(key: string, generator: () => Promise<T>, ttl?: number): Promise<T> {
    if (this.memoryCache.has(key)) {
      return this.memoryCache.get(key)
    }
    
    const filePath = path.join(CACHE_DIR, `${key}.json`)
    try {
      const cached = await fs.readFile(filePath, 'utf-8')
      const data = JSON.parse(cached)
      
      if (ttl && data.timestamp) {
        const age = Date.now() - data.timestamp
        if (age > ttl) {
          const result = await generator()
          await this.set(key, result)
          return result
        }
      }
      
      this.memoryCache.set(key, data.value)
      return data.value
    } catch (error) {
      const result = await generator()
      await this.set(key, result)
      return result
    }
  }
  
  async set(key: string, value: any): Promise<void> {
    this.memoryCache.set(key, value)
    
    const filePath = path.join(CACHE_DIR, `${key}.json`)
    const data = {
      timestamp: Date.now(),
      value
    }
    await fs.writeFile(filePath, JSON.stringify(data, null, 2))
  }
  
  async getCachedCompletion<T>(
    promptKey: any,
    generator: () => Promise<T>
  ): Promise<T> {
    const key = this.generateKey(promptKey)
    return this.get(key, generator, 3600000) // 1 hour TTL
  }
  
  async clearCache(): Promise<void> {
    this.memoryCache.clear()
    try {
      const files = await fs.readdir(CACHE_DIR)
      await Promise.all(
        files.map(file => fs.unlink(path.join(CACHE_DIR, file)))
      )
    } catch (error) {
    }
  }
}

export const cache = new GeneratorCache()