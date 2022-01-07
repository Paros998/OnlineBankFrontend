import { EstimatedValues } from './EstimatedValues';

export interface TransferEstimatedData {
  values: EstimatedValues[];
  income: EstimatedValues;
  outgo: EstimatedValues;
}
