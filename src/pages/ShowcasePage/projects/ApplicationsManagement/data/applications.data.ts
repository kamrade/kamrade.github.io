export type ApplicationStatus = 'OPEN' | 'PENDING_ON_CUSTOMER' | 'PENDING_ONBOARDING_COMPLIANCE' | 'PENDING_SALES_TEAM' | 'CLIENT_INFORMED';

export type RiskScore = 'NOT_PERFORMED' | 'LOW_RISK' | 'MEDIUM_RISK' | 'HIGH_RISK' | 'REJECTED';

export interface IApplication {
  id: string;
  name: string;
  status: ApplicationStatus;
  assignedTo: string;
  riskScore: RiskScore;
}

export const applicationsData: IApplication[] = [{
  id: '0001-0001-0001',
  name: 'Johnas Begeroff',
  status: 'OPEN',
  assignedTo: 'Ric Sole',
  riskScore: 'NOT_PERFORMED',
}, {
  id: '0001-0001-0002',
  name: 'Stephen Gillroy',
  status: 'PENDING_ON_CUSTOMER',
  assignedTo: 'Dennis Rodman',
  riskScore: 'LOW_RISK',
}];

