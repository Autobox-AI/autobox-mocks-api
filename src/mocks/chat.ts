const disclaimerMessage = `🤖 **Welcome to Autobox Assistant Demo!**

This is a demo chat interface. There is no real LLM connected - all responses are pre-generated for demonstration purposes.

I can help you learn about agent-based simulations and the Autobox platform. Feel free to ask me questions!`

const agentQuotes = [
  "Agent-based simulations allow you to model complex systems by defining individual agents with their own behaviors, goals, and interactions.",
  "In Autobox, agents can represent anything from people in a social network to components in a supply chain, each with unique decision-making capabilities.",
  "The power of multi-agent systems lies in emergent behavior - simple agent rules can lead to surprisingly complex system-wide patterns.",
  "Autobox enables you to orchestrate conversations between AI agents, letting them negotiate, collaborate, and solve problems together.",
  "Unlike traditional simulations, agent-based models in Autobox can leverage LLMs to create agents that reason, adapt, and learn from their interactions.",
  "Each agent in an Autobox simulation maintains its own state, memory, and objectives, allowing for realistic modeling of autonomous entities.",
  "Autobox's distributed architecture allows simulations to scale from simple two-agent negotiations to complex multi-stakeholder scenarios.",
  "By combining agent-based modeling with modern AI, Autobox opens new possibilities for exploring 'what-if' scenarios in business, policy, and research.",
  "The trace system in Autobox captures every agent interaction, providing complete visibility into how decisions emerge from agent communications.",
  "Autobox simulations can model everything from market dynamics to organizational behavior, with agents that truly understand context and adapt their strategies."
]

export const getChatResponse = (message: string) => {
  // For the first message or any message, return disclaimer + random quote
  const randomQuote = agentQuotes[Math.floor(Math.random() * agentQuotes.length)]
  
  return {
    message: `${disclaimerMessage}\n\n💡 **Did you know?**\n${randomQuote}`,
    timestamp: new Date().toISOString()
  }
}