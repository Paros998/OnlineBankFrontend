import { TransferModel } from './DatabaseModels/TransferModel';

export interface TransferDisplayModel extends TransferModel {
  displayTransferDate: string;
  displayAmount: string;
}
