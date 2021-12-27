import { ClientModel } from "../DatabaseModels/ClientModel";

export interface TransferFormikValues {
  amount: number;
  transferDate: string;
  category: string;
  type: string;
  receiver_sender: string;
  title: string;
  toAccountNumber: string;
  client: ClientModel;
  isCyclicalTransfer: boolean;
}
