import { LoanModel } from './DatabaseModels/LoanModel';
import { NewLoanFormikValues } from './formik/NewLoanFormikValues';

export interface LoanContextModel {
  currentLoan: LoanModel;
  isPending: boolean;
  isPayLoanPending: boolean;
  handlePayLoanRate: () => Promise<void>;
  handleCheckCreditWorthiness: (values: NewLoanFormikValues) => Promise<void>;
}
