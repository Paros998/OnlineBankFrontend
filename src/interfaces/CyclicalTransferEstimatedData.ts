export interface CyclicalTransferEstimatedValues {
  category: string;
  amount: number;
  percent: number;
}

export interface CyclicalTransferEstimatedData {
  values: CyclicalTransferEstimatedValues[];
  totalSum: number;
}
