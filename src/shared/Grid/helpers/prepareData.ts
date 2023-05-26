import { RuleVeto, RuleVetoFields } from '../data/rule-veto.types';
import { ISortedBy } from '../grid.types';

// TODO: implementation
// Here is the place where data should be - sorted, filtered, paginated, calculate statistic
export const prepareData = (data: RuleVeto[], sortedBy: ISortedBy) => {

  console.log(sortedBy);

  return data.sort((a: RuleVeto, b: RuleVeto) => {
    // console.log(a[sortedBy.column as RuleVetoFields]);
    // console.log(b[sortedBy.column as RuleVetoFields]);
    return 0;
  })

  return [...data];
}
