export const runs = [
  {
    run: {
      id: 'cdfc1b8b-6a46-43c1-8bb9-6bd433c3eba6',
      simulation_id: '43419666-8307-4afa-96be-32400e855cc4',
      status: 'completed',
      progress: 100,
      started_at: '2024-07-20T10:36:00.000Z',
      summary:
        'In the "Weekend Planning" simulation, a collaborative decision-making process was observed among Sarah, Mike, and Emma. Sarah suggested diverse, inclusive activity ideas; Mike assessed logistical feasibility; Emma provided budget-friendly options. The group effectively balanced creativity, logistics, costs, and preferences, resulting in a well-rounded weekend activity plan. The process highlighted strong teamwork and consideration of multiple factors, ensuring an engaging and feasible itinerary for all friends. Overall, the planning demonstrated efficient, inclusive, and thorough group dynamics.',
      orchestrator_id: '9387b6b7-0626-4239-83a1-7cb20ede6874',
      evaluator_id: 'f3b83ee2-e3f1-4e1c-bd4b-0d3cf2734013',
      planner_id: 'ff3190ce-e515-4690-b0c7-54a76f0679cb',
      reporter_id: 'c40aa9a5-60bd-42a8-9180-1247c8cc10c5',
      workers: [
        {
          id: '0b3b27f4-a053-439a-8643-63e080258845',
          name: 'Sarah',
        },
        {
          id: 'bdbda045-53ef-41d1-8958-42141148a8f1',
          name: 'Mike',
        },
        {
          id: '7b2bce9b-a70b-4a4f-98a0-9e9d599aa865',
          name: 'Emma',
        },
      ],
      finished_at: '2024-07-20T11:36:00.000Z',
    },
    traces: [
      {
        from: 'orchestrator',
        to: 'planner',
        content:
          'Initiating the planning phase for the weekend activities analysis. Assigning tasks to refine the decision-making process among friends based on previous inputs.',
        is_system_trace: true,
        created_at: '2024-07-20T10:36:02Z',
      },
      {
        from: 'planner',
        to: 'orchestrator',
        content:
          'Planning instructions received. Prioritizing group preferences and logistical feasibility, including budget considerations and activity diversity.',
        is_system_trace: true,
        created_at: '2024-07-20T10:36:07Z',
      },
      {
        from: 'orchestrator',
        to: 'Sarah',
        content:
          'Sarah, please share any creative activity ideas you have for the weekend, focusing on fun and inclusive options.',
        is_system_trace: false,
        created_at: '2024-07-20T10:36:12Z',
      },
      {
        from: 'Sarah',
        to: 'orchestrator',
        content:
          "I've compiled a list of engaging activities, including outdoor adventures, local events, and themed gatherings, catering to everyone's interests.",
        is_system_trace: false,
        created_at: '2024-07-20T10:36:18Z',
      },
      {
        from: 'orchestrator',
        to: 'Mike',
        content:
          'Mike, analyze the feasibility and logistics of the proposed activities, considering weather, transportation, and timing.',
        is_system_trace: false,
        created_at: '2024-07-20T10:36:23Z',
      },
      {
        from: 'Mike',
        to: 'orchestrator',
        content:
          "I've assessed logistics for outdoor activities—perfect weather forecast, manageable travel routes, and cost-effective options identified.",
        is_system_trace: false,
        created_at: '2024-07-20T10:36:29Z',
      },
      {
        from: 'orchestrator',
        to: 'Emma',
        content:
          'Emma, evaluate the proposed activities from a budget perspective and suggest affordable alternatives if needed.',
        is_system_trace: false,
        created_at: '2024-07-20T10:36:34Z',
      },
      {
        from: 'Emma',
        to: 'orchestrator',
        content:
          'Most activities are budget-friendly, with a few inexpensive or free options highlighted to ensure inclusivity.',
        is_system_trace: false,
        created_at: '2024-07-20T10:36:39Z',
      },
      {
        from: 'orchestrator',
        to: 'evaluator',
        content:
          "Requesting assessment of the group's decision-making pattern and diversity of activity choices based on the current inputs.",
        is_system_trace: true,
        created_at: '2024-07-20T10:36:44Z',
      },
      {
        from: 'evaluator',
        to: 'orchestrator',
        content:
          'Analysis complete: Decision-making appears collaborative, with balanced input and consideration of preferences and constraints.',
        is_system_trace: true,
        created_at: '2024-07-20T10:36:50Z',
      },
      {
        from: 'orchestrator',
        to: 'reporter',
        content:
          'Summarize the group activity planning process highlighting key decision factors, preferences, and logistical considerations.',
        is_system_trace: true,
        created_at: '2024-07-20T10:36:55Z',
      },
      {
        from: 'reporter',
        to: 'orchestrator',
        content:
          'The group demonstrated a collaborative decision-making process, considering creative ideas, logistics, costs, and personal preferences to select a diverse weekend plan.',
        is_system_trace: true,
        created_at: '2024-07-20T10:37:00Z',
      },
    ],
  },
  {
    run: {
      id: 'f47af482-1614-486c-909b-12c98ee068c3',
      simulation_id: '87077efb-308e-4b4e-b845-8f7d4faed852',
      status: 'in progress',
      progress: 24,
      started_at: '2024-08-01T18:32:00.000Z',
      summary: null,
      orchestrator_id: '513fd84f-08e3-4f6d-a9da-b6f48362df24',
      evaluator_id: '1bbe8825-3832-4c85-9957-229575ef8991',
      planner_id: 'db0f78e4-9cf2-4ed5-aa48-4259f7c57442',
      reporter_id: '87aaf233-5cdf-43ba-a63e-48c76a25b6ea',
      workers: [
        {
          id: 'ccae30a1-4dff-4120-ba75-aa885b8f3721',
          name: 'Alex',
        },
        {
          id: '8ee8f3f9-b2dd-451e-bfc0-155c56db39a9',
          name: 'Jordan',
        },
      ],
      updated_at: '2024-08-01T19:22:00.000Z',
    },
    traces: [
      {
        from: 'orchestrator',
        to: 'planner',
        content:
          'Initiating step to generate a strategy for evaluating the influence of social support between Alex and Jordan.',
        is_system_trace: true,
        created_at: '2024-08-01T18:32:02.123Z',
      },
      {
        from: 'planner',
        to: 'orchestrator',
        content:
          'Designing a plan to analyze the current interactions and motivation levels of both gym buddies.',
        is_system_trace: true,
        created_at: '2024-08-01T18:32:09.456Z',
      },
      {
        from: 'orchestrator',
        to: 'Alex',
        content:
          'Gathering detailed recent activity logs and motivation cues to assess positive reinforcement strategies.',
        is_system_trace: false,
        created_at: '2024-08-01T18:32:15.567Z',
      },
      {
        from: 'Alex',
        to: 'orchestrator',
        content:
          'Sharing my encouragement tactics and recent workout sessions, emphasizing consistency despite occasional bad days.',
        is_system_trace: false,
        created_at: '2024-08-01T18:32:21.789Z',
      },
      {
        from: 'orchestrator',
        to: 'Jordan',
        content:
          'Requesting recent motivation feedback and challenges faced that impact workout consistency.',
        is_system_trace: false,
        created_at: '2024-08-01T18:32:27.234Z',
      },
      {
        from: 'Jordan',
        to: 'orchestrator',
        content:
          "Explaining struggles with motivation spikes and how Alex's encouragement influences my commitment levels.",
        is_system_trace: false,
        created_at: '2024-08-01T18:32:33.342Z',
      },
      {
        from: 'orchestrator',
        to: 'evaluator',
        content:
          'Requesting assessment of social support effectiveness based on recent interactions.',
        is_system_trace: true,
        created_at: '2024-08-01T18:32:39.987Z',
      },
      {
        from: 'evaluator',
        to: 'orchestrator',
        content:
          "Evaluation complete: Social support significantly boosts Jordan's workout consistency when active encouragement is provided.",
        is_system_trace: true,
        created_at: '2024-08-01T18:32:46.123Z',
      },
      {
        from: 'orchestrator',
        to: 'reporter',
        content:
          'Compiling final analysis report on social support impact for Gym Buddy Motivation simulation.',
        is_system_trace: true,
        created_at: '2024-08-01T18:32:52.567Z',
      },
      {
        from: 'reporter',
        to: 'orchestrator',
        content:
          "Final report generated: Strong correlation between Alex's motivation and Jordan's workout adherence observed.",
        is_system_trace: true,
        created_at: '2024-08-01T18:32:58.789Z',
      },
    ],
  },
  {
    run: {
      id: '4e6e5aa5-46c8-4f0c-ac6c-50dd8a349a5c',
      simulation_id: '87077efb-308e-4b4e-b845-8f7d4faed852',
      status: 'failed',
      progress: 65,
      started_at: '2024-08-01T18:59:00.000Z',
      summary: null,
      orchestrator_id: '513fd84f-08e3-4f6d-a9da-b6f48362df24',
      evaluator_id: '1bbe8825-3832-4c85-9957-229575ef8991',
      planner_id: 'db0f78e4-9cf2-4ed5-aa48-4259f7c57442',
      reporter_id: '87aaf233-5cdf-43ba-a63e-48c76a25b6ea',
      workers: [
        {
          id: 'ccae30a1-4dff-4120-ba75-aa885b8f3721',
          name: 'Alex',
        },
        {
          id: '8ee8f3f9-b2dd-451e-bfc0-155c56db39a9',
          name: 'Jordan',
        },
      ],
      finished_at: '2024-08-01T19:59:00.000Z',
    },
    traces: [
      {
        from: 'orchestrator',
        to: 'planner',
        content:
          "Initiate planning phase for the Gym Buddy Motivation simulation. Our goal is to analyze how social support impacts workout consistency, focusing on Alex's encouragement and Jordan’s struggle with motivation.",
        is_system_trace: true,
        created_at: '2024-08-01T18:59:02Z',
      },
      {
        from: 'planner',
        to: 'orchestrator',
        content:
          'Planning initial sequence: solicit input from Alex and Jordan, then assign tasks for the next phase of interaction and data collection.',
        is_system_trace: true,
        created_at: '2024-08-01T18:59:09Z',
      },
      {
        from: 'orchestrator',
        to: 'Alex',
        content:
          'Please prepare a motivational message highlighting the importance of consistency and support for Jordan during workouts.',
        is_system_trace: false,
        created_at: '2024-08-01T18:59:12Z',
      },
      {
        from: 'Alex',
        to: 'orchestrator',
        content:
          'Crafted an encouraging message emphasizing discipline, progress, and support to boost Jordan’s motivation.',
        is_system_trace: false,
        created_at: '2024-08-01T18:59:17Z',
      },
      {
        from: 'orchestrator',
        to: 'Jordan',
        content:
          'Recognize your efforts! Alex is here to motivate you to stay consistent. Let’s focus on small wins today.',
        is_system_trace: false,
        created_at: '2024-08-01T18:59:22Z',
      },
      {
        from: 'Jordan',
        to: 'orchestrator',
        content:
          "Expressed appreciation for Alex's encouragement and admitted struggles with motivation but feeling motivated to try again.",
        is_system_trace: false,
        created_at: '2024-08-01T18:59:26Z',
      },
      {
        from: 'orchestrator',
        to: 'evaluator',
        content:
          'Evaluate the impact of Alex’s motivational messages on Jordan’s engagement and workout consistency.',
        is_system_trace: true,
        created_at: '2024-08-01T18:59:30Z',
      },
      {
        from: 'evaluator',
        to: 'orchestrator',
        content:
          'Assessment complete: initial data shows increased motivation from Jordan after encouragement from Alex.',
        is_system_trace: true,
        created_at: '2024-08-01T18:59:35Z',
      },
      {
        from: 'orchestrator',
        to: 'reporter',
        content:
          'Generate final report summarizing the influence of social support on workout adherence during this simulation.',
        is_system_trace: true,
        created_at: '2024-08-01T18:59:40Z',
      },
    ],
  },
  {
    run: {
      id: '590ad905-7639-4524-beef-2249bd86db08',
      simulation_id: '87077efb-308e-4b4e-b845-8f7d4faed852',
      status: 'failed',
      progress: 22,
      started_at: '2024-08-01T18:51:00.000Z',
      summary: null,
      orchestrator_id: '513fd84f-08e3-4f6d-a9da-b6f48362df24',
      evaluator_id: '1bbe8825-3832-4c85-9957-229575ef8991',
      planner_id: 'db0f78e4-9cf2-4ed5-aa48-4259f7c57442',
      reporter_id: '87aaf233-5cdf-43ba-a63e-48c76a25b6ea',
      workers: [
        {
          id: 'ccae30a1-4dff-4120-ba75-aa885b8f3721',
          name: 'Alex',
        },
        {
          id: '8ee8f3f9-b2dd-451e-bfc0-155c56db39a9',
          name: 'Jordan',
        },
      ],
      finished_at: '2024-08-01T19:51:00.000Z',
    },
    traces: [
      {
        from: 'orchestrator',
        to: 'planner',
        content:
          'Initiating planning sequence for the Gym Buddy Motivation simulation. Assigning agents and setting initial tasks.',
        is_system_trace: true,
        created_at: '2024-08-01T18:51:02Z',
      },
      {
        from: 'planner',
        to: 'orchestrator',
        content:
          'Planning completed: Set sequence for agent interactions, including workout encouragement and social support analysis.',
        is_system_trace: true,
        created_at: '2024-08-01T18:51:08Z',
      },
      {
        from: 'orchestrator',
        to: 'Alex',
        content:
          'Begin by documenting your motivational strategies and recent encouragement successes with Jordan.',
        is_system_trace: false,
        created_at: '2024-08-01T18:51:10Z',
      },
      {
        from: 'Alex',
        to: 'orchestrator',
        content:
          'I consistently motivate Jordan by celebrating small victories and reminding him of his progress, hoping to boost his confidence.',
        is_system_trace: false,
        created_at: '2024-08-01T18:51:18Z',
      },
      {
        from: 'orchestrator',
        to: 'Jordan',
        content:
          'Share your current motivation level and any obstacles you face in maintaining workout consistency.',
        is_system_trace: false,
        created_at: '2024-08-01T18:51:20Z',
      },
      {
        from: 'Jordan',
        to: 'orchestrator',
        content:
          'I enjoy working out but often struggle with motivation and tend to skip sessions unless encouraged regularly.',
        is_system_trace: false,
        created_at: '2024-08-01T18:51:28Z',
      },
      {
        from: 'orchestrator',
        to: 'evaluator',
        content:
          "Evaluate the motivational impact of Alex's encouragement on Jordan's consistency metrics.",
        is_system_trace: true,
        created_at: '2024-08-01T18:51:30Z',
      },
      {
        from: 'evaluator',
        to: 'orchestrator',
        content:
          "Analysis indicates a positive correlation between Alex's encouragement and Jordan's willingness to attend workouts.",
        is_system_trace: true,
        created_at: '2024-08-01T18:51:40Z',
      },
      {
        from: 'orchestrator',
        to: 'reporter',
        content:
          'Generate a summary report on the influence of social support within the Gym Buddy Motivation simulation.',
        is_system_trace: true,
        created_at: '2024-08-01T18:51:50Z',
      },
    ],
  },
  {
    run: {
      id: '9ee7f99f-96f0-40b6-8045-f4dca2b0bd3f',
      simulation_id: '86038c7e-0cbe-441e-acd6-d24d7d0ca834',
      status: 'in progress',
      progress: 58,
      started_at: '2024-04-20T08:28:00.000Z',
      summary: null,
      orchestrator_id: '86a139bc-155e-4e22-bf92-14a7e4e50803',
      evaluator_id: '4b003676-8734-445e-950f-8839602c4b30',
      planner_id: '0458e18d-f8af-42c5-98a5-ec0a77883503',
      reporter_id: '1eb57d80-c357-4274-b7f0-04f333a042a5',
      workers: [
        {
          id: '3a08c8eb-c197-4152-8862-b908d1b44c1c',
          name: 'Market Analyst',
        },
        {
          id: '73754445-90ca-4565-8b70-42d7b5412e26',
          name: 'Policy Impact Specialist',
        },
      ],
      updated_at: '2024-04-20T09:17:00.000Z',
    },
    traces: [
      {
        from: 'orchestrator',
        to: 'planner',
        content:
          'Initial planning phase underway. Delegating task to outline the research approach on green energy adoption factors.',
        is_system_trace: true,
        created_at: '2024-04-20T08:28:02.000Z',
      },
      {
        from: 'planner',
        to: 'orchestrator',
        content:
          'Planning steps formulated. Assigning roles to agents for data collection, analysis, and simulation setup.',
        is_system_trace: true,
        created_at: '2024-04-20T08:28:08.000Z',
      },
      {
        from: 'orchestrator',
        to: 'Market Analyst',
        content:
          'Please analyze current market conditions and consumer behaviors influencing renewable energy uptake.',
        is_system_trace: false,
        created_at: '2024-04-20T08:28:16.000Z',
      },
      {
        from: 'Market Analyst',
        to: 'orchestrator',
        content:
          'Market data indicates rising consumer interest in solar and wind energy, driven by decreasing costs and government incentives.',
        is_system_trace: false,
        created_at: '2024-04-20T08:28:24.000Z',
      },
      {
        from: 'orchestrator',
        to: 'Policy Impact Specialist',
        content:
          'Evaluate the impact of recent policies on renewable energy adoption rates and identify key regulatory influences.',
        is_system_trace: false,
        created_at: '2024-04-20T08:28:32.000Z',
      },
      {
        from: 'Policy Impact Specialist',
        to: 'orchestrator',
        content:
          'Policies such as tax credits and feed-in tariffs are significantly boosting adoption, particularly in residential sectors.',
        is_system_trace: false,
        created_at: '2024-04-20T08:28:40.000Z',
      },
      {
        from: 'orchestrator',
        to: 'evaluator',
        content: 'Request preliminary metrics assessment based on current data and agent reports.',
        is_system_trace: true,
        created_at: '2024-04-20T08:28:48.000Z',
      },
      {
        from: 'evaluator',
        to: 'orchestrator',
        content:
          'Metrics evaluation in progress. Preliminary analysis shows positive correlation between policy incentives and adoption rates.',
        is_system_trace: true,
        created_at: '2024-04-20T08:28:55.000Z',
      },
      {
        from: 'orchestrator',
        to: 'agent_Market Analyst',
        content:
          'Collect deeper insights into consumer hesitations and barriers to adopting solar energy.',
        is_system_trace: false,
        created_at: '2024-04-20T08:29:03.000Z',
      },
      {
        from: 'agent_Market Analyst',
        to: 'orchestrator',
        content:
          'Main barriers include upfront costs, lack of information, and local policy inconsistencies.',
        is_system_trace: false,
        created_at: '2024-04-20T08:29:11.000Z',
      },
      {
        from: 'orchestrator',
        to: 'agent_Policy Impact Specialist',
        content:
          'Identify regional variations in policy effectiveness and suggest targeted improvements.',
        is_system_trace: false,
        created_at: '2024-04-20T08:29:19.000Z',
      },
      {
        from: 'agent_Policy Impact Specialist',
        to: 'orchestrator',
        content:
          'Regions with more aggressive incentives show higher adoption, while some areas lack effective outreach.',
        is_system_trace: false,
        created_at: '2024-04-20T08:29:27.000Z',
      },
      {
        from: 'orchestrator',
        to: 'evaluator',
        content: 'Evaluate cumulative data and generate final metrics report.',
        is_system_trace: true,
        created_at: '2024-04-20T08:29:35.000Z',
      },
      {
        from: 'evaluator',
        to: 'orchestrator',
        content:
          'Metrics evaluation complete. Adoption factors strongly linked to policy support and market conditions.',
        is_system_trace: true,
        created_at: '2024-04-20T08:29:43.000Z',
      },
      {
        from: 'orchestrator',
        to: 'reporter',
        content:
          'Compile comprehensive report on factors influencing green energy adoption and policy recommendations.',
        is_system_trace: true,
        created_at: '2024-04-20T08:29:51.000Z',
      },
      {
        from: 'reporter',
        to: 'orchestrator',
        content:
          'Final report generated, detailing market trends, policy impacts, and strategic insights for expanding renewable energy adoption.',
        is_system_trace: true,
        created_at: '2024-04-20T08:29:59.000Z',
      },
    ],
  },
  {
    run: {
      id: 'c3be6019-160b-420c-9af8-e3d8a236932c',
      simulation_id: '86038c7e-0cbe-441e-acd6-d24d7d0ca834',
      status: 'completed',
      progress: 100,
      started_at: '2024-04-20T08:05:00.000Z',
      summary:
        'The Green Energy Adoption Rates simulation revealed that consumer interest is rising due to declining costs and government incentives. Policies with strong financial incentives significantly boost regional adoption, especially in urban areas. Regional disparities persist, highlighting the need for targeted policy adjustments to enhance rural participation. Market analysis shows a positive trend towards solar solutions, with social awareness playing a crucial role. Overall, economic incentives and strategic policies are key drivers for accelerating green energy adoption, supported by regional tailored measures to maximize impact across different communities.',
      orchestrator_id: '86a139bc-155e-4e22-bf92-14a7e4e50803',
      evaluator_id: '4b003676-8734-445e-950f-8839602c4b30',
      planner_id: '0458e18d-f8af-42c5-98a5-ec0a77883503',
      reporter_id: '1eb57d80-c357-4274-b7f0-04f333a042a5',
      workers: [
        {
          id: '3a08c8eb-c197-4152-8862-b908d1b44c1c',
          name: 'Market Analyst',
        },
        {
          id: '73754445-90ca-4565-8b70-42d7b5412e26',
          name: 'Policy Impact Specialist',
        },
      ],
      finished_at: '2024-04-20T09:05:00.000Z',
    },
    traces: [
      {
        from: 'orchestrator',
        to: 'planner',
        content:
          'Initial planning phase initiated. Determine the key factors influencing green energy adoption, and outline step-by-step tasks for agents to investigate social, economic, and policy impacts.',
        is_system_trace: true,
        created_at: '2024-04-20T08:05:02Z',
      },
      {
        from: 'planner',
        to: 'orchestrator',
        content:
          'Planning outline prepared, focusing on consumer behavior analysis and policy evaluation. Awaiting assignment of specific investigative tasks to agents.',
        is_system_trace: true,
        created_at: '2024-04-20T08:05:07Z',
      },
      {
        from: 'orchestrator',
        to: 'Market Analyst',
        content:
          'Analyze recent market trends and consumer adoption patterns regarding renewable energy. Report initial insights on market readiness and consumer preferences.',
        is_system_trace: false,
        created_at: '2024-04-20T08:05:11Z',
      },
      {
        from: 'Market Analyst',
        to: 'orchestrator',
        content:
          'Recent data indicates a steady increase in consumer interest for solar solutions, driven by cost reductions and government incentives. Next, evaluate regional policy impacts.',
        is_system_trace: false,
        created_at: '2024-04-20T08:05:16Z',
      },
      {
        from: 'orchestrator',
        to: 'Policy Impact Specialist',
        content:
          'Assess how recent policies influence renewable energy adoption rates across different regions. Focus on subsidies, tax incentives, and regulatory hurdles.',
        is_system_trace: false,
        created_at: '2024-04-20T08:05:21Z',
      },
      {
        from: 'Policy Impact Specialist',
        to: 'orchestrator',
        content:
          'Policies with strong incentives correlate with higher adoption rates, especially in urban areas. Recommend targeted policy adjustments to boost rural adoption.',
        is_system_trace: false,
        created_at: '2024-04-20T08:05:26Z',
      },
      {
        from: 'orchestrator',
        to: 'evaluator',
        content:
          'Gather simulation metrics and evaluate the impact of market conditions and policies on green energy adoption. Prepare to review comprehensive results.',
        is_system_trace: true,
        created_at: '2024-04-20T08:05:31Z',
      },
      {
        from: 'evaluator',
        to: 'orchestrator',
        content:
          'Metrics evaluation complete. Notable factors include regional disparities and the effectiveness of incentive programs. Final analysis ready for reporting.',
        is_system_trace: true,
        created_at: '2024-04-20T08:05:36Z',
      },
      {
        from: 'orchestrator',
        to: 'reporter',
        content:
          'Compile findings into a comprehensive report highlighting key factors affecting green energy adoption, policy impacts, and future recommendations.',
        is_system_trace: true,
        created_at: '2024-04-20T08:05:41Z',
      },
      {
        from: 'reporter',
        to: 'orchestrator',
        content:
          'Final report compiled. Summary emphasizes economic incentives, social awareness, and targeted policy interventions as critical drivers.',
        is_system_trace: true,
        created_at: '2024-04-20T08:05:46Z',
      },
    ],
  },
  {
    run: {
      id: '8b849cb5-8c63-4e26-936a-a1e4be6bbd4b',
      simulation_id: '86038c7e-0cbe-441e-acd6-d24d7d0ca834',
      status: 'in progress',
      progress: 19,
      started_at: '2024-04-20T08:44:00.000Z',
      summary: null,
      orchestrator_id: '86a139bc-155e-4e22-bf92-14a7e4e50803',
      evaluator_id: '4b003676-8734-445e-950f-8839602c4b30',
      planner_id: '0458e18d-f8af-42c5-98a5-ec0a77883503',
      reporter_id: '1eb57d80-c357-4274-b7f0-04f333a042a5',
      workers: [
        {
          id: '3a08c8eb-c197-4152-8862-b908d1b44c1c',
          name: 'Market Analyst',
        },
        {
          id: '73754445-90ca-4565-8b70-42d7b5412e26',
          name: 'Policy Impact Specialist',
        },
      ],
      updated_at: '2024-04-20T09:13:00.000Z',
    },
    traces: [
      {
        from: 'orchestrator',
        to: 'planner',
        content:
          'Initiating planning phase for the Green Energy Adoption simulation, focusing on analyzing key factors and agent roles.',
        is_system_trace: true,
        created_at: '2024-04-20T08:44:03.482Z',
      },
      {
        from: 'planner',
        to: 'orchestrator',
        content:
          'Planning complete: assign tasks to agents to evaluate market influences and policy impacts.',
        is_system_trace: true,
        created_at: '2024-04-20T08:44:09.129Z',
      },
      {
        from: 'orchestrator',
        to: 'Market Analyst',
        content:
          'Please analyze current market trends, consumer willingness, and regional adoption patterns for renewable energy.',
        is_system_trace: false,
        created_at: '2024-04-20T08:44:12.650Z',
      },
      {
        from: 'Market Analyst',
        to: 'orchestrator',
        content:
          'Analyzed market data shows increasing consumer interest in solar solutions, with regional disparities in adoption rates.',
        is_system_trace: false,
        created_at: '2024-04-20T08:44:20.321Z',
      },
      {
        from: 'orchestrator',
        to: 'Policy Impact Specialist',
        content:
          'Evaluate policy measures that influence green energy adoption and identify potential policy gaps.',
        is_system_trace: false,
        created_at: '2024-04-20T08:44:24.824Z',
      },
      {
        from: 'Policy Impact Specialist',
        to: 'orchestrator',
        content:
          'Policy analysis indicates strong governmental incentives correlate with higher adoption rates in urban areas.',
        is_system_trace: false,
        created_at: '2024-04-20T08:44:33.191Z',
      },
      {
        from: 'orchestrator',
        to: 'evaluator',
        content:
          'Request metrics evaluation and overall impact analysis of current factors on renewable energy adoption.',
        is_system_trace: true,
        created_at: '2024-04-20T08:44:36.902Z',
      },
      {
        from: 'evaluator',
        to: 'orchestrator',
        content:
          'Metrics evaluated: consumer interest index, policy effectiveness score, regional adoption variation. Results ready.',
        is_system_trace: true,
        created_at: '2024-04-20T08:44:41.215Z',
      },
      {
        from: 'orchestrator',
        to: 'reporter',
        content:
          'Generate summary report on the current findings of the green energy adoption simulation.',
        is_system_trace: true,
        created_at: '2024-04-20T08:44:45.753Z',
      },
      {
        from: 'reporter',
        to: 'orchestrator',
        content:
          'Summary report prepared, highlighting key influencing factors, agent contributions, and areas for further analysis.',
        is_system_trace: true,
        created_at: '2024-04-20T08:44:51.042Z',
      },
    ],
  },
  {
    run: {
      id: '5b624c8a-5ae5-4f4c-9765-94d4b2409b75',
      simulation_id: '58275e37-dc54-4a7a-a58a-26945bb151b7',
      status: 'timeout',
      progress: 60,
      started_at: '2024-05-10T10:01:00.000Z',
      summary: null,
      orchestrator_id: '2bc7c69d-1133-46ff-887d-0e9d2a194f87',
      evaluator_id: 'd634b77e-e1ba-48ca-aa45-38bb78ad0fab',
      planner_id: '7a9c632f-b148-46ba-80c5-af69b6db84be',
      reporter_id: 'd1541f77-0849-4db3-93e0-15fc54e9c404',
      workers: [
        {
          id: '523a2f7d-cbe2-4ca4-a397-d624f41fdce4',
          name: 'Influencer Specialist',
        },
        {
          id: 'dc60a300-6eb6-47ea-9a60-34f49d625292',
          name: 'Traditional Ads Specialist',
        },
      ],
      finished_at: '2024-05-10T11:01:00.000Z',
    },
    traces: [
      {
        from: 'orchestrator',
        to: 'planner',
        content:
          'Initiating planning phase for Influencer vs. Traditional Ads simulation; determining the next steps for agent involvement.',
        is_system_trace: true,
        created_at: '2024-05-10T10:01:02Z',
      },
      {
        from: 'planner',
        to: 'orchestrator',
        content:
          'Planning step completed: Assigning agent roles and task focus for comparative analysis.',
        is_system_trace: true,
        created_at: '2024-05-10T10:01:08Z',
      },
      {
        from: 'orchestrator',
        to: 'Influencer Specialist',
        content:
          'Analyze recent influencer campaign data; prepare insights on consumer engagement and reach.',
        is_system_trace: false,
        created_at: '2024-05-10T10:01:10Z',
      },
      {
        from: 'Influencer Specialist',
        to: 'orchestrator',
        content:
          'Gathered engagement metrics and viewer feedback from recent influencer campaigns, highlighting viral moments and audience sentiment.',
        is_system_trace: false,
        created_at: '2024-05-10T10:01:18Z',
      },
      {
        from: 'orchestrator',
        to: 'Traditional Ads Specialist',
        content:
          'Review traditional advertising strategies; update on recent TV and print ad performance metrics.',
        is_system_trace: false,
        created_at: '2024-05-10T10:01:22Z',
      },
      {
        from: 'Traditional Ads Specialist',
        to: 'orchestrator',
        content:
          'Compiled quarterly data on TV and print ad reach, viewer response, and conversion rates for comparative analysis.',
        is_system_trace: false,
        created_at: '2024-05-10T10:01:29Z',
      },
      {
        from: 'orchestrator',
        to: 'evaluator',
        content:
          'Evaluate the impact of influencer versus traditional advertising; generate comparative performance metrics.',
        is_system_trace: true,
        created_at: '2024-05-10T10:01:31Z',
      },
      {
        from: 'evaluator',
        to: 'orchestrator',
        content:
          'Evaluation completed; influencer campaigns show higher engagement rates, while traditional ads yield steady brand awareness.',
        is_system_trace: true,
        created_at: '2024-05-10T10:01:39Z',
      },
      {
        from: 'orchestrator',
        to: 'reporter',
        content:
          'Prepare final report summarizing findings of influencer versus traditional ad effectiveness.',
        is_system_trace: true,
        created_at: '2024-05-10T10:01:41Z',
      },
      {
        from: 'reporter',
        to: 'orchestrator',
        content:
          'Final report ready, detailing the comparative insights of marketing approaches, including data visuals and strategic recommendations.',
        is_system_trace: true,
        created_at: '2024-05-10T10:01:49Z',
      },
    ],
  },
  {
    run: {
      id: 'df2450a8-f4a2-4952-8d13-7df0312f608f',
      simulation_id: '58275e37-dc54-4a7a-a58a-26945bb151b7',
      status: 'aborted',
      progress: 70,
      started_at: '2024-05-10T10:45:00.000Z',
      summary: null,
      orchestrator_id: '2bc7c69d-1133-46ff-887d-0e9d2a194f87',
      evaluator_id: 'd634b77e-e1ba-48ca-aa45-38bb78ad0fab',
      planner_id: '7a9c632f-b148-46ba-80c5-af69b6db84be',
      reporter_id: 'd1541f77-0849-4db3-93e0-15fc54e9c404',
      workers: [
        {
          id: '523a2f7d-cbe2-4ca4-a397-d624f41fdce4',
          name: 'Influencer Specialist',
        },
        {
          id: 'dc60a300-6eb6-47ea-9a60-34f49d625292',
          name: 'Traditional Ads Specialist',
        },
      ],
      aborted_at: '2024-05-10T11:00:00.000Z',
    },
    traces: [
      {
        from: 'orchestrator',
        to: 'planner',
        content:
          'Assessing current progress and preparing planning instructions for agent coordination on the influencer versus traditional ads analysis.',
        is_system_trace: true,
        created_at: '2024-05-10T10:45:02.123Z',
      },
      {
        from: 'planner',
        to: 'orchestrator',
        content:
          'Formulating a detailed plan to evaluate the impact of influencer marketing and traditional ads, including key performance metrics and timeline.',
        is_system_trace: true,
        created_at: '2024-05-10T10:45:07.475Z',
      },
      {
        from: 'orchestrator',
        to: 'Influencer Specialist',
        content:
          'Initiate campaign design phase for influencer marketing impact analysis, focusing on social media engagement and conversion metrics.',
        is_system_trace: false,
        created_at: '2024-05-10T10:45:12.896Z',
      },
      {
        from: 'Influencer Specialist',
        to: 'orchestrator',
        content:
          'Drafted initial influencer campaign concepts targeting key demographics, with creative content strategies aligned to brand goals.',
        is_system_trace: false,
        created_at: '2024-05-10T10:45:20.341Z',
      },
      {
        from: 'orchestrator',
        to: 'Traditional Ads Specialist',
        content:
          'Begin developing traditional ad campaigns across TV and print, emphasizing reach and frequency metrics for comparison.',
        is_system_trace: false,
        created_at: '2024-05-10T10:45:27.643Z',
      },
      {
        from: 'Traditional Ads Specialist',
        to: 'orchestrator',
        content:
          'Designed and scheduled initial TV and print ads, targeting specific audience segments, with focus on measurable engagement.',
        is_system_trace: false,
        created_at: '2024-05-10T10:45:35.908Z',
      },
      {
        from: 'orchestrator',
        to: 'evaluator',
        content:
          'Requesting initial assessment of the data collected from influencer and traditional ad campaigns, focusing on consumer behavior impact.',
        is_system_trace: true,
        created_at: '2024-05-10T10:45:44.213Z',
      },
      {
        from: 'evaluator',
        to: 'orchestrator',
        content:
          'Data evaluation completed. Results indicate a 15% higher engagement rate for influencer campaigns but similar conversion rates.',
        is_system_trace: true,
        created_at: '2024-05-10T10:45:51.654Z',
      },
      {
        from: 'orchestrator',
        to: 'reporter',
        content:
          'Compile analysis report highlighting key findings: influencer marketing drives higher engagement; traditional ads excel in broad reach; mixed approach recommended.',
        is_system_trace: true,
        created_at: '2024-05-10T10:45:59.122Z',
      },
      {
        from: 'reporter',
        to: 'orchestrator',
        content:
          'Final report generated. Recommendations prepared for stakeholders on optimizing marketing mix based on campaign effectiveness metrics.',
        is_system_trace: true,
        created_at: '2024-05-10T10:46:07.538Z',
      },
    ],
  },
  {
    run: {
      id: '0ba3d13e-f994-4ed9-9d2a-d541eceb2014',
      simulation_id: '58275e37-dc54-4a7a-a58a-26945bb151b7',
      status: 'completed',
      progress: 100,
      started_at: '2024-05-10T10:29:00.000Z',
      summary:
        'The simulation "Influencer vs. Traditional Ads" compared marketing strategies by orchestrating targeted campaigns. The influencer specialist crafted viral, authentic content, achieving 35% higher engagement, while the traditional ads specialist focused on broad outreach through TV, print, and radio. Evaluation revealed that influencer marketing outperforms in engagement, but traditional methods reach wider audiences. The final report emphasizes that influencer campaigns drive stronger consumer influence and engagement, highlighting their effectiveness in contemporary marketing dynamics. Overall, the simulation underscores the growing impact of influencer marketing in driving consumer interaction over traditional advertising methods.',
      orchestrator_id: '2bc7c69d-1133-46ff-887d-0e9d2a194f87',
      evaluator_id: 'd634b77e-e1ba-48ca-aa45-38bb78ad0fab',
      planner_id: '7a9c632f-b148-46ba-80c5-af69b6db84be',
      reporter_id: 'd1541f77-0849-4db3-93e0-15fc54e9c404',
      workers: [
        {
          id: '523a2f7d-cbe2-4ca4-a397-d624f41fdce4',
          name: 'Influencer Specialist',
        },
        {
          id: 'dc60a300-6eb6-47ea-9a60-34f49d625292',
          name: 'Traditional Ads Specialist',
        },
      ],
      finished_at: '2024-05-10T11:29:00.000Z',
    },
    traces: [
      {
        from: 'orchestrator',
        to: 'planner',
        content:
          'Initiating simulation with focus on comparing influencer and traditional ad strategies. Assign planning task to develop step-by-step approach.',
        is_system_trace: true,
        created_at: '2024-05-10T10:29:03Z',
      },
      {
        from: 'planner',
        to: 'orchestrator',
        content:
          'Planning process underway: assign roles to Influencer Specialist and Traditional Ads Specialist, outline key metrics for consumer impact.',
        is_system_trace: true,
        created_at: '2024-05-10T10:29:11Z',
      },
      {
        from: 'orchestrator',
        to: 'Influencer Specialist',
        content:
          'Design influencer marketing campaign aimed at maximizing engagement and reach, considering social media platform trends.',
        is_system_trace: false,
        created_at: '2024-05-10T10:29:17Z',
      },
      {
        from: 'Influencer Specialist',
        to: 'orchestrator',
        content:
          'Developed influencer campaign focused on viral content and authentic endorsements; ready for review.',
        is_system_trace: false,
        created_at: '2024-05-10T10:29:25Z',
      },
      {
        from: 'orchestrator',
        to: 'Traditional Ads Specialist',
        content:
          'Create traditional advertising campaign emphasizing TV, print, and radio outreach to diverse demographics.',
        is_system_trace: false,
        created_at: '2024-05-10T10:29:33Z',
      },
      {
        from: 'Traditional Ads Specialist',
        to: 'orchestrator',
        content:
          'Completed traditional ad concepts targeting broad audiences, ready for deployment and effectiveness measurement.',
        is_system_trace: false,
        created_at: '2024-05-10T10:29:41Z',
      },
      {
        from: 'orchestrator',
        to: 'evaluator',
        content:
          "Evaluate the campaigns' projected impact on consumer behavior, compare influencer vs. traditional outreach effectiveness.",
        is_system_trace: true,
        created_at: '2024-05-10T10:29:49Z',
      },
      {
        from: 'evaluator',
        to: 'orchestrator',
        content:
          'Evaluation complete: influencer campaigns show a 35% higher engagement rate, traditional ads deliver broader reach.',
        is_system_trace: true,
        created_at: '2024-05-10T10:29:55Z',
      },
      {
        from: 'orchestrator',
        to: 'reporter',
        content:
          'Summarize the comparative results: influencer marketing outperforms traditional ads in engagement, but reach is more extensive with traditional methods.',
        is_system_trace: true,
        created_at: '2024-05-10T10:30:02Z',
      },
      {
        from: 'reporter',
        to: 'orchestrator',
        content:
          'Final report generated highlighting the key insights: influencer marketing yields higher engagement and consumer influence.',
        is_system_trace: true,
        created_at: '2024-05-10T10:30:08Z',
      },
    ],
  },
  {
    run: {
      id: '736bf87b-7480-48ed-a623-4852f9a11491',
      simulation_id: '58275e37-dc54-4a7a-a58a-26945bb151b7',
      status: 'completed',
      progress: 100,
      started_at: '2024-05-10T10:47:00.000Z',
      summary:
        'The simulation "Influencer vs. Traditional Ads" compared the effectiveness of two marketing strategies. The Influencer Specialist crafted a viral social media campaign to maximize engagement, while the Traditional Ads Specialist focused on trust-building through TV, print, and outdoor advertising. Evaluation revealed influencer campaigns significantly boosted engagement, while traditional ads reinforced brand trust. The final report concluded that influencer marketing is superior for generating consumer interaction, whereas traditional methods excel at fostering long-term trust, providing valuable insights for optimizing future marketing approaches.',
      orchestrator_id: '2bc7c69d-1133-46ff-887d-0e9d2a194f87',
      evaluator_id: 'd634b77e-e1ba-48ca-aa45-38bb78ad0fab',
      planner_id: '7a9c632f-b148-46ba-80c5-af69b6db84be',
      reporter_id: 'd1541f77-0849-4db3-93e0-15fc54e9c404',
      workers: [
        {
          id: '523a2f7d-cbe2-4ca4-a397-d624f41fdce4',
          name: 'Influencer Specialist',
        },
        {
          id: 'dc60a300-6eb6-47ea-9a60-34f49d625292',
          name: 'Traditional Ads Specialist',
        },
      ],
      finished_at: '2024-05-10T11:47:00.000Z',
    },
    traces: [
      {
        from: 'orchestrator',
        to: 'planner',
        content:
          'Planning simulation flow to analyze influencer versus traditional ad campaigns and set specific tasks for AI agents.',
        is_system_trace: true,
        created_at: '2024-05-10T10:47:02.123Z',
      },
      {
        from: 'planner',
        to: 'orchestrator',
        content:
          'Instructions received. Develop a detailed plan for influencer and traditional ad strategies, emphasizing consumer behavior impact.',
        is_system_trace: true,
        created_at: '2024-05-10T10:47:10.987Z',
      },
      {
        from: 'orchestrator',
        to: 'Influencer Specialist',
        content:
          'Please design an innovative influencer campaign aimed at maximizing engagement and altering consumer perceptions.',
        is_system_trace: false,
        created_at: '2024-05-10T10:47:15.045Z',
      },
      {
        from: 'Influencer Specialist',
        to: 'orchestrator',
        content:
          'Campaign strategy drafted, focusing on social media virality, targeted demographics, and engaging content formats.',
        is_system_trace: false,
        created_at: '2024-05-10T10:47:22.319Z',
      },
      {
        from: 'orchestrator',
        to: 'Traditional Ads Specialist',
        content:
          'Create a compelling traditional ad campaign emphasizing trust, brand recognition, and broad audience reach.',
        is_system_trace: false,
        created_at: '2024-05-10T10:47:30.431Z',
      },
      {
        from: 'Traditional Ads Specialist',
        to: 'orchestrator',
        content:
          'Traditional campaign outlined with TV, print, and outdoor advertising channels, focusing on credibility and familiarity.',
        is_system_trace: false,
        created_at: '2024-05-10T10:47:37.887Z',
      },
      {
        from: 'orchestrator',
        to: 'evaluator',
        content:
          "Request evaluation of campaign strategies' impact predictions on consumer behavior for the upcoming analysis.",
        is_system_trace: true,
        created_at: '2024-05-10T10:47:45.123Z',
      },
      {
        from: 'evaluator',
        to: 'orchestrator',
        content:
          'Evaluation completed, metrics indicating influencer campaigns boost engagement more significantly but traditional ads build trust.',
        is_system_trace: true,
        created_at: '2024-05-10T10:47:52.964Z',
      },
      {
        from: 'orchestrator',
        to: 'reporter',
        content:
          'Prepare a comprehensive report comparing influencer and traditional advertising effectiveness based on recent strategies.',
        is_system_trace: true,
        created_at: '2024-05-10T10:48:00.685Z',
      },
      {
        from: 'reporter',
        to: 'orchestrator',
        content:
          'Final report compiled. The analysis shows influencer marketing leads to higher engagement, whereas traditional ads enhance brand trust.',
        is_system_trace: true,
        created_at: '2024-05-10T10:48:08.214Z',
      },
    ],
  },
  {
    run: {
      id: '95cb64d9-b76c-460d-8811-3e20e360eb2b',
      simulation_id: '58275e37-dc54-4a7a-a58a-26945bb151b7',
      status: 'in progress',
      progress: 5,
      started_at: '2024-05-10T10:51:00.000Z',
      summary: null,
      orchestrator_id: '2bc7c69d-1133-46ff-887d-0e9d2a194f87',
      evaluator_id: 'd634b77e-e1ba-48ca-aa45-38bb78ad0fab',
      planner_id: '7a9c632f-b148-46ba-80c5-af69b6db84be',
      reporter_id: 'd1541f77-0849-4db3-93e0-15fc54e9c404',
      workers: [
        {
          id: '523a2f7d-cbe2-4ca4-a397-d624f41fdce4',
          name: 'Influencer Specialist',
        },
        {
          id: 'dc60a300-6eb6-47ea-9a60-34f49d625292',
          name: 'Traditional Ads Specialist',
        },
      ],
      updated_at: '2024-05-10T10:52:00.000Z',
    },
    traces: [
      {
        from: 'orchestrator',
        to: 'planner',
        content:
          'Jumpstarting the simulation to compare influencer and traditional ad campaigns. Define the initial steps and set the evaluation metrics.',
        is_system_trace: true,
        created_at: '2024-05-10T10:51:02Z',
      },
      {
        from: 'planner',
        to: 'orchestrator',
        content:
          'Planning phase initiated: assign tasks to Influencer Specialist and Traditional Ads Specialist for campaign designs.',
        is_system_trace: true,
        created_at: '2024-05-10T10:51:09Z',
      },
      {
        from: 'orchestrator',
        to: 'Influencer Specialist',
        content:
          'Design an engaging influencer campaign targeting social media platforms to maximize reach.',
        is_system_trace: false,
        created_at: '2024-05-10T10:51:14Z',
      },
      {
        from: 'orchestrator',
        to: 'Traditional Ads Specialist',
        content:
          'Create a compelling traditional ad campaign for TV and print, focusing on brand awareness.',
        is_system_trace: false,
        created_at: '2024-05-10T10:51:21Z',
      },
      {
        from: 'Influencer Specialist',
        to: 'orchestrator',
        content:
          'Initial influencer campaign concepts are ready, emphasizing authenticity and engagement.',
        is_system_trace: false,
        created_at: '2024-05-10T10:51:30Z',
      },
      {
        from: 'Traditional Ads Specialist',
        to: 'orchestrator',
        content:
          'Sample traditional ads have been finalized, aiming for high visibility in target demographics.',
        is_system_trace: false,
        created_at: '2024-05-10T10:51:39Z',
      },
      {
        from: 'orchestrator',
        to: 'evaluator',
        content:
          'Proceed to evaluate the effectiveness of both campaigns based on reach, engagement, and conversion metrics.',
        is_system_trace: true,
        created_at: '2024-05-10T10:51:48Z',
      },
      {
        from: 'evaluator',
        to: 'orchestrator',
        content:
          'Evaluation complete: influencer campaign shows higher engagement, while traditional ads yield broader reach.',
        is_system_trace: true,
        created_at: '2024-05-10T10:51:55Z',
      },
      {
        from: 'orchestrator',
        to: 'reporter',
        content:
          "Generate final report comparing influencer and traditional campaigns' impact on consumer behavior.",
        is_system_trace: true,
        created_at: '2024-05-10T10:52:05Z',
      },
      {
        from: 'reporter',
        to: 'orchestrator',
        content:
          'Final report generated highlighting key insights and recommendations for future marketing strategies.',
        is_system_trace: true,
        created_at: '2024-05-10T10:52:10Z',
      },
    ],
  },
  {
    run: {
      id: 'c386c178-b3a8-4cde-928d-e35f5008bfc1',
      simulation_id: 'e9732721-dfbd-4986-8ede-e6b1e27d7fec',
      status: 'completed',
      progress: 100,
      started_at: '2024-06-15T09:08:00.000Z',
      summary:
        'The "Coalition Building and Policy Trade-offs" simulation successfully modeled the formation of political alliances and policy negotiations. The Party Leader evaluated potential coalitions, focusing on ideology and electoral strength, while the Policy Analyst analyzed conflicting priorities—economic growth versus environmental sustainability. Strategic negotiation plans were crafted, balanced arguments assessed, and progress monitored. The process culminated in a comprehensive report highlighting key insights, agent contributions, and recommended strategies for effective coalition negotiations. Overall, the simulation provided valuable insights into the complex dynamics of political coalition building and policy compromise.',
      orchestrator_id: 'c4813652-b330-4bd7-8e93-e8e5280b3714',
      evaluator_id: '04dc8a78-fa6a-4458-9c00-2d85ca9d2ea1',
      planner_id: 'cbd732a4-a200-45ff-b59d-77eec082616e',
      reporter_id: '063484a9-243a-4484-8da9-ac9522a5e413',
      workers: [
        {
          id: 'e5ce0242-174a-4877-9ff2-d348163cf5d5',
          name: 'Party Leader',
        },
        {
          id: '76d0785c-70c1-44e5-89f6-36be9517aa0f',
          name: 'Policy Analyst',
        },
      ],
      finished_at: '2024-06-15T10:08:00.000Z',
    },
    traces: [
      {
        from: 'orchestrator',
        to: 'planner',
        content: 'Initiate planning for coalition formation and policy negotiation analysis.',
        is_system_trace: true,
        created_at: '2024-06-15T09:08:03.237Z',
      },
      {
        from: 'planner',
        to: 'orchestrator',
        content:
          'Planning stage started: outline steps for agent interactions and decision points.',
        is_system_trace: true,
        created_at: '2024-06-15T09:08:09.894Z',
      },
      {
        from: 'orchestrator',
        to: 'Party Leader',
        content:
          'Please formulate your initial stance on potential coalitions and key policy trade-offs.',
        is_system_trace: false,
        created_at: '2024-06-15T09:08:15.286Z',
      },
      {
        from: 'Party Leader',
        to: 'orchestrator',
        content:
          'Analyzing possible alliances based on ideological proximity and electoral strength, preparing negotiation tactics.',
        is_system_trace: false,
        created_at: '2024-06-15T09:08:22.052Z',
      },
      {
        from: 'orchestrator',
        to: 'Policy Analyst',
        content:
          'Request an in-depth analysis of policy trade-offs related to coalition scenarios.',
        is_system_trace: false,
        created_at: '2024-06-15T09:08:27.668Z',
      },
      {
        from: 'Policy Analyst',
        to: 'orchestrator',
        content:
          'Evaluating policy options: economic growth vs environmental sustainability, weighing public opinion data.',
        is_system_trace: false,
        created_at: '2024-06-15T09:08:33.097Z',
      },
      {
        from: 'orchestrator',
        to: 'evaluator',
        content:
          'Evaluate the current coalition formation progress and the insights gained so far.',
        is_system_trace: true,
        created_at: '2024-06-15T09:08:37.915Z',
      },
      {
        from: 'evaluator',
        to: 'orchestrator',
        content:
          'Progress evaluated: data indicates potential for alliances with moderate compromises.',
        is_system_trace: true,
        created_at: '2024-06-15T09:08:44.315Z',
      },
      {
        from: 'orchestrator',
        to: 'Party Leader',
        content: 'Update your position based on recent analyses and potential negotiation points.',
        is_system_trace: false,
        created_at: '2024-06-15T09:08:50.543Z',
      },
      {
        from: 'Party Leader',
        to: 'orchestrator',
        content:
          'Adapted strategy: willing to consider policy compromises that appeal to key coalition partners.',
        is_system_trace: false,
        created_at: '2024-06-15T09:08:56.768Z',
      },
      {
        from: 'orchestrator',
        to: 'Policy Analyst',
        content: 'Generate detailed policy negotiation strategies for upcoming coalition talks.',
        is_system_trace: true,
        created_at: '2024-06-15T09:09:02.227Z',
      },
      {
        from: 'Policy Analyst',
        to: 'orchestrator',
        content:
          'Strategic approach devised: prioritize key policy issues, set negotiation margins, prepare counterarguments.',
        is_system_trace: false,
        created_at: '2024-06-15T09:09:08.534Z',
      },
      {
        from: 'orchestrator',
        to: 'evaluator',
        content: 'Assess readiness of coalition negotiation plans and strategies.',
        is_system_trace: true,
        created_at: '2024-06-15T09:09:13.798Z',
      },
      {
        from: 'evaluator',
        to: 'orchestrator',
        content:
          'Assessment complete: plans are comprehensive, with balanced negotiation arguments.',
        is_system_trace: true,
        created_at: '2024-06-15T09:09:20.276Z',
      },
      {
        from: 'orchestrator',
        to: 'reporter',
        content: 'Prepare final report on coalition building and policy trade-offs analysis.',
        is_system_trace: true,
        created_at: '2024-06-15T09:09:25.912Z',
      },
      {
        from: 'reporter',
        to: 'orchestrator',
        content:
          'Final report drafted: includes key insights, agent contributions, recommended strategies.',
        is_system_trace: true,
        created_at: '2024-06-15T09:09:33.240Z',
      },
    ],
  },
  {
    run: {
      id: '501edef6-3fda-43c8-a887-5607dbfb15b8',
      simulation_id: 'e9732721-dfbd-4986-8ede-e6b1e27d7fec',
      status: 'completed',
      progress: 100,
      started_at: '2024-06-15T09:26:00.000Z',
      summary:
        'The simulation "Coalition Building and Policy Trade-offs" successfully modeled political dynamics within coalition formation. Key agents, including the Party Leader and Policy Analyst, collaborated to analyze strategic priorities and policy compromises. The process involved comprehensive assessments of alliance shifts, negotiation leverage, and economic-social impacts, leading to well-informed coalition strategies emphasizing economic reforms and social inclusion. Final plans incorporated leadership insights, and the simulation was prepared for execution, highlighting dynamic coalition shifts and policy negotiation pathways to optimize influence and policy outcomes.',
      orchestrator_id: 'c4813652-b330-4bd7-8e93-e8e5280b3714',
      evaluator_id: '04dc8a78-fa6a-4458-9c00-2d85ca9d2ea1',
      planner_id: 'cbd732a4-a200-45ff-b59d-77eec082616e',
      reporter_id: '063484a9-243a-4484-8da9-ac9522a5e413',
      workers: [
        {
          id: 'e5ce0242-174a-4877-9ff2-d348163cf5d5',
          name: 'Party Leader',
        },
        {
          id: '76d0785c-70c1-44e5-89f6-36be9517aa0f',
          name: 'Policy Analyst',
        },
      ],
      finished_at: '2024-06-15T10:26:00.000Z',
    },
    traces: [
      {
        from: 'orchestrator',
        to: 'planner',
        content:
          'Initiate step to formulate new simulation plan with focus on coalition formation strategies and policy negotiation pathways.',
        is_system_trace: true,
        created_at: '2024-06-15T09:26:03.472Z',
      },
      {
        from: 'planner',
        to: 'orchestrator',
        content:
          'Planning phase initiated: assign tasks for identifying key coalition actors and analyzing potential policy compromises.',
        is_system_trace: true,
        created_at: '2024-06-15T09:26:11.301Z',
      },
      {
        from: 'orchestrator',
        to: 'Party Leader',
        content:
          'Please review the current coalition landscape and share your top negotiation priorities.',
        is_system_trace: false,
        created_at: '2024-06-15T09:26:18.697Z',
      },
      {
        from: 'Party Leader',
        to: 'orchestrator',
        content:
          'Analyzing the recent alliance shifts and positioning our party to maximize influence while balancing policy trade-offs.',
        is_system_trace: false,
        created_at: '2024-06-15T09:26:26.893Z',
      },
      {
        from: 'orchestrator',
        to: 'Policy Analyst',
        content:
          'Request a detailed analysis of policy trade-offs associated with potential coalition formations.',
        is_system_trace: false,
        created_at: '2024-06-15T09:26:34.389Z',
      },
      {
        from: 'Policy Analyst',
        to: 'orchestrator',
        content:
          'Evaluating public policy impacts and negotiation leverage for various coalition scenarios, emphasizing economic and social factors.',
        is_system_trace: false,
        created_at: '2024-06-15T09:26:43.782Z',
      },
      {
        from: 'orchestrator',
        to: 'evaluator',
        content:
          'Time to assess the current progress and strategic value of the coalition and policy analysis outputs.',
        is_system_trace: true,
        created_at: '2024-06-15T09:26:52.497Z',
      },
      {
        from: 'evaluator',
        to: 'orchestrator',
        content:
          'Assessment complete: analyses indicate balanced negotiation positions and promising coalition opportunities.',
        is_system_trace: true,
        created_at: '2024-06-15T09:27:01.693Z',
      },
      {
        from: 'orchestrator',
        to: 'reporter',
        content:
          'Prepare a comprehensive report summarizing coalition strategies and policy negotiations to date.',
        is_system_trace: true,
        created_at: '2024-06-15T09:27:09.448Z',
      },
      {
        from: 'reporter',
        to: 'orchestrator',
        content:
          'Final report drafted, highlighting key negotiation points and potential policy compromises for coalition building.',
        is_system_trace: true,
        created_at: '2024-06-15T09:27:16.957Z',
      },
      {
        from: 'orchestrator',
        to: 'Party Leader',
        content:
          'Share your final stance on coalition options and policy priorities based on the recent analysis.',
        is_system_trace: false,
        created_at: '2024-06-15T09:27:24.682Z',
      },
      {
        from: 'Party Leader',
        to: 'orchestrator',
        content:
          'Our party will pursue a strategic coalition emphasizing economic reforms and social inclusion, aligning with recent analyst insights.',
        is_system_trace: false,
        created_at: '2024-06-15T09:27:32.471Z',
      },
      {
        from: 'orchestrator',
        to: 'planner',
        content:
          'Finalize the simulation plan with updated coalition and policy decision points reflecting leadership inputs.',
        is_system_trace: true,
        created_at: '2024-06-15T09:27:40.923Z',
      },
      {
        from: 'evaluator',
        to: 'orchestrator',
        content: 'Simulation plan finalized; readiness confirmed for execution phase.',
        is_system_trace: true,
        created_at: '2024-06-15T09:27:47.589Z',
      },
      {
        from: 'planner',
        to: 'orchestrator',
        content:
          'Updated plan approved: focus on dynamic coalition shifts and policy negotiation sequences.',
        is_system_trace: true,
        created_at: '2024-06-15T09:27:55.298Z',
      },
    ],
  },
  {
    run: {
      id: 'e6b5203b-5502-4325-b174-b08c3979f102',
      simulation_id: 'e9732721-dfbd-4986-8ede-e6b1e27d7fec',
      status: 'failed',
      progress: 27,
      started_at: '2024-06-15T09:56:00.000Z',
      summary: null,
      orchestrator_id: 'c4813652-b330-4bd7-8e93-e8e5280b3714',
      evaluator_id: '04dc8a78-fa6a-4458-9c00-2d85ca9d2ea1',
      planner_id: 'cbd732a4-a200-45ff-b59d-77eec082616e',
      reporter_id: '063484a9-243a-4484-8da9-ac9522a5e413',
      workers: [
        {
          id: 'e5ce0242-174a-4877-9ff2-d348163cf5d5',
          name: 'Party Leader',
        },
        {
          id: '76d0785c-70c1-44e5-89f6-36be9517aa0f',
          name: 'Policy Analyst',
        },
      ],
      finished_at: '2024-06-15T10:56:00.000Z',
    },
    traces: [
      {
        from: 'orchestrator',
        to: 'planner',
        content:
          'Analyzing current status; develop initial plan to explore coalition options and policy negotiation sequences.',
        is_system_trace: true,
        created_at: '2024-06-15T09:56:02Z',
      },
      {
        from: 'planner',
        to: 'orchestrator',
        content:
          'Initial planning phase completed; outline strategies for coalition formation and policy bargaining.',
        is_system_trace: true,
        created_at: '2024-06-15T09:56:12Z',
      },
      {
        from: 'orchestrator',
        to: 'Party Leader',
        content:
          'Review the potential coalition formations and prepare negotiation strategies based on your experience.',
        is_system_trace: false,
        created_at: '2024-06-15T09:56:20Z',
      },
      {
        from: 'Party Leader',
        to: 'orchestrator',
        content:
          'Assessing previous alliances; devising a flexible negotiation approach to balance policy trade-offs.',
        is_system_trace: false,
        created_at: '2024-06-15T09:56:30Z',
      },
      {
        from: 'orchestrator',
        to: 'Policy Analyst',
        content:
          'Request analysis of policy trade-offs in proposed coalitions; focus on potential compromises and impact.',
        is_system_trace: false,
        created_at: '2024-06-15T09:56:40Z',
      },
      {
        from: 'Policy Analyst',
        to: 'orchestrator',
        content:
          'Conducting trade-off analysis; identifying key policy areas with high negotiation leverage.',
        is_system_trace: false,
        created_at: '2024-06-15T09:56:50Z',
      },
      {
        from: 'orchestrator',
        to: 'evaluator',
        content: 'Evaluating initial coalition analysis results and negotiation strategies.',
        is_system_trace: true,
        created_at: '2024-06-15T09:57:00Z',
      },
      {
        from: 'evaluator',
        to: 'orchestrator',
        content: 'Analysis satisfactory; prepare metrics for success evaluation.',
        is_system_trace: true,
        created_at: '2024-06-15T09:57:10Z',
      },
      {
        from: 'orchestrator',
        to: 'reporter',
        content:
          'Generate a comprehensive report on coalition dynamics, policy trade-offs, and negotiation outcomes.',
        is_system_trace: true,
        created_at: '2024-06-15T09:57:20Z',
      },
    ],
  },
  {
    run: {
      id: '542d4da0-37be-4eeb-a3d6-0ac3173c874a',
      simulation_id: '553e22e4-db7a-48b0-8c80-06a003b002ed',
      status: 'in progress',
      progress: 48,
      started_at: '2024-09-10T11:12:00.000Z',
      summary: null,
      orchestrator_id: 'c9cf28ad-ec70-4809-ab14-f26add58c825',
      evaluator_id: '4a769e32-3fd5-46c6-9322-3edda3c69583',
      planner_id: 'a59c6c00-14dd-4c98-a798-f11c86608f52',
      reporter_id: 'cdc6acd9-0411-42ca-a73d-d3dba9f82db4',
      workers: [
        {
          id: '7eac1516-04bc-42bd-91a6-8f2fa300448d',
          name: 'Market Analyst',
        },
        {
          id: 'b815716a-18ba-4f24-9a7a-8d975c1db0e0',
          name: 'Competitor Analyst',
        },
      ],
      updated_at: '2024-09-10T11:45:00.000Z',
    },
    traces: [
      {
        from: 'orchestrator',
        to: 'planner',
        content:
          'Initiate planning for the product launch timing simulation, identifying key decision factors and defining the next steps.',
        is_system_trace: true,
        created_at: '2024-09-10T11:12:02.032Z',
      },
      {
        from: 'planner',
        to: 'orchestrator',
        content:
          'Planning initiated: analyze market conditions, competitor actions, and user trends to determine optimal launch date.',
        is_system_trace: true,
        created_at: '2024-09-10T11:12:07.823Z',
      },
      {
        from: 'orchestrator',
        to: 'Market Analyst',
        content:
          'Review recent market trend reports to identify window of high demand and low saturation. Prioritize data collection on consumer behavior.',
        is_system_trace: false,
        created_at: '2024-09-10T11:12:12.659Z',
      },
      {
        from: 'orchestrator',
        to: 'Competitor Analyst',
        content:
          'Track competitor launch timelines and marketing activities. Highlight potential market openings and threats.',
        is_system_trace: false,
        created_at: '2024-09-10T11:12:17.273Z',
      },
      {
        from: 'orchestrator',
        to: 'evaluator',
        content:
          'Evaluate simulation data metrics and market signals to estimate the best launch window.',
        is_system_trace: true,
        created_at: '2024-09-10T11:12:21.494Z',
      },
      {
        from: 'evaluator',
        to: 'orchestrator',
        content:
          'Analysis complete: market conditions suggest early October offers optimal launch timing with minimal competitive interference.',
        is_system_trace: true,
        created_at: '2024-09-10T11:12:26.175Z',
      },
      {
        from: 'orchestrator',
        to: 'reporter',
        content:
          'Generate final report summarizing recommended product launch timing based on current simulation findings.',
        is_system_trace: true,
        created_at: '2024-09-10T11:12:30.654Z',
      },
      {
        from: 'reporter',
        to: 'orchestrator',
        content:
          'Final report drafted: optimal launch date set for October 5th, aligning market opportunities and competitor analysis.',
        is_system_trace: true,
        created_at: '2024-09-10T11:12:34.389Z',
      },
    ],
  },
  {
    run: {
      id: '468bd050-44ba-4abc-98c6-7b4dc4437af4',
      simulation_id: '553e22e4-db7a-48b0-8c80-06a003b002ed',
      status: 'aborted',
      progress: 60,
      started_at: '2024-09-10T11:56:00.000Z',
      summary: null,
      orchestrator_id: 'c9cf28ad-ec70-4809-ab14-f26add58c825',
      evaluator_id: '4a769e32-3fd5-46c6-9322-3edda3c69583',
      planner_id: 'a59c6c00-14dd-4c98-a798-f11c86608f52',
      reporter_id: 'cdc6acd9-0411-42ca-a73d-d3dba9f82db4',
      workers: [
        {
          id: '7eac1516-04bc-42bd-91a6-8f2fa300448d',
          name: 'Market Analyst',
        },
        {
          id: 'b815716a-18ba-4f24-9a7a-8d975c1db0e0',
          name: 'Competitor Analyst',
        },
      ],
      aborted_at: '2024-09-10T12:11:00.000Z',
    },
    traces: [
      {
        from: 'orchestrator',
        to: 'planner',
        content:
          'Initiating planning phase for the Product Launch Timing simulation, focusing on key steps: market analysis and competitor activity review.',
        is_system_trace: true,
        created_at: '2024-09-10T11:56:02.000Z',
      },
      {
        from: 'planner',
        to: 'orchestrator',
        content:
          'Planning strategy created: analyze current market conditions, track competitor actions, evaluate optimal launch window.',
        is_system_trace: true,
        created_at: '2024-09-10T11:56:08.342Z',
      },
      {
        from: 'orchestrator',
        to: 'Market Analyst',
        content:
          'Please analyze recent market trends and identify potential launch periods with maximum consumer interest.',
        is_system_trace: false,
        created_at: '2024-09-10T11:56:14.123Z',
      },
      {
        from: 'Market Analyst',
        to: 'orchestrator',
        content:
          'Market trends indicate increased consumer activity in Q1 and Q3, with emerging opportunities in niche segments.',
        is_system_trace: false,
        created_at: '2024-09-10T11:56:22.756Z',
      },
      {
        from: 'orchestrator',
        to: 'Competitor Analyst',
        content:
          'Track competitor activities—focus on major product launches and marketing campaigns in the upcoming quarters.',
        is_system_trace: false,
        created_at: '2024-09-10T11:56:29.567Z',
      },
      {
        from: 'Competitor Analyst',
        to: 'orchestrator',
        content:
          'Competitor analysis reveals the strongest activity in Q2 and Q4, with aggressive marketing strategies planned.',
        is_system_trace: false,
        created_at: '2024-09-10T11:56:36.229Z',
      },
      {
        from: 'orchestrator',
        to: 'evaluator',
        content:
          'Request evaluation of collected data and determination of the optimal launch timing based on market and competitor insights.',
        is_system_trace: true,
        created_at: '2024-09-10T11:56:43.889Z',
      },
      {
        from: 'evaluator',
        to: 'orchestrator',
        content:
          'Evaluation complete: optimal launch window identified in Q3, avoiding peak competitor activity.',
        is_system_trace: true,
        created_at: '2024-09-10T11:56:48.567Z',
      },
      {
        from: 'orchestrator',
        to: 'reporter',
        content:
          'Generate final report summarizing the analysis, recommended launch timing, and strategic considerations.',
        is_system_trace: true,
        created_at: '2024-09-10T11:56:53.678Z',
      },
      {
        from: 'reporter',
        to: 'orchestrator',
        content:
          'Final report generated: Launch in Q3 aligns with market trends and minimizes competitor interference, ensuring optimal product entry.',
        is_system_trace: true,
        created_at: '2024-09-10T11:57:02.134Z',
      },
    ],
  },
  {
    run: {
      id: '90fc434c-eaa0-4932-83ba-e7a150a9f728',
      simulation_id: '553e22e4-db7a-48b0-8c80-06a003b002ed',
      status: 'in progress',
      progress: 51,
      started_at: '2024-09-10T11:56:00.000Z',
      summary: null,
      orchestrator_id: 'c9cf28ad-ec70-4809-ab14-f26add58c825',
      evaluator_id: '4a769e32-3fd5-46c6-9322-3edda3c69583',
      planner_id: 'a59c6c00-14dd-4c98-a798-f11c86608f52',
      reporter_id: 'cdc6acd9-0411-42ca-a73d-d3dba9f82db4',
      workers: [
        {
          id: '7eac1516-04bc-42bd-91a6-8f2fa300448d',
          name: 'Market Analyst',
        },
        {
          id: 'b815716a-18ba-4f24-9a7a-8d975c1db0e0',
          name: 'Competitor Analyst',
        },
      ],
      updated_at: '2024-09-10T12:21:00.000Z',
    },
    traces: [
      {
        from: 'orchestrator',
        to: 'planner',
        content:
          'Starting simulation planning for optimal product launch timing based on market and competitor data.',
        is_system_trace: true,
        created_at: '2024-09-10T11:56:02.000Z',
      },
      {
        from: 'planner',
        to: 'orchestrator',
        content: 'Initial planning completed. Preparing to gather insights from agents.',
        is_system_trace: true,
        created_at: '2024-09-10T11:56:08.000Z',
      },
      {
        from: 'orchestrator',
        to: 'Market Analyst',
        content:
          'Analyze current market trends impacting product launch timing and identify key factors.',
        is_system_trace: false,
        created_at: '2024-09-10T11:56:15.000Z',
      },
      {
        from: 'Market Analyst',
        to: 'orchestrator',
        content:
          'Market data shows increasing consumer interest in Q1, with some seasonal slowdowns in Q4. Trends are optimistic for early launch in March.',
        is_system_trace: false,
        created_at: '2024-09-10T11:56:23.000Z',
      },
      {
        from: 'orchestrator',
        to: 'Competitor Analyst',
        content: 'Track recent competitor activities and product release schedules.',
        is_system_trace: false,
        created_at: '2024-09-10T11:56:30.000Z',
      },
      {
        from: 'Competitor Analyst',
        to: 'orchestrator',
        content:
          'Competitors are planning launches mostly in Q2. Notable activity from three key players in April and May.',
        is_system_trace: false,
        created_at: '2024-09-10T11:56:39.000Z',
      },
      {
        from: 'orchestrator',
        to: 'evaluator',
        content: 'Evaluate gathered insights and determine optimal launch window.',
        is_system_trace: true,
        created_at: '2024-09-10T11:56:47.000Z',
      },
      {
        from: 'evaluator',
        to: 'orchestrator',
        content:
          'Analysis complete. Optimal launch window identified for early March, considering competitive landscape and market trends.',
        is_system_trace: true,
        created_at: '2024-09-10T11:56:55.000Z',
      },
      {
        from: 'orchestrator',
        to: 'planner',
        content:
          'Refine launch plan with optimal timing and strategies based on evaluation results.',
        is_system_trace: true,
        created_at: '2024-09-10T11:57:03.000Z',
      },
      {
        from: 'planner',
        to: 'orchestrator',
        content: 'Updated planning schema reflecting recommended launch date in early March.',
        is_system_trace: true,
        created_at: '2024-09-10T11:57:12.000Z',
      },
      {
        from: 'orchestrator',
        to: 'reporter',
        content:
          'Generate final report with recommended launch date, market analysis, and competitor insights.',
        is_system_trace: true,
        created_at: '2024-09-10T11:57:20.000Z',
      },
      {
        from: 'reporter',
        to: 'orchestrator',
        content:
          'Final report completed. The optimal product launch date is early March, with detailed strategic insights included.',
        is_system_trace: true,
        created_at: '2024-09-10T11:57:30.000Z',
      },
    ],
  },
  {
    run: {
      id: 'accb5f0f-db4a-440c-8c23-f6fa510bc7fc',
      simulation_id: '553e22e4-db7a-48b0-8c80-06a003b002ed',
      status: 'failed',
      progress: 41,
      started_at: '2024-09-10T11:13:00.000Z',
      summary: null,
      orchestrator_id: 'c9cf28ad-ec70-4809-ab14-f26add58c825',
      evaluator_id: '4a769e32-3fd5-46c6-9322-3edda3c69583',
      planner_id: 'a59c6c00-14dd-4c98-a798-f11c86608f52',
      reporter_id: 'cdc6acd9-0411-42ca-a73d-d3dba9f82db4',
      workers: [
        {
          id: '7eac1516-04bc-42bd-91a6-8f2fa300448d',
          name: 'Market Analyst',
        },
        {
          id: 'b815716a-18ba-4f24-9a7a-8d975c1db0e0',
          name: 'Competitor Analyst',
        },
      ],
      finished_at: '2024-09-10T12:13:00.000Z',
    },
    traces: [
      {
        from: 'orchestrator',
        to: 'planner',
        content:
          'Initiating planning phase to analyze market data and competitor activities for optimal product launch timing.',
        is_system_trace: true,
        created_at: '2024-09-10T11:13:02.000Z',
      },
      {
        from: 'planner',
        to: 'orchestrator',
        content:
          'Planning underway: assessing market trends and competitor strategies to recommend best launch window.',
        is_system_trace: true,
        created_at: '2024-09-10T11:13:09.000Z',
      },
      {
        from: 'orchestrator',
        to: 'Market Analyst',
        content:
          'Please analyze current market conditions for the upcoming product launch and identify key trends.',
        is_system_trace: false,
        created_at: '2024-09-10T11:13:15.000Z',
      },
      {
        from: 'Market Analyst',
        to: 'orchestrator',
        content:
          'Analyzed market trends show a high consumer interest around Q2 next year, with minimal competitor activity at that time.',
        is_system_trace: false,
        created_at: '2024-09-10T11:13:23.000Z',
      },
      {
        from: 'orchestrator',
        to: 'Competitor Analyst',
        content: 'Track and evaluate recent competitor activities affecting launch strategies.',
        is_system_trace: false,
        created_at: '2024-09-10T11:13:30.000Z',
      },
      {
        from: 'Competitor Analyst',
        to: 'orchestrator',
        content:
          'Competitors have scheduled major releases in Q4, indicating a window for early Q2 launch to maximize market impact.',
        is_system_trace: false,
        created_at: '2024-09-10T11:13:37.000Z',
      },
      {
        from: 'orchestrator',
        to: 'evaluator',
        content: 'Evaluate the collected data and recommend the optimal launch date.',
        is_system_trace: true,
        created_at: '2024-09-10T11:13:45.000Z',
      },
      {
        from: 'evaluator',
        to: 'orchestrator',
        content:
          'Recommended launch in late May to early June, based on market interest peaks and competitor timing.',
        is_system_trace: true,
        created_at: '2024-09-10T11:13:52.000Z',
      },
      {
        from: 'orchestrator',
        to: 'reporter',
        content: 'Prepare a final report summarizing the analysis and recommended launch timing.',
        is_system_trace: true,
        created_at: '2024-09-10T11:14:00.000Z',
      },
    ],
  },
  {
    run: {
      id: 'aac9d8a6-6b4a-4e98-b804-dceec3019708',
      simulation_id: '553e22e4-db7a-48b0-8c80-06a003b002ed',
      status: 'aborted',
      progress: 0,
      started_at: '2024-09-10T11:14:00.000Z',
      summary: null,
      orchestrator_id: 'c9cf28ad-ec70-4809-ab14-f26add58c825',
      evaluator_id: '4a769e32-3fd5-46c6-9322-3edda3c69583',
      planner_id: 'a59c6c00-14dd-4c98-a798-f11c86608f52',
      reporter_id: 'cdc6acd9-0411-42ca-a73d-d3dba9f82db4',
      workers: [
        {
          id: '7eac1516-04bc-42bd-91a6-8f2fa300448d',
          name: 'Market Analyst',
        },
        {
          id: 'b815716a-18ba-4f24-9a7a-8d975c1db0e0',
          name: 'Competitor Analyst',
        },
      ],
      aborted_at: '2024-09-10T11:29:00.000Z',
    },
    traces: [
      {
        from: 'orchestrator',
        to: 'planner',
        content:
          'Initiating planning phase to schedule analysis of market conditions and competitor actions for optimal product launch timing.',
        is_system_trace: true,
        created_at: '2024-09-10T11:14:03.000Z',
      },
      {
        from: 'planner',
        to: 'orchestrator',
        content:
          'Planning to assign tasks to Market Analyst and Competitor Analyst to gather latest data and insights.',
        is_system_trace: true,
        created_at: '2024-09-10T11:14:07.500Z',
      },
      {
        from: 'orchestrator',
        to: 'Market Analyst',
        content:
          'Please analyze recent market trends affecting new product launches and report key insights.',
        is_system_trace: false,
        created_at: '2024-09-10T11:14:10.200Z',
      },
      {
        from: 'Market Analyst',
        to: 'orchestrator',
        content:
          'Analyzing market data. Notable increase in demand for eco-friendly products, and a growing segment open to innovative launch timings.',
        is_system_trace: false,
        created_at: '2024-09-10T11:14:16.832Z',
      },
      {
        from: 'orchestrator',
        to: 'Competitor Analyst',
        content: 'Track recent activities and strategic moves of key competitors in the market.',
        is_system_trace: false,
        created_at: '2024-09-10T11:14:20.480Z',
      },
      {
        from: 'Competitor Analyst',
        to: 'orchestrator',
        content:
          'Monitoring competitor launches and promotional activities. Competitors are timing their releases before Q4 to maximize market impact.',
        is_system_trace: false,
        created_at: '2024-09-10T11:14:27. many Z',
      },
      {
        from: 'orchestrator',
        to: 'evaluator',
        content:
          'Request initial assessment of gathered data and recommendations for optimal launch timing.',
        is_system_trace: true,
        created_at: '2024-09-10T11:14:29.300Z',
      },
      {
        from: 'evaluator',
        to: 'orchestrator',
        content:
          'Data indicates launching in late September or early October maximizes market advantage considering competitor actions and consumer trends.',
        is_system_trace: true,
        created_at: '2024-09-10T11:14:35.675Z',
      },
      {
        from: 'orchestrator',
        to: 'planner',
        content:
          'Update the plan to focus on late September as the optimal launch window, considering the latest insights.',
        is_system_trace: true,
        created_at: '2024-09-10T11:14:40.820Z',
      },
      {
        from: 'planner',
        to: 'orchestrator',
        content:
          'Refined plan to prioritize late September, leveraging market activity peaks and competitor movements for launch.',
        is_system_trace: true,
        created_at: '2024-09-10T11:14:45.230Z',
      },
      {
        from: 'orchestrator',
        to: 'Market Analyst',
        content:
          'Prepare a detailed report on the best specific date within the late September window, based on market conditions.',
        is_system_trace: false,
        created_at: '2024-09-10T11:14:49.901Z',
      },
      {
        from: 'Market Analyst',
        to: 'orchestrator',
        content:
          'Analyzed data to identify most advantageous launch date as September 28th, aligning with consumer engagement and competitor patterns.',
        is_system_trace: false,
        created_at: '2024-09-10T11:14:57.293Z',
      },
      {
        from: 'orchestrator',
        to: 'reporter',
        content:
          'Finalize the optimal launch timing as September 28th based on comprehensive market and competitive analysis.',
        is_system_trace: true,
        created_at: '2024-09-10T11:15:02.342Z',
      },
      {
        from: 'reporter',
        to: 'orchestrator',
        content:
          'Prepared a summary report confirming September 28th as the proposed launch date, emphasizing competitive positioning and consumer readiness.',
        is_system_trace: true,
        created_at: '2024-09-10T11:15:07.495Z',
      },
    ],
  },
  {
    run: {
      id: '7eb290df-b583-49b5-8225-e27c8624dea4',
      simulation_id: '3ec4b722-ffbc-47fb-b4e8-85e60b8889f4',
      status: 'completed',
      progress: 100,
      started_at: '2024-05-25T11:28:00.000Z',
      summary:
        'The simulation "Breaking Social Media Addiction" demonstrated promising results in reducing excessive usage through personalized offline activities and accountability strategies. Maya identified key triggers like boredom and stress, while Jake proposed outdoor walks and hobbies. The intervention evolved with continuous feedback, including tailored offline plans and regular check-ins. Initial data shows steady improvement, with ongoing monitoring planned. The final report highlights significant progress, though some challenges remain, emphasizing the importance of adaptive approaches for sustainable behavioral change. Overall, the strategies proved effective, paving the way for broader application in addiction intervention programs.',
      orchestrator_id: '867c19ca-7850-4ac4-89fe-a2382b8c4c63',
      evaluator_id: '4a66e0cc-d691-4757-918d-536da6ea03b3',
      planner_id: '34d5e039-1c96-439c-9d69-010c4ec1d842',
      reporter_id: '580b12ac-57f8-459a-b548-5d05c69c14b8',
      workers: [
        {
          id: '6d15bdb8-e088-4ac9-90d8-e5878223121a',
          name: 'Maya Patel',
        },
        {
          id: 'c41e4c08-3758-4a1b-b0ee-39552c1eba62',
          name: 'Jake Anderson',
        },
      ],
      finished_at: '2024-05-25T12:28:00.000Z',
    },
    traces: [
      {
        from: 'orchestrator',
        to: 'planner',
        content:
          'Initiate planning phase for the social media addiction intervention simulation, focusing on evaluating strategies with Maya and Jake.',
        is_system_trace: true,
        created_at: '2024-05-25T11:28:02.001Z',
      },
      {
        from: 'planner',
        to: 'orchestrator',
        content:
          'Planning steps for agent collaboration and data collection established. Next, assign specific tasks to Maya and Jake.',
        is_system_trace: true,
        created_at: '2024-05-25T11:28:08.334Z',
      },
      {
        from: 'orchestrator',
        to: 'Maya Patel',
        content:
          'Maya, analyze your current social media habits and describe the main triggers that lead to excessive usage.',
        is_system_trace: false,
        created_at: '2024-05-25T11:28:12.592Z',
      },
      {
        from: 'Maya Patel',
        to: 'orchestrator',
        content:
          "I've identified key triggers like boredom, stress, and peer influence, which prompt me to open social apps frequently.",
        is_system_trace: false,
        created_at: '2024-05-25T11:28:18.914Z',
      },
      {
        from: 'orchestrator',
        to: 'Jake Anderson',
        content:
          "Jake, review Maya's triggers and suggest offline activities and accountability strategies to help her reduce social media use.",
        is_system_trace: false,
        created_at: '2024-05-25T11:28:24.610Z',
      },
      {
        from: 'Jake Anderson',
        to: 'orchestrator',
        content:
          "I recommend establishing regular outdoor walks, hobby sessions, and daily check-ins to support Maya's progress and keep her accountable.",
        is_system_trace: false,
        created_at: '2024-05-25T11:28:30.152Z',
      },
      {
        from: 'orchestrator',
        to: 'evaluator',
        content:
          'Evaluate the initial data and progress reports from Maya and Jake regarding intervention strategies and effectiveness.',
        is_system_trace: true,
        created_at: '2024-05-25T11:28:36.497Z',
      },
      {
        from: 'evaluator',
        to: 'orchestrator',
        content:
          'Assessment indicates positive engagement; strategies seem promising but require ongoing monitoring.',
        is_system_trace: true,
        created_at: '2024-05-25T11:28:42.112Z',
      },
      {
        from: 'orchestrator',
        to: 'planner',
        content:
          "Refine intervention strategy based on evaluator's feedback, emphasizing personalized offline activities and accountability.",
        is_system_trace: true,
        created_at: '2024-05-25T11:28:48.693Z',
      },
      {
        from: 'planner',
        to: 'orchestrator',
        content:
          'Enhancement plan outlined to include tailored offline plans, motivational check-ins, and adaptive goals for Maya.',
        is_system_trace: true,
        created_at: '2024-05-25T11:28:55.278Z',
      },
      {
        from: 'orchestrator',
        to: 'Maya Patel',
        content:
          'Implement the updated intervention plan, focusing on personalized offline activities, community engagement, and progress tracking.',
        is_system_trace: false,
        created_at: '2024-05-25T11:29:01.921Z',
      },
      {
        from: 'Maya Patel',
        to: 'orchestrator',
        content:
          'Started new offline activities, set up daily goals, and scheduled weekly accountability meetings with Jake.',
        is_system_trace: false,
        created_at: '2024-05-25T11:29:08.372Z',
      },
      {
        from: 'orchestrator',
        to: 'Jake Anderson',
        content:
          'Coordinate support strategies with Jake, ensuring continued engagement and adaptive measures based on Maya’s feedback.',
        is_system_trace: false,
        created_at: '2024-05-25T11:29:14.789Z',
      },
      {
        from: 'Jake Anderson',
        to: 'orchestrator',
        content:
          'Maintain regular outdoor activities, encourage new hobbies, and monitor Maya’s adherence to the plan.',
        is_system_trace: false,
        created_at: '2024-05-25T11:29:21.206Z',
      },
      {
        from: 'orchestrator',
        to: 'evaluator',
        content:
          'Schedule ongoing assessment of intervention outcomes and behavioral changes over the next phase.',
        is_system_trace: true,
        created_at: '2024-05-25T11:29:27.834Z',
      },
      {
        from: 'evaluator',
        to: 'orchestrator',
        content:
          'Monitoring indicates steady improvement; adjustments will be made based on evolving needs and behavioral insights.',
        is_system_trace: true,
        created_at: '2024-05-25T11:29:34.190Z',
      },
      {
        from: 'orchestrator',
        to: 'reporter',
        content:
          'Prepare a comprehensive report on the effectiveness of intervention strategies, incorporating Maya and Jake’s latest feedback.',
        is_system_trace: true,
        created_at: '2024-05-25T11:29:41.703Z',
      },
      {
        from: 'reporter',
        to: 'orchestrator',
        content:
          'Final report prepared, highlighting key successes, ongoing challenges, and recommendations for future interventions.',
        is_system_trace: true,
        created_at: '2024-05-25T11:29:47.982Z',
      },
    ],
  },
  {
    run: {
      id: '72d14e17-ed34-4f84-b703-27318a8d02e2',
      simulation_id: '3ec4b722-ffbc-47fb-b4e8-85e60b8889f4',
      status: 'in progress',
      progress: 19,
      started_at: '2024-05-25T11:08:00.000Z',
      summary: null,
      orchestrator_id: '867c19ca-7850-4ac4-89fe-a2382b8c4c63',
      evaluator_id: '4a66e0cc-d691-4757-918d-536da6ea03b3',
      planner_id: '34d5e039-1c96-439c-9d69-010c4ec1d842',
      reporter_id: '580b12ac-57f8-459a-b548-5d05c69c14b8',
      workers: [
        {
          id: '6d15bdb8-e088-4ac9-90d8-e5878223121a',
          name: 'Maya Patel',
        },
        {
          id: 'c41e4c08-3758-4a1b-b0ee-39552c1eba62',
          name: 'Jake Anderson',
        },
      ],
      updated_at: '2024-05-25T11:39:00.000Z',
    },
    traces: [
      {
        from: 'orchestrator',
        to: 'planner',
        content:
          "Initiating planning phase for assessment of intervention strategies to reduce social media addiction, involving Maya and Jake's input and defining key metrics.",
        is_system_trace: true,
        created_at: '2024-05-25T11:08:02Z',
      },
      {
        from: 'planner',
        to: 'orchestrator',
        content:
          'Planning parameters set: focus on behavioral change techniques, support systems, and engagement metrics, preparing for agent assignments.',
        is_system_trace: true,
        created_at: '2024-05-25T11:08:11Z',
      },
      {
        from: 'orchestrator',
        to: 'Maya Patel',
        content:
          'Please share your current usage patterns and specific challenges faced, so we can tailor intervention strategies effectively.',
        is_system_trace: false,
        created_at: '2024-05-25T11:08:20Z',
      },
      {
        from: 'orchestrator',
        to: 'Jake Anderson',
        content:
          "Provide insights on offline activities you've used successfully and suggest ways to motivate Maya to engage with them.",
        is_system_trace: false,
        created_at: '2024-05-25T11:08:29Z',
      },
      {
        from: 'orchestrator',
        to: 'evaluator',
        content:
          "Request initial assessment metrics and progress indicators based on Maya's reports and Jake's observations.",
        is_system_trace: true,
        created_at: '2024-05-25T11:08:38Z',
      },
      {
        from: 'evaluator',
        to: 'orchestrator',
        content:
          'Evaluating initial data: Maya shows moderate progress with increased offline activity, but social media cravings persist during evenings.',
        is_system_trace: true,
        created_at: '2024-05-25T11:08:45Z',
      },
      {
        from: 'orchestrator',
        to: 'reporter',
        content:
          'Summarize the current findings: intervention strategies yield varying results, with offline activities aiding in reducing usage but requiring enhanced motivational support.',
        is_system_trace: true,
        created_at: '2024-05-25T11:08:55Z',
      },
      {
        from: 'reporter',
        to: 'orchestrator',
        content:
          'Final report prepared: strategies incorporating personalized offline routines and accountability measures show promising results, recommend further personalized support.',
        is_system_trace: true,
        created_at: '2024-05-25T11:09:05Z',
      },
      {
        from: 'orchestrator',
        to: 'planner',
        content:
          'Update plan: focus on customizing offline activities for Maya, include more engaging support mechanisms, and monitor progress over next phase.',
        is_system_trace: true,
        created_at: '2024-05-25T11:09:15Z',
      },
      {
        from: 'planner',
        to: 'orchestrator',
        content:
          'Refinements made: tailored activity suggestions and enhanced accountability features integrated into intervention plan.',
        is_system_trace: true,
        created_at: '2024-05-25T11:09:23Z',
      },
      {
        from: 'orchestrator',
        to: 'Maya Patel',
        content:
          'Based on recent evaluations, we will implement personalized offline routines and support systems to help you reduce social media use.',
        is_system_trace: false,
        created_at: '2024-05-25T11:09:30Z',
      },
      {
        from: 'orchestrator',
        to: 'Jake Anderson',
        content:
          'Coordinate with Maya to enhance offline activity engagement and track her progress closely during the next phase.',
        is_system_trace: false,
        created_at: '2024-05-25T11:09:40Z',
      },
      {
        from: 'orchestrator',
        to: 'evaluator',
        content:
          'Request ongoing performance metrics to measure the effectiveness of the new support strategies.',
        is_system_trace: true,
        created_at: '2024-05-25T11:09:48Z',
      },
      {
        from: 'evaluator',
        to: 'orchestrator',
        content:
          'Monitoring indicates improved engagement levels, though some cravings remain during peak social media times.',
        is_system_trace: true,
        created_at: '2024-05-25T11:09:55Z',
      },
      {
        from: 'orchestrator',
        to: 'reporter',
        content:
          'Generate interim progress report highlighting strategy adjustments, engagement improvements, and areas needing further support.',
        is_system_trace: true,
        created_at: '2024-05-25T11:10:05Z',
      },
      {
        from: 'reporter',
        to: 'orchestrator',
        content:
          'Interim report ready: adaptive support measures show positive impact, continued monitoring recommended for sustained behavioral change.',
        is_system_trace: true,
        created_at: '2024-05-25T11:10:15Z',
      },
      {
        from: 'orchestrator',
        to: 'planner',
        content:
          'Plan next steps: incorporate motivational interviewing techniques and social support enhancements for Maya.',
        is_system_trace: true,
        created_at: '2024-05-25T11:10:24Z',
      },
      {
        from: 'planner',
        to: 'orchestrator',
        content:
          'Updated intervention blueprint focusing on motivational enhancement and social accountability features.',
        is_system_trace: true,
        created_at: '2024-05-25T11:10:32Z',
      },
      {
        from: 'orchestrator',
        to: 'Maya Patel',
        content:
          'Further strategies involve motivational interviewing and increased social support—your input is valuable for tailoring approaches.',
        is_system_trace: false,
        created_at: '2024-05-25T11:10:40Z',
      },
      {
        from: 'orchestrator',
        to: 'Jake Anderson',
        content:
          'Enhance offline activities and social accountability support, monitor Maya’s motivation levels closely.',
        is_system_trace: false,
        created_at: '2024-05-25T11:10:49Z',
      },
      {
        from: 'orchestrator',
        to: 'evaluator',
        content:
          'Assess the impact of new motivational and social support strategies, gather data on behavioral shifts.',
        is_system_trace: true,
        created_at: '2024-05-25T11:11:00Z',
      },
      {
        from: 'evaluator',
        to: 'orchestrator',
        content:
          'Results show increased resilience against social media cravings, support systems are effectively complementing behavioral strategies.',
        is_system_trace: true,
        created_at: '2024-05-25T11:11:09Z',
      },
      {
        from: 'orchestrator',
        to: 'reporter',
        content:
          'Prepare final evaluation report emphasizing the success of integrated behavioral and support interventions.',
        is_system_trace: true,
        created_at: '2024-05-25T11:11:17Z',
      },
      {
        from: 'reporter',
        to: 'orchestrator',
        content:
          'Final report completed: comprehensive intervention combining behavioral, motivational, and social support elements demonstrates potential for sustainment.',
        is_system_trace: true,
        created_at: '2024-05-25T11:11:26Z',
      },
    ],
  },
  {
    run: {
      id: '2e61515d-0719-465c-b142-27b48df16e73',
      simulation_id: '3ec4b722-ffbc-47fb-b4e8-85e60b8889f4',
      status: 'in progress',
      progress: 33,
      started_at: '2024-05-25T12:00:00.000Z',
      summary: null,
      orchestrator_id: '867c19ca-7850-4ac4-89fe-a2382b8c4c63',
      evaluator_id: '4a66e0cc-d691-4757-918d-536da6ea03b3',
      planner_id: '34d5e039-1c96-439c-9d69-010c4ec1d842',
      reporter_id: '580b12ac-57f8-459a-b548-5d05c69c14b8',
      workers: [
        {
          id: '6d15bdb8-e088-4ac9-90d8-e5878223121a',
          name: 'Maya Patel',
        },
        {
          id: 'c41e4c08-3758-4a1b-b0ee-39552c1eba62',
          name: 'Jake Anderson',
        },
      ],
      updated_at: '2024-05-25T12:34:00.000Z',
    },
    traces: [
      {
        from: 'orchestrator',
        to: 'planner',
        content:
          'Initiating planning phase for the social media addiction intervention simulation. Assign tasks and define steps for agents Maya and Jake to test strategy effectiveness.',
        is_system_trace: true,
        created_at: '2024-05-25T12:00:03Z',
      },
      {
        from: 'planner',
        to: 'orchestrator',
        content:
          'Planning complete. Agents will conduct initial assessments and implement selected intervention strategies.',
        is_system_trace: true,
        created_at: '2024-05-25T12:00:08Z',
      },
      {
        from: 'orchestrator',
        to: 'Maya Patel',
        content:
          'Maya, analyze your current social media usage patterns and identify triggers that lead to addictive behaviors. Prepare a report for review.',
        is_system_trace: false,
        created_at: '2024-05-25T12:00:12Z',
      },
      {
        from: 'orchestrator',
        to: 'Jake Anderson',
        content:
          "Jake, develop a set of offline activities to support Maya's reduction efforts. Focus on outdoor recreation and social engagement.",
        is_system_trace: false,
        created_at: '2024-05-25T12:00:16Z',
      },
      {
        from: 'orchestrator',
        to: 'Maya Patel',
        content:
          'Maya, share your progress after implementing alternative activities and restricting social media time. Collect data on mood and focus.',
        is_system_trace: false,
        created_at: '2024-05-25T12:00:20Z',
      },
      {
        from: 'orchestrator',
        to: 'Jake Anderson',
        content:
          "Jake, monitor Maya's engagement with offline activities and note any notable improvements or setbacks.",
        is_system_trace: false,
        created_at: '2024-05-25T12:00:24Z',
      },
      {
        from: 'orchestrator',
        to: 'evaluator',
        content:
          "Request assessment of intervention strategies’ initial effectiveness based on Maya's and Jake's reports.",
        is_system_trace: true,
        created_at: '2024-05-25T12:00:28Z',
      },
      {
        from: 'evaluator',
        to: 'orchestrator',
        content:
          'Evaluation results indicate moderate improvement, with key triggers reducing but still present. Recommend emphasizing behavioral techniques.',
        is_system_trace: true,
        created_at: '2024-05-25T12:00:33Z',
      },
      {
        from: 'orchestrator',
        to: 'planner',
        content:
          'Plan next steps: enhance activity programs, introduce mindfulness, and schedule follow-up assessments.',
        is_system_trace: true,
        created_at: '2024-05-25T12:00:37Z',
      },
      {
        from: 'planner',
        to: 'orchestrator',
        content:
          'Next phase scheduled. Agents to focus on tailored interventions and sustained behavioral changes.',
        is_system_trace: true,
        created_at: '2024-05-25T12:00:42Z',
      },
      {
        from: 'orchestrator',
        to: 'Maya Patel',
        content:
          'Refine your strategy by incorporating mindfulness exercises and journaling. Continue tracking your progress.',
        is_system_trace: false,
        created_at: '2024-05-25T12:00:46Z',
      },
      {
        from: 'orchestrator',
        to: 'Jake Anderson',
        content:
          'Provide Maya with new tools and activities aimed at strengthening her offline engagement.',
        is_system_trace: false,
        created_at: '2024-05-25T12:00:50Z',
      },
      {
        from: 'orchestrator',
        to: 'Maya Patel',
        content:
          'Monitor changes in social media usage and emotional well-being. Prepare a detailed report for review.',
        is_system_trace: false,
        created_at: '2024-05-25T12:00:54Z',
      },
      {
        from: 'orchestrator',
        to: 'Jake Anderson',
        content:
          'Assist Maya in implementing mindfulness and journaling routines during her offline activities.',
        is_system_trace: false,
        created_at: '2024-05-25T12:00:58Z',
      },
      {
        from: 'orchestrator',
        to: 'evaluator',
        content: 'Evaluate the continued progress and identify any new challenges or triggers.',
        is_system_trace: true,
        created_at: '2024-05-25T12:01:02Z',
      },
      {
        from: 'evaluator',
        to: 'orchestrator',
        content:
          'Evaluation shows further decline in triggers, but some resistance persists. Recommend booster sessions.',
        is_system_trace: true,
        created_at: '2024-05-25T12:01:07Z',
      },
      {
        from: 'orchestrator',
        to: 'reporter',
        content:
          'Prepare a comprehensive report summarizing intervention effectiveness, challenges, and recommendations.',
        is_system_trace: true,
        created_at: '2024-05-25T12:01:11Z',
      },
      {
        from: 'reporter',
        to: 'orchestrator',
        content:
          'Final report drafted with data, insights, and future strategies for combating social media addiction.',
        is_system_trace: true,
        created_at: '2024-05-25T12:01:16Z',
      },
    ],
  },
]
