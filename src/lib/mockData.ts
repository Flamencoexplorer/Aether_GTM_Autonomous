export interface Metric {
  label: string;
  value: string;
  change?: string;
  changeType?: 'increase' | 'decrease';
}
export const mockMetrics: Metric[] = [
  { label: 'BUDGET', value: '$200,000' },
  { label: 'SPEND', value: '$76,591' },
  { label: 'CAC TARGET', value: '$15,000' },
  { label: 'CURRENT CAC', value: '$12,831' },
  { label: 'PIPELINE', value: '$450,000' },
  { label: 'CLOSED WON', value: '6' },
];
export interface MissionParameter {
  label: string;
  value: string;
}
export const mockMissionParameters: MissionParameter[] = [
  { label: 'MISSION GOAL', value: 'Acquire 10 enterprise SaaS customers in Q4' },
  { label: 'TOTAL BUDGET', value: '$200,000' },
  { label: 'RISK TOLERANCE', value: 'MEDIUM' },
  { label: 'BRAND VOICE', value: 'Professional, Innovative' },
];
export interface Escalation {
  id: string;
  agent: string;
  reason: string;
  details: string;
  timestamp: string;
}
export const mockEscalations: Escalation[] = [
  {
    id: 'ESC-001',
    agent: 'DEAL DESK AGENT',
    reason: 'DISCOUNT > 20%',
    details: 'Prospect "Innovate Inc." requests a 25% discount on a $150k annual contract. Standard policy allows for 20%.',
    timestamp: '2m ago',
  },
  {
    id: 'ESC-002',
    agent: 'SDO AGENT',
    reason: 'API QUOTA EXCEEDED',
    details: 'LinkedIn API daily connection request limit reached. Pausing campaign "SaaS Leaders Q4". Manual action may be required.',
    timestamp: '1h ago',
  },
];
export interface Event {
  id: string;
  timestamp: string;
  agent: string;
  action: string;
  status: 'OK' | 'WARN' | 'FAIL' | 'INFO';
}
export const mockEvents: Event[] = [
  { id: 'EVT-3456', timestamp: '10:45:12Z', agent: 'ORCHESTRATOR', action: 'Mission Start: Q4 Enterprise Acquisition', status: 'OK' },
  { id: 'EVT-3457', timestamp: '10:45:13Z', agent: 'FINOPS AGENT', action: 'Budget of $200,000 allocated.', status: 'INFO' },
  { id: 'EVT-3458', timestamp: '10:46:20Z', agent: 'SDO AGENT', action: 'Initiated prospect scan on Crunchbase API.', status: 'OK' },
  { id: 'EVT-3459', timestamp: '10:48:55Z', agent: 'SDO AGENT', action: 'Identified 250 potential prospects matching ICP.', status: 'OK' },
  { id: 'EVT-3460', timestamp: '10:49:01Z', agent: 'SDO AGENT', action: 'Launched hyper-personalized outreach campaign "SaaS Leaders Q4".', status: 'OK' },
  { id: 'EVT-3461', timestamp: '11:15:34Z', agent: 'ENGAGEMENT AGENT', action: 'New response from prospect: sarah@innovate.com', status: 'INFO' },
  { id: 'EVT-3462', timestamp: '11:16:02Z', agent: 'ENGAGEMENT AGENT', action: 'Initiated conversation workflow for "Innovate Inc."', status: 'OK' },
  { id: 'EVT-3463', timestamp: '11:30:05Z', agent: 'DEAL DESK AGENT', action: 'Generated proposal for "Innovate Inc." Deal value: $150,000.', status: 'OK' },
  { id: 'EVT-3464', timestamp: '11:32:19Z', agent: 'DEAL DESK AGENT', action: 'Escalation Triggered: Discount request exceeds policy threshold.', status: 'WARN' },
  { id: 'EVT-3465', timestamp: '12:05:00Z', agent: 'SDO AGENT', action: 'LinkedIn API Quota Exceeded. Pausing campaign.', status: 'FAIL' },
];
// New Mock Data for Phase 2
export type LogLevel = 'INFO' | 'WARN' | 'ERROR' | 'DEBUG';
export type AgentName = 'ORCHESTRATOR' | 'SDO AGENT' | 'ENGAGEMENT AGENT' | 'DEAL DESK AGENT' | 'FINOPS AGENT' | 'EXPANSION AGENT';
export interface AgentLog {
  id: string;
  timestamp: string;
  agent: AgentName;
  level: LogLevel;
  message: string;
  payload?: Record<string, any>;
}
export const mockAgentLogs: AgentLog[] = [
  { id: 'LOG-001', timestamp: '10:45:12.123Z', agent: 'ORCHESTRATOR', level: 'INFO', message: 'Mission received. Parsing payload.' },
  { id: 'LOG-002', timestamp: '10:45:12.456Z', agent: 'ORCHESTRATOR', level: 'DEBUG', message: 'Initializing subordinate agents.', payload: { agents: ['SDO', 'ENGAGEMENT', 'DEAL_DESK', 'FINOPS', 'EXPANSION'] } },
  { id: 'LOG-003', timestamp: '10:45:13.789Z', agent: 'FINOPS AGENT', level: 'INFO', message: 'Budget allocated.', payload: { amount: 200000, currency: 'USD' } },
  { id: 'LOG-004', timestamp: '10:46:20.111Z', agent: 'SDO AGENT', level: 'INFO', message: 'Starting prospect search.' },
  { id: 'LOG-005', timestamp: '10:47:30.222Z', agent: 'SDO AGENT', level: 'DEBUG', message: 'Crunchbase API request sent.', payload: { query: 'SaaS, >$10M ARR' } },
  { id: 'LOG-006', timestamp: '10:48:55.333Z', agent: 'SDO AGENT', level: 'INFO', message: 'Prospect list generated.', payload: { count: 250 } },
  { id: 'LOG-007', timestamp: '11:32:19.444Z', agent: 'DEAL DESK AGENT', level: 'WARN', message: 'Policy threshold exceeded: discount.', payload: { prospect: 'Innovate Inc.', requestedDiscount: 0.25, policyMax: 0.20 } },
  { id: 'LOG-008', timestamp: '11:32:19.555Z', agent: 'DEAL DESK AGENT', level: 'INFO', message: 'Escalation created for HITL review.', payload: { escalationId: 'ESC-001' } },
  { id: 'LOG-009', timestamp: '12:05:00.666Z', agent: 'SDO AGENT', level: 'ERROR', message: 'Failed to execute campaign step.', payload: { reason: 'LinkedIn API Quota Exceeded' } },
  { id: 'LOG-010', timestamp: '12:05:00.777Z', agent: 'ORCHESTRATOR', level: 'WARN', message: 'Subordinate agent reported failure. Pausing relevant tasks.', payload: { agent: 'SDO AGENT' } },
];
export interface AnalyticsDataPoint {
  month: string;
  pipeline: number;
  cac: number;
  ltv: number;
}
export const mockAnalyticsData: AnalyticsDataPoint[] = [
  { month: 'Jan', pipeline: 120000, cac: 18000, ltv: 90000 },
  { month: 'Feb', pipeline: 150000, cac: 17500, ltv: 92000 },
  { month: 'Mar', pipeline: 220000, cac: 16000, ltv: 110000 },
  { month: 'Apr', pipeline: 200000, cac: 15500, ltv: 115000 },
  { month: 'May', pipeline: 280000, cac: 14000, ltv: 130000 },
  { month: 'Jun', pipeline: 350000, cac: 13500, ltv: 150000 },
  { month: 'Jul', pipeline: 450000, cac: 12831, ltv: 165000 },
];