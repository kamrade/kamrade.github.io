export type RuleVetoType = 'SENDER_BENEFICIARY_BIC' | 'CLIENT_ID' | 'SENDER_IBAN';
export type RuleVetoStatus = 'active' | 'expired';

// export type RuleVeloKey = 'id' | 'tenantId' | 'ruleId' | 'ruleVetoType' | 'referenceIdentifier' |
//   'status' | 'comments' | 'startDate' | 'expiryDate' | 'createdDate' | 'updatedDate' | 'createdBy' | 'updatedBy';

// export interface RuleVeto {
//   [key: string]: any;
// }


export interface RuleVeto {
  id: string;
  tenantId: number;
  ruleId: string;
  ruleVetoType: RuleVetoType;
  referenceIdentifier: string;
  status: RuleVetoStatus;
  comments: string;
  startDate?: string;
  expiryDate?: string;
  createdDate: string;
  updatedDate?: string;
  createdBy: string;
  updatedBy?: string;
}
