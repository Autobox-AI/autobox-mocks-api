export const metricDefinitionsBySimulationId = {
  "fd18233a-fa24-45d5-8fde-6d52761bde5f": [
    {
      "name": "group_decision_time",
      "description": "The total time taken for the group to reach a weekend activity decision.",
      "type": "histogram",
      "tags": [
        {
          "tag": "agent_id",
          "description": "Identifier for each agent involved in the decision process."
        },
        {
          "tag": "decision_stage",
          "description": "Stage of decision-making (e.g., discussion, voting, final)."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "agent_interaction_frequency",
      "description": "Number of interactions between agents during the planning process.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        },
        {
          "tag": "interaction_type",
          "description": "Type of interaction (e.g., suggestion, objection, agreement)."
        }
      ],
      "unit": "interactions"
    },
    {
      "name": "preference_alignment_score",
      "description": "Degree of initial preference similarity among agents.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_group",
          "description": "Group or subset of agents being evaluated."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "final_decision_satisfaction",
      "description": "Level of satisfaction of each agent with the final weekend plan.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        }
      ],
      "unit": "satisfaction score"
    },
    {
      "name": "resource_utilization_rate",
      "description": "Efficiency of resource use (e.g., time, budget) during planning.",
      "type": "gauge",
      "tags": [
        {
          "tag": "resource_type",
          "description": "Type of resource, e.g., time, money."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "decision_conflicts_count",
      "description": "Number of conflicts or disagreements occurred during planning.",
      "type": "counter",
      "tags": [
        {
          "tag": "conflict_type",
          "description": "Type of conflict, e.g., preference, scheduling."
        }
      ],
      "unit": "conflicts"
    },
    {
      "name": "agent_response_time",
      "description": "Response time of agents to suggestions or questions during planning.",
      "type": "histogram",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        },
        {
          "tag": "event_type",
          "description": "Type of event, e.g., response, suggestion."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "system_stability_index",
      "description": "Measurement of the stability and coherence of the planning process.",
      "type": "gauge",
      "tags": [
        {
          "tag": "phase",
          "description": "Phase of planning or decision-making."
        }
      ],
      "unit": "index"
    },
    {
      "name": "group_cohesion_level",
      "description": "Level of cooperation and cohesion among friends during planning.",
      "type": "gauge",
      "tags": [],
      "unit": "index"
    },
    {
      "name": "decision_time",
      "description": "Time taken to finalize the weekend activity plan.",
      "type": "gauge",
      "tags": [],
      "unit": "seconds"
    },
    {
      "name": "satisfaction_levels",
      "description": "Overall satisfaction levels of the group with the final decision.",
      "type": "summary",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        }
      ],
      "unit": "score"
    }
  ],
  "3c5a814e-5b8b-4e37-aa5b-8f2cc00249de": [
    {
      "name": "vacation_planning_decision_iterations",
      "description": "Number of iterations or decision-making steps before final agreement on vacation plans.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent involved in decision-making."
        }
      ],
      "unit": "iterations"
    },
    {
      "name": "preference_alignment_score_start",
      "description": "Percentage of preferences that align across agents at the start of the simulation.",
      "type": "gauge",
      "tags": [],
      "unit": "percent"
    },
    {
      "name": "final_decision_preferences_match",
      "description": "Average percentage of the final decision that aligns with each agent’s initial preferences.",
      "type": "gauge",
      "tags": [],
      "unit": "percent"
    },
    {
      "name": "agent_influence_score",
      "description": "Percentage contribution of each agent’s preferences to the final decision.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        }
      ],
      "unit": "percent"
    },
    {
      "name": "conflicts_resolved",
      "description": "Number of conflicts or disagreements resolved during the decision process.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Agent involved in conflict resolution."
        }
      ],
      "unit": "conflicts"
    },
    {
      "name": "agent_satisfaction_level",
      "description": "Satisfaction score of each agent with the final vacation plan.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        }
      ],
      "unit": "satisfaction_points"
    },
    {
      "name": "decision_time_seconds",
      "description": "Time taken to reach a final decision in seconds.",
      "type": "gauge",
      "tags": [],
      "unit": "seconds"
    },
    {
      "name": "communication_count",
      "description": "Number of communication exchanges required to reach a decision.",
      "type": "counter",
      "tags": [],
      "unit": "messages"
    },
    {
      "name": "risk_tolerance_index",
      "description": "Risk tolerance level of each agent or system, on a predefined scale.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent or system component."
        }
      ],
      "unit": "scale"
    },
    {
      "name": "decision_stability_score",
      "description": "Likelihood that the decision would change given new information or uncertainties.",
      "type": "gauge",
      "tags": [],
      "unit": "percent"
    },
    {
      "name": "agent_flexibility_score",
      "description": "Flexibility of each agent to adapt their preferences during decision-making.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        }
      ],
      "unit": "scale"
    },
    {
      "name": "group_cohesion_index",
      "description": "Index measuring how well the group works together, based on conflicts and agreements.",
      "type": "gauge",
      "tags": [],
      "unit": "index"
    }
  ],
  "d38ce76e-3110-4203-be64-ec85d54d5e41": [
    {
      "name": "decision_impact_score",
      "description": "The level of impact of individual decision patterns on overall strategy outcomes.",
      "type": "summary",
      "tags": [
        {
          "tag": "agent_id",
          "description": "Identifier for each decision-making agent."
        },
        {
          "tag": "decision_stage",
          "description": "Phase or stage of the decision process."
        }
      ],
      "unit": "score"
    },
    {
      "name": "resource_allocation_efficiency",
      "description": "Measures how efficiently resources (time, capital, personnel) are allocated towards strategic goals.",
      "type": "gauge",
      "tags": [
        {
          "tag": "resource_type",
          "description": "Type of resource such as capital, personnel, technology."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "decision_frequency",
      "description": "Counts how often strategic decisions are made within a given timeframe.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_id",
          "description": "Identifier for each decision-making agent."
        },
        {
          "tag": "decision_type",
          "description": "Type of decision, e.g., investment, personnel, technology."
        }
      ],
      "unit": "decisions"
    },
    {
      "name": "collaborative_decision_ratio",
      "description": "Ratio of decisions made collaboratively versus individually.",
      "type": "gauge",
      "tags": [
        {
          "tag": "team_id",
          "description": "Identifier for the strategic team or subgroup."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "agent_satisfaction_score",
      "description": "Satisfaction level of agents with the decision process and outcomes.",
      "type": "summary",
      "tags": [
        {
          "tag": "agent_id",
          "description": "Identifier for each agent."
        }
      ],
      "unit": "score"
    },
    {
      "name": "outcome_success_rate",
      "description": "Percentage of strategic outcomes that meet predefined success criteria.",
      "type": "gauge",
      "tags": [
        {
          "tag": "strategy_id",
          "description": "Identifier for the specific strategy or decision."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "response_time_to_events",
      "description": "Average response time of agents to significant events or inputs.",
      "type": "summary",
      "tags": [
        {
          "tag": "agent_id",
          "description": "Identifier for each agent."
        },
        {
          "tag": "event_type",
          "description": "Type of event, e.g., market change, competitor action."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "system_stability_index",
      "description": "Index measuring the stability of the decision system over time.",
      "type": "gauge",
      "tags": [],
      "unit": "index"
    },
    {
      "name": "resource_depletion_rate",
      "description": "Rate at which key resources are consumed during implementation.",
      "type": "histogram",
      "tags": [
        {
          "tag": "resource_type",
          "description": "Type of resource such as capital, raw materials."
        }
      ],
      "unit": "rate"
    },
    {
      "name": "decision_latency",
      "description": "Time delay between received input and decision execution.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_id",
          "description": "Identifier for each decision-maker."
        },
        {
          "tag": "decision_type",
          "description": "Type of decision."
        }
      ],
      "unit": "seconds"
    }
  ],
  "0d6ddd15-1abe-4aae-af39-e64f8390f089": [
    {
      "name": "agent_participation_ratio",
      "description": "The ratio of agents actively participating in the workout sessions.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "The name of the agent."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "workout_session_frequency",
      "description": "The number of workout sessions per agent per week.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "The name of the agent."
        }
      ],
      "unit": "sessions"
    },
    {
      "name": "workout_compliance_rate",
      "description": "The percentage of planned workouts that are actually completed.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "The name of the agent."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "social_support_interaction_count",
      "description": "Number of social support interactions (messages, encouragements) between agents.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "The name of the agent initiating interaction."
        },
        {
          "tag": "partner_agent",
          "description": "The name of the agent receiving support."
        }
      ],
      "unit": "interactions"
    },
    {
      "name": "motivation_level",
      "description": "Average motivation level of agents over time, based on self-reported or observed data.",
      "type": "summary",
      "tags": [
        {
          "tag": "agent_name",
          "description": "The name of the agent."
        }
      ],
      "unit": "motivation score"
    },
    {
      "name": "workout_progress",
      "description": "Progress toward fitness goals, measured as percentage completion of personal fitness objectives.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "The name of the agent."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "dropout_rate",
      "description": "Rate at which agents stop participating in workout activities.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "The name of the agent."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "system_response_time",
      "description": "Time taken for system responses to support agents' scheduling or motivational prompts.",
      "type": "histogram",
      "tags": [],
      "unit": "seconds"
    }
  ],
  "5bdda1fe-d518-4b19-8c6c-f731306b70b6": [
    {
      "name": "green_energy_adoption_rate",
      "description": "Tracks the overall rate of green energy adoption in the system.",
      "type": "gauge",
      "tags": [
        {
          "tag": "region",
          "description": "Geographical region or market segment."
        },
        {
          "tag": "time_period",
          "description": "Time period over which the adoption rate is measured."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "policy_influence_score",
      "description": "Measures the impact of policies on the adoption rates of green energy.",
      "type": "gauge",
      "tags": [
        {
          "tag": "policy_type",
          "description": "Type of policy (e.g., subsidy, regulation)."
        },
        {
          "tag": "region",
          "description": "Geographical area affected by the policy."
        }
      ],
      "unit": "score"
    },
    {
      "name": "agent_interaction_frequency",
      "description": "Counts how often agents interact with each other or with the environment.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_role",
          "description": "Role of the agent (e.g., consumer, policy maker)."
        }
      ],
      "unit": "interactions"
    },
    {
      "name": "adoption_decision_time",
      "description": "Measures the time taken for an agent or system to decide on adopting renewable energy.",
      "type": "histogram",
      "tags": [
        {
          "tag": "agent_id",
          "description": "Identifier for the agent making the decision."
        },
        {
          "tag": "scenario",
          "description": "Specific scenario or case being measured."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "resource_utilization",
      "description": "Tracks the efficiency of resource use, such as financial, material, or energy resources.",
      "type": "gauge",
      "tags": [
        {
          "tag": "resource_type",
          "description": "Type of resource (e.g., capital, materials)."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "system_stability_score",
      "description": "Assesses the stability of the system over time, especially under changing conditions.",
      "type": "gauge",
      "tags": [
        {
          "tag": "scenario",
          "description": "Scenario or condition under which system stability is measured."
        }
      ],
      "unit": "score"
    },
    {
      "name": "renewable_resource_depletion",
      "description": "Monitors the rate of depletion of resources used for renewable energy.",
      "type": "counter",
      "tags": [
        {
          "tag": "resource_type",
          "description": "Type of resource (e.g., biomass, solar panels)."
        },
        {
          "tag": "region",
          "description": "Region where depletion is measured."
        }
      ],
      "unit": "units"
    },
    {
      "name": "cost_efficiency",
      "description": "Calculates the cost per unit of renewable energy produced or adopted.",
      "type": "gauge",
      "tags": [
        {
          "tag": "energy_type",
          "description": "Type of renewable energy (solar, wind, etc.)."
        },
        {
          "tag": "region",
          "description": "Geographical area."
        }
      ],
      "unit": "currency per energy unit"
    },
    {
      "name": "response_time",
      "description": "Measures the system or agent response times to specific events or inputs.",
      "type": "histogram",
      "tags": [
        {
          "tag": "event_type",
          "description": "Type of event prompting response."
        },
        {
          "tag": "agent_id",
          "description": "Identifier for the agent responding."
        }
      ],
      "unit": "seconds"
    }
  ],
  "b7624b51-8d12-4b36-95d0-c23ae869dba9": [
    {
      "name": "marketing_approach_effectiveness",
      "description": "Measures the overall effectiveness of each marketing approach in achieving consumer engagement or conversion goals.",
      "type": "gauge",
      "tags": [
        {
          "tag": "approach",
          "description": "The marketing approach, e.g., 'influencer' or 'traditional'."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "consumer_engagement_rate",
      "description": "Tracks the rate of consumer engagement, such as likes, shares, comments, or clicks resulting from marketing efforts.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent",
          "description": "Type of agent involved, e.g., 'influencer' or 'ad_campaign'."
        }
      ],
      "unit": "interactions"
    },
    {
      "name": "conversion_rate",
      "description": "Measures the percentage of consumers who take a desired action after exposure to marketing content.",
      "type": "gauge",
      "tags": [
        {
          "tag": "approach",
          "description": "Marketing approach used."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "reach",
      "description": "Tracks the total number of consumers exposed to marketing content.",
      "type": "counter",
      "tags": [
        {
          "tag": "approach",
          "description": "Marketing approach."
        }
      ],
      "unit": "consumers"
    },
    {
      "name": "consumer_behavior_change",
      "description": "Assesses changes in consumer behavior, such as purchase intention or brand perception, due to marketing approaches.",
      "type": "summary",
      "tags": [
        {
          "tag": "approach",
          "description": "Type of marketing approach."
        }
      ],
      "unit": "index"
    }
  ],
  "911b0e6c-1250-4c79-81c5-72236856de71": [
    {
      "name": "coalition_policy_negotiation_rounds",
      "description": "Number of negotiation rounds required to reach an agreement.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent participating in the negotiation"
        },
        {
          "tag": "round_phase",
          "description": "Phase or step of the negotiation round"
        }
      ],
      "unit": "rounds"
    },
    {
      "name": "coalition_policy_concession_rate",
      "description": "Percentage change in agents' initial demands or stances during negotiations.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent"
        },
        {
          "tag": "issue",
          "description": "Specific policy issue under negotiation"
        }
      ],
      "unit": "percent"
    },
    {
      "name": "coalition_policy_key_issues_resolved",
      "description": "Number of key issues successfully resolved during negotiation.",
      "type": "gauge",
      "tags": [
        {
          "tag": "issue",
          "description": "Policy issue being resolved"
        }
      ],
      "unit": "issues"
    },
    {
      "name": "coalition_policy_final_alignment",
      "description": "Degree of alignment between the final agreement and each agent’s initial goals.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent"
        }
      ],
      "unit": "percent"
    },
    {
      "name": "coalition_policy_cooperation_index",
      "description": "Index measuring the level of cooperation during negotiations.",
      "type": "gauge",
      "tags": [],
      "unit": "index"
    },
    {
      "name": "coalition_policy_agreement_effectiveness",
      "description": "Estimated effectiveness of the agreement in achieving desired policy outcomes.",
      "type": "gauge",
      "tags": [],
      "unit": "effectiveness_score"
    },
    {
      "name": "coalition_policy_enforcement_strength",
      "description": "Strength of the enforcement mechanisms included in the policy agreement.",
      "type": "gauge",
      "tags": [],
      "unit": "index"
    },
    {
      "name": "coalition_trust_building",
      "description": "Level of trust established between agents during negotiations.",
      "type": "gauge",
      "tags": [],
      "unit": "index"
    },
    {
      "name": "coalition_risks_shared",
      "description": "Extent to which risks are shared between agents in the policy.",
      "type": "gauge",
      "tags": [],
      "unit": "index"
    },
    {
      "name": "coalition_uncertainty_tolerance",
      "description": "Willingness of agents to accept uncertainty in policy outcomes.",
      "type": "gauge",
      "tags": [],
      "unit": "index"
    },
    {
      "name": "coalition_risks_included_in_contingency_plans",
      "description": "Number of contingency plans included to address unforeseen challenges.",
      "type": "gauge",
      "tags": [],
      "unit": "plans"
    },
    {
      "name": "coalition_economic_cost_benefit_ratio",
      "description": "Ratio of economic costs to benefits resulting from the policy.",
      "type": "gauge",
      "tags": [],
      "unit": "ratio"
    },
    {
      "name": "coalition_funding_commitment_total",
      "description": "Total financial commitments made by agents to support policy implementation.",
      "type": "gauge",
      "tags": [],
      "unit": "dollars"
    },
    {
      "name": "coalition_implementation_feasibility_score",
      "description": "Score evaluating the practical feasibility of implementing the policy.",
      "type": "gauge",
      "tags": [],
      "unit": "score"
    },
    {
      "name": "coalition_emission_reduction_projection",
      "description": "Projected reduction in emissions due to the policy.",
      "type": "gauge",
      "tags": [],
      "unit": "tons_co2e/year"
    },
    {
      "name": "coalition_biodiversity_preservation_impact",
      "description": "Estimated impact of policy on biodiversity preservation.",
      "type": "gauge",
      "tags": [],
      "unit": "percent"
    },
    {
      "name": "coalition_sustainability_index",
      "description": "Overall sustainability index score of the policy measures.",
      "type": "gauge",
      "tags": [],
      "unit": "index"
    },
    {
      "name": "coalition_negotiation_time",
      "description": "Total time taken to reach the agreement.",
      "type": "counter",
      "tags": [],
      "unit": "seconds"
    },
    {
      "name": "coalition_decision_speed",
      "description": "Average time per decision during negotiations.",
      "type": "gauge",
      "tags": [],
      "unit": "seconds"
    },
    {
      "name": "coalition_public_support_index",
      "description": "Estimated level of public support based on simulated polling.",
      "type": "gauge",
      "tags": [],
      "unit": "index"
    },
    {
      "name": "coalition_international_relations_impact",
      "description": "Predicted impact of the agreement on international relations.",
      "type": "gauge",
      "tags": [],
      "unit": "impact_score"
    }
  ],
  "da6c177a-1d8a-4cf4-8285-2ccc4aaad9b0": [
    {
      "name": "launch_date_initial_market_conditions",
      "description": "Initial assessment of market readiness and conditions at the start of the planning phase.",
      "type": "gauge",
      "tags": [
        {
          "tag": "market_segment",
          "description": "Market segment or demographic targeted."
        },
        {
          "tag": "region",
          "description": "Geographical region of the market."
        }
      ],
      "unit": "index"
    },
    {
      "name": "competitor_activity_level",
      "description": "Degree of competitor activity and market moves during the decision-making process.",
      "type": "gauge",
      "tags": [
        {
          "tag": "competitor_name",
          "description": "Name of the competitor or competitor group."
        },
        {
          "tag": "time_period",
          "description": "Time interval over which the activity is measured."
        }
      ],
      "unit": "index"
    },
    {
      "name": "market_conditions_trend",
      "description": "Trend in market conditions affecting the product launch environment.",
      "type": "gauge",
      "tags": [
        {
          "tag": "trend_type",
          "description": "Type of trend (e.g., growing, stable, declining)."
        },
        {
          "tag": "time_period",
          "description": "Time window considered for the trend analysis."
        }
      ],
      "unit": "index"
    },
    {
      "name": "launch_date_decision_confidence",
      "description": "Confidence level in the chosen launch date based on analyzed data.",
      "type": "gauge",
      "tags": [
        {
          "tag": "confidence_level",
          "description": "Confidence level percentage."
        },
        {
          "tag": "methodology",
          "description": "Method used for confidence estimation."
        }
      ],
      "unit": "percent"
    },
    {
      "name": "competitive_pressure_index",
      "description": "Level of competitive pressure influencing the launch timing decision.",
      "type": "gauge",
      "tags": [
        {
          "tag": "competitor_name",
          "description": "Name of the competitor."
        },
        {
          "tag": "market_segment",
          "description": "Market segment targeted."
        }
      ],
      "unit": "index"
    },
    {
      "name": "market_risk_assessment_score",
      "description": "Score reflecting the assessed risk posed by market uncertainties.",
      "type": "gauge",
      "tags": [
        {
          "tag": "risk_type",
          "description": "Type of risk (e.g., regulatory, economic, supply chain)."
        },
        {
          "tag": "assessment_period",
          "description": "Period over which the risk is assessed."
        }
      ],
      "unit": "index"
    },
    {
      "name": "agent_decision_time_seconds",
      "description": "Time taken by decision agents to analyze data and decide on launch timing.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the analyzing agent."
        },
        {
          "tag": "decision_stage",
          "description": "Stage in the decision process."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "market_conditions_response_time_seconds",
      "description": "Latency in market condition updates and how quickly the system or agents react.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent or system."
        },
        {
          "tag": "event_type",
          "description": "Type of market event or update."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "launch_schedule_resource_utilization",
      "description": "Efficiency in resource utilization during the planning phase for launching.",
      "type": "gauge",
      "tags": [
        {
          "tag": "resource_type",
          "description": "Type of resource used (e.g., data, personnel, tools)."
        },
        {
          "tag": "phase",
          "description": "Phase of launch planning."
        }
      ],
      "unit": "percent"
    },
    {
      "name": "launch_date_effectiveness",
      "description": "Metric reflecting the projected effectiveness of the launch timing.",
      "type": "gauge",
      "tags": [
        {
          "tag": "scenario",
          "description": "Scenario under which the metric is evaluated."
        },
        {
          "tag": "market_response_level",
          "description": "Expected market response level."
        }
      ],
      "unit": "index"
    }
  ],
  "b502e135-6b2b-47a4-be03-61b0ca64b5f7": [
    {
      "name": "social_media_usage_time_total",
      "description": "Total time spent by the agent on social media per day.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        },
        {
          "tag": "media_type",
          "description": "Type of social media platform (e.g., Instagram, TikTok)."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "offline_activity_duration",
      "description": "Duration of offline activities per day.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        },
        {
          "tag": "activity_type",
          "description": "Type of offline activity (e.g., outdoor, hobbies)."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "intervention_strategy_effectiveness_score",
      "description": "Effectiveness score of the implemented intervention strategies.",
      "type": "gauge",
      "tags": [
        {
          "tag": "strategy_type",
          "description": "Type of intervention strategy (e.g., digital detox, support groups)."
        },
        {
          "tag": "agent_name",
          "description": "Name of the agent or \"system\" for aggregated data."
        }
      ],
      "unit": "score"
    },
    {
      "name": "agent_satisfaction_level",
      "description": "Satisfaction level of agents regarding their social media habits change.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        },
        {
          "tag": "time_period",
          "description": "Time period of measurement (e.g., daily, weekly)."
        }
      ],
      "unit": "scale (1-10)"
    },
    {
      "name": "supportive_interactions_total",
      "description": "Number of supportive interactions between agents (e.g., Jake supporting Maya).",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the supporting agent."
        },
        {
          "tag": "supportee_name",
          "description": "Name of the supported agent."
        }
      ],
      "unit": "interactions"
    },
    {
      "name": "relapse_events_total",
      "description": "Number of relapse events where the agent returns to social media usage after reduction.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        }
      ],
      "unit": "events"
    },
    {
      "name": "offline_activity_engagement_level",
      "description": "Engagement level in offline activities as a percentage.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        },
        {
          "tag": "activity_type",
          "description": "Type of offline activity."
        }
      ],
      "unit": "percent"
    },
    {
      "name": "system_stability_index",
      "description": "Index representing the overall stability of the simulation system.",
      "type": "gauge",
      "tags": [
        {
          "tag": "system",
          "description": "Identifier for the overall simulation system."
        }
      ],
      "unit": "index (0-1)"
    }
  ],
  "d7157a99-54b7-44bd-9b19-afc39818e988": [
    {
      "name": "remote_worker_task_completion_rate",
      "description": "Measures the percentage of assigned tasks completed on time by remote agents.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "The identifier for the remote worker."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "office_worker_task_completion_rate",
      "description": "Measures the percentage of assigned tasks completed on time by office agents.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "The identifier for the office worker."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "hybrid_worker_task_completion_rate",
      "description": "Measures the percentage of assigned tasks completed on time by hybrid agents.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "The identifier for the hybrid worker."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "communication_frequency",
      "description": "Tracks the average number of communications (messages, calls, meetings) per agent per day.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "The identifier for the agent."
        },
        {
          "tag": "communication_type",
          "description": "Type of communication (email, chat, video call)."
        }
      ],
      "unit": "communications"
    },
    {
      "name": "team_cohesion_score",
      "description": "An index reflecting the overall cohesion and collaboration efficiency of the team.",
      "type": "gauge",
      "tags": [],
      "unit": "score"
    },
    {
      "name": "agent_satisfaction_score",
      "description": "Represents the overall satisfaction level of agents with their work environment.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "The identifier for the agent."
        }
      ],
      "unit": "satisfaction score"
    },
    {
      "name": "average_response_time",
      "description": "Tracks the average response time of agents to communications or tasks.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "The identifier for the agent."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "burnout_index",
      "description": "An index indicating the level of burnout among agents, with higher values indicating higher burnout risk.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "The identifier for the agent."
        }
      ],
      "unit": "index"
    },
    {
      "name": "task_output_per_agent",
      "description": "Tracks the number of tasks completed per agent within a certain timeframe.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "The identifier for the agent."
        }
      ],
      "unit": "tasks"
    },
    {
      "name": "work_hours_distribution",
      "description": "Distribution of work hours among agents, showing overwork or underwork trends.",
      "type": "histogram",
      "tags": [
        {
          "tag": "agent_name",
          "description": "The identifier for the agent."
        }
      ],
      "unit": "hours"
    },
    {
      "name": "work_life_balance_score",
      "description": "Satisfaction score regarding the balance between work and personal life.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "The identifier for the agent."
        }
      ],
      "unit": "score"
    },
    {
      "name": "collaboration_index",
      "description": "Quantifies the level of collaborative work on tasks, higher values indicating more collaboration.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "The identifier for the agent."
        },
        {
          "tag": "task_id",
          "description": "Identifier for a specific task."
        }
      ],
      "unit": "index"
    },
    {
      "name": "project_progress_percentage",
      "description": "Percentage of project milestones completed on schedule.",
      "type": "gauge",
      "tags": [
        {
          "tag": "project_id",
          "description": "Identifier for the project."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "employee_stress_level",
      "description": "Average stress level among agents, based on behavioral indicators.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "The identifier for the agent."
        }
      ],
      "unit": "stress score"
    },
    {
      "name": "team_cohesion_index",
      "description": "Overall index assessing how well the team works together.",
      "type": "gauge",
      "tags": [],
      "unit": "index"
    },
    {
      "name": "task_overlap_ratio",
      "description": "Ratio of tasks that are duplicated or overlapping among agents, which can affect efficiency.",
      "type": "gauge",
      "tags": [],
      "unit": "ratio"
    }
  ],
  "f419f960-fd62-4eb5-881c-ccb3f4c5a744": [
    {
      "name": "meeting_frequency",
      "description": "The number of meetings held within a specific period.",
      "type": "counter",
      "tags": [
        {
          "tag": "meeting_type",
          "description": "Type of meeting (e.g., team sync, retrospective, planning)."
        }
      ],
      "unit": "meetings"
    },
    {
      "name": "meeting_duration",
      "description": "The average duration of meetings.",
      "type": "gauge",
      "tags": [
        {
          "tag": "meeting_type",
          "description": "Type of meeting."
        }
      ],
      "unit": "minutes"
    },
    {
      "name": "meeting_attendance_rate",
      "description": "The percentage of agents attending meetings.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_role",
          "description": "Role of the agent (e.g., developer, product owner)."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "meeting_format_efficiency",
      "description": "A measure of how effective different meeting formats are in achieving objectives.",
      "type": "gauge",
      "tags": [
        {
          "tag": "meeting_format",
          "description": "Format of the meeting (e.g., in-person, virtual, hybrid)."
        }
      ],
      "unit": "score"
    },
    {
      "name": "team_productivity_rating",
      "description": "Overall productivity score of the team based on output and meeting impact.",
      "type": "gauge",
      "tags": [
        {
          "tag": "time_period",
          "description": "Time period of assessment."
        }
      ],
      "unit": "score"
    },
    {
      "name": "team_morale_score",
      "description": "Average morale score of team members measured through surveys or sentiment analysis.",
      "type": "gauge",
      "tags": [
        {
          "tag": "time_period",
          "description": "Time period of assessment."
        }
      ],
      "unit": "score"
    },
    {
      "name": "meeting_culture_adherence",
      "description": "Frequency of adherence to meeting best practices or cultural norms.",
      "type": "gauge",
      "tags": [
        {
          "tag": "norm_type",
          "description": "Type of norm or practice (e.g., punctuality, agenda adherence)."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "agent_participation_level",
      "description": "Level of participation of agents in meetings, indicating engagement.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_role",
          "description": "Role of the agent."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "decision_making_speed",
      "description": "Average time taken to reach decisions during meetings.",
      "type": "gauge",
      "tags": [
        {
          "tag": "decision_type",
          "description": "Type of decision (e.g., project, process)."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "conflict_resolution_rate",
      "description": "Rate at which conflicts in meetings are resolved effectively.",
      "type": "gauge",
      "tags": [
        {
          "tag": "conflict_type",
          "description": "Type of conflict."
        }
      ],
      "unit": "percentage"
    }
  ],
  "bab0d69e-eec4-4806-b387-163d70934d46": [
    {
      "name": "employee_burnout_level",
      "description": "Current burnout level of the employee, measuring stress and fatigue.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent, e.g., the employee or manager."
        }
      ],
      "unit": "score"
    },
    {
      "name": "burnout_prevention_strategy_effectiveness",
      "description": "Effectiveness of implemented burnout prevention strategies in reducing stress levels.",
      "type": "gauge",
      "tags": [
        {
          "tag": "strategy_name",
          "description": "Name of the burnout prevention strategy."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "employee_work_hours",
      "description": "Number of hours worked by the employee per day/week.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the employee or agent."
        }
      ],
      "unit": "hours"
    },
    {
      "name": "employee_interaction_frequency",
      "description": "Frequency of interactions between agents or with systems to measure communication levels.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        }
      ],
      "unit": "interactions"
    },
    {
      "name": "manager_support_score",
      "description": "Score representing supportiveness of the manager, based on feedback or observed behavior.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the manager."
        }
      ],
      "unit": "score"
    },
    {
      "name": "agent_satisfaction_score",
      "description": "Overall satisfaction or well-being of the agent.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        }
      ],
      "unit": "score"
    },
    {
      "name": "strategy_adoption_rate",
      "description": "Rate at which burnout prevention strategies are adopted and utilized within the system.",
      "type": "gauge",
      "tags": [
        {
          "tag": "strategy_name",
          "description": "Name of the strategy."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "system_stability_index",
      "description": "Stability of the system over time, especially under varying stressors.",
      "type": "gauge",
      "tags": [],
      "unit": "score"
    },
    {
      "name": "resilience_recovery_time",
      "description": "Time taken for the system or agents to recover from a stressful event or burnout episode.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent or system component."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "resource_utilization_efficiency",
      "description": "Efficiency of resource use related to wellness activities, time, and capacity.",
      "type": "gauge",
      "tags": [],
      "unit": "percentage"
    }
  ],
  "fa693e85-2799-4dfc-b986-2042137412d7": [
    {
      "name": "cross_functional_team_silos_broken",
      "description": "Number of instances where team silos are successfully broken to promote collaboration.",
      "type": "counter",
      "tags": [
        {
          "tag": "team_id",
          "description": "Identifier for the specific cross-functional team."
        },
        {
          "tag": "timestamp",
          "description": "Time when the silo was broken."
        }
      ],
      "unit": "events"
    },
    {
      "name": "shared_goal_achievement_percentage",
      "description": "Percentage of shared goals achieved by the team during a project.",
      "type": "gauge",
      "tags": [
        {
          "tag": "project_id",
          "description": "Identifier for the project."
        },
        {
          "tag": "team_id",
          "description": "Identifier for the team."
        }
      ],
      "unit": "percent"
    },
    {
      "name": "agent_interaction_frequency",
      "description": "Frequency of interactions between agents in the team.",
      "type": "histogram",
      "tags": [
        {
          "tag": "agent_pair",
          "description": "Pair of agents involved in the interaction."
        },
        {
          "tag": "interaction_type",
          "description": "Type of interaction (e.g., discussion, collaboration, conflict)."
        }
      ],
      "unit": "interactions"
    },
    {
      "name": "decision_making_time",
      "description": "Time taken to reach a decision in the team.",
      "type": "histogram",
      "tags": [
        {
          "tag": "decision_id",
          "description": "Unique identifier for the decision."
        },
        {
          "tag": "agent_roles",
          "description": "Roles of agents involved in decision-making."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "agent_satisfaction_score",
      "description": "Satisfaction score of agents regarding teamwork and collaboration.",
      "type": "summary",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        },
        {
          "tag": "timestamp",
          "description": "Time when the satisfaction was recorded."
        }
      ],
      "unit": "score"
    },
    {
      "name": "resource_utilization_percentage",
      "description": "Percentage of available resources utilized by the team.",
      "type": "gauge",
      "tags": [
        {
          "tag": "resource_type",
          "description": "Type of resource (e.g., time, budget, materials)."
        }
      ],
      "unit": "percent"
    },
    {
      "name": "team_response_time",
      "description": "Average response time of the team to coordination requests.",
      "type": "gauge",
      "tags": [
        {
          "tag": "team_id",
          "description": "Identifier for the team."
        },
        {
          "tag": "event_type",
          "description": "Type of event or request."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "failed_collaboration_attempts_total",
      "description": "Total number of failed attempts at collaboration or breaking silos.",
      "type": "counter",
      "tags": [
        {
          "tag": "team_id",
          "description": "Identifier for the team."
        },
        {
          "tag": "reason",
          "description": "Reason for failure."
        }
      ],
      "unit": "events"
    },
    {
      "name": "common_goal_achievement_rate",
      "description": "Rate at which the team achieves common goals.",
      "type": "gauge",
      "tags": [
        {
          "tag": "project_id",
          "description": "Identifier for the project."
        }
      ],
      "unit": "percent"
    },
    {
      "name": "agent_feedback_score",
      "description": "Feedback score from agents on collaboration tools and processes.",
      "type": "summary",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        },
        {
          "tag": "feedback_type",
          "description": "Type of feedback (e.g., tool usability, communication effectiveness)."
        }
      ],
      "unit": "score"
    }
  ],
  "ef9950aa-47e3-46e3-b1f2-74f75aa7286c": [
    {
      "name": "team_performance_score",
      "description": "Overall performance score of the team during the simulation, integrating various performance metrics.",
      "type": "gauge",
      "tags": [
        {
          "tag": "leadership_style",
          "description": "The type of leadership style being evaluated (e.g., Democratic, Autocratic, Servant)."
        }
      ],
      "unit": "score"
    },
    {
      "name": "team_cohesion_level",
      "description": "Level of cohesion among team members, indicating the strength of collaboration and coordination.",
      "type": "gauge",
      "tags": [
        {
          "tag": "leadership_style",
          "description": "The type of leadership style being evaluated."
        }
      ],
      "unit": "cohesion_index"
    },
    {
      "name": "task_completion_rate",
      "description": "Proportion of tasks completed successfully within the simulation timeframe.",
      "type": "gauge",
      "tags": [
        {
          "tag": "leadership_style",
          "description": "The leadership approach influencing task completion."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "decision_speed_seconds",
      "description": "Average time in seconds taken to reach decisions during team activities.",
      "type": "gauge",
      "tags": [
        {
          "tag": "leadership_style",
          "description": "The leadership style affecting decision-making efficiency."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "agent_interaction_frequency",
      "description": "Average number of interactions (communications, meetings) between agents per hour.",
      "type": "counter",
      "tags": [
        {
          "tag": "leadership_style",
          "description": "The leadership style during interactions."
        }
      ],
      "unit": "interactions_per_hour"
    },
    {
      "name": "resource_utilization",
      "description": "Percentage of available resources (time, materials) effectively utilized.",
      "type": "gauge",
      "tags": [
        {
          "tag": "leadership_style",
          "description": "Leadership style influencing resource management."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "team_satisfaction_score",
      "description": "Average satisfaction score of team members regarding leadership and collaboration, on a scale from 1 to 10.",
      "type": "gauge",
      "tags": [
        {
          "tag": "leadership_style",
          "description": "The style of leadership impacting satisfaction."
        }
      ],
      "unit": "score"
    },
    {
      "name": "conflict_resolution_rate",
      "description": "Number of conflicts resolved successfully divided by total conflicts encountered.",
      "type": "gauge",
      "tags": [
        {
          "tag": "leadership_style",
          "description": "Leadership style affecting conflict management."
        }
      ],
      "unit": "ratio"
    },
    {
      "name": "emergent_behavior_patterns",
      "description": "Frequency of emergent behaviors that were not explicitly programmed, indicating system adaptability.",
      "type": "counter",
      "tags": [
        {
          "tag": "leadership_style",
          "description": "Leadership approach influencing emergent behaviors."
        }
      ],
      "unit": "behavior_occurrences"
    },
    {
      "name": "system_stability_index",
      "description": "Index measuring how stable the system remains over time under the current leadership approach.",
      "type": "gauge",
      "tags": [
        {
          "tag": "leadership_style",
          "description": "Leadership style affecting system stability."
        }
      ],
      "unit": "stability_score"
    },
    {
      "name": "response_time_event",
      "description": "Average response time in seconds for agents to respond to specific events.",
      "type": "gauge",
      "tags": [
        {
          "tag": "leadership_style",
          "description": "Leadership style influencing responsiveness."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "resource_depletion_rate",
      "description": "Rate at which resources are consumed over the simulation period.",
      "type": "counter",
      "tags": [
        {
          "tag": "leadership_style",
          "description": "Leadership style affecting resource consumption."
        }
      ],
      "unit": "resources_per_time"
    },
    {
      "name": "adaptability_score",
      "description": "Score reflecting how quickly and effectively the system adapts to environmental changes.",
      "type": "gauge",
      "tags": [
        {
          "tag": "leadership_style",
          "description": "Leadership style affecting adaptability."
        }
      ],
      "unit": "score"
    },
    {
      "name": "system_resilience_index",
      "description": "Index quantifying system recovery capability after disruptions.",
      "type": "gauge",
      "tags": [
        {
          "tag": "leadership_style",
          "description": "Leadership style influencing system resilience."
        }
      ],
      "unit": "resilience_score"
    },
    {
      "name": "agent_satisfaction_average",
      "description": "Average satisfaction level of agents with the team environment, scored from 1 to 10.",
      "type": "gauge",
      "tags": [
        {
          "tag": "leadership_style",
          "description": "The leadership style impacting agent satisfaction."
        }
      ],
      "unit": "score"
    }
  ],
  "17e7b16f-7f9a-4d1a-a882-ec0febf8ed79": [
    {
      "name": "inventory_costs",
      "description": "Tracks the total inventory holding costs over time, including storage, capital, and obsolescence costs.",
      "type": "gauge",
      "tags": [
        {
          "tag": "strategy_type",
          "description": "Indicates whether the system is using JIT or Buffer Stock strategy."
        }
      ],
      "unit": "currency units"
    },
    {
      "name": "supply_chain_resilience_index",
      "description": "Measures the system's ability to recover from disruptions, based on recovery time and success rate.",
      "type": "gauge",
      "tags": [],
      "unit": "index"
    },
    {
      "name": "stock_level",
      "description": "Monitors the current levels of stock in the supply chain.",
      "type": "gauge",
      "tags": [],
      "unit": "units"
    },
    {
      "name": "lead_time",
      "description": "Records the time between placing an order and receiving the stock.",
      "type": "histogram",
      "tags": [],
      "unit": "time (hours/days)"
    },
    {
      "name": "out_of_stock_events",
      "description": "Counts the number of times the supply chain experiences stockouts.",
      "type": "counter",
      "tags": [],
      "unit": "events"
    },
    {
      "name": "order_frequency",
      "description": "Tracks how often orders are placed within the system.",
      "type": "counter",
      "tags": [],
      "unit": "orders"
    },
    {
      "name": "response_time_for_disruption",
      "description": "Measures how quickly agents respond to supply chain disruptions.",
      "type": "histogram",
      "tags": [],
      "unit": "time (hours/days)"
    },
    {
      "name": "cost_efficiency_ratio",
      "description": "Calculates the cost incurred per unit of goods supplied, evaluating economic efficiency.",
      "type": "gauge",
      "tags": [],
      "unit": "cost per unit"
    },
    {
      "name": "agent_interaction_frequency",
      "description": "Tracks how often agents interact with each other or the environment during decision processes.",
      "type": "counter",
      "tags": [],
      "unit": "interactions"
    },
    {
      "name": "decision_making_pattern",
      "description": "Analyzes the decision-making strategies of agents, such as reactive or proactive behaviors.",
      "type": "summary",
      "tags": [],
      "unit": "pattern index"
    },
    {
      "name": "system_stability",
      "description": "Assesses how stable the supply chain system remains under various conditions.",
      "type": "gauge",
      "tags": [],
      "unit": "stability index"
    },
    {
      "name": "resource_depletion_rate",
      "description": "Measures how quickly resources are consumed over time.",
      "type": "gauge",
      "tags": [],
      "unit": "resources per time"
    },
    {
      "name": "resource_regeneration_rate",
      "description": "Tracks how effectively resources are replenished in the system.",
      "type": "gauge",
      "tags": [],
      "unit": "resources per time"
    },
    {
      "name": "satisfaction_score",
      "description": "Calculates the overall satisfaction or success rate of the supply chain performance.",
      "type": "gauge",
      "tags": [],
      "unit": "score (0-100)"
    },
    {
      "name": "system_stability_score",
      "description": "Estimates the stability of the supply chain over time, especially under stress.",
      "type": "gauge",
      "tags": [],
      "unit": "score (0-1)"
    },
    {
      "name": "risk_exposure_index",
      "description": "Quantifies the level of risk the system is exposed to during operations.",
      "type": "gauge",
      "tags": [],
      "unit": "risk level"
    },
    {
      "name": "adaptation_rate",
      "description": "Measures how quickly the system adapts to environmental or operational changes.",
      "type": "gauge",
      "tags": [],
      "unit": "percentage or index"
    },
    {
      "name": "system_resilience_score",
      "description": "Provides an overall resilience score indicating recovery capability after disruptions.",
      "type": "gauge",
      "tags": [],
      "unit": "score (0-1)"
    },
    {
      "name": "agent_satisfaction",
      "description": "Tracks the satisfaction levels of individual agents involved in the supply chain.",
      "type": "gauge",
      "tags": [],
      "unit": "score (1-10)"
    },
    {
      "name": "output_quality_score",
      "description": "Evaluates the quality of the system's output, such as product defect rates or customer satisfaction.",
      "type": "gauge",
      "tags": [],
      "unit": "score (0-100)"
    }
  ],
  "bd7c1a43-6e99-48cb-856a-38128637c544": [
    {
      "name": "vendor_selection_total_decision_cycles",
      "description": "Counts the total number of decision-making cycles involved in selecting the vendor.",
      "type": "counter",
      "tags": [
        {
          "tag": "phase",
          "description": "The current phase of the vendor selection process"
        },
        {
          "tag": "agent",
          "description": "Name or role of the agent involved"
        }
      ],
      "unit": "cycles"
    },
    {
      "name": "vendor_selection_agreement_score",
      "description": "Measures the level of agreement among agents on vendor selection, expressed as a percentage.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_group",
          "description": "Group of agents or stakeholders"
        },
        {
          "tag": "scenario",
          "description": "Scenario identifier or phase"
        }
      ],
      "unit": "percent"
    },
    {
      "name": "vendor_cost_efficiency",
      "description": "Evaluates the cost efficiency of the chosen vendor relative to the overall budget.",
      "type": "gauge",
      "tags": [
        {
          "tag": "vendor",
          "description": "Vendor identifier or name"
        },
        {
          "tag": "scenario",
          "description": "Scenario phase or context"
        }
      ],
      "unit": "cost units"
    },
    {
      "name": "vendor_quality_score",
      "description": "Aggregated quality score of vendors as per quality audits and assessments.",
      "type": "gauge",
      "tags": [
        {
          "tag": "vendor",
          "description": "Vendor identifier or name"
        },
        {
          "tag": "assessment",
          "description": "Quality assessment identifiers"
        }
      ],
      "unit": "score"
    },
    {
      "name": "vendor_reliability_index",
      "description": "Reliability index of vendors based on past performance metrics.",
      "type": "gauge",
      "tags": [
        {
          "tag": "vendor",
          "description": "Vendor identifier or name"
        }
      ],
      "unit": "index"
    },
    {
      "name": "sustainability_score",
      "description": "Sustainability score reflecting vendors' adherence to ESG standards.",
      "type": "gauge",
      "tags": [
        {
          "tag": "vendor",
          "description": "Vendor identifier or name"
        }
      ],
      "unit": "score"
    },
    {
      "name": "negotiation_response_time",
      "description": "Average response time for agents to respond to negotiation inputs.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent",
          "description": "Agent name or role"
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "decision_making_speed",
      "description": "Time taken to reach a decision during vendor negotiation.",
      "type": "gauge",
      "tags": [
        {
          "tag": "scenario",
          "description": "Negotiation phase or scenario"
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "system_stability_index",
      "description": "Assessment of the system’s stability during the vendor selection process.",
      "type": "gauge",
      "tags": [
        {
          "tag": "scenario",
          "description": "Phase or context"
        }
      ],
      "unit": "index"
    },
    {
      "name": "resource_utilization_percentage",
      "description": "Percentage of allocated resources effectively utilized during the process.",
      "type": "gauge",
      "tags": [
        {
          "tag": "resource_type",
          "description": "Type of resource (e.g., computational, human)"
        }
      ],
      "unit": "percent"
    },
    {
      "name": "system_latency",
      "description": "Response latency of the system in processing vendor selection actions.",
      "type": "gauge",
      "tags": [],
      "unit": "seconds"
    },
    {
      "name": "agent_interaction_frequency",
      "description": "Number of interactions between agents per unit time.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_pair",
          "description": "Pair of agents involved in interactions"
        }
      ],
      "unit": "interactions"
    },
    {
      "name": "conflict_occurrence_count",
      "description": "Number of conflicts or disagreements during vendor negotiations.",
      "type": "counter",
      "tags": [],
      "unit": "conflicts"
    },
    {
      "name": "conflict_resolution_rate",
      "description": "Number of conflicts resolved versus those unresolved.",
      "type": "gauge",
      "tags": [],
      "unit": "ratio"
    },
    {
      "name": "decision_success_rate",
      "description": "Proportion of successful vendor selections relative to total attempts.",
      "type": "gauge",
      "tags": [],
      "unit": "percent"
    },
    {
      "name": "system_stability_over_time",
      "description": "Monitoring index of stability of the selection process across time.",
      "type": "summary",
      "tags": [],
      "unit": "index"
    },
    {
      "name": "cost_vs_benefit_ratio",
      "description": "Ratio comparing costs incurred to benefits gained from vendor choices.",
      "type": "gauge",
      "tags": [],
      "unit": "ratio"
    }
  ],
  "c8199623-df8a-4f49-9976-f46556076285": [
    {
      "name": "delivery_time_seconds",
      "description": "The total time taken for a delivery from dispatch to completion.",
      "type": "histogram",
      "tags": [
        {
          "tag": "agent_name",
          "description": "The name of the delivery agent."
        },
        {
          "tag": "route_id",
          "description": "Identifier for the delivery route."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "delivery_costs_usd",
      "description": "Total costs incurred for each delivery, including fuel, labor, and overhead.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "The name of the delivery agent or team."
        },
        {
          "tag": "route_id",
          "description": "Identifier for the delivery route."
        }
      ],
      "unit": "USD"
    },
    {
      "name": "customer_satisfaction_score",
      "description": "Customer satisfaction rating after delivery, on a scale from 1 to 10.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "The customer experience manager or delivery agent."
        },
        {
          "tag": "delivery_id",
          "description": "Unique identifier for the delivery."
        }
      ],
      "unit": "score"
    },
    {
      "name": "delivery_on_time_percentage",
      "description": "Percentage of deliveries completed on or before the scheduled delivery time.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "The delivery agent or team."
        },
        {
          "tag": "route_id",
          "description": "Identifier for the delivery route."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "resource_utilization_percentage",
      "description": "The percentage utilization of delivery resources such as vehicles and personnel.",
      "type": "gauge",
      "tags": [
        {
          "tag": "resource_type",
          "description": "Type of resource (e.g., vehicle, personnel)."
        },
        {
          "tag": "agent_name",
          "description": "Person responsible for resource deployment."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "number_of_deliveries",
      "description": "Total number of deliveries completed within a specific time frame.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "The delivery team or representative."
        },
        {
          "tag": "time_period",
          "description": "The time frame over which deliveries are counted."
        }
      ],
      "unit": "deliveries"
    },
    {
      "name": "average_delivery_speed_kph",
      "description": "Average speed of delivery vehicles in kilometers per hour.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "The driver or delivery vehicle identifier."
        },
        {
          "tag": "route_id",
          "description": "Identifier for the delivery route."
        }
      ],
      "unit": "km/h"
    },
    {
      "name": "incident_reports_total",
      "description": "Total number of incidents or issues reported during deliveries, such as delays or accidents.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "The delivery personnel or system component."
        },
        {
          "tag": "incident_type",
          "description": "Type of incident (e.g., delay, accident, damage)."
        }
      ],
      "unit": "events"
    },
    {
      "name": "average_response_time_seconds",
      "description": "Average time taken for agents to respond to delivery-related events or issues.",
      "type": "summary",
      "tags": [
        {
          "tag": "agent_name",
          "description": "The agent responding to events."
        },
        {
          "tag": "event_type",
          "description": "Type of event or issue."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "route_efficiency_score",
      "description": "A metric evaluating the efficiency of a route, considering factors like time, distance, and congestion.",
      "type": "gauge",
      "tags": [
        {
          "tag": "route_id",
          "description": "Identifier for the route."
        },
        {
          "tag": "agent_name",
          "description": "The route planner or coordinator."
        }
      ],
      "unit": "score"
    },
    {
      "name": "customer_satisfaction_trend",
      "description": "Trend in customer satisfaction scores over time to monitor changes in service quality.",
      "type": "summary",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Customer experience team or system."
        },
        {
          "tag": "time_period",
          "description": "Time period over which trends are assessed."
        }
      ],
      "unit": "score"
    }
  ],
  "3f2b73a1-ea40-46d3-8b39-da1b5dc3bc05": [
    {
      "name": "agent_response_time_seconds",
      "description": "Captures the time taken by agents to respond to customer inquiries or issues.",
      "type": "histogram",
      "tags": [
        {
          "tag": "agent_name",
          "description": "The name of the agent, e.g., 'AI Chatbot' or 'Human Agent'."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "task_completion_rate",
      "description": "Measures the percentage of support tasks successfully completed within a given time frame.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "The agent responsible for completing the task."
        }
      ],
      "unit": "percent"
    },
    {
      "name": "customer_satisfaction_score",
      "description": "Represents the level of customer satisfaction post-interaction, typically on a scale of 1-10.",
      "type": "summary",
      "tags": [
        {
          "tag": "agent_name",
          "description": "The agent (AI or human) involved in the interaction."
        },
        {
          "tag": "customer_id",
          "description": "Unique identifier for the customer."
        }
      ],
      "unit": "score"
    },
    {
      "name": "interaction_frequency",
      "description": "Tracks how often agents interact with customers or other agents within a specific period.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent involved in the interaction."
        }
      ],
      "unit": "interactions"
    },
    {
      "name": "escalation_rate",
      "description": "Counts the number of interactions that need to be escalated from automated to human agents.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "The agent or system initiating the escalation."
        }
      ],
      "unit": "escalations"
    },
    {
      "name": "average_resolution_time_seconds",
      "description": "Measures the average time taken to resolve customer issues, from initial contact to resolution.",
      "type": "histogram",
      "tags": [
        {
          "tag": "agent_name",
          "description": "The agent involved in resolving the issue."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "resource_utilization_percentage",
      "description": "Indicates the percentage of system or agent resources actively used during support operations.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_type",
          "description": "Type of agent or system, e.g., 'AI Chatbot', 'Human Agent'."
        }
      ],
      "unit": "percent"
    },
    {
      "name": "system_stability_index",
      "description": "Scores the stability of the support system, considering downtimes and errors.",
      "type": "gauge",
      "tags": [],
      "unit": "index"
    },
    {
      "name": "system_failure_counter",
      "description": "Counts the number of system failures or critical errors occurring during support.",
      "type": "counter",
      "tags": [],
      "unit": "failures"
    },
    {
      "name": "agent_empathy_score",
      "description": "Assesses the perceived empathy level of human agents during interactions.",
      "type": "summary",
      "tags": [
        {
          "tag": "agent_name",
          "description": "The human agent involved in the interaction."
        }
      ],
      "unit": "score"
    }
  ],
  "c9031aed-2657-4a4c-85e1-8a13180647f4": [
    {
      "name": "escalation_time_seconds",
      "description": "Time taken from ticket escalation to resolution in seconds.",
      "type": "histogram",
      "tags": [
        {
          "tag": "agent_id",
          "description": "Identifier for the support agent."
        },
        {
          "tag": "issue_type",
          "description": "Type of customer issue escalated."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "resolution_success_rate",
      "description": "Proportion of escalated issues successfully resolved.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_id",
          "description": "Identifier for the support agent."
        },
        {
          "tag": "escalation_level",
          "description": "The level at which the issue was escalated."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "support_agent_response_time_seconds",
      "description": "Average response time of support agents to customer inquiries in seconds.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_id",
          "description": "Identifier for the support agent."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "escalation_path_efficiency",
      "description": "Efficiency metric for escalation paths, measuring the normalized resolution time across different paths.",
      "type": "gauge",
      "tags": [
        {
          "tag": "path_id",
          "description": "Identifier for the escalation path."
        }
      ],
      "unit": "ratio"
    },
    {
      "name": "agent_interaction_frequency",
      "description": "Number of interactions between agents and with customers per time period.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_id",
          "description": "Identifier for the agent."
        },
        {
          "tag": "interaction_type",
          "description": "Type of interaction, e.g., escalation, resolution, inquiry."
        }
      ],
      "unit": "interactions"
    },
    {
      "name": "customer_satisfaction_score",
      "description": "Customer satisfaction score after issue resolution, on a scale from 1 to 10.",
      "type": "gauge",
      "tags": [
        {
          "tag": "customer_id",
          "description": "Identifier for the customer."
        }
      ],
      "unit": "scale 1-10"
    },
    {
      "name": "resolution_time_seconds",
      "description": "Time taken to resolve an issue from initial report to closure in seconds.",
      "type": "histogram",
      "tags": [
        {
          "tag": "ticket_id",
          "description": "Identifier for the support ticket."
        },
        {
          "tag": "agent_id",
          "description": "Identifier for the support agent."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "system_resource_utilization",
      "description": "System resource utilization during support operations.",
      "type": "gauge",
      "tags": [
        {
          "tag": "resource_type",
          "description": "Type of resource, e.g., CPU, memory, bandwidth."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "support_team_workload",
      "description": "Number of active escalations assigned to support agents.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_id",
          "description": "Identifier for the support agent."
        }
      ],
      "unit": "tasks"
    }
  ],
  "d41d6619-012e-41cd-be27-37f38ab0e130": [
    {
      "name": "resource_utilization_percentage",
      "description": "Tracks how efficiently resources (e.g., time, personnel, materials) are used during the system's operation.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the individual agent or team."
        },
        {
          "tag": "resource_type",
          "description": "Type of resource being utilized, e.g., manpower, hardware."
        }
      ],
      "unit": "percent"
    },
    {
      "name": "throughput",
      "description": "Measures the amount of work or output generated by the system within a specified time frame.",
      "type": "counter",
      "tags": [
        {
          "tag": "system_component",
          "description": "Component or team responsible for the throughput."
        }
      ],
      "unit": "tasks/hour"
    },
    {
      "name": "response_time_seconds",
      "description": "Captures the response time or latency of the system to specific inputs or events.",
      "type": "histogram",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent or system component."
        },
        {
          "tag": "event_type",
          "description": "Type of event responded to."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "agent_interaction_frequency",
      "description": "Monitors how often agents interact with each other or with the environment.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        },
        {
          "tag": "interaction_type",
          "description": "Type of interaction, e.g., message, meeting."
        }
      ],
      "unit": "interactions"
    },
    {
      "name": "decision_making_pattern_score",
      "description": "Analyzes decisions made by agents under various conditions to identify patterns.",
      "type": "summary",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        },
        {
          "tag": "condition_type",
          "description": "Type of condition affecting decision."
        }
      ],
      "unit": "score"
    },
    {
      "name": "emergent_behavior_occurrence",
      "description": "Identifies patterns or behaviors that arise from the collective actions of agents unexpectedly.",
      "type": "counter",
      "tags": [
        {
          "tag": "behavior_type",
          "description": "Type of emergent behavior, e.g., cycle, coalition."
        }
      ],
      "unit": "occurrences"
    },
    {
      "name": "goal_success_rate",
      "description": "Measures how often the simulation or system achieves its intended goals.",
      "type": "gauge",
      "tags": [
        {
          "tag": "goal_name",
          "description": "Name of the specific goal or outcome."
        }
      ],
      "unit": "percent"
    },
    {
      "name": "system_stability_index",
      "description": "Evaluates the stability of the system over time, especially under stress.",
      "type": "gauge",
      "tags": [
        {
          "tag": "system_component",
          "description": "Component or overall system."
        }
      ],
      "unit": "index"
    },
    {
      "name": "resource_depletion_rate",
      "description": "Tracks how quickly resources are consumed over time.",
      "type": "counter",
      "tags": [
        {
          "tag": "resource_type",
          "description": "Type of resource, e.g., raw materials, energy."
        }
      ],
      "unit": "units/sec"
    },
    {
      "name": "cost_efficiency_ratio",
      "description": "Compares costs incurred during the simulation to the outputs or benefits gained.",
      "type": "gauge",
      "tags": [
        {
          "tag": "cost_type",
          "description": "Type of cost, e.g., operational, capital."
        },
        {
          "tag": "benefit_type",
          "description": "Type of benefits, e.g., output, satisfaction."
        }
      ],
      "unit": "ratio"
    },
    {
      "name": "time_efficiency_score",
      "description": "Measures how well the goals are achieved relative to expected or optimal durations.",
      "type": "summary",
      "tags": [
        {
          "tag": "process_name",
          "description": "Name of the process or task."
        }
      ],
      "unit": "score"
    },
    {
      "name": "risk_exposure_level",
      "description": "Assesses the potential risks the system or agents are exposed to and possible impacts.",
      "type": "gauge",
      "tags": [
        {
          "tag": "risk_type",
          "description": "Type of risk, e.g., financial, operational."
        }
      ],
      "unit": "risk units"
    },
    {
      "name": "adaptation_rate",
      "description": "Monitors how quickly the system or agents adapt to changes.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_or_system",
          "description": "Name of the agent or system."
        },
        {
          "tag": "change_type",
          "description": "Type of environmental or system change."
        }
      ],
      "unit": "adaptation events/sec"
    },
    {
      "name": "system_resilience_score",
      "description": "Measures the system’s capacity to recover from disruptions or shocks.",
      "type": "gauge",
      "tags": [
        {
          "tag": "disruption_type",
          "description": "Type of disruption, e.g., failure, attack."
        }
      ],
      "unit": "score"
    },
    {
      "name": "agent_satisfaction_score",
      "description": "Evaluates the overall satisfaction or well-being of agents.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        }
      ],
      "unit": "score"
    },
    {
      "name": "output_quality_score",
      "description": "Measures the quality of the outcomes produced by the simulation.",
      "type": "gauge",
      "tags": [
        {
          "tag": "output_type",
          "description": "Type of output, e.g., product, service."
        }
      ],
      "unit": "score"
    }
  ],
  "2f7587a4-3dca-4ebe-acb1-1d3c6c2e1a53": [
    {
      "name": "feedback_submissions_total",
      "description": "Counts the total number of feedback submissions received during the beta testing.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "The name of the agent submitting feedback."
        },
        {
          "tag": "feedback_type",
          "description": "Type or category of feedback, e.g., bug report, feature request."
        }
      ],
      "unit": ""
    },
    {
      "name": "feedback_response_time_seconds",
      "description": "Measures the response time for addressing feedback or bug reports.",
      "type": "histogram",
      "tags": [
        {
          "tag": "agent_name",
          "description": "The name of the agent who responded."
        },
        {
          "tag": "feedback_type",
          "description": "Type of feedback or bug report."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "test_iterations_total",
      "description": "Counts the total number of test iterations performed during the beta testing process.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "The name of the agent involved in testing."
        }
      ],
      "unit": ""
    },
    {
      "name": "test_success_rate",
      "description": "Records the percentage of test scenarios that successfully meet the acceptance criteria.",
      "type": "gauge",
      "tags": [
        {
          "tag": "test_scenario",
          "description": "The specific test scenario or case."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "bug_reports_total",
      "description": "Counts the total number of bugs or issues reported during beta testing.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "The name of the agent reporting the bug."
        },
        {
          "tag": "severity",
          "description": "Severity level of the bug, e.g., critical, major, minor."
        }
      ],
      "unit": ""
    },
    {
      "name": "bug_fix_duration_seconds",
      "description": "Tracks the time taken to fix reported bugs from report to resolution.",
      "type": "histogram",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the engineer or team fixing the bug."
        },
        {
          "tag": "bug_id",
          "description": "Identifier of the bug."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "test_coverage_percentage",
      "description": "Indicates the percentage of features or code base covered by tests.",
      "type": "gauge",
      "tags": [],
      "unit": "percentage"
    },
    {
      "name": "system_resource_utilization",
      "description": "Measures the system resources used during testing, such as CPU, memory.",
      "type": "gauge",
      "tags": [
        {
          "tag": "resource_type",
          "description": "Type of resource, e.g., CPU, RAM."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "feedback_satisfaction_score",
      "description": "Average satisfaction score given by agents regarding the feedback process and product quality.",
      "type": "summary",
      "tags": [
        {
          "tag": "agent_name",
          "description": "The name of the agent providing feedback."
        }
      ],
      "unit": ""
    }
  ],
  "4eacb17d-62d2-4b7e-8e6f-5a9eff724665": [
    {
      "name": "pricing_strategy_success_rate",
      "description": "The percentage of simulation runs where the optimal balance between adoption and revenue was achieved.",
      "type": "gauge",
      "tags": [
        {
          "tag": "strategy_variant",
          "description": "Different pricing strategies tested in the simulation."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "agent_interaction_frequency",
      "description": "Number of interactions or communications between agents per simulation time unit.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_role",
          "description": "Role of the agent, e.g., pricing strategist, market researcher."
        }
      ],
      "unit": "interactions"
    },
    {
      "name": "decision_making_pattern_variance",
      "description": "Variance in decision patterns among agents, indicating diversity in decision processes.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_id",
          "description": "Unique identifier for each agent."
        }
      ],
      "unit": "pattern_variance"
    },
    {
      "name": "time_to_decision",
      "description": "Average time taken for agents to arrive at a decision regarding pricing.",
      "type": "histogram",
      "tags": [
        {
          "tag": "agent_id",
          "description": "Unique identifier of each agent."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "resource_utilization_rate",
      "description": "Efficiency of resource use in developing and testing pricing strategies, such as computational resources or human effort.",
      "type": "gauge",
      "tags": [],
      "unit": "percentage"
    },
    {
      "name": "system_response_time",
      "description": "Latency in the simulation system response to input changes, such as price adjustments or market shifts.",
      "type": "histogram",
      "tags": [],
      "unit": "seconds"
    },
    {
      "name": "adoption_rate",
      "description": "Proportion of market adopting the new product at various pricing points.",
      "type": "gauge",
      "tags": [],
      "unit": "percentage"
    },
    {
      "name": "revenue_generated",
      "description": "Total revenue obtained in different simulation runs or time periods.",
      "type": "counter",
      "tags": [],
      "unit": "currency"
    },
    {
      "name": "system_stability_index",
      "description": "Measure of how stable the simulation system remains under variable conditions, reflecting fluctuations in key metrics.",
      "type": "gauge",
      "tags": [],
      "unit": "index"
    },
    {
      "name": "price_elasticity_under_study",
      "description": "Variation in demand in response to changes in price, indicating elasticity.",
      "type": "gauge",
      "tags": [],
      "unit": "demand units per currency unit"
    },
    {
      "name": "market_confidence_level",
      "description": "Level of confidence in market responses to proposed pricing strategy, based on simulation results.",
      "type": "gauge",
      "tags": [],
      "unit": "confidence score"
    },
    {
      "name": "risk_exposure_index",
      "description": "Degree of risk the system is exposed to during testing different pricing strategies.",
      "type": "gauge",
      "tags": [],
      "unit": "risk index"
    },
    {
      "name": "agent_satisfaction_score",
      "description": "Satisfaction level of agents with the simulated pricing environment and decision outcomes.",
      "type": "gauge",
      "tags": [],
      "unit": "score"
    }
  ],
  "6da8e5bd-b1ca-4490-84a2-bfad8391bcde": [
    {
      "name": "system_response_time_seconds",
      "description": "The time taken for the system or agents to respond to specific events or inputs.",
      "type": "histogram",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the involved agent."
        },
        {
          "tag": "event_type",
          "description": "Type of event triggering the response."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "legal_compliance_score",
      "description": "Degree of compliance with legal requirements post-breach.",
      "type": "gauge",
      "tags": [
        {
          "tag": "compliance_area",
          "description": "Legal area or regulation."
        }
      ],
      "unit": "percent"
    },
    {
      "name": "public_relations_sentiment_score",
      "description": "Sentiment analysis score of PR communications.",
      "type": "gauge",
      "tags": [
        {
          "tag": "communication_id",
          "description": "Identifier of the PR message or campaign."
        }
      ],
      "unit": "score"
    },
    {
      "name": "incident_resolution_counter",
      "description": "Counter for the number of incidents successfully resolved.",
      "type": "counter",
      "tags": [
        {
          "tag": "incident_id",
          "description": "Identifier of the reported incident."
        }
      ],
      "unit": "resolutions"
    },
    {
      "name": "resource_utilization_percentage",
      "description": "Efficiency rate of utilized resources during the response.",
      "type": "gauge",
      "tags": [
        {
          "tag": "resource_type",
          "description": "Type of resource (e.g., personnel, system capacity)."
        }
      ],
      "unit": "percent"
    },
    {
      "name": "coordination_efficiency_score",
      "description": "Metric indicating how well teams coordinated during the response.",
      "type": "gauge",
      "tags": [
        {
          "tag": "team",
          "description": "Team involved in the coordination."
        }
      ],
      "unit": "score"
    },
    {
      "name": "breach_response_time_seconds",
      "description": "Average time taken to respond to or contain a breach.",
      "type": "histogram",
      "tags": [
        {
          "tag": "phase",
          "description": "Stage of breach response."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "stakeholder_satisfaction_score",
      "description": "Overall satisfaction level of stakeholders regarding the response.",
      "type": "gauge",
      "tags": [
        {
          "tag": "stakeholder_group",
          "description": "Group of stakeholders (e.g., customers, employees)."
        }
      ],
      "unit": "score"
    },
    {
      "name": "legal_review_counter",
      "description": "Counter tracking the number of legal reviews performed.",
      "type": "counter",
      "tags": [
        {
          "tag": "review_phase",
          "description": "Stage of legal review process."
        }
      ],
      "unit": "reviews"
    },
    {
      "name": "training_completion_percentage",
      "description": "Percentage of team members who completed relevant training.",
      "type": "gauge",
      "tags": [
        {
          "tag": "training_module",
          "description": "Identifier for the training module."
        }
      ],
      "unit": "percent"
    }
  ],
  "d27c858f-f6aa-42ba-8c47-03a0ff603fbc": [
    {
      "name": "product_recall_response_time",
      "description": "Time taken for agents to respond to recall events or notifications, capturing the latency in crisis response.",
      "type": "histogram",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent responding to the recall event."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "recall_completion_rate",
      "description": "The percentage of products successfully recalled out of total identified defective units.",
      "type": "gauge",
      "tags": [],
      "unit": "percent"
    },
    {
      "name": "customer_trust_index",
      "description": "A composite score measuring customer trust during the recall process, based on feedback and outreach effectiveness.",
      "type": "summary",
      "tags": [],
      "unit": "score"
    },
    {
      "name": "brand_reputation_score",
      "description": "Aggregate score reflecting the company's brand reputation over the duration of the recall crisis.",
      "type": "gauge",
      "tags": [],
      "unit": "score"
    },
    {
      "name": "resource_utilization",
      "description": "Efficiency with which recall resources (e.g., logistics, personnel) are used during crisis management.",
      "type": "gauge",
      "tags": [],
      "unit": "percent"
    },
    {
      "name": "agent_interaction_frequency",
      "description": "Number of interactions between agents or with the environment per time unit, indicating coordination level.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent involved in interaction."
        }
      ],
      "unit": "interactions"
    },
    {
      "name": "recall_efficiency",
      "description": "The throughput of recall actions, e.g., number of units processed per hour, indicating operational performance.",
      "type": "gauge",
      "tags": [],
      "unit": "units/hour"
    },
    {
      "name": "response_latency",
      "description": "Average time delay from recall event detection to initial action by agents.",
      "type": "histogram",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent responding."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "failure_rate",
      "description": "Rate of recall process failures, such as missed units or communication errors.",
      "type": "gauge",
      "tags": [],
      "unit": "percent"
    },
    {
      "name": "public_confidence_level",
      "description": "Measurement of public trust and confidence in the recall process, based on surveys or social sentiment.",
      "type": "summary",
      "tags": [],
      "unit": "score"
    },
    {
      "name": "cost_of_recall",
      "description": "Total financial cost incurred during the recall process.",
      "type": "counter",
      "tags": [],
      "unit": "currency"
    },
    {
      "name": "recalled_units",
      "description": "Total number of units recalled during the process.",
      "type": "counter",
      "tags": [],
      "unit": "units"
    },
    {
      "name": "customer_complaints_count",
      "description": "Number of customer complaints received related to the recalled products.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Customer service agent handling complaints."
        }
      ],
      "unit": "complaints"
    },
    {
      "name": "complaint_resolution_time",
      "description": "Average time taken to resolve customer complaints during recall.",
      "type": "histogram",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Customer service agent resolving complaints."
        }
      ],
      "unit": "seconds"
    }
  ],
  "1c28dfbb-d4e6-4170-bc3a-a1192fe5abc7": [
    {
      "name": "culture_integration_success_rate",
      "description": "Measures the percentage of successful integration milestones achieved within a specified timeframe.",
      "type": "gauge",
      "tags": [
        {
          "tag": "phase",
          "description": "Current phase of integration process"
        },
        {
          "tag": "agent_role",
          "description": "Role of the agent involved in the process"
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "agent_interaction_frequency",
      "description": "Tracks how often agents from different company cultures interact during the integration process.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent"
        }
      ],
      "unit": "interactions"
    },
    {
      "name": "decision_making_pattern_diversity",
      "description": "Measures the diversity of decision-making approaches used by agents during integration discussions.",
      "type": "histogram",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent"
        }
      ],
      "unit": "decision patterns"
    },
    {
      "name": "system_stability_index",
      "description": "Assesses the stability of the integration system over time, especially under stress.",
      "type": "gauge",
      "tags": [
        {
          "tag": "time_period",
          "description": "Time period of measurement"
        }
      ],
      "unit": "stability score"
    },
    {
      "name": "resource_utilization_rate",
      "description": "Tracks the efficiency of resource use (e.g., time, personnel, tools) during the integration process.",
      "type": "gauge",
      "tags": [
        {
          "tag": "resource_type",
          "description": "Type of resource being utilized"
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "culture_mismatch_score",
      "description": "Quantifies the extent of cultural differences impacting the integration process.",
      "type": "gauge",
      "tags": [],
      "unit": "score"
    },
    {
      "name": "feedback_satisfaction_score",
      "description": "Gauges overall satisfaction of agents involved based on feedback during the integration.",
      "type": "summary",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent"
        }
      ],
      "unit": "satisfaction level"
    },
    {
      "name": "conflict_resolution_rate",
      "description": "Counts the number of conflicts resolved versus those unresolved during integration.",
      "type": "counter",
      "tags": [],
      "unit": "conflicts"
    },
    {
      "name": "adaptability_index",
      "description": "Measures how effectively agents adapt to changes during the integration process.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent"
        }
      ],
      "unit": "index"
    }
  ],
  "4901cea7-daa8-4de0-a4e6-f1945ba286f2": [
    {
      "name": "system_resource_utilization",
      "description": "Tracks the efficiency of resource utilization during the integration process, such as CPU, memory, or bandwidth usage.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent or system component"
        },
        {
          "tag": "resource_type",
          "description": "Type of resource being utilized (CPU, memory, bandwidth, etc.)"
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "integration_throughput",
      "description": "Measures the volume of data or transactions successfully integrated per unit time.",
      "type": "counter",
      "tags": [
        {
          "tag": "data_type",
          "description": "Type of data or transaction (e.g., customer data, orders)"
        },
        {
          "tag": "agent_name",
          "description": "Name of the agent performing the integration"
        }
      ],
      "unit": "units per second"
    },
    {
      "name": "system_response_time",
      "description": "Captures the latency or response time for key integration operations or services.",
      "type": "histogram",
      "tags": [
        {
          "tag": "operation",
          "description": "Specific operation or service"
        },
        {
          "tag": "agent_name",
          "description": "Agent or system component"
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "agent_interaction_frequency",
      "description": "Monitors how often agents interact with each other during the integration process.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent"
        },
        {
          "tag": "interaction_type",
          "description": "Type of interaction (e.g., message, data exchange)"
        }
      ],
      "unit": "interactions per time unit"
    },
    {
      "name": "decision_alignment_score",
      "description": "Quantifies how well agents' decisions align with the overall integration goals.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent"
        },
        {
          "tag": "decision_type",
          "description": "Type of decision (e.g., data mapping, system configuration)"
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "system_stability_index",
      "description": "Evaluates the stability of the integrated system over time, considering incidents like failures or rollbacks.",
      "type": "gauge",
      "tags": [
        {
          "tag": "system_component",
          "description": "Part of the system (e.g., database, API server)"
        },
        {
          "tag": "time",
          "description": "Time period of measurement"
        }
      ],
      "unit": "index score"
    },
    {
      "name": "resource_depletion_rate",
      "description": "Measures the rate at which resources are consumed during integration activities.",
      "type": "histogram",
      "tags": [
        {
          "tag": "resource_type",
          "description": "Type of resource (e.g., storage, compute)"
        },
        {
          "tag": "agent_name",
          "description": "Agent performing the activity"
        }
      ],
      "unit": "units per time"
    },
    {
      "name": "integration_cost_efficiency",
      "description": "Compares costs incurred during integration to the value of successful data/system integration, indicating efficiency.",
      "type": "gauge",
      "tags": [
        {
          "tag": "cost_type",
          "description": "Type of cost (labor, infrastructure, etc.)"
        },
        {
          "tag": "outcome",
          "description": "Type of outcome (successful integration, error rate reduction)"
        }
      ],
      "unit": "cost per unit of successful integration"
    },
    {
      "name": "risk_exposure_level",
      "description": "Assesses the potential risks encountered during the integration process.",
      "type": "gauge",
      "tags": [
        {
          "tag": "risk_type",
          "description": "Type of risk (data loss, downtime, security breach)"
        },
        {
          "tag": "agent_name",
          "description": "Agent or system component"
        }
      ],
      "unit": "index score"
    },
    {
      "name": "adaptability_score",
      "description": "Measures how quickly and effectively the system adapts to integration challenges and changes.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent or system component"
        },
        {
          "tag": "change_type",
          "description": "Type of change or challenge"
        }
      ],
      "unit": "index score"
    }
  ],
  "8a4fac76-5a39-49d0-b71e-7d7c6c834688": [
    {
      "name": "resource_utilization",
      "description": "Tracks how efficiently resources (e.g., money, time) are used during budget negotiation.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent"
        },
        {
          "tag": "resource_type",
          "description": "Type of resource being utilized (e.g., budget, time)"
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "budget_allocation_deviation",
      "description": "Measures the deviation of allocated budget from the initial proposal or target.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent"
        },
        {
          "tag": "department",
          "description": "Department involved in the negotiation"
        }
      ],
      "unit": "currency units"
    },
    {
      "name": "number_of_negotiation_rounds",
      "description": "Counts the total number of negotiation rounds needed to reach an agreement.",
      "type": "counter",
      "tags": [],
      "unit": "rounds"
    },
    {
      "name": "decision_making_time",
      "description": "Measures the time taken by agents to reach a decision.",
      "type": "summary",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent"
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "agreement_confidence_level",
      "description": "Assesses the confidence level or stability of the final agreement, based on consensus strength.",
      "type": "gauge",
      "tags": [],
      "unit": "score (0-1)"
    },
    {
      "name": "agent_satisfaction_score",
      "description": "Tracks the satisfaction score of each agent after negotiations.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent"
        }
      ],
      "unit": "score (1-10)"
    },
    {
      "name": "resource_conflict_incidents",
      "description": "Counts incidents where resource conflicts or overlaps occur during negotiations.",
      "type": "counter",
      "tags": [],
      "unit": "incidents"
    },
    {
      "name": "budget_commitment_ratio",
      "description": "Measures the ratio of committed budget to the total available budget.",
      "type": "gauge",
      "tags": [],
      "unit": "ratio (0-1)"
    },
    {
      "name": "negotiation_loss_events",
      "description": "Counts the number of events indicating setbacks or loss of progress during negotiation.",
      "type": "counter",
      "tags": [],
      "unit": "events"
    },
    {
      "name": "response_time_between_agents",
      "description": "Measures response times between communications of different agents.",
      "type": "histogram",
      "tags": [
        {
          "tag": "sender_agent",
          "description": "Agent sending the message"
        },
        {
          "tag": "receiver_agent",
          "description": "Agent receiving the message"
        }
      ],
      "unit": "seconds"
    }
  ],
  "59ace66a-a8ea-4d19-bfe2-502533f90fbc": [
    {
      "name": "budget_shortfall_percentage",
      "description": "Tracks the percentage shortfall from the original budget due to reallocations during the economic downturn.",
      "type": "gauge",
      "tags": [
        {
          "tag": "department",
          "description": "The department or agency affected by the budget change."
        }
      ],
      "unit": "percent"
    },
    {
      "name": "resource_utilization_rate",
      "description": "Measures the efficiency of resource utilization after budget reallocation, including monetary, human, and material resources.",
      "type": "gauge",
      "tags": [
        {
          "tag": "resource_type",
          "description": "Type of resource, e.g., financial, human, material."
        }
      ],
      "unit": "percent"
    },
    {
      "name": "reaction_time_to_budget_adjustment",
      "description": "Time taken by agents to respond to the rapid budget reallocation in response to the revenue shortfall.",
      "type": "histogram",
      "tags": [
        {
          "tag": "agent_role",
          "description": "Role of the agent, e.g., CEO, HR Director, Board Representative."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "decision_change_frequency",
      "description": "Number of times decisions regarding budget adjustments are revised or changed during the simulation.",
      "type": "counter",
      "tags": [
        {
          "tag": "decision_type",
          "description": "Type of decision, e.g., department budget change, personnel layoff."
        }
      ],
      "unit": "decisions"
    },
    {
      "name": "stakeholder_satisfaction_score",
      "description": "Overall satisfaction level of key stakeholders (agents) with the budget reallocation process and outcomes.",
      "type": "gauge",
      "tags": [
        {
          "tag": "stakeholder_type",
          "description": "Type of stakeholder, e.g., CEO, HR, Board."
        }
      ],
      "unit": "scale (1-10)"
    },
    {
      "name": "resource_allocation_effectiveness",
      "description": "Measures how effectively the reallocated resources are used to meet organizational goals post-adjustment.",
      "type": "gauge",
      "tags": [
        {
          "tag": "goal_type",
          "description": "Type of goal, e.g., operational, strategic."
        }
      ],
      "unit": "percent"
    },
    {
      "name": "system_stability_index",
      "description": "Assesses the stability of the organization’s operations following budget reallocation, indicating resilience.",
      "type": "gauge",
      "tags": [
        {
          "tag": "scenario",
          "description": "Different stress scenarios or environmental conditions."
        }
      ],
      "unit": "scale (0-1)"
    },
    {
      "name": "response_to_unexpected_changes",
      "description": "Tracks how well the system adapts to unforeseen changes or shocks during reallocation process.",
      "type": "gauge",
      "tags": [
        {
          "tag": "change_type",
          "description": "Type of unexpected change, e.g., sudden revenue decline, policy change."
        }
      ],
      "unit": "scale (0-1)"
    },
    {
      "name": "agent_decision_confidence",
      "description": "Confidence level of agents during decision-making processes about budget cuts or reallocations.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the decision-making agent."
        }
      ],
      "unit": "scale (0-10)"
    },
    {
      "name": "coordination_efficiency_index",
      "description": "Measure of how well agents coordinate their actions in reallocating budgets, indicating team effectiveness.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_role",
          "description": "Role of the agent, e.g., CEO, HR Director, Board Representative."
        }
      ],
      "unit": "scale (0-1)"
    }
  ],
  "6c4107b4-45ec-42c9-bb7d-85ed9316e539": [
    {
      "name": "candidate_offer_count",
      "description": "Counts the number of offers made to the candidate by different recruiters.",
      "type": "counter",
      "tags": [
        {
          "tag": "recruiter_name",
          "description": "Name of the recruiter making the offer"
        }
      ],
      "unit": "offers"
    },
    {
      "name": "offer_acceptance_rate",
      "description": "Tracks the rate at which offers are accepted by the candidate.",
      "type": "gauge",
      "tags": [
        {
          "tag": "recruiter_name",
          "description": "Name of the recruiter whose offer acceptance rate is being measured"
        },
        {
          "tag": "offer_type",
          "description": "Type of offer, e.g., multiple offers, competitive offer"
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "recruiter_interaction_frequency",
      "description": "Measures how often recruiters interact with each other or the candidate.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent, either recruiter or candidate"
        }
      ],
      "unit": "interactions"
    },
    {
      "name": "candidate_response_time",
      "description": "Captures the response time of the candidate to recruiter inquiries or offers.",
      "type": "histogram",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the candidate or recruiter"
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "offer_competitiveness_index",
      "description": "Evaluates the competitiveness of the offers made based on salary, benefits, and other perks.",
      "type": "summary",
      "tags": [
        {
          "tag": "offer_id",
          "description": "Identifier for each offer"
        }
      ],
      "unit": "score"
    },
    {
      "name": "recruitment_process_duration",
      "description": "Measures the total time from initial contact to offer acceptance.",
      "type": "histogram",
      "tags": [
        {
          "tag": "candidate_name",
          "description": "Name of the candidate"
        }
      ],
      "unit": "hours"
    },
    {
      "name": "top_talent_acquisition_success_rate",
      "description": "Percentage of attempts that successfully result in acquiring top talent.",
      "type": "gauge",
      "tags": [],
      "unit": "percentage"
    },
    {
      "name": "candidate_satisfaction_score",
      "description": "Measures the candidate's satisfaction with the recruitment process.",
      "type": "summary",
      "tags": [
        {
          "tag": "candidate_name",
          "description": "Name of the candidate"
        }
      ],
      "unit": "score"
    },
    {
      "name": "market_competition_level",
      "description": "Indicates the level of competition in the market for top talent.",
      "type": "gauge",
      "tags": [],
      "unit": "index"
    }
  ],
  "1b346c1e-2f50-4de0-8ba2-523420013ede": [
    {
      "name": "diversity_candidate_pipeline_count",
      "description": "Tracks the number of candidates added to the diversity talent pipeline.",
      "type": "counter",
      "tags": [
        {
          "tag": "source",
          "description": "Source of candidate referral or outreach program"
        },
        {
          "tag": "demographic_group",
          "description": "Demographic group of candidates, e.g., ethnicity, gender, background"
        }
      ],
      "unit": "candidates"
    },
    {
      "name": "merit_based_selection_rate",
      "description": "Measures the percentage of candidates selected based on merit criteria during recruitment.",
      "type": "gauge",
      "tags": [
        {
          "tag": "candidate_id",
          "description": "Unique identifier for the candidate"
        },
        {
          "tag": "selection_stage",
          "description": "Stage of the selection process, e.g., interview, final decision"
        }
      ],
      "unit": "percent"
    },
    {
      "name": "agent_interaction_frequency",
      "description": "Tracks how often agents interact with each other or the environment.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        },
        {
          "tag": "interaction_type",
          "description": "Type of interaction, e.g., communication, collaboration."
        }
      ],
      "unit": "interactions"
    },
    {
      "name": "selection_success_rate",
      "description": "Measures how often the system successfully places candidates in roles.",
      "type": "gauge",
      "tags": [],
      "unit": "percent"
    },
    {
      "name": "time_to_fill_position",
      "description": "Tracks the time taken to fill a position from opening to candidate placement.",
      "type": "histogram",
      "tags": [
        {
          "tag": "department",
          "description": "Department or team name."
        },
        {
          "tag": "role_level",
          "description": "Level of the role, e.g., junior, senior."
        }
      ],
      "unit": "hours"
    },
    {
      "name": "candidate_diversity_index",
      "description": "A composite metric representing the diversity of the candidate pool.",
      "type": "summary",
      "tags": [
        {
          "tag": "demographic_group",
          "description": "Group demographic info contributing to diversity index."
        }
      ],
      "unit": "index"
    },
    {
      "name": "merit_criteria_evaluation_score",
      "description": "Aggregate score of how candidates meet merit-based criteria.",
      "type": "summary",
      "tags": [
        {
          "tag": "candidate_id",
          "description": "Unique candidate identifier."
        }
      ],
      "unit": "score"
    },
    {
      "name": "candidate_feedback_satisfaction",
      "description": "Satisfaction level of candidates with the recruitment process.",
      "type": "gauge",
      "tags": [
        {
          "tag": "candidate_id",
          "description": "Unique candidate identifier."
        }
      ],
      "unit": "satisfaction_score"
    },
    {
      "name": "candidate_retention_rate",
      "description": "Tracks the retention of hired candidates over a specified period.",
      "type": "gauge",
      "tags": [
        {
          "tag": "department",
          "description": "Department or team."
        },
        {
          "tag": "role",
          "description": "Role category."
        }
      ],
      "unit": "percent"
    },
    {
      "name": "system_resource_utilization",
      "description": "Measures the resources utilized by the recruitment system, such as processing time, server load.",
      "type": "gauge",
      "tags": [],
      "unit": "percentage"
    }
  ],
  "e50977f6-c50e-41b9-a5c1-67cc80711ad7": [
    {
      "name": "location_resource_utilization",
      "description": "Tracks how efficiently resources (e.g., real estate, energy, materials) are used in the retail expansion.",
      "type": "gauge",
      "tags": [
        {
          "tag": "location_type",
          "description": "Indicates whether the location is urban or suburban"
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "retail_throughput",
      "description": "Measures the number of stores opened or sales generated within a given time period.",
      "type": "counter",
      "tags": [],
      "unit": "stores or sales"
    },
    {
      "name": "decision_response_time",
      "description": "Captures the response time of agents (urban strategist, suburban strategist, data analyst) to environmental inputs or changes.",
      "type": "histogram",
      "tags": [],
      "unit": "seconds"
    },
    {
      "name": "agent_interaction_frequency",
      "description": "Monitors how often agents communicate or coordinate on location decisions.",
      "type": "counter",
      "tags": [],
      "unit": "interactions"
    },
    {
      "name": "location_success_rate",
      "description": "Records the percentage of location choices that meet predefined success criteria (e.g., sales, customer access).",
      "type": "gauge",
      "tags": [],
      "unit": "percentage"
    },
    {
      "name": "resource_depletion_rate",
      "description": "Tracks the rate at which key resources (budget, personnel hours) are consumed by the expansion process.",
      "type": "counter",
      "tags": [],
      "unit": "resources used"
    },
    {
      "name": "system_stability_index",
      "description": "Measures how stable the decision system remains over time, under various conditions (e.g., changes in market data).",
      "type": "gauge",
      "tags": [],
      "unit": "index"
    },
    {
      "name": "decision_accuracy",
      "description": "Assesses the correctness of location choices based on a set of success metrics (e.g., sales performance, footprint optimization).",
      "type": "gauge",
      "tags": [],
      "unit": "accuracy index"
    },
    {
      "name": "agent_decision_conflicts",
      "description": "Counts the number of conflicts or disagreements between agents during decision-making.",
      "type": "counter",
      "tags": [],
      "unit": "conflicts"
    },
    {
      "name": "location_decision_latency",
      "description": "Measures the time delay from data input to final location decision.",
      "type": "histogram",
      "tags": [],
      "unit": "seconds"
    },
    {
      "name": "agent_satisfaction_score",
      "description": "Quantifies the satisfaction or confidence level of agents regarding their decisions.",
      "type": "gauge",
      "tags": [],
      "unit": "score"
    },
    {
      "name": "system_resource_regeneration",
      "description": "Tracks the regeneration or replenishment of resources used during system operation.",
      "type": "counter",
      "tags": [],
      "unit": "resources"
    }
  ],
  "4113a348-2974-45a6-b1b9-fd8fb046b0ee": [
    {
      "name": "inventory_allocation_efficiency",
      "description": "Measures the efficiency of inventory allocation across stores and fulfillment centers.",
      "type": "gauge",
      "tags": [
        {
          "tag": "location",
          "description": "The specific store or fulfillment center."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "inventory_resource_utilization",
      "description": "Tracks how efficiently inventory resources (stock levels, turnover) are utilized across the system.",
      "type": "gauge",
      "tags": [
        {
          "tag": "resource_type",
          "description": "Type of resource, e.g., raw stock, reserved stock."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "average_inventory_cost_per_location",
      "description": "Measures the average cost associated with inventory at each location.",
      "type": "gauge",
      "tags": [
        {
          "tag": "location",
          "description": "Specific store or fulfillment center."
        }
      ],
      "unit": "currency per unit"
    },
    {
      "name": "throughput_units_shipped",
      "description": "Tracks the total number of units shipped per time period.",
      "type": "counter",
      "tags": [
        {
          "tag": "location",
          "description": "Location of shipment (store or fulfillment center)."
        }
      ],
      "unit": "units"
    },
    {
      "name": "response_time_order_processing",
      "description": "Captures the time taken from order placement to processing completion.",
      "type": "histogram",
      "tags": [
        {
          "tag": "agent",
          "description": "The agent responsible for processing the order."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "agent_interaction_frequency",
      "description": "Monitors how often agents interact with each other or within the system.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent",
          "description": "Agent involved in interactions."
        }
      ],
      "unit": "interactions"
    },
    {
      "name": "decision_making_patterns",
      "description": "Analyzes the choices agents make under various conditions.",
      "type": "summary",
      "tags": [
        {
          "tag": "agent",
          "description": "Agent performing decision-making."
        }
      ],
      "unit": "decisions"
    },
    {
      "name": "emergent_patterns",
      "description": "Identifies emergent behaviors arising from collective agent actions.",
      "type": "summary",
      "tags": [
        {
          "tag": "behavior",
          "description": "Emergent behavior type or pattern."
        }
      ],
      "unit": "patterns"
    },
    {
      "name": "order_success_rate",
      "description": "Measures the percentage of orders successfully fulfilled within target parameters.",
      "type": "gauge",
      "tags": [
        {
          "tag": "order_type",
          "description": "Type of order, e.g., online, in-store."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "system_stability_score",
      "description": "Assesses how stable the system remains over time, especially during stress or fluctuations.",
      "type": "gauge",
      "tags": [],
      "unit": "stability index"
    },
    {
      "name": "resource_depletion_rate",
      "description": "Tracks how quickly inventory or other resources are consumed.",
      "type": "counter",
      "tags": [
        {
          "tag": "resource_type",
          "description": "Type of resource, e.g., raw inventory, packaging materials."
        }
      ],
      "unit": "units per time"
    },
    {
      "name": "resource_regeneration_rate",
      "description": "Tracks how resources are replenished over time.",
      "type": "counter",
      "tags": [
        {
          "tag": "resource_type",
          "description": "Type of resource."
        }
      ],
      "unit": "units per time"
    },
    {
      "name": "cost_efficiency_ratio",
      "description": "Compares costs incurred to output or benefit generated.",
      "type": "gauge",
      "tags": [],
      "unit": "cost per benefit unit"
    },
    {
      "name": "response_time",
      "description": "Time taken for the system or agents to respond to specific events or inputs.",
      "type": "histogram",
      "tags": [
        {
          "tag": "agent or system",
          "description": "Responding agent or system component."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "system_adaptability_score",
      "description": "Measures how quickly and effectively the system adapts to changes.",
      "type": "gauge",
      "tags": [],
      "unit": "adaptation index"
    },
    {
      "name": "system_resilience_score",
      "description": "Evaluates the system’s ability to recover from disruptions.",
      "type": "gauge",
      "tags": [],
      "unit": "resilience index"
    }
  ],
  "87e0e228-7507-4efe-832c-c30935350fc1": [
    {
      "name": "wait_time_total_seconds",
      "description": "The total accumulated wait time for patients in the ED.",
      "type": "counter",
      "tags": [
        {
          "tag": "shift_id",
          "description": "Identifier for the shift during which data was collected."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "average_patient_wait_time_seconds",
      "description": "The average wait time experienced by patients before being treated.",
      "type": "gauge",
      "tags": [
        {
          "tag": "department",
          "description": "Identifies different departments or zones within the ED."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "patient_throughput",
      "description": "Number of patients processed through the ED per hour.",
      "type": "counter",
      "tags": [
        {
          "tag": "hour",
          "description": "Hour of the day during data collection."
        }
      ],
      "unit": "patients/hour"
    },
    {
      "name": "resource_utilization_percentage",
      "description": "Utilization rate of critical resources like beds, staff, and equipment.",
      "type": "gauge",
      "tags": [
        {
          "tag": "resource_type",
          "description": "Type of resource, e.g., beds, staff, imaging equipment."
        }
      ],
      "unit": "percent"
    },
    {
      "name": "response_time_seconds",
      "description": "Average response time of agents (e.g., triage nurse, ED staff) to patient needs or system events.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_role",
          "description": "Role of the agent responding, e.g., triage nurse, doctor."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "patient satisfaction_score",
      "description": "Average satisfaction rating given by patients post-treatment.",
      "type": "summary",
      "tags": [
        {
          "tag": "patient_id",
          "description": "Unique identifier for the patient."
        }
      ],
      "unit": "rating"
    },
    {
      "name": "triage_priority_distribution",
      "description": "Distribution of patients by triage priority levels.",
      "type": "histogram",
      "tags": [
        {
          "tag": "priority_level",
          "description": "Priority level assigned during triage, e.g., high, medium, low."
        }
      ],
      "unit": "count"
    },
    {
      "name": "agent_interaction_frequency",
      "description": "Number of interactions between agents (such as staff coordination or communication).",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_role",
          "description": "Role of the agent involved in interactions."
        }
      ],
      "unit": "interactions"
    },
    {
      "name": "system_stability_score",
      "description": "A score representing the stability of ED operations over time.",
      "type": "gauge",
      "tags": [
        {
          "tag": "time_period",
          "description": "Time period over which stability is measured."
        }
      ],
      "unit": "score"
    },
    {
      "name": "missed_care_incidents",
      "description": "Number of care incidents missed or delayed due to resource constraints or high workload.",
      "type": "counter",
      "tags": [
        {
          "tag": "incident_type",
          "description": "Type of missed care or delay, e.g., medication, diagnostics."
        }
      ],
      "unit": "events"
    }
  ],
  "2ccb9dee-5c57-4fd8-9b42-133152e85b7b": [
    {
      "name": "or_resource_utilization",
      "description": "Tracks how efficiently operating room resources (e.g., staff, equipment, time) are used during scheduled surgeries.",
      "type": "gauge",
      "tags": [
        {
          "tag": "resource_type",
          "description": "Type of resource such as staff, equipment, or time"
        },
        {
          "tag": "agent_name",
          "description": "Name of the agent responsible for the resource"
        },
        {
          "tag": "shift",
          "description": "Shift or time period of the utilization"
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "scheduled_surgeries_throughput",
      "description": "Measures the number of surgeries completed within a specific time frame.",
      "type": "counter",
      "tags": [
        {
          "tag": "time_period",
          "description": "Time interval for throughput measurement"
        },
        {
          "tag": "surgeon",
          "description": "Surgeon performing the surgery"
        },
        {
          "tag": "agent",
          "description": "Agent responsible for scheduling"
        }
      ],
      "unit": "surgeries"
    },
    {
      "name": "surgery_delay_duration",
      "description": "Records delays encountered in scheduled surgeries, measuring the additional time beyond planned start.",
      "type": "histogram",
      "tags": [
        {
          "tag": "surgery_id",
          "description": "Identifier for each surgery"
        },
        {
          "tag": "reason",
          "description": "Reason for delay, e.g., resource unavailability, emergency"
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "overtime_hours",
      "description": "Tracks total overtime hours accumulated beyond scheduled operating hours.",
      "type": "counter",
      "tags": [
        {
          "tag": "day",
          "description": "Specific day of operation"
        },
        {
          "tag": "agent_name",
          "description": "Agent responsible for scheduling or oversight"
        }
      ],
      "unit": "hours"
    },
    {
      "name": "surgeon_preference_adherence",
      "description": "Measures how well the scheduling respects surgeons’ preferences and constraints.",
      "type": "gauge",
      "tags": [
        {
          "tag": "surgeon_name",
          "description": "Name of the surgeon"
        },
        {
          "tag": "preference_type",
          "description": "Type of preference, e.g., time slot, equipment"
        }
      ],
      "unit": "percentage"
    }
  ],
  "7c926aad-f70e-4130-aa98-ee1f96fdfc1e": [
    {
      "name": "nursing_staff_resource_utilization",
      "description": "Tracks how efficiently nursing resources (staff hours, availability) are used across hospital units.",
      "type": "gauge",
      "tags": [
        {
          "tag": "unit_id",
          "description": "Identifier for hospital unit"
        },
        {
          "tag": "nurse_role",
          "description": "Role or specialization of the nurse"
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "nurse_patient_ratio",
      "description": "Measures the ratio of nurses to patients in each unit to ensure optimal staffing levels.",
      "type": "gauge",
      "tags": [
        {
          "tag": "unit_id",
          "description": "Identifier for hospital unit"
        },
        {
          "tag": "shift_time",
          "description": "Time period of the shift"
        }
      ],
      "unit": "ratio"
    },
    {
      "name": "nurse_allocation_throughput",
      "description": "Counts the number of patients assigned per shift or time period to evaluate staffing productivity.",
      "type": "counter",
      "tags": [
        {
          "tag": "unit_id",
          "description": "Identifier for hospital unit"
        },
        {
          "tag": "shift_time",
          "description": "Time period of the shift"
        }
      ],
      "unit": "patients"
    },
    {
      "name": "nurse_response_time",
      "description": "Measures the response time of nurses to patient calls or requests.",
      "type": "histogram",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the nurse"
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "nurse_shift_changes",
      "description": "Counts the number of shift changes or reallocations within a specific period.",
      "type": "counter",
      "tags": [
        {
          "tag": "unit_id",
          "description": "Identifier for hospital unit"
        }
      ],
      "unit": "count"
    },
    {
      "name": "staff_satisfaction_score",
      "description": "Aggregated satisfaction score of nursing staff based on surveys or feedback.",
      "type": "summary",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the nursing staff member or role"
        }
      ],
      "unit": "score"
    },
    {
      "name": "cost_per_nurse_hour",
      "description": "Tracks the cost incurred per nursing hour to evaluate expense management.",
      "type": "gauge",
      "tags": [
        {
          "tag": "unit_id",
          "description": "Identifier for hospital unit"
        },
        {
          "tag": "shift_time",
          "description": "Time period of the shift"
        }
      ],
      "unit": "currency per hour"
    },
    {
      "name": "unit_occupancy_rate",
      "description": "Measures how occupied or full each hospital unit is, relevant for resource utilization and planning.",
      "type": "gauge",
      "tags": [
        {
          "tag": "unit_id",
          "description": "Identifier for hospital unit"
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "patient_wait_time",
      "description": "Tracks average wait time for patients to be attended by nurses.",
      "type": "histogram",
      "tags": [
        {
          "tag": "unit_id",
          "description": "Identifier for hospital unit"
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "float_pool_allocation_efficiency",
      "description": "Assesses the efficiency of skill matching and staffing in float pool allocations.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the float pool coordinator"
        }
      ],
      "unit": "percentage"
    }
  ],
  "d22ff23b-9edf-4a7b-9429-02e3a939763a": [
    {
      "name": "negotiation_rounds_total",
      "description": "Total number of negotiation rounds until an agreement is reached.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_involved",
          "description": "Name of the agents involved in each negotiation round."
        }
      ],
      "unit": "rounds"
    },
    {
      "name": "concession_percentage",
      "description": "Percentage change in each agent's demands or positions from start to end of negotiations.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        },
        {
          "tag": "issue",
          "description": "Negotiation issue (e.g., pricing, licensing terms)."
        }
      ],
      "unit": "percent"
    },
    {
      "name": "issue_resolution_rate",
      "description": "Number of key issues resolved versus unresolved during negotiation.",
      "type": "counter",
      "tags": [
        {
          "tag": "issue_type",
          "description": "Type of issue (e.g., legal, pricing, technical)."
        },
        {
          "tag": "agent_name",
          "description": "Agent responsible or involved."
        }
      ],
      "unit": "issues"
    },
    {
      "name": "agreement_alignment_score",
      "description": "Degree to which the final agreement aligns with initial goals of the agents.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        }
      ],
      "unit": "percent"
    },
    {
      "name": "cooperation_index",
      "description": "Index measuring the level of cooperation during negotiation, based on interaction tone and outcomes.",
      "type": "gauge",
      "tags": [],
      "unit": "index"
    },
    {
      "name": "enforcement_index",
      "description": "Score indicating the strength and clarity of enforcement mechanisms in the agreement.",
      "type": "gauge",
      "tags": [],
      "unit": "index"
    },
    {
      "name": "trust_level",
      "description": "Level of trust established between agents during negotiation.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_pair",
          "description": "Pair of agents involved, e.g., Vendor-Procurement."
        }
      ],
      "unit": "trust score"
    },
    {
      "name": "risk_sharing_ratio",
      "description": "Ratio of risk burden shared between parties.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_pair",
          "description": "Partner involved in risk sharing."
        }
      ],
      "unit": "ratio"
    },
    {
      "name": "uncertainty_acceptance_score",
      "description": "Level of acceptance of uncertain outcomes or unproven technologies.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        }
      ],
      "unit": "index"
    },
    {
      "name": "cost_benefit_ratio",
      "description": "Expected economic costs versus benefits of the agreement.",
      "type": "gauge",
      "tags": [],
      "unit": "ratio"
    },
    {
      "name": "funding_commitment_total",
      "description": "Total financial commitment made by each party.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent or country."
        }
      ],
      "unit": "dollars"
    },
    {
      "name": "emission_reduction_estimate",
      "description": "Estimated reduction in emissions resulting from the agreement.",
      "type": "gauge",
      "tags": [],
      "unit": "metric_tons/year"
    },
    {
      "name": "biodiversity_preservation_score",
      "description": "Estimated impact score on biodiversity preservation.",
      "type": "gauge",
      "tags": [],
      "unit": "index"
    },
    {
      "name": "time_to_agreement",
      "description": "Total time taken to reach the agreement.",
      "type": "gauge",
      "tags": [],
      "unit": "seconds"
    },
    {
      "name": "public_support_index",
      "description": "Estimate of public support for the agreement.",
      "type": "gauge",
      "tags": [
        {
          "tag": "region",
          "description": "Region or country for which the support is estimated."
        }
      ],
      "unit": "index"
    }
  ],
  "236485c4-65bc-46d3-8bcf-8dff85d6db8f": [
    {
      "name": "partnership_initiation_count",
      "description": "Counts the number of successful initiation attempts of partnership negotiations.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent involved in initiating a partnership"
        },
        {
          "tag": "role",
          "description": "Role of the agent in the partnership (e.g., strategic, market)"
        },
        {
          "tag": "phase",
          "description": "Phase of negotiation or interaction"
        }
      ],
      "unit": "interactions"
    },
    {
      "name": "resource_utilization_percentage",
      "description": "Measures how efficiently resources are utilized during the partnership formation process.",
      "type": "gauge",
      "tags": [
        {
          "tag": "resource_type",
          "description": "Type of resource (e.g., capital, human hours)"
        }
      ],
      "unit": "percent"
    },
    {
      "name": "decision_making_time_seconds",
      "description": "Tracks the time taken for a decision to be made during negotiations.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent making decisions"
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "agreement_success_rate",
      "description": "Percentage of negotiations that result in a formal agreement.",
      "type": "gauge",
      "tags": [
        {
          "tag": "phase",
          "description": "Negotiation phase"
        }
      ],
      "unit": "percent"
    },
    {
      "name": "incentive_alignment_score",
      "description": "Score indicating how well incentives are aligned between partners.",
      "type": "gauge",
      "tags": [
        {
          "tag": "partner_pair",
          "description": "Pair of agents or organizations involved"
        }
      ],
      "unit": "score"
    },
    {
      "name": "conflict_events_total",
      "description": "Total number of conflict events during negotiations.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent involved in conflicts"
        },
        {
          "tag": "conflict_type",
          "description": "Type of conflict (e.g., disagreement, disagreement severity)"
        }
      ],
      "unit": "events"
    },
    {
      "name": "negotiation_rounds_total",
      "description": "Total number of negotiation rounds.",
      "type": "counter",
      "tags": [
        {
          "tag": "phase",
          "description": "Phase of negotiation"
        }
      ],
      "unit": "rounds"
    },
    {
      "name": "agent_satisfaction_score",
      "description": "Satisfaction score of agents with the negotiation process and outcome.",
      "type": "summary",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent"
        }
      ],
      "unit": "score"
    },
    {
      "name": "system_stability_metric",
      "description": "Metric indicating the stability of the partnership negotiation process.",
      "type": "gauge",
      "tags": [
        {
          "tag": "system_component",
          "description": "Component of the negotiation system"
        }
      ],
      "unit": "stability_index"
    },
    {
      "name": "resource_depletion_rate",
      "description": "Rate at which key resources are depleted during negotiations.",
      "type": "histogram",
      "tags": [
        {
          "tag": "resource_type",
          "description": "Type of resource"
        },
        {
          "tag": "phase",
          "description": "Negotiation phase"
        }
      ],
      "unit": "depletion_rate"
    },
    {
      "name": "adaptation_successful_count",
      "description": "Number of successful adaptations made by agents in response to negotiation dynamics.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent"
        }
      ],
      "unit": "adapts"
    },
    {
      "name": "response_time_seconds",
      "description": "Average response time of agents to negotiation inputs.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent"
        }
      ],
      "unit": "seconds"
    }
  ],
  "79436fc9-ad42-439f-a1ec-31284045ea16": [
    {
      "name": "migration_phases_completed",
      "description": "Counts the number of migration phases completed successfully.",
      "type": "counter",
      "tags": [
        {
          "tag": "phase",
          "description": "The current phase of migration (e.g., planning, implementation, testing)."
        }
      ],
      "unit": "phase"
    },
    {
      "name": "resource_utilization_percentage",
      "description": "Tracks the percentage utilization of the migration resources, including personnel, computing, and storage.",
      "type": "gauge",
      "tags": [
        {
          "tag": "resource_type",
          "description": "Type of resource (e.g., CPU, memory, personnel)."
        }
      ],
      "unit": "percent"
    },
    {
      "name": "system_response_time_seconds",
      "description": "Measures the response time of the systems during migration activities, indicating system responsiveness.",
      "type": "histogram",
      "tags": [
        {
          "tag": "agent",
          "description": "The agent responsible for or affected by the response."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "agent_interaction_count",
      "description": "Counts the number of interactions or communications between agents during the migration process.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        }
      ],
      "unit": "interactions"
    },
    {
      "name": "migration_successful_percentage",
      "description": "Indicates the percentage of systems successfully migrated out of the total systems configured for migration.",
      "type": "gauge",
      "tags": [
        {
          "tag": "phase",
          "description": "Migration phase during which success rate is measured."
        }
      ],
      "unit": "percent"
    },
    {
      "name": "migration_cost_per_system",
      "description": "Tracks the cost incurred in migrating each system, helping assess cost efficiency.",
      "type": "summary",
      "tags": [
        {
          "tag": "system_id",
          "description": "Identifier for the specific system."
        }
      ],
      "unit": "currency"
    },
    {
      "name": "system_stability_index",
      "description": "Evaluates the overall stability of the system post-migration, combining failure rates, downtime, and error reports.",
      "type": "gauge",
      "tags": [
        {
          "tag": "system_id",
          "description": "Identifier for the system."
        }
      ],
      "unit": "index"
    },
    {
      "name": "time_to_complete_migration_seconds",
      "description": "Measures the total time taken to complete the migration process for the entire system.",
      "type": "histogram",
      "tags": [
        {
          "tag": "migration_id",
          "description": "Identifier for the migration process."
        }
      ],
      "unit": "seconds"
    }
  ],
  "b3604b10-5464-4508-b018-381666c7110c": [
    {
      "name": "data_platform_unification_progress",
      "description": "Tracks the progress of unifying siloed databases into a single data lake.",
      "type": "gauge",
      "tags": [
        {
          "tag": "stage",
          "description": "Current stage of the data platform modernization process."
        },
        {
          "tag": "system_component",
          "description": "Part of the data platform system being measured."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "real_time_analytics_throughput",
      "description": "Measures the amount of data processed in real-time analytics per unit time.",
      "type": "counter",
      "tags": [
        {
          "tag": "data_type",
          "description": "Type of data being processed."
        },
        {
          "tag": "system_component",
          "description": "Part of the analytics system."
        }
      ],
      "unit": "records per second"
    },
    {
      "name": "system_response_time",
      "description": "Captures the latency of key system responses, such as query execution or data retrieval.",
      "type": "gauge",
      "tags": [
        {
          "tag": "functionality",
          "description": "Specific system functionality measured."
        },
        {
          "tag": "system_part",
          "description": "Component of the data platform or analytics system."
        }
      ],
      "unit": "milliseconds"
    },
    {
      "name": "agent_interaction_frequency",
      "description": "Monitors how often agents interact or communicate during system operations.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_role",
          "description": "Role of the agent (e.g., CDO, analyst)."
        },
        {
          "tag": "interaction_type",
          "description": "Type of interaction (e.g., data request, negotiation)."
        }
      ],
      "unit": "interactions per hour"
    },
    {
      "name": "data_resource_utilization",
      "description": "Shows the efficiency of resource utilization such as compute, storage, or network bandwidth.",
      "type": "gauge",
      "tags": [
        {
          "tag": "resource_type",
          "description": "Type of resource (compute, storage, network)."
        },
        {
          "tag": "system_component",
          "description": "Component utilizing the resource."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "system_stability_index",
      "description": "Indicates overall stability of the system over time, especially under load or stress.",
      "type": "gauge",
      "tags": [
        {
          "tag": "system_state",
          "description": "Current stability status."
        }
      ],
      "unit": "index score"
    },
    {
      "name": "data_quality_score",
      "description": "Assesses the quality of data within the data lake based on completeness, accuracy, and consistency.",
      "type": "summary",
      "tags": [],
      "unit": "score"
    },
    {
      "name": "agent_decision_patterns",
      "description": "Analyzes decision-making behaviors of agents during data operations and platform management.",
      "type": "summary",
      "tags": [],
      "unit": "pattern score"
    },
    {
      "name": "deployment_failure_rate",
      "description": "Counts the number of failed deployment or integration attempts over time.",
      "type": "counter",
      "tags": [
        {
          "tag": "deployment_type",
          "description": "Type of deployment (feature, update, patch)."
        },
        {
          "tag": "system_component",
          "description": "Component involved in deployment."
        }
      ],
      "unit": "failures per deployment"
    }
  ],
  "a244aefa-03a2-48bb-943a-708e469a2b98": [
    {
      "name": "customer_experience_web_response_time",
      "description": "Measures the response time for web touchpoints in the customer journey.",
      "type": "histogram",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent managing or interacting on the web platform."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "customer_experience_mobile_response_time",
      "description": "Measures the response time for mobile touchpoints in the customer journey.",
      "type": "histogram",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent managing or interacting on the mobile platform."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "customer_experience_physical_wait_time",
      "description": "Tracks wait times or delays at physical touchpoints such as in-store interactions.",
      "type": "histogram",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the physical touchpoint coordinator or agent."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "omnichannel_customer_satisfaction_score",
      "description": "Aggregated customer satisfaction score across all channels.",
      "type": "gauge",
      "tags": [],
      "unit": "score"
    },
    {
      "name": "channel_integration_efficiency",
      "description": "Measures how effectively channels are integrated, affecting seamlessness of customer experience.",
      "type": "gauge",
      "tags": [],
      "unit": "availability_ratio"
    },
    {
      "name": "customer_journey_completion_rate",
      "description": "Percentage of customer journeys that are completed successfully across all touchpoints.",
      "type": "counter",
      "tags": [],
      "unit": "percent"
    },
    {
      "name": "agent_interaction_frequency",
      "description": "Tracks how often agents interact with each other or touchpoints during the customer journey.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent involved in interactions."
        }
      ],
      "unit": "interactions"
    },
    {
      "name": "customer_feedback_response_time",
      "description": "Average time taken to respond to customer feedback across channels.",
      "type": "histogram",
      "tags": [],
      "unit": "seconds"
    },
    {
      "name": "system_response_time",
      "description": "Time taken for the system to respond to customer queries or actions.",
      "type": "histogram",
      "tags": [],
      "unit": "seconds"
    },
    {
      "name": "resource_utilization_percentage",
      "description": "Percentage of system resources utilized during the simulation.",
      "type": "gauge",
      "tags": [],
      "unit": "percent"
    },
    {
      "name": "path_efficiency_score",
      "description": "Score indicating how efficiently customer paths are managed across channels.",
      "type": "gauge",
      "tags": [],
      "unit": "score"
    }
  ],
  "cc0f0399-2796-4cd8-9ae3-fcca7356c4a2": [
    {
      "name": "price_changes",
      "description": "Number of price change events made by agents during the simulation.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent making the price change."
        }
      ],
      "unit": "changes"
    },
    {
      "name": "market_share_percentage",
      "description": "Current market share percentage held by each agent.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        }
      ],
      "unit": "percent"
    },
    {
      "name": "profit_margin",
      "description": "Profit margin achieved by each agent over a time period.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "price_competitiveness_index",
      "description": "Index measuring how competitive the agent's prices are relative to the market.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        }
      ],
      "unit": "index"
    },
    {
      "name": "respond_time_to_market_change",
      "description": "Average response time of agents to significant market changes.",
      "type": "histogram",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "price_difference_with_competitors",
      "description": "Average price difference between an agent and its competitors.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        },
        {
          "tag": "competitors",
          "description": "List or count of competitors considered."
        }
      ],
      "unit": "currency units"
    },
    {
      "name": "sales_volume",
      "description": "Number of units sold by each agent.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        }
      ],
      "unit": "units"
    },
    {
      "name": "resource_utilization_rate",
      "description": "Rate at which each agent utilizes resources like materials or labor.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "system_stability_score",
      "description": "Score indicating overall system stability based on fluctuations in market prices and agent performance.",
      "type": "gauge",
      "tags": [],
      "unit": "score"
    }
  ],
  "de0e44f9-1264-46bb-8d35-54f4fec11d41": [
    {
      "name": "pricing_response_time",
      "description": "Time taken by the pricing algorithm to respond to demand or competition changes",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent or system component"
        },
        {
          "tag": "scenario_id",
          "description": "Identifier for the simulation scenario"
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "price_adjustment_frequency",
      "description": "Number of times the prices are adjusted within a specific time period",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the algorithm or demand forecaster"
        },
        {
          "tag": "scenario_id",
          "description": "Identifier for the simulation scenario"
        }
      ],
      "unit": "adjustments"
    },
    {
      "name": "demand_prediction_accuracy",
      "description": "Accuracy of demand forecasts compared to actual demand observed during the simulation",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of demand forecaster or demand prediction model"
        },
        {
          "tag": "scenario_id",
          "description": "Identifier for the simulation scenario"
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "competitor_pricing_variance",
      "description": "Variance of competitors' prices over time, indicating stability or fluctuation in the market",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the market analyst or competitor"
        },
        {
          "tag": "scenario_id",
          "description": "Identifier for the simulation scenario"
        }
      ],
      "unit": "price variance"
    },
    {
      "name": "profit_margin",
      "description": "Profit margin achieved by the system based on pricing strategies",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Price optimizer or system component"
        },
        {
          "tag": "scenario_id",
          "description": "Identifier for the simulation scenario"
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "system_stability_score",
      "description": "Score indicating how stable the pricing system remains under demand or competitive fluctuations",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Monitoring system or component"
        },
        {
          "tag": "scenario_id",
          "description": "Identifier for the simulation scenario"
        }
      ],
      "unit": "score"
    },
    {
      "name": "lost_revenue_due_to_suboptimal_pricing",
      "description": "Revenue lost due to pricing decisions not aligning with demand or market conditions",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Revenue optimizer or pricing controller"
        },
        {
          "tag": "scenario_id",
          "description": "Identifier for the simulation scenario"
        }
      ],
      "unit": "currency units"
    },
    {
      "name": "pricing_resource_utilization",
      "description": "Efficiency in resource use during pricing calculations, such as computational resources or data usage",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "System component or algorithm"
        },
        {
          "tag": "scenario_id",
          "description": "Identifier for the simulation scenario"
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "market_share",
      "description": "Market share captured by the system under the current pricing strategy",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Market analyst or demand forecaster"
        },
        {
          "tag": "scenario_id",
          "description": "Identifier for the simulation scenario"
        }
      ],
      "unit": "percentage"
    }
  ],
  "04632462-e0a0-495d-af5c-381d7fa57d11": [
    {
      "name": "handoff_response_time",
      "description": "Measures the time taken for an agent to respond to a handoff request.",
      "type": "histogram",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent responding to the handoff."
        },
        {
          "tag": "region",
          "description": "Region or time zone of the agent."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "communication_frequency",
      "description": "Counts the number of communication events between agents over a period.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_pair",
          "description": "Pair of agents involved in communication."
        },
        {
          "tag": "region",
          "description": "Region or time zone of the agents."
        }
      ],
      "unit": "communications"
    },
    {
      "name": "handoff_success_rate",
      "description": "Tracks the percentage of successful handoffs to total handoff attempts.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent performing the handoff."
        },
        {
          "tag": "region",
          "description": "Region or time zone of the agent."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "resource_utilization",
      "description": "Measures the percentage of agent capacity utilized during their shift.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        },
        {
          "tag": "region",
          "description": "Region or time zone."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "average_response_time",
      "description": "Average response time of agents to system events or requests.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        },
        {
          "tag": "region",
          "description": "Region or time zone."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "system_stability_score",
      "description": "A composite index indicating system stability over time.",
      "type": "summary",
      "tags": [
        {
          "tag": "system",
          "description": "System identifier or component."
        }
      ],
      "unit": "index"
    },
    {
      "name": "goal_achievement_ratio",
      "description": "Percentage of goals achieved within a given timeframe.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Responsible agent or team."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "handoff_conflict_rate",
      "description": "Counts the number of conflicts or issues arising during handoffs.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Agent involved in the handoff."
        },
        {
          "tag": "region",
          "description": "Region or time zone."
        }
      ],
      "unit": "conflicts"
    },
    {
      "name": "system_resource_usage",
      "description": "Measures overall resource consumption across all agents.",
      "type": "gauge",
      "tags": [
        {
          "tag": "resource_type",
          "description": "Type of resource (e.g., CPU, bandwidth)."
        }
      ],
      "unit": "percentage"
    }
  ],
  "6d3305e3-84fc-4cb4-a6b1-b54d390839b2": [
    {
      "name": "team_cohesion_score",
      "description": "Measures the overall cohesion and connectedness of the remote team.",
      "type": "gauge",
      "tags": [
        {
          "tag": "timestamp",
          "description": "The timestamp of when the cohesion score was measured."
        }
      ],
      "unit": "score"
    },
    {
      "name": "agent_interaction_frequency",
      "description": "Tracks how often agents interact with each other during the simulation.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "The name of the agent."
        },
        {
          "tag": "interaction_type",
          "description": "Type of interaction, e.g., chat message, video call, collaborative task."
        }
      ],
      "unit": "interactions"
    },
    {
      "name": "collaboration_active_sessions",
      "description": "Counts the number of active collaboration sessions at a given time.",
      "type": "gauge",
      "tags": [
        {
          "tag": "session_id",
          "description": "Identifier for the collaboration session."
        }
      ],
      "unit": "sessions"
    },
    {
      "name": "average_response_time",
      "description": "Measures the average time taken by agents to respond to communications.",
      "type": "summary",
      "tags": [
        {
          "tag": "agent_name",
          "description": "The name of the agent."
        },
        {
          "tag": "communication_type",
          "description": "Type of communication, e.g., email, chat, video."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "task_completion_rate",
      "description": "Percentage of assigned tasks completed within the designated timeframe.",
      "type": "gauge",
      "tags": [
        {
          "tag": "team_member",
          "description": "The team member responsible for the task."
        },
        {
          "tag": "task_type",
          "description": "Type or category of task."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "team_satisfaction_score",
      "description": "Represents the overall satisfaction of team members with team cohesion and collaboration.",
      "type": "gauge",
      "tags": [
        {
          "tag": "timestamp",
          "description": "The timestamp of when the satisfaction score was recorded."
        }
      ],
      "unit": "score"
    },
    {
      "name": "agent_satisfaction",
      "description": "Measures the satisfaction level of individual agents regarding team environment.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "The name of the agent."
        }
      ],
      "unit": "score"
    },
    {
      "name": "communication_volume",
      "description": "Total number of communications exchanged during a period.",
      "type": "counter",
      "tags": [
        {
          "tag": "communication_method",
          "description": "Method of communication, e.g., chat, email, video call."
        },
        {
          "tag": "agent_name",
          "description": "The name of the agent involved."
        }
      ],
      "unit": "communications"
    },
    {
      "name": "collaboration_efficiency",
      "description": "Efficiency metric for collaboration sessions, e.g., time spent vs. output achieved.",
      "type": "histogram",
      "tags": [
        {
          "tag": "session_id",
          "description": "Identifier of the collaboration session."
        }
      ],
      "unit": "efficiency"
    },
    {
      "name": "agent_participation_rate",
      "description": "Fraction of team agents actively participating in collaborations or meetings.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "The name of the agent."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "team_cohesion_index",
      "description": "Composite score indicating the cohesion level of the team.",
      "type": "gauge",
      "tags": [
        {
          "tag": "timestamp",
          "description": "Time at which the cohesion index was measured."
        }
      ],
      "unit": "index"
    },
    {
      "name": "task_delay_time",
      "description": "Average delay time for task completion compared to planned schedule.",
      "type": "summary",
      "tags": [
        {
          "tag": "task_id",
          "description": "Identifier for the task."
        }
      ],
      "unit": "seconds"
    }
  ],
  "0e7839a0-d982-4d5f-8d41-efadf7d52352": [
    {
      "name": "risk_exposure_level",
      "description": "Assesses the overall risk exposure of the enterprise to cybersecurity threats.",
      "type": "gauge",
      "tags": [
        {
          "tag": "system_component",
          "description": "Component or asset being assessed."
        }
      ],
      "unit": "risk index"
    },
    {
      "name": "number_of_identified_threats",
      "description": "Counts the total number of cybersecurity threats identified during the assessment.",
      "type": "counter",
      "tags": [
        {
          "tag": "threat_type",
          "description": "Type of cybersecurity threat (e.g., malware, phishing, etc.)"
        }
      ],
      "unit": "threats"
    },
    {
      "name": "prioritized_risks_count",
      "description": "Tracks the number of risks prioritized for mitigation based on severity and likelihood.",
      "type": "gauge",
      "tags": [
        {
          "tag": "risk_category",
          "description": "Category of the risk (e.g., high, medium, low)."
        }
      ],
      "unit": "risks"
    },
    {
      "name": "mitigation_actions_taken",
      "description": "Counts the number of mitigation actions implemented during the simulation.",
      "type": "counter",
      "tags": [
        {
          "tag": "action_type",
          "description": "Type of mitigation action."
        }
      ],
      "unit": "actions"
    },
    {
      "name": "percentage_of_systems_scanned",
      "description": "Measures the proportion of enterprise systems scanned for vulnerabilities.",
      "type": "gauge",
      "tags": [
        {
          "tag": "system_type",
          "description": "Type of system (e.g., servers, endpoints)."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "mean_time_to_detect_threats",
      "description": "Average time taken to detect threats from initial occurrence to detection.",
      "type": "summary",
      "tags": [
        {
          "tag": "threat_type",
          "description": "Type of threat detected."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "mean_time_to_mitigate_threats",
      "description": "Average time taken to mitigate threats after detection.",
      "type": "summary",
      "tags": [
        {
          "tag": "threat_type",
          "description": "Type of threat mitigated."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "number_of_security_incidents",
      "description": "Counts the total number of security incidents during the simulation.",
      "type": "counter",
      "tags": [
        {
          "tag": "incident_type",
          "description": "Type of security incident."
        }
      ],
      "unit": "incidents"
    },
    {
      "name": "system_stability_score",
      "description": "Assessment of system stability over time, considering disruptions or failures.",
      "type": "gauge",
      "tags": [],
      "unit": "score"
    },
    {
      "name": "training_completion_percentage",
      "description": "Percentage of cybersecurity training modules completed by agents.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_id",
          "description": "Identifier of the agent."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "agent_response_time",
      "description": "Average response time of agents to cybersecurity alerts.",
      "type": "summary",
      "tags": [
        {
          "tag": "agent_id",
          "description": "Identifier of the agent."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "number_of_users_with_weak_passwords",
      "description": "Counts how many user accounts have passwords that do not meet security standards.",
      "type": "counter",
      "tags": [],
      "unit": "users"
    },
    {
      "name": "attack_surface_size",
      "description": "Estimated size of the enterprise's attack surface, indicating potential vulnerabilities.",
      "type": "gauge",
      "tags": [],
      "unit": "components"
    }
  ],
  "7a2ed574-14c9-4485-afe6-06fa2e5d52a6": [
    {
      "name": "supply_chain_resource_utilization",
      "description": "Tracks how efficiently supply chain resources like transportation, warehousing, and labor are used during risk mitigation activities.",
      "type": "gauge",
      "tags": [
        {
          "tag": "resource_type",
          "description": "Type of resource, e.g., transportation, warehouse, labor."
        },
        {
          "tag": "agent_name",
          "description": "Name of the agent managing or utilizing the resource."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "risk_mitigation_throughput",
      "description": "Measures the amount of risk mitigation actions implemented or the volume of supply chain throughput (e.g., units shipped or processed) over time during mitigation efforts.",
      "type": "counter",
      "tags": [
        {
          "tag": "action_type",
          "description": "Type of mitigation action or process, e.g., rerouting, inventory buffer."
        },
        {
          "tag": "agent_name",
          "description": "Name of the agent executing the mitigation."
        }
      ],
      "unit": "units"
    },
    {
      "name": "system_response_latency",
      "description": "Captures the time taken for the system to respond to risk detection or supply chain disruptions.",
      "type": "histogram",
      "tags": [
        {
          "tag": "event_type",
          "description": "Type of event, e.g., disruption detection, reroute initiated."
        },
        {
          "tag": "agent_name",
          "description": "Name of the agent responsible for the response."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "agent_interaction_frequency",
      "description": "Monitors how frequently agents interact or coordinate during risk mitigation.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Agent involved in interactions."
        },
        {
          "tag": "interaction_type",
          "description": "Type of interaction, e.g., communication, collaborative decision."
        }
      ],
      "unit": "interactions"
    },
    {
      "name": "risk_exposure_level",
      "description": "Assesses the level of exposure to supply chain risks for each agent or the entire system.",
      "type": "gauge",
      "tags": [
        {
          "tag": "risk_category",
          "description": "Category of risk, e.g., geopolitical, logistic, financial."
        },
        {
          "tag": "agent_name",
          "description": "Name of the agent or system component."
        }
      ],
      "unit": "risk index"
    },
    {
      "name": "mitigation_success_rate",
      "description": "Measures how often risk mitigation efforts successfully reduce vulnerabilities or disruptions.",
      "type": "gauge",
      "tags": [
        {
          "tag": "mitigation_strategy",
          "description": "Type of strategy used, e.g., diversification, inventory holding."
        },
        {
          "tag": "agent_name",
          "description": "Agent responsible for mitigation."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "system_stability",
      "description": "Evaluates how stable the supply chain system remains over time, especially under stress.",
      "type": "gauge",
      "tags": [
        {
          "tag": "time_period",
          "description": "Time period over which stability is measured."
        }
      ],
      "unit": "stability index"
    },
    {
      "name": "resource_depletion_rate",
      "description": "Tracks how raw materials or components are consumed during risk mitigation or normal operations.",
      "type": "histogram",
      "tags": [
        {
          "tag": "resource_type",
          "description": "Type of resource, e.g., raw materials, inventory."
        },
        {
          "tag": "agent_name",
          "description": "Agent managing or utilizing the resource."
        }
      ],
      "unit": "depletion per time"
    },
    {
      "name": "cost_efficiency_ratio",
      "description": "Compares the costs incurred in risk mitigation to the benefits or throughput gained.",
      "type": "gauge",
      "tags": [
        {
          "tag": "mitigation_strategy",
          "description": "Type of mitigation effort."
        },
        {
          "tag": "agent_name",
          "description": "Agent implementing the strategy."
        }
      ],
      "unit": "cost per unit"
    },
    {
      "name": "time_to_mitigate",
      "description": "Measures the time taken from risk detection to successful mitigation.",
      "type": "histogram",
      "tags": [
        {
          "tag": "risk_type",
          "description": "Type of risk detected."
        },
        {
          "tag": "agent_name",
          "description": "Agent responsible for mitigation."
        }
      ],
      "unit": "seconds"
    }
  ],
  "4106bd8c-7d78-489f-b1a0-caadf5f551d2": [
    {
      "name": "system_resources_utilization",
      "description": "Tracks the efficiency of resource usage by agents or system components during the simulation.",
      "type": "gauge",
      "tags": [
        {
          "tag": "resource_type",
          "description": "Type of resource such as energy, materials, or time."
        },
        {
          "tag": "agent_name",
          "description": "Name of the agent involved in resource utilization."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "output_throughput",
      "description": "Measures the amount of work or output generated by the system within a given timeframe.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent or system component."
        },
        {
          "tag": "output_type",
          "description": "Type of output or task."
        }
      ],
      "unit": "units"
    },
    {
      "name": "response_time",
      "description": "Captures the response latency of agents or system components to specific events or inputs.",
      "type": "histogram",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent or component."
        },
        {
          "tag": "event_type",
          "description": "Type of event or input triggering response."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "agent_interaction_frequency",
      "description": "Records how often agents interact with each other or with their environment.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        },
        {
          "tag": "interaction_type",
          "description": "Type of interaction (e.g., negotiation, cooperation, conflict)."
        }
      ],
      "unit": "interactions"
    },
    {
      "name": "decision_patterns",
      "description": "Analyzes decision-making patterns of agents under various circumstances.",
      "type": "summary",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        },
        {
          "tag": "decision_type",
          "description": "Category of decision made."
        }
      ],
      "unit": "categorical"
    },
    {
      "name": "emergent_behaviors",
      "description": "Identifies collective behaviors emerging from agents' interactions.",
      "type": "counter",
      "tags": [
        {
          "tag": "behavior_type",
          "description": "Type of emergent behavior observed."
        },
        {
          "tag": "agent_group",
          "description": "Group or cohort of agents involved."
        }
      ],
      "unit": "behaviors"
    },
    {
      "name": "goal_success_rate",
      "description": "Measures the percentage of successful goal achievements in the simulation.",
      "type": "gauge",
      "tags": [
        {
          "tag": "goal_name",
          "description": "Name of the goal or task."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "system_stability",
      "description": "Evaluates the stability of the system over time under various conditions.",
      "type": "gauge",
      "tags": [
        {
          "tag": "system_component",
          "description": "Component of the system being monitored."
        }
      ],
      "unit": "stability index"
    },
    {
      "name": "resource_depletion_rate",
      "description": "Tracks how quickly resources are consumed over time.",
      "type": "gauge",
      "tags": [
        {
          "tag": "resource_type",
          "description": "Type of resource."
        }
      ],
      "unit": "rate"
    },
    {
      "name": "adaptation_speed",
      "description": "Monitors how rapidly agents adapt to environmental changes or new conditions.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        },
        {
          "tag": "change_type",
          "description": "Type of environmental change."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "resilience_index",
      "description": "Measures the system’s ability to recover from disruptions.",
      "type": "gauge",
      "tags": [
        {
          "tag": "disruption_type",
          "description": "Type of disruption encountered."
        },
        {
          "tag": "system_part",
          "description": "Part of the system evaluated."
        }
      ],
      "unit": "index"
    },
    {
      "name": "agent_satisfaction_score",
      "description": "Assesses overall agent satisfaction or well-being within the simulation.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        }
      ],
      "unit": "score"
    },
    {
      "name": "output_quality_score",
      "description": "Measures the quality of the outputs or outcomes produced.",
      "type": "gauge",
      "tags": [
        {
          "tag": "output_type",
          "description": "Type of output."
        }
      ],
      "unit": "score"
    }
  ],
  "8802edef-9831-4d67-8d10-41865a7ba31e": [
    {
      "name": "startup_funding_amount",
      "description": "Total amount of funding received by the startup during the due diligence process.",
      "type": "counter",
      "tags": [
        {
          "tag": "fund_source",
          "description": "Source of funding, e.g., angel investor, VC, government grant."
        },
        {
          "tag": "currency",
          "description": "Currency of the funding amount."
        }
      ],
      "unit": "currency units"
    },
    {
      "name": "product_development_progress",
      "description": "Progress status of product or technology development, measured as a percentage.",
      "type": "gauge",
      "tags": [],
      "unit": "percent"
    },
    {
      "name": "market_validation_score",
      "description": "Score representing the level of market validation achieved, based on customer feedback, sales, or pilot programs.",
      "type": "gauge",
      "tags": [],
      "unit": "score"
    },
    {
      "name": "financial_risks_detected",
      "description": "Number of financial risks identified during due diligence.",
      "type": "counter",
      "tags": [
        {
          "tag": "risk_type",
          "description": "Type of financial risk, e.g., liquidity risk, valuation risk."
        }
      ],
      "unit": "risks"
    },
    {
      "name": "team_experience_score",
      "description": "Aggregate score reflecting the experience and expertise level of the team.",
      "type": "gauge",
      "tags": [],
      "unit": "score"
    },
    {
      "name": "regulatory_compliance_status",
      "description": "Number of regulatory or legal compliance issues identified.",
      "type": "counter",
      "tags": [
        {
          "tag": "issue_type",
          "description": "Type of compliance issue, e.g., licensing, patent, legal dispute."
        }
      ],
      "unit": "issues"
    },
    {
      "name": "technology_maturity_level",
      "description": "Level of technology development maturity, e.g., prototype, MVP, full-scale.",
      "type": "gauge",
      "tags": [],
      "unit": "level"
    },
    {
      "name": "customer_engagement_metrics",
      "description": "Number of active customers and engagement rate.",
      "type": "gauge",
      "tags": [],
      "unit": "customers"
    },
    {
      "name": "revenue_growth_rate",
      "description": "Monthly or quarterly revenue growth rate.",
      "type": "gauge",
      "tags": [],
      "unit": "percent"
    },
    {
      "name": "burn_rate",
      "description": "Monthly expenditure rate of the startup.",
      "type": "gauge",
      "tags": [],
      "unit": "currency units/month"
    },
    {
      "name": "investment_readiness_score",
      "description": "Overall score indicating the startup’s preparedness for investment based on multiple criteria.",
      "type": "gauge",
      "tags": [],
      "unit": "score"
    },
    {
      "name": "due_diligence_time",
      "description": "Total time taken to complete the due diligence process.",
      "type": "gauge",
      "tags": [],
      "unit": "hours"
    },
    {
      "name": "discovered_issues_count",
      "description": "Number of issues or concerns identified during due diligence.",
      "type": "counter",
      "tags": [],
      "unit": "issues"
    }
  ],
  "95e2606f-52b6-49b4-b848-5bb0715e8bf5": [
    {
      "name": "system_resource_utilization",
      "description": "Tracks how efficiently system resources, such as computing power or memory, are used during simulation.",
      "type": "gauge",
      "tags": [
        {
          "tag": "resource_type",
          "description": "Type of resource, e.g., CPU, Memory, Network"
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "task_throughput",
      "description": "Measures the number of tasks completed or processed per unit time, indicating system productivity.",
      "type": "counter",
      "tags": [
        {
          "tag": "task_type",
          "description": "Type of task processed, e.g., data processing, transaction handling"
        }
      ],
      "unit": "tasks/sec"
    },
    {
      "name": "response_latency",
      "description": "Captures the time taken for the system or agents to respond to a request or event, reflecting system responsiveness.",
      "type": "histogram",
      "tags": [
        {
          "tag": "event_type",
          "description": "Type of event, e.g., API call, database query"
        }
      ],
      "unit": "milliseconds"
    },
    {
      "name": "agent_interaction_frequency",
      "description": "Monitors how often agents interact with each other or with their environment, indicating engagement levels.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_role",
          "description": "Role of the agent, e.g., investor, founder, acquirer"
        }
      ],
      "unit": "interactions/session"
    },
    {
      "name": "decision_quality_score",
      "description": "Quantifies the effectiveness of decisions made by agents based on outcome metrics.",
      "type": "summary",
      "tags": [
        {
          "tag": "decision_type",
          "description": "Type of decision, e.g., exit strategy choice"
        }
      ],
      "unit": "score"
    },
    {
      "name": "success_rate",
      "description": "Measures how often the simulation achieves its primary goals, such as successful exit or market entry.",
      "type": "gauge",
      "tags": [
        {
          "tag": "goal_type",
          "description": "Type of goal, e.g., acquisition, IPO"
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "system_stability_index",
      "description": "Assesses the stability of the system over time, especially under changing or stressful conditions.",
      "type": "gauge",
      "tags": [],
      "unit": "index"
    },
    {
      "name": "resource_depletion_rate",
      "description": "Tracks the rate at which critical resources diminish during the simulation.",
      "type": "counter",
      "tags": [
        {
          "tag": "resource_type",
          "description": "Type of resource, e.g., capital, raw materials"
        }
      ],
      "unit": "resources"
    },
    {
      "name": "risk_exposure_level",
      "description": "Evaluates the level of risks agents or the system are exposed to during the simulation.",
      "type": "gauge",
      "tags": [],
      "unit": "risk index"
    },
    {
      "name": "adaptation_response_time",
      "description": "Measures how quickly agents or the system adapt to changes or disruptions.",
      "type": "histogram",
      "tags": [
        {
          "tag": "change_type",
          "description": "Type of environmental or system change"
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "agent_satisfaction_score",
      "description": "Quantifies the overall satisfaction or well-being of agents involved in the simulation.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_role",
          "description": "Role of the agent, e.g., investor, founder"
        }
      ],
      "unit": "scale"
    }
  ],
  "539486f9-5b1c-4f6d-8103-a3730c2bf242": [
    {
      "name": "group_travel_preference_alignment",
      "description": "Percentage of preferences that align across agents at the start of decision-making.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "group_travel_final_agreement_score",
      "description": "Average percentage of the final decision that aligns with each agent’s initial preferences.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "decision_iterations_count",
      "description": "Total number of decision-making iterations or rounds before final agreement.",
      "type": "counter",
      "tags": [
        {
          "tag": "simulation_id",
          "description": "Unique identifier for the simulation run."
        }
      ],
      "unit": "iterations"
    },
    {
      "name": "agent_influence_score",
      "description": "Percentage contribution of each agent’s preferences to the final decision.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "conflict_resolution_rate",
      "description": "Ratio of conflicts resolved during decision-making process.",
      "type": "gauge",
      "tags": [
        {
          "tag": "conflict_id",
          "description": "Identifier for each conflict instance."
        }
      ],
      "unit": "ratio"
    },
    {
      "name": "agent_compromise_index",
      "description": "Difference between initial and final preference satisfaction for each agent.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        }
      ],
      "unit": "satisfaction points"
    },
    {
      "name": "final_decision_satisfaction_score",
      "description": "Satisfaction level of each agent with the final decision (scale 1-10).",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        }
      ],
      "unit": "scale"
    },
    {
      "name": "decision_time_seconds",
      "description": "Time taken to reach final decision in seconds.",
      "type": "gauge",
      "tags": [
        {
          "tag": "simulation_id",
          "description": "Unique identifier for the simulation run."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "communication_efficiency",
      "description": "Average number of communications per iteration or overall to reach decision.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        }
      ],
      "unit": "messages"
    },
    {
      "name": "preference_risk_tolerance",
      "description": "Risk tolerance index for each agent regarding travel preferences.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        }
      ],
      "unit": "risk index"
    },
    {
      "name": "decision_stability_index",
      "description": "Likelihood of decision changing with new information or uncertainty.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        }
      ],
      "unit": "index"
    },
    {
      "name": "group_cohesion_index",
      "description": "Extent of group cohesion in reaching consensus.",
      "type": "gauge",
      "tags": [
        {
          "tag": "simulation_id",
          "description": "Unique identifier for the simulation run."
        }
      ],
      "unit": "index"
    }
  ],
  "e7da5faf-e1c6-430b-86b3-d57a48d2eb61": [
    {
      "name": "conflict_resolution_interaction_count",
      "description": "Counts how many times agents interact during conflict resolution processes.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent involved in the interaction."
        }
      ],
      "unit": "interactions"
    },
    {
      "name": "conflict_resolution_response_time",
      "description": "Measures the time taken for agents to respond to each other during conflict resolution.",
      "type": "histogram",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent responding."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "conflict_resolution_success_rate",
      "description": "Tracks the proportion of conflicts successfully resolved.",
      "type": "gauge",
      "tags": [
        {
          "tag": "conflict_id",
          "description": "Identifier for the specific conflict."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "agent_satisfaction_score",
      "description": "Quantifies each agent's satisfaction with the conflict resolution process.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        }
      ],
      "unit": "score"
    },
    {
      "name": "conflict_duration",
      "description": "Measures how long conflicts last in the system.",
      "type": "histogram",
      "tags": [
        {
          "tag": "conflict_id",
          "description": "Identifier for the specific conflict."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "conflict_resolution_time_to_goal",
      "description": "Tracks the time for the system to reach a conflict resolution goal.",
      "type": "summary",
      "tags": [
        {
          "tag": "conflict_id",
          "description": "Identifier for the specific conflict."
        }
      ],
      "unit": "seconds"
    }
  ],
  "28ead1a2-ea6c-4a7d-b190-0f0cb435ad6f": [
    {
      "name": "industry_emissions_reduction",
      "description": "Tracks the reduction in emissions achieved by the industry due to carbon tax policies.",
      "type": "gauge",
      "tags": [
        {
          "tag": "industry_name",
          "description": "Name of the industry or company."
        }
      ],
      "unit": "metric tons of CO2e"
    },
    {
      "name": "carbon_pricing_effectiveness",
      "description": "Measures the change in industry behavior in response to carbon pricing, such as investments in cleaner technologies.",
      "type": "gauge",
      "tags": [
        {
          "tag": "industry_name",
          "description": "Name of the industry or company."
        }
      ],
      "unit": "percentage change"
    },
    {
      "name": "agent_interaction_count",
      "description": "Counts the number of interactions between agents, such as negotiations or information exchanges.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent involved."
        }
      ],
      "unit": "interactions"
    },
    {
      "name": "policy_compliance_rate",
      "description": "Measures the percentage of industry agents complying with new regulations over time.",
      "type": "gauge",
      "tags": [
        {
          "tag": "industry_name",
          "description": "Name of the industry or company."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "emission_target_progress",
      "description": "Tracks progress towards emission reduction targets set within the simulation.",
      "type": "gauge",
      "tags": [
        {
          "tag": "target_name",
          "description": "Name of the specific emission reduction target or goal."
        }
      ],
      "unit": "percentage of target achieved"
    },
    {
      "name": "policy_enforcement_actions",
      "description": "Counts the number of enforcement actions taken by regulators.",
      "type": "counter",
      "tags": [
        {
          "tag": "regulator_name",
          "description": "Name of the regulator or enforcement body."
        }
      ],
      "unit": "actions"
    },
    {
      "name": "green_technology_investment",
      "description": "Measures investments made into green technologies by industry agents.",
      "type": "counter",
      "tags": [
        {
          "tag": "industry_name",
          "description": "Name of the industry or company."
        }
      ],
      "unit": "dollars"
    },
    {
      "name": "public_awareness_level",
      "description": "Assesses the level of public awareness or support for carbon tax policies.",
      "type": "gauge",
      "tags": [
        {
          "tag": "region",
          "description": "Geographical region or community."
        }
      ],
      "unit": "support index"
    },
    {
      "name": "system_stability_index",
      "description": "Evaluates the overall stability of the system during the simulation, including fluctuations in emission levels and economic indicators.",
      "type": "gauge",
      "tags": [],
      "unit": "index"
    }
  ],
  "95c48dd3-5a7e-45bc-9bba-76916c363997": [
    {
      "name": "emission_reduction_targets_met",
      "description": "Number of emission reduction targets successfully met by each nation.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the nation or agent."
        }
      ],
      "unit": "count"
    },
    {
      "name": "climate_negotiation_progress",
      "description": "Progress level of negotiations towards climate commitments, measured as a percentage.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the negotiating agent (e.g., country or organization)."
        }
      ],
      "unit": "percent"
    },
    {
      "name": "climate_commitment_agreement_score",
      "description": "Score indicating how well the final agreement aligns with initial commitments and goals.",
      "type": "summary",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent or country."
        }
      ],
      "unit": "score"
    },
    {
      "name": "agent_interaction_frequency",
      "description": "Frequency of interactions between agents to assess cooperation level.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_pair",
          "description": "Pair of agents involved in interactions."
        }
      ],
      "unit": "interactions"
    },
    {
      "name": "system_stability_index",
      "description": "Index measuring system stability over time, reflecting fluctuations in climate metrics or commitments.",
      "type": "gauge",
      "tags": [],
      "unit": "index"
    },
    {
      "name": "resource_utilization_efficiency",
      "description": "Efficiency of resource utilization (e.g., financial, technological support) during negotiations or implementation.",
      "type": "gauge",
      "tags": [],
      "unit": "percent"
    },
    {
      "name": "emission_deviation_from_target",
      "description": "Deviation of actual emissions from the targeted emission reduction levels.",
      "type": "gauge",
      "tags": [],
      "unit": "tons CO2e"
    },
    {
      "name": "policy_enforcement_level",
      "description": "Level of enforcement of climate policies, measured as an index.",
      "type": "gauge",
      "tags": [],
      "unit": "index"
    },
    {
      "name": "response_time_to_queries",
      "description": "Time taken for agents to respond to negotiation-related queries or requests.",
      "type": "histogram",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "diplomatic_trust_index",
      "description": "Trust level between agents, influencing cooperation and negotiation outcomes.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_pair",
          "description": "Pair of agents in a negotiation."
        }
      ],
      "unit": "trust_points"
    },
    {
      "name": "risk_exposure_level",
      "description": "Current level of risk exposure related to climate policies or implementation.",
      "type": "gauge",
      "tags": [],
      "unit": "index"
    },
    {
      "name": "adaptability_score",
      "description": "Score measuring how effectively agents adapt to changing negotiation environments or environmental conditions.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        }
      ],
      "unit": "score"
    },
    {
      "name": "satisfaction_with_outcome",
      "description": "Agent satisfaction score regarding negotiation results and commitments.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_name",
          "description": "Name of the agent."
        }
      ],
      "unit": "score"
    },
    {
      "name": "emission_reduction_progress",
      "description": "Progress in achieving emission reduction goals during implementation phase.",
      "type": "gauge",
      "tags": [],
      "unit": "percent"
    }
  ],
  "a90b8452-b637-45eb-ae8c-fa9000fb7ee5": [
    {
      "name": "carbon_neutral_achievement_ratio",
      "description": "Measures the proportion of business operations that have achieved carbon neutrality.",
      "type": "gauge",
      "tags": [
        {
          "tag": "time",
          "description": "The specific timestamp or time window the metric is recorded for."
        },
        {
          "tag": "area",
          "description": "The operational area or department within the company."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "resource_utilization_energy",
      "description": "Tracks the efficiency of energy resource utilization in company operations.",
      "type": "gauge",
      "tags": [
        {
          "tag": "resource_type",
          "description": "Type of energy resource (e.g., electricity, gas)."
        },
        {
          "tag": "department",
          "description": "Operational department utilizing the resource."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "carbon_reduction_effort",
      "description": "Quantifies the amount of carbon emissions reduced over a period due to sustainability initiatives.",
      "type": "counter",
      "tags": [
        {
          "tag": "initiative",
          "description": "Specific sustainability initiative or project name."
        },
        {
          "tag": "time",
          "description": "Time period during which the reduction was measured."
        }
      ],
      "unit": "metric tons CO2e"
    },
    {
      "name": "renewable_resource_usage_ratio",
      "description": "Percentage of resources used that are derived from renewable sources.",
      "type": "gauge",
      "tags": [
        {
          "tag": "resource_type",
          "description": "Type of renewable resource (e.g., solar, wind)."
        },
        {
          "tag": "department",
          "description": "Operational department or entity using the renewable resources."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "stakeholder_satisfaction_score",
      "description": "Average satisfaction score from stakeholders on sustainability performance.",
      "type": "summary",
      "tags": [
        {
          "tag": "stakeholder_group",
          "description": "Group of stakeholders surveyed (e.g., investors, community)."
        },
        {
          "tag": "survey_period",
          "description": "Time frame during which the satisfaction was measured."
        }
      ],
      "unit": "score"
    },
    {
      "name": "green_initiative_participation_rate",
      "description": "Proportion of employees or units participating in sustainability initiatives.",
      "type": "gauge",
      "tags": [
        {
          "tag": "initiative_name",
          "description": "Name of the sustainability initiative."
        },
        {
          "tag": "department",
          "description": "Department or team participating."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "carbon_neutral_milestone_reached_total",
      "description": "Total number of milestones achieved towards carbon neutrality.",
      "type": "counter",
      "tags": [
        {
          "tag": "milestone_name",
          "description": "Name of the milestone achieved."
        },
        {
          "tag": "date",
          "description": "Date of milestone achievement."
        }
      ],
      "unit": "count"
    },
    {
      "name": "system_ResponseTime_to_sustainability_events",
      "description": "Time taken for the system to respond to and implement sustainability-related events or triggers.",
      "type": "histogram",
      "tags": [
        {
          "tag": "event_type",
          "description": "Type of event that triggered response."
        },
        {
          "tag": "system_component",
          "description": "Component or subsystem responsible for the response."
        }
      ],
      "unit": "seconds"
    }
  ],
  "a645909e-3188-42c8-a5e6-89015635fd0b": [
    {
      "name": "resource_utilization",
      "description": "Tracks how efficiently resources such as energy, materials, and time are used by agents or within the system.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_role",
          "description": "The role of the agent, e.g., Product Designer, Waste Manager."
        },
        {
          "tag": "resource_type",
          "description": "Type of resource, e.g., energy, raw materials, time."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "system_throughput",
      "description": "Measures the amount of work or output generated by the system within a given time frame.",
      "type": "counter",
      "tags": [
        {
          "tag": "system_component",
          "description": "Part of the system such as a production line, process, or agent."
        }
      ],
      "unit": "units"
    },
    {
      "name": "response_time",
      "description": "Captures the response time of the system or agents responding to specific events or inputs.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_id",
          "description": "Identifier for the agent or system component."
        },
        {
          "tag": "event_type",
          "description": "Type of event or input being responded to."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "agent_interaction_frequency",
      "description": "Monitors how often agents interact with each other or with the environment.",
      "type": "counter",
      "tags": [
        {
          "tag": "agent_id",
          "description": "Identifier for the agent."
        },
        {
          "tag": "interaction_type",
          "description": "Type of interaction, e.g., communication, resource exchange."
        }
      ],
      "unit": "count"
    },
    {
      "name": "decision_making_patterns",
      "description": "Analyzes the decisions agents make under various conditions.",
      "type": "summary",
      "tags": [
        {
          "tag": "agent_id",
          "description": "Identifier for the agent."
        },
        {
          "tag": "condition",
          "description": "Condition or scenario under which decision is made."
        }
      ],
      "unit": "n/a"
    },
    {
      "name": "emergent_behaviors",
      "description": "Identifies patterns or behaviors that arise from the collective actions of agents.",
      "type": "counter",
      "tags": [
        {
          "tag": "behavior_type",
          "description": "Type of emergent behavior, e.g., predator-prey cycle, cooperation."
        }
      ],
      "unit": "count"
    },
    {
      "name": "success_rate",
      "description": "Measures how often the simulation reaches its intended goals or outcomes.",
      "type": "gauge",
      "tags": [
        {
          "tag": "goal_type",
          "description": "Type of goal, e.g., waste eliminated, resource recovered."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "system_stability",
      "description": "Evaluates the stability of the system over time, especially under stress or changing conditions.",
      "type": "gauge",
      "tags": [
        {
          "tag": "system_component",
          "description": "Component or subsystem being evaluated."
        }
      ],
      "unit": "stability index"
    },
    {
      "name": "resource_depletion_rate",
      "description": "Tracks how resources are consumed over time.",
      "type": "gauge",
      "tags": [
        {
          "tag": "resource_type",
          "description": "Type of resource, e.g., raw materials, energy."
        }
      ],
      "unit": "percentage"
    },
    {
      "name": "cost_efficiency",
      "description": "Compares the costs incurred to the benefits or outputs generated.",
      "type": "gauge",
      "tags": [
        {
          "tag": "cost_type",
          "description": "Type of cost, e.g., manufacturing, process."
        },
        {
          "tag": "benefit_type",
          "description": "Type of benefit, e.g., waste eliminated, resource recovered."
        }
      ],
      "unit": "cost per benefit unit"
    },
    {
      "name": "time_efficiency",
      "description": "Measures the time taken to achieve specific goals relative to the optimal time.",
      "type": "gauge",
      "tags": [
        {
          "tag": "process_stage",
          "description": "Stage of the process or task."
        }
      ],
      "unit": "seconds"
    },
    {
      "name": "risk_exposure",
      "description": "Assesses the potential risks the system or agents are exposed to.",
      "type": "gauge",
      "tags": [
        {
          "tag": "risk_type",
          "description": "Type of risk, e.g., operational, environmental."
        }
      ],
      "unit": "risk index"
    },
    {
      "name": "uncertainty_quantification",
      "description": "Evaluates how uncertainty in inputs affects outcomes.",
      "type": "summary",
      "tags": [
        {
          "tag": "input_variable",
          "description": "Variable contributing to uncertainty."
        }
      ],
      "unit": "uncertainty score"
    },
    {
      "name": "adaptation_rate",
      "description": "Monitors how quickly agents or the system adapts to environmental changes.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_id",
          "description": "Identifier for the agent."
        },
        {
          "tag": "change_type",
          "description": "Type of environmental change."
        }
      ],
      "unit": "adaptation index"
    },
    {
      "name": "system_resilience",
      "description": "Measures the system’s ability to recover from disruptions or shocks.",
      "type": "gauge",
      "tags": [
        {
          "tag": "disruption_type",
          "description": "Type of disruption, e.g., waste spike, resource shortage."
        }
      ],
      "unit": "resilience score"
    },
    {
      "name": "agent_satisfaction",
      "description": "Evaluates the overall satisfaction of agents with the system.",
      "type": "gauge",
      "tags": [
        {
          "tag": "agent_id",
          "description": "Identifier for the agent."
        }
      ],
      "unit": "satisfaction scale"
    },
    {
      "name": "output_quality",
      "description": "Measures the quality of the outputs produced, e.g., recycled material quality.",
      "type": "gauge",
      "tags": [
        {
          "tag": "output_type",
          "description": "Type of output, e.g., recycled product, recovered resource."
        }
      ],
      "unit": "quality score"
    }
  ]
} as const
