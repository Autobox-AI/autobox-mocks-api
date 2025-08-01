#!/usr/bin/env python3
import json

# Read the snapshots data
with open('/Users/martin.dagostino/workspace/margostino/autobox/autobox-mocks/snapshots/metric_values_by_run.json', 'r') as f:
    snapshots = json.load(f)

# Define descriptions and tag definitions for known metrics
metric_definitions = {
    'group_decision_conflicts': {
        'description': 'Number of conflicts or disagreements during group decision-making.',
        'tag_definitions': [{'description': 'Identifier for the group of agents involved in the decision process.', 'tag': 'agent_group'}]
    },
    'agent_interaction_frequency': {
        'description': 'Number of interactions (communications, meetings) per agent.',
        'tag_definitions': [{'description': 'Name or identifier of the agent.', 'tag': 'agent_name'}]
    },
    'preference_alignment_score': {
        'description': 'Degree of similarity in preferences among agents at decision start/end.',
        'tag_definitions': [{'description': 'Identifier for the group of agents.', 'tag': 'agent_group'}]
    },
    'decision_iterations': {
        'description': 'Number of iterations or steps taken to reach consensus.',
        'tag_definitions': []
    },
    'decision_response_time': {
        'description': 'Time taken for the group to reach a decision.',
        'tag_definitions': []
    },
    'agent_satisfaction_score': {
        'description': 'Satisfaction level of agents with the final decision.',
        'tag_definitions': [{'description': 'Identifier for each agent.', 'tag': 'agent_name'}]
    },
    'final_agreement_percentage': {
        'description': 'Percentage of agents who agree with the final decision.',
        'tag_definitions': []
    },
    'decision_time': {
        'description': 'Total time to reach a decision.',
        'tag_definitions': []
    },
    'workout_compliance_rate': {
        'description': 'Rate of workout compliance.',
        'tag_definitions': [{'description': 'Name or identifier of the agent.', 'tag': 'agent_name'}]
    },
    'motivation_level': {
        'description': 'Motivation level of agents.',
        'tag_definitions': [{'description': 'Name or identifier of the agent.', 'tag': 'agent_name'}]
    },
    'exercise_intensity': {
        'description': 'Exercise intensity level.',
        'tag_definitions': [{'description': 'Name or identifier of the agent.', 'tag': 'agent_name'}]
    }
}

def transform_metric(metric, run_id, simulation_id):
    definition = metric_definitions.get(metric['name'], {'description': metric['name'], 'tag_definitions': []})
    
    # Transform data points
    transformed_data = []
    for point in metric['data']:
        # Convert tags array to object and add run/simulation IDs
        tags = {'run_id': run_id, 'simulation_id': simulation_id}
        if 'tags' in metric and metric['tags']:
            for tag in metric['tags']:
                tags[tag['key']] = tag['value']
        
        # Handle different data point structures
        transformed_point = {
            'time': point['dt'].replace('+00:00', 'Z'),
            'tags': tags
        }
        
        # For simple counter/gauge metrics
        if 'value' in point:
            transformed_point['value'] = point['value']
        
        # For histogram metrics
        if 'count' in point and 'sum' in point and 'buckets' in point:
            transformed_point.update({
                'count': point['count'],
                'sum': point['sum'],
                'buckets': point['buckets']
            })
        
        # For summary metrics
        if 'quantiles' in point:
            transformed_point.update({
                'count': point.get('count', 0),
                'sum': point.get('sum', 0),
                'quantiles': point['quantiles']
            })
        
        transformed_data.append(transformed_point)
    
    return {
        'name': metric['name'],
        'description': definition['description'],
        'tag_definitions': definition['tag_definitions'],
        'unit': metric.get('unit', 'count'),
        'type': metric['type'].upper(),
        'data': transformed_data
    }

# Transform the data
transformed = {}
for run_id, metrics in snapshots.items():
    simulation_id = '43419666-8307-4afa-96be-32400e855cc4'  # Default simulation ID
    transformed[run_id] = [transform_metric(metric, run_id, simulation_id) for metric in metrics]

# Write the transformed data as TypeScript
output = 'export const metricValues = ' + json.dumps(transformed, indent=2)
print(output)