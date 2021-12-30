import { ClientModel } from "./ClientModel";

export interface TransferModel {
  transferId: number;
  amount: number | string;
  transferDate: string;
  category: string;
  type: string;
  receiver_sender: string;
  title: string;
  toAccountNumber: string;
  client: ClientModel;
}
