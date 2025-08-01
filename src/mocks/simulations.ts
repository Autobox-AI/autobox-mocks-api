export const simulations = {
  simulations: [
    {
      id: '43419666-8307-4afa-96be-32400e855cc4',
      status: 'verified',
      name: 'Weekend Planning',
      description: 'Simulation to understand how friends plan weekend activities together',
      task: 'Analyze group decision-making patterns for weekend activities',
      created_at: '2024-07-20T10:00:00',
      updated_at: '2024-07-20T10:30:00',
      project_name: 'Friends Dynamics',
      total_runs: 1,
      orchestrator: {
        id: '9387b6b7-0626-4239-83a1-7cb20ede6874',
        name: 'orchestrator',
        llm: {
          model: 'gpt-4o',
        },
      },
      evaluator: {
        id: 'f3b83ee2-e3f1-4e1c-bd4b-0d3cf2734013',
        name: 'evaluator',
        llm: {
          model: 'gpt-4o',
        },
      },
      planner: {
        id: 'ff3190ce-e515-4690-b0c7-54a76f0679cb',
        name: 'planner',
        llm: {
          model: 'gpt-4o',
        },
      },
      reporter: {
        id: 'c40aa9a5-60bd-42a8-9180-1247c8cc10c5',
        name: 'reporter',
        llm: {
          model: 'gpt-4o',
        },
      },
      agents: [
        {
          id: '0b3b27f4-a053-439a-8643-63e080258845',
          name: 'Sarah',
          llm: {
            model: 'gpt-4o',
          },
          role: 'social organizer',
          description: 'Enthusiastic friend who loves planning group activities',
          backstory:
            "A 28-year-old marketing professional who thrives on bringing friends together. Known for her creativity and ability to find activities that everyone enjoys. She's the type who keeps a running list of fun places to visit and always knows what's happening in the city.",
        },
        {
          id: 'bdbda045-53ef-41d1-8958-42141148a8f1',
          name: 'Mike',
          llm: {
            model: 'gpt-4o',
          },
          role: 'practical planner',
          description: 'Logical friend who focuses on logistics and feasibility',
          backstory:
            "A 30-year-old engineer who approaches weekend planning with systematic thinking. He's the friend who checks weather forecasts, considers travel times, and makes sure everyone can afford the activities. His friends rely on him to turn fun ideas into realistic plans.",
        },
        {
          id: '7b2bce9b-a70b-4a4f-98a0-9e9d599aa865',
          name: 'Emma',
          llm: {
            model: 'gpt-4o',
          },
          role: 'budget conscious friend',
          description: 'Cost-aware friend who suggests affordable alternatives',
          backstory:
            "A 26-year-old teacher who loves spending time with friends but is mindful of expenses. She's great at finding free events, happy hour deals, and creative low-cost activities. Her friends appreciate how she ensures everyone can participate regardless of budget.",
        },
      ],
    },
    {
      id: '87077efb-308e-4b4e-b845-8f7d4faed852',
      status: 'verified',
      name: 'Gym Buddy Motivation',
      description: "Simulation to study how gym buddies influence each other's workout consistency",
      task: 'Analyze the impact of social support on fitness motivation',
      created_at: '2024-08-01T18:00:00',
      updated_at: '2024-08-01T18:40:00',
      project_name: 'Friends Dynamics',
      total_runs: 1,
      orchestrator: {
        id: '513fd84f-08e3-4f6d-a9da-b6f48362df24',
        name: 'orchestrator',
        llm: {
          model: 'gpt-4o',
        },
      },
      evaluator: {
        id: '1bbe8825-3832-4c85-9957-229575ef8991',
        name: 'evaluator',
        llm: {
          model: 'gpt-4o',
        },
      },
      planner: {
        id: 'db0f78e4-9cf2-4ed5-aa48-4259f7c57442',
        name: 'planner',
        llm: {
          model: 'gpt-4o',
        },
      },
      reporter: {
        id: '87aaf233-5cdf-43ba-a63e-48c76a25b6ea',
        name: 'reporter',
        llm: {
          model: 'gpt-4o',
        },
      },
      agents: [
        {
          id: 'ccae30a1-4dff-4120-ba75-aa885b8f3721',
          name: 'Alex',
          llm: {
            model: 'gpt-4o',
          },
          role: 'motivated gym buddy',
          description: 'Highly motivated fitness enthusiast who encourages their workout partner',
          backstory:
            'A 29-year-old software developer who discovered fitness three years ago and never looked back. Alex wakes up at 6 AM every day, has a detailed workout plan, and genuinely gets excited about helping others reach their fitness goals. They believe consistency is key and always shows up, even on tough days.',
        },
        {
          id: '8ee8f3f9-b2dd-451e-bfc0-155c56db39a9',
          name: 'Jordan',
          llm: {
            model: 'gpt-4o',
          },
          role: 'inconsistent gym buddy',
          description: 'Well-intentioned but struggling with workout consistency',
          backstory:
            "A 27-year-old graphic designer who wants to be fit but struggles with motivation and consistency. Jordan has good intentions and enjoys working out when they get started, but often finds excuses to skip sessions. They rely heavily on Alex's encouragement and feel guilty when they let their gym buddy down.",
        },
      ],
    },
    {
      id: '86038c7e-0cbe-441e-acd6-d24d7d0ca834',
      status: 'verified',
      name: 'Green Energy Adoption Rates',
      description: 'Simulation to analyze factors affecting green energy adoption',
      task: 'Study the impact of various factors on renewable energy adoption',
      created_at: '2024-04-20T08:00:00',
      updated_at: '2024-04-20T14:00:00',
      project_name: 'Climate Change Strategy',
      total_runs: 1,
      orchestrator: {
        id: '86a139bc-155e-4e22-bf92-14a7e4e50803',
        name: 'orchestrator',
        llm: {
          model: 'gpt-4o',
        },
      },
      evaluator: {
        id: '4b003676-8734-445e-950f-8839602c4b30',
        name: 'evaluator',
        llm: {
          model: 'gpt-4o',
        },
      },
      planner: {
        id: '0458e18d-f8af-42c5-98a5-ec0a77883503',
        name: 'planner',
        llm: {
          model: 'gpt-4o',
        },
      },
      reporter: {
        id: '1eb57d80-c357-4274-b7f0-04f333a042a5',
        name: 'reporter',
        llm: {
          model: 'gpt-4o',
        },
      },
      agents: [
        {
          id: '3a08c8eb-c197-4152-8862-b908d1b44c1c',
          name: 'Market Analyst',
          llm: {
            model: 'gpt-4o',
          },
          role: 'market analyst',
          description: 'Analyzes market conditions and consumer behavior',
          backstory: 'Expert in energy markets and consumer adoption patterns',
        },
        {
          id: '73754445-90ca-4565-8b70-42d7b5412e26',
          name: 'Policy Impact Specialist',
          llm: {
            model: 'gpt-4o',
          },
          role: 'policy specialist',
          description: 'Evaluates impact of policies on adoption rates',
          backstory: 'Specializes in energy policy analysis and implementation',
        },
      ],
    },
    {
      id: '58275e37-dc54-4a7a-a58a-26945bb151b7',
      status: 'verified',
      name: 'Influencer vs. Traditional Ads',
      description:
        'Simulation to compare the effectiveness of influencer marketing versus traditional advertising',
      task: 'Analyze the impact of different marketing approaches on consumer behavior',
      created_at: '2024-05-10T10:00:00',
      updated_at: '2024-05-10T15:00:00',
      project_name: 'Marketing Campaign Effectiveness',
      total_runs: 1,
      orchestrator: {
        id: '2bc7c69d-1133-46ff-887d-0e9d2a194f87',
        name: 'orchestrator',
        llm: {
          model: 'gpt-4o',
        },
      },
      evaluator: {
        id: 'd634b77e-e1ba-48ca-aa45-38bb78ad0fab',
        name: 'evaluator',
        llm: {
          model: 'gpt-4o',
        },
      },
      planner: {
        id: '7a9c632f-b148-46ba-80c5-af69b6db84be',
        name: 'planner',
        llm: {
          model: 'gpt-4o',
        },
      },
      reporter: {
        id: 'd1541f77-0849-4db3-93e0-15fc54e9c404',
        name: 'reporter',
        llm: {
          model: 'gpt-4o',
        },
      },
      agents: [
        {
          id: '523a2f7d-cbe2-4ca4-a397-d624f41fdce4',
          name: 'Influencer Specialist',
          llm: {
            model: 'gpt-4o',
          },
          role: 'influencer specialist',
          description: 'Designs influencer campaigns',
          backstory: 'Expert in social media marketing',
        },
        {
          id: 'dc60a300-6eb6-47ea-9a60-34f49d625292',
          name: 'Traditional Ads Specialist',
          llm: {
            model: 'gpt-4o',
          },
          role: 'ads specialist',
          description: 'Designs traditional ad campaigns',
          backstory: 'Experienced in TV and print advertising',
        },
      ],
    },
    {
      id: 'e9732721-dfbd-4986-8ede-e6b1e27d7fec',
      status: 'verified',
      name: 'Coalition Building and Policy Trade-offs',
      description: 'Simulation to analyze how political coalitions form and make policy decisions',
      task: 'Study the dynamics of coalition formation and policy negotiation',
      created_at: '2024-06-15T09:00:00',
      updated_at: '2024-06-15T14:00:00',
      project_name: 'Political Negotiation',
      total_runs: 1,
      orchestrator: {
        id: 'c4813652-b330-4bd7-8e93-e8e5280b3714',
        name: 'orchestrator',
        llm: {
          model: 'gpt-4o',
        },
      },
      evaluator: {
        id: '04dc8a78-fa6a-4458-9c00-2d85ca9d2ea1',
        name: 'evaluator',
        llm: {
          model: 'gpt-4o',
        },
      },
      planner: {
        id: 'cbd732a4-a200-45ff-b59d-77eec082616e',
        name: 'planner',
        llm: {
          model: 'gpt-4o',
        },
      },
      reporter: {
        id: '063484a9-243a-4484-8da9-ac9522a5e413',
        name: 'reporter',
        llm: {
          model: 'gpt-4o',
        },
      },
      agents: [
        {
          id: 'e5ce0242-174a-4877-9ff2-d348163cf5d5',
          name: 'Party Leader',
          llm: {
            model: 'gpt-4o',
          },
          role: 'party leader',
          description: 'Leads a political party',
          backstory: 'Experienced negotiator',
        },
        {
          id: '76d0785c-70c1-44e5-89f6-36be9517aa0f',
          name: 'Policy Analyst',
          llm: {
            model: 'gpt-4o',
          },
          role: 'policy analyst',
          description: 'Analyzes policy trade-offs',
          backstory: 'Expert in public policy',
        },
      ],
    },
    {
      id: '553e22e4-db7a-48b0-8c80-06a003b002ed',
      status: 'verified',
      name: 'Product Launch Timing',
      description: 'Simulation to determine optimal timing for launching a new product.',
      task: 'Analyze market conditions and competitor actions to select launch date.',
      created_at: '2024-09-10T11:00:00',
      updated_at: '2024-09-10T18:00:00',
      project_name: 'Startup Decision Making',
      total_runs: 1,
      orchestrator: {
        id: 'c9cf28ad-ec70-4809-ab14-f26add58c825',
        name: 'orchestrator',
        llm: {
          model: 'gpt-4o',
        },
      },
      evaluator: {
        id: '4a769e32-3fd5-46c6-9322-3edda3c69583',
        name: 'evaluator',
        llm: {
          model: 'gpt-4o',
        },
      },
      planner: {
        id: 'a59c6c00-14dd-4c98-a798-f11c86608f52',
        name: 'planner',
        llm: {
          model: 'gpt-4o',
        },
      },
      reporter: {
        id: 'cdc6acd9-0411-42ca-a73d-d3dba9f82db4',
        name: 'reporter',
        llm: {
          model: 'gpt-4o',
        },
      },
      agents: [
        {
          id: '7eac1516-04bc-42bd-91a6-8f2fa300448d',
          name: 'Market Analyst',
          llm: {
            model: 'gpt-4o',
          },
          role: 'market analyst',
          description: 'Analyzes market trends',
          backstory: 'Expert in product launches',
        },
        {
          id: 'b815716a-18ba-4f24-9a7a-8d975c1db0e0',
          name: 'Competitor Analyst',
          llm: {
            model: 'gpt-4o',
          },
          role: 'competitor analyst',
          description: 'Tracks competitor activities',
          backstory: 'Experienced in competitive analysis',
        },
      ],
    },
    {
      id: '3ec4b722-ffbc-47fb-b4e8-85e60b8889f4',
      status: 'verified',
      name: 'Breaking Social Media Addiction',
      description: 'Simulation to study methods for overcoming social media addiction',
      task: 'Analyze the effectiveness of different addiction intervention strategies',
      created_at: '2024-05-25T11:00:00',
      updated_at: '2024-05-25T17:00:00',
      project_name: 'Digital Addiction',
      total_runs: 1,
      orchestrator: {
        id: '867c19ca-7850-4ac4-89fe-a2382b8c4c63',
        name: 'orchestrator',
        llm: {
          model: 'gpt-4o',
        },
      },
      evaluator: {
        id: '4a66e0cc-d691-4757-918d-536da6ea03b3',
        name: 'evaluator',
        llm: {
          model: 'gpt-4o',
        },
      },
      planner: {
        id: '34d5e039-1c96-439c-9d69-010c4ec1d842',
        name: 'planner',
        llm: {
          model: 'gpt-4o',
        },
      },
      reporter: {
        id: '580b12ac-57f8-459a-b548-5d05c69c14b8',
        name: 'reporter',
        llm: {
          model: 'gpt-4o',
        },
      },
      agents: [
        {
          id: '6d15bdb8-e088-4ac9-90d8-e5878223121a',
          name: 'Maya Patel',
          llm: {
            model: 'gpt-4o',
          },
          role: 'recovering user',
          description:
            'A person actively working to reduce their social media usage and break addictive patterns',
          backstory:
            'A 26-year-old marketing professional who realized her Instagram and TikTok use was affecting her sleep, work focus, and real-world relationships',
        },
        {
          id: 'c41e4c08-3758-4a1b-b0ee-39552c1eba62',
          name: 'Jake Anderson',
          llm: {
            model: 'gpt-4o',
          },
          role: 'supportive friend',
          description:
            'A friend who provides accountability and alternative activities for someone reducing social media use',
          backstory:
            'A 28-year-old outdoor enthusiast who successfully reduced his own social media use and now helps friends find offline activities and hobbies',
        },
      ],
    },
  ],
}
