import { ClientModel } from '../DatabaseModels/ClientModel';

export interface EditCyclicalTransferFormikValues {
  transferId: number;
  amount: number;
  reTransferDate: string;
  category: string;
  receiver: string;
  accountNumber: string;
  title: string;
  client: ClientModel;
}
