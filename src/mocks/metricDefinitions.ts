export const metricDefinitions = {
  '43419666-8307-4afa-96be-32400e855cc4': [
    {
      name: 'group_decision_conflicts',
      description: 'Number of conflicts or disagreements during group decision-making.',
      type: 'counter',
      tags: [
        {
          tag: 'agent_group',
          description: 'Identifier for the group of agents involved in the decision process.',
        },
      ],
      unit: 'conflicts',
    },
    {
      name: 'agent_interaction_frequency',
      description: 'Number of interactions (communications, meetings) per agent.',
      type: 'counter',
      tags: [
        {
          tag: 'agent_name',
          description: 'Name or identifier of the agent.',
        },
      ],
      unit: 'interactions',
    },
    {
      name: 'preference_alignment_score',
      description: 'Degree of similarity in preferences among agents at decision start/end.',
      type: 'gauge',
      tags: [
        {
          tag: 'agent_group',
          description: 'Identifier for the group of agents.',
        },
      ],
      unit: 'percentage',
    },
    {
      name: 'decision_iterations',
      description: 'Number of iterations or steps taken to reach consensus.',
      type: 'counter',
      tags: [],
      unit: 'steps',
    },
    {
      name: 'decision_response_time',
      description: 'Time taken for the group to reach a decision.',
      type: 'histogram',
      tags: [],
      unit: 'seconds',
    },
    {
      name: 'agent_satisfaction_score',
      description: 'Satisfaction level of agents with the final decision.',
      type: 'gauge',
      tags: [
        {
          tag: 'agent_name',
          description: 'Identifier for each agent.',
        },
      ],
      unit: 'score',
    },
    {
      name: 'final_agreement_percentage',
      description: 'Percentage of agents who agree with the final decision.',
      type: 'gauge',
      tags: [],
      unit: 'percentage',
    },
    {
      name: 'decision_time',
      description: 'Total time to reach a decision.',
      type: 'summary',
      tags: [],
      unit: 'seconds',
    },
    {
      name: 'communication_efficiency',
      description: 'Average number of communications required per decision.',
      type: 'gauge',
      tags: [],
      unit: 'communications',
    },
    {
      name: 'group_cohesion_score',
      description: 'Measures how cohesively the group works together during decision-making.',
      type: 'gauge',
      tags: [
        {
          tag: 'agent_group',
          description: 'Identifier for the group of agents.',
        },
      ],
      unit: 'score',
    },
    {
      name: 'conflict_resolution_rate',
      description: 'Rate at which conflicts are resolved during decision process.',
      type: 'gauge',
      tags: [],
      unit: 'ratio',
    },
  ],
  '87077efb-308e-4b4e-b845-8f7d4faed852': [
    {
      name: 'agent_interaction_frequency',
      description: 'Tracks how often agents interact with each other or with the environment.',
      type: 'counter',
      tags: [
        {
          tag: 'agent_name',
          description: 'The name of the agent involved in the interaction.',
        },
        {
          tag: 'interaction_type',
          description: 'Type of interaction, e.g., communication, collaboration.',
        },
      ],
      unit: 'interactions',
    },
    {
      name: 'workout_compliance_rate',
      description:
        'Measures the percentage of scheduled workouts that are completed by the gym buddy.',
      type: 'gauge',
      tags: [
        {
          tag: 'agent_name',
          description: 'Name of the gym buddy.',
        },
        {
          tag: 'time_period',
          description: 'Time span over which compliance is measured.',
        },
      ],
      unit: 'percentage',
    },
    {
      name: 'motivation_level',
      description:
        'Tracks the motivation level of agents, especially the inconsistent gym buddy, over time.',
      type: 'gauge',
      tags: [
        {
          tag: 'agent_name',
          description: 'Name of the agent.',
        },
        {
          tag: 'session',
          description: 'Workout or interaction session identifier.',
        },
      ],
      unit: 'motivation_score',
    },
    {
      name: 'exercise_intensity',
      description: 'Measures the intensity of exercises performed during workout sessions.',
      type: 'histogram',
      tags: [
        {
          tag: 'agent_name',
          description: 'Name of the agent.',
        },
        {
          tag: 'exercise_type',
          description: 'Type of exercise performed.',
        },
      ],
      unit: 'intensity_score',
    },
    {
      name: 'social_support_effectiveness',
      description: 'Evaluates the impact of social support on workout adherence and motivation.',
      type: 'summary',
      tags: [
        {
          tag: 'agent_pair',
          description: 'Pair of gym buddies involved.',
        },
        {
          tag: 'measure_type',
          description: 'Type of social support measured, e.g., encouragement, accountability.',
        },
      ],
      unit: 'effectiveness_score',
    },
    {
      name: 'system_stability_index',
      description:
        'Assesses the overall stability of the system, considering fluctuations in workout adherence and agent participation.',
      type: 'gauge',
      tags: [
        {
          tag: 'time_period',
          description: 'Time span over which system stability is evaluated.',
        },
      ],
      unit: 'stability_score',
    },
    {
      name: 'behavioral_pattern_emergence',
      description:
        'Identifies emergent behaviors arising from agent interactions and collective actions.',
      type: 'counter',
      tags: [
        {
          tag: 'behavior_type',
          description: 'Type of emergent behavior, e.g., group coordination, dropout patterns.',
        },
        {
          tag: 'agent_group',
          description: 'Group of agents in the simulation.',
        },
      ],
      unit: 'patterns_detected',
    },
    {
      name: 'resource_utilization',
      description: 'Tracks efficiency of resource use, such as gym equipment, time, and energy.',
      type: 'gauge',
      tags: [
        {
          tag: 'resource_type',
          description: 'Type of resource, e.g., treadmill, weights.',
        },
        {
          tag: 'agent_name',
          description: 'Name of the agent or system component.',
        },
      ],
      unit: 'utilization_percentage',
    },
    {
      name: 'outcome_success_rate',
      description:
        'Measures how often the goal of improved workout consistency and motivation is achieved.',
      type: 'counter',
      tags: [
        {
          tag: 'goal_type',
          description: 'Type of goal, e.g., consistency, weight loss.',
        },
        {
          tag: 'agent_group',
          description: 'The group of agents or individual agent.',
        },
      ],
      unit: 'success_count',
    },
    {
      name: 'response_time',
      description: 'Captures the time taken by agents to respond to social cues or prompts.',
      type: 'histogram',
      tags: [
        {
          tag: 'agent_name',
          description: 'Name of the agent.',
        },
        {
          tag: 'response_type',
          description: 'Type of response, e.g., encouragement, acknowledgment.',
        },
      ],
      unit: 'seconds',
    },
    {
      name: 'agent_satisfaction_score',
      description:
        'Evaluates the overall satisfaction or well-being of agents within the simulation.',
      type: 'gauge',
      tags: [
        {
          tag: 'agent_name',
          description: 'Name of the agent.',
        },
        {
          tag: 'aspect',
          description: 'Aspect of satisfaction, e.g., motivation, comfort.',
        },
      ],
      unit: 'satisfaction_score',
    },
  ],
  '86038c7e-0cbe-441e-acd6-d24d7d0ca834': [
    {
      name: 'resource_utilization',
      description:
        'Tracks how efficiently resources (e.g., energy, materials, time) are used within the system.',
      type: 'gauge',
      tags: [
        {
          tag: 'agent_name',
          description: 'The name of the agent or system component.',
        },
        {
          tag: 'resource_type',
          description: 'Type of resource being utilized, e.g., energy, materials.',
        },
      ],
      unit: 'percentage',
    },
    {
      name: 'renewable_energy_adoption_rate',
      description:
        'Percentage of population or systems adopting renewable energy sources over time.',
      type: 'gauge',
      tags: [
        {
          tag: 'region',
          description: 'Geographical region of the adoption.',
        },
        {
          tag: 'time_period',
          description: 'The time period over which the rate is measured.',
        },
      ],
      unit: 'percentage',
    },
    {
      name: 'policy_impact_score',
      description: 'A score indicating the impact of policies on renewable energy adoption.',
      type: 'gauge',
      tags: [
        {
          tag: 'policy_name',
          description: 'Name or identifier of the policy.',
        },
        {
          tag: 'region',
          description: 'Geographical region affected by the policy.',
        },
      ],
      unit: 'score',
    },
    {
      name: 'agent_interaction_frequency',
      description:
        'Number of interactions or communications between agents or with the environment.',
      type: 'counter',
      tags: [
        {
          tag: 'agent_name',
          description: 'Name of the agent.',
        },
        {
          tag: 'interaction_type',
          description: 'Type of interaction or communication.',
        },
      ],
      unit: 'interactions',
    },
    {
      name: 'decision_making_patterns',
      description:
        'Metrics describing the decision patterns of agents, such as reaction to incentives or policies.',
      type: 'summary',
      tags: [
        {
          tag: 'agent_name',
          description: 'Name of the agent.',
        },
        {
          tag: 'pattern_type',
          description: 'Type of decision pattern observed.',
        },
      ],
      unit: 'pattern_scores',
    },
    {
      name: 'emergent_behaviors_score',
      description:
        'A measure of the extent and significance of emergent behaviors arising from agent interactions.',
      type: 'gauge',
      tags: [],
      unit: 'score',
    },
    {
      name: 'system_stability_index',
      description:
        'Measures the stability of the system over time, indicating how fluctuations or shocks are absorbed.',
      type: 'gauge',
      tags: [],
      unit: 'index',
    },
    {
      name: 'resource_depletion_rate',
      description: 'Rate at which resources are consumed during simulation.',
      type: 'counter',
      tags: [
        {
          tag: 'resource_type',
          description: 'Type of resource being depleted.',
        },
        {
          tag: 'agent_name',
          description: 'Name of the agent or system component.',
        },
      ],
      unit: 'units per time',
    },
    {
      name: 'adoption_time',
      description:
        'Time it takes for an individual or system to adopt renewable energy after exposure to policy or incentives.',
      type: 'histogram',
      tags: [
        {
          tag: 'region',
          description: 'Region where adoption occurs.',
        },
        {
          tag: 'agent_type',
          description: 'Type of agent or system.',
        },
      ],
      unit: 'time',
    },
    {
      name: 'system_response_time',
      description:
        'Time taken for system or agents to respond to specific events, such as policy changes.',
      type: 'histogram',
      tags: [
        {
          tag: 'agent_name',
          description: 'Name of the agent.',
        },
        {
          tag: 'event_type',
          description: 'Type of event triggering response.',
        },
      ],
      unit: 'seconds',
    },
    {
      name: 'adoption_success_rate',
      description: 'Rate at which renewable energy adoption goals are successfully achieved.',
      type: 'counter',
      tags: [
        {
          tag: 'region',
          description: 'Region of adoption.',
        },
        {
          tag: 'goal_type',
          description: 'Type of goal.',
        },
      ],
      unit: 'percentage',
    },
  ],
  '58275e37-dc54-4a7a-a58a-26945bb151b7': [
    {
      name: 'influencer_marketing_effectiveness',
      description:
        'A gauge measuring the relative effectiveness of influencer marketing campaigns in affecting consumer behavior.',
      type: 'gauge',
      tags: [
        {
          tag: 'campaign_id',
          description: 'Identifier of the specific marketing campaign',
        },
        {
          tag: 'channel',
          description: 'Marketing channel or platform used',
        },
      ],
      unit: 'effectiveness_score',
    },
    {
      name: 'traditional_ad_effectiveness',
      description: 'A gauge measuring the impact of traditional advertising on consumer behavior.',
      type: 'gauge',
      tags: [
        {
          tag: 'campaign_id',
          description: 'Identifier of the specific advertising campaign',
        },
        {
          tag: 'medium',
          description: 'Medium or platform of the advertisement',
        },
      ],
      unit: 'effectiveness_score',
    },
    {
      name: 'consumer_engagement',
      description:
        'A counter tracking the number of consumer interactions such as clicks, likes, shares, or comments.',
      type: 'counter',
      tags: [
        {
          tag: 'campaign_id',
          description: 'Identifier of the marketing campaign',
        },
        {
          tag: 'agent_type',
          description: 'Type of agent (e.g., influencer, consumer)',
        },
      ],
      unit: 'interactions',
    },
    {
      name: 'purchase_conversion_rate',
      description:
        'A gauge representing the rate at which consumer interactions convert into purchases.',
      type: 'gauge',
      tags: [
        {
          tag: 'campaign_id',
          description: 'Identifier of the marketing campaign',
        },
        {
          tag: 'channel',
          description: 'Marketing channel or platform',
        },
      ],
      unit: 'percentage',
    },
    {
      name: 'brand_awareness',
      description: 'A gauge reflecting the overall level of consumer awareness of the brand.',
      type: 'gauge',
      tags: [
        {
          tag: 'campaign_id',
          description: 'Identifier of the campaign',
        },
        {
          tag: 'measurement_method',
          description: 'Method used to measure awareness',
        },
      ],
      unit: 'awareness_index',
    },
    {
      name: 'return_on_investment (ROI)',
      description: 'A gauge indicating the return on investment for each marketing approach.',
      type: 'gauge',
      tags: [
        {
          tag: 'campaign_id',
          description: 'Identifier of the marketing campaign',
        },
        {
          tag: 'approach',
          description: 'Type of marketing approach (influencer or traditional)',
        },
      ],
      unit: 'ratio',
    },
    {
      name: 'response_time_influencer_marketing',
      description:
        'A histogram measuring the distribution of response times of consumers after influencer campaigns.',
      type: 'histogram',
      tags: [
        {
          tag: 'campaign_id',
          description: 'Identifier of the influencer campaign',
        },
      ],
      unit: 'seconds',
    },
    {
      name: 'response_time_traditional_marketing',
      description:
        'A histogram measuring the distribution of response times of consumers after traditional advertising.',
      type: 'histogram',
      tags: [
        {
          tag: 'campaign_id',
          description: 'Identifier of the traditional ad campaign',
        },
      ],
      unit: 'seconds',
    },
    {
      name: 'agent_interaction_frequency',
      description:
        'A counter counting the number of interactions between agents and the environment.',
      type: 'counter',
      tags: [
        {
          tag: 'agent_role',
          description: 'Role of the agent (e.g., influencer specialist, ads specialist)',
        },
      ],
      unit: 'interactions',
    },
    {
      name: 'decision_making_patterns',
      description: 'A summary metric indicating the diversity of decision patterns among agents.',
      type: 'summary',
      tags: [
        {
          tag: 'agent_role',
          description: 'Role of the agent',
        },
      ],
      unit: 'pattern_diversity',
    },
    {
      name: 'emergent_behaviors',
      description: 'A counter tracking the number of emergent behaviors observed in the system.',
      type: 'counter',
      tags: [
        {
          tag: 'behavior_type',
          description: 'Type of emergent behavior',
        },
      ],
      unit: 'behaviors',
    },
    {
      name: 'campaign_success_rate',
      description:
        'A gauge indicating the percentage of campaigns that achieved their desired goals.',
      type: 'gauge',
      tags: [
        {
          tag: 'campaign_type',
          description: 'Type of campaign (influencer or traditional)',
        },
      ],
      unit: 'percentage',
    },
    {
      name: 'system_stability',
      description:
        'A gauge measuring the stability of the system over time, considering fluctuations in metrics.',
      type: 'gauge',
      tags: [],
      unit: 'stability_index',
    },
    {
      name: 'resource_depletion_rate',
      description:
        'A gauge tracking how resources (e.g., budget, time) are consumed over the course of the simulation.',
      type: 'gauge',
      tags: [],
      unit: 'rate',
    },
    {
      name: 'adaptation_rate',
      description:
        'A gauge indicating how quickly the system adapts to changes in the environment.',
      type: 'gauge',
      tags: [],
      unit: 'adaptation_speed',
    },
    {
      name: 'system_resilience',
      description:
        'A gauge representing the system’s ability to recover from shocks or disruptions.',
      type: 'gauge',
      tags: [],
      unit: 'resilience_score',
    },
    {
      name: 'customer_satisfaction',
      description:
        'A gauge reflecting customer satisfaction levels based on simulated surveys or feedback.',
      type: 'gauge',
      tags: [],
      unit: 'satisfaction_score',
    },
    {
      name: 'quality_of_output',
      description:
        'A gauge indicating the quality of the outcomes produced, such as ad content quality.',
      type: 'gauge',
      tags: [],
      unit: 'quality_index',
    },
  ],
  'e9732721-dfbd-4986-8ede-e6b1e27d7fec': [
    {
      name: 'coalition_formation_time',
      description: 'Time taken for the formation of a political coalition (in minutes).',
      type: 'histogram',
      tags: [
        {
          tag: 'coalition_size',
          description: 'Number of agents involved in forming the coalition.',
        },
        {
          tag: 'phase',
          description: 'Phase of the coalition formation process.',
        },
        {
          tag: 'system_state',
          description: 'Current state of the system during the formation.',
        },
      ],
      unit: 'minutes',
    },
    {
      name: 'policy_bargaining_duration',
      description: 'Duration of policy negotiation sessions (in minutes).',
      type: 'histogram',
      tags: [
        {
          tag: 'negotiation_rounds',
          description: 'Number of negotiation rounds conducted.',
        },
        {
          tag: 'agent_roles',
          description: 'Roles of agents involved in negotiations.',
        },
        {
          tag: 'system_state',
          description: 'State of the negotiation system.',
        },
      ],
      unit: 'minutes',
    },
    {
      name: 'agent_interaction_frequency',
      description: 'Number of interactions between agents over time.',
      type: 'counter',
      tags: [
        {
          tag: 'agent_name',
          description: 'Name of the agent.',
        },
        {
          tag: 'interaction_type',
          description: 'Type of interaction, e.g., negotiation, information sharing.',
        },
        {
          tag: 'time_period',
          description: 'Time period of observation.',
        },
      ],
      unit: 'interactions',
    },
    {
      name: 'decision_consistency_index',
      description:
        "Measure of how consistent agents' decisions are over multiple negotiation rounds.",
      type: 'summary',
      tags: [
        {
          tag: 'agent_name',
          description: 'Name of the agent.',
        },
        {
          tag: 'decision_type',
          description: 'Type of decision made.',
        },
        {
          tag: 'time_frame',
          description: 'Time frame of decision cycles.',
        },
      ],
      unit: '',
    },
    {
      name: 'policy_outcome_success_rate',
      description: 'Rate at which policy proposals are accepted or rejected.',
      type: 'counter',
      tags: [
        {
          tag: 'proposal_id',
          description: 'Identifier for policy proposal.',
        },
        {
          tag: 'agent_name',
          description: 'Name of the agent proposing.',
        },
        {
          tag: 'outcome',
          description: 'Result of the proposal, accepted/rejected.',
        },
      ],
      unit: 'proposals',
    },
    {
      name: 'system_stability',
      description:
        'Stability of the system during coalition formation and policy negotiations (e.g., number of disruptions, stability score).',
      type: 'gauge',
      tags: [
        {
          tag: 'system_state',
          description: 'Current state of the system.',
        },
        {
          tag: 'time_phase',
          description: 'Phase of the process.',
        },
      ],
      unit: 'stability_score',
    },
    {
      name: 'resource_utilization_level',
      description: 'Percentage of system resources utilized during the simulation.',
      type: 'gauge',
      tags: [
        {
          tag: 'resource_type',
          description: 'Type of resource, e.g., computational, human.',
        },
        {
          tag: 'system_component',
          description: 'Component of the system using resources.',
        },
      ],
      unit: 'percentage',
    },
    {
      name: 'negotiation_response_time',
      description: 'Average response time for agents to reply during negotiations (in seconds).',
      type: 'gauge',
      tags: [
        {
          tag: 'agent_name',
          description: 'Name of the agent.',
        },
        {
          tag: 'negotiation_round',
          description: 'Specific negotiation round.',
        },
      ],
      unit: 'seconds',
    },
    {
      name: 'coalition_policy_alignment_score',
      description: "Average alignment score of coalition members' policies.",
      type: 'summary',
      tags: [
        {
          tag: 'coalition_id',
          description: 'Identifier for the coalition.',
        },
        {
          tag: 'policy_area',
          description: 'Area of policy being evaluated.',
        },
      ],
      unit: '',
    },
  ],
  '553e22e4-db7a-48b0-8c80-06a003b002ed': [
    {
      name: 'market_conditions_score',
      description:
        'A gauge metric representing the current state of market conditions, including demand levels, economic stability, and consumer confidence.',
      type: 'gauge',
      tags: [
        {
          tag: 'market_segment',
          description: 'The specific market segment being analyzed, e.g., technology, healthcare.',
        },
        {
          tag: 'region',
          description: 'Geographical region of the market being analyzed.',
        },
      ],
      unit: 'index',
    },
    {
      name: 'competitor_action_count',
      description:
        'A counter that tracks the total number of significant competitor actions identified during the analysis period, such as product launches, marketing campaigns, or price changes.',
      type: 'counter',
      tags: [
        {
          tag: 'competitor_name',
          description: 'Name of the competitor.',
        },
        {
          tag: 'action_type',
          description:
            'Type of action taken by the competitor, e.g., launch, advertising, price change.',
        },
      ],
      unit: 'actions',
    },
    {
      name: 'launch_timing_response_time',
      description:
        'A histogram measuring the distribution of response times (in seconds) for the system to generate launch timing recommendations after market analysis inputs are provided.',
      type: 'histogram',
      tags: [
        {
          tag: 'agent',
          description: 'The agent responsible for generating the response.',
        },
        {
          tag: 'input_type',
          description: 'Type of input received, e.g., market data, competitor analysis.',
        },
      ],
      unit: 'seconds',
    },
    {
      name: 'market_analysis_efficiency',
      description:
        'A summary metric indicating the efficiency of the market analysis process in terms of time and resource utilization.',
      type: 'summary',
      tags: [
        {
          tag: 'process',
          description: 'Specific process or step in the analysis pipeline.',
        },
      ],
      unit: 'index',
    },
    {
      name: 'competitive_pressure_level',
      description:
        'A gauge metric indicating the current level of competitive pressure in the market, derived from the number and intensity of competitor actions.',
      type: 'gauge',
      tags: [
        {
          tag: 'region',
          description: 'Region of the market.',
        },
      ],
      unit: 'index',
    },
    {
      name: 'launch_decision_confidence',
      description:
        "A gauge representing the system's confidence level (0-100) in the selected launch date based on analysis data.",
      type: 'gauge',
      tags: [
        {
          tag: 'decision_agent',
          description: 'Agent or subsystem responsible for making the decision.',
        },
      ],
      unit: 'percent',
    },
    {
      name: 'analysis_error_rate',
      description:
        'A counter tracking the number of errors or inconsistencies identified during market or competitor analysis.',
      type: 'counter',
      tags: [
        {
          tag: 'error_type',
          description: 'Type of error, e.g., data inconsistency, missing data.',
        },
      ],
      unit: 'errors',
    },
    {
      name: 'resource_utilization',
      description:
        'A gauge measuring the efficiency of resource use during analysis, such as computational or human resources.',
      type: 'gauge',
      tags: [
        {
          tag: 'resource_type',
          description: 'Type of resource, e.g., CPU, human_hours.',
        },
      ],
      unit: 'percentage',
    },
    {
      name: 'decision_time_minutes',
      description:
        'A histogram representing the distribution of time (in minutes) taken to reach a final launch decision after analysis begins.',
      type: 'histogram',
      tags: [
        {
          tag: 'agent',
          description: 'Agent or system responsible for decision-making.',
        },
      ],
      unit: 'minutes',
    },
  ],
  '3ec4b722-ffbc-47fb-b4e8-85e60b8889f4': [
    {
      name: 'social_media_use_duration_seconds',
      description: 'Tracks the total duration agents spend on social media platforms in seconds.',
      type: 'gauge',
      tags: [
        {
          tag: 'agent_name',
          description: 'Name of the agent.',
        },
        {
          tag: 'platform',
          description: 'Social media platform (e.g., Instagram, TikTok).',
        },
      ],
      unit: 'seconds',
    },
    {
      name: 'intervention_strategy_effectiveness_score',
      description:
        'Measures the effectiveness of different intervention strategies in reducing social media addiction.',
      type: 'gauge',
      tags: [
        {
          tag: 'strategy_name',
          description: 'Name of the intervention strategy (e.g., time limit, content filtering).',
        },
      ],
      unit: 'score',
    },
    {
      name: 'support_contacts_initiated_total',
      description:
        'Counts the total number of support contacts initiated by agents during the simulation.',
      type: 'counter',
      tags: [
        {
          tag: 'agent_name',
          description: 'Name of the support agent or helper.',
        },
        {
          tag: 'contact_type',
          description: 'Type of contact (e.g., message, call, meeting).',
        },
      ],
      unit: 'contacts',
    },
    {
      name: 'offline_activity_participation_rate',
      description: 'Tracks the percentage of agents participating in offline activities over time.',
      type: 'gauge',
      tags: [
        {
          tag: 'agent_group',
          description: 'Group or category of agents (e.g., recovered, support).',
        },
      ],
      unit: 'percentage',
    },
    {
      name: 'relapse_events_total',
      description: 'Counts the number of relapse events occurring during the intervention period.',
      type: 'counter',
      tags: [
        {
          tag: 'agent_name',
          description: 'Name of the agent experiencing relapse.',
        },
      ],
      unit: 'events',
    },
    {
      name: 'decision_time_seconds',
      description:
        'Measures the time taken for agents or the system to make intervention decisions.',
      type: 'histogram',
      tags: [
        {
          tag: 'decision_type',
          description: 'Type of decision (e.g., trigger, adjustment).',
        },
      ],
      unit: 'seconds',
    },
    {
      name: 'social_interaction_frequency',
      description: 'Tracks how often agents interact with each other or with the environment.',
      type: 'counter',
      tags: [
        {
          tag: 'agent_name',
          description: 'Name of the agent.',
        },
        {
          tag: 'interaction_type',
          description: 'Type of interaction (e.g., chat, meeting).',
        },
      ],
      unit: 'interactions',
    },
    {
      name: 'behavioral_pattern_changes_total',
      description: 'Counts the number of behavioral pattern changes observed in agents.',
      type: 'counter',
      tags: [
        {
          tag: 'agent_name',
          description: 'Name of the agent.',
        },
        {
          tag: 'pattern_type',
          description: 'Type of behavioral pattern (e.g., screen time, activity type).',
        },
      ],
      unit: 'changes',
    },
    {
      name: 'successful_outcome_rate',
      description: 'Measures the rate at which intervention strategies achieve desired outcomes.',
      type: 'gauge',
      tags: [
        {
          tag: 'outcome_type',
          description: 'Type of desired outcome (e.g., reduced usage, increased offline activity).',
        },
      ],
      unit: 'percentage',
    },
    {
      name: 'system_stability_index',
      description:
        'Assesses the stability of the system over time under different intervention strategies.',
      type: 'gauge',
      tags: [],
      unit: 'index',
    },
    {
      name: 'resource_utilization_percentage',
      description: 'Tracks the efficiency of resource utilization in the system.',
      type: 'gauge',
      tags: [
        {
          tag: 'resource_type',
          description: 'Type of resource (e.g., CPU, memory, support staff).',
        },
      ],
      unit: 'percentage',
    },
    {
      name: 'agent_satisfaction_score',
      description: 'Measures agent satisfaction or well-being during the simulation.',
      type: 'gauge',
      tags: [
        {
          tag: 'agent_name',
          description: 'Name of the agent.',
        },
      ],
      unit: 'score',
    },
  ],
}
