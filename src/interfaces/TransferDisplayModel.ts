import { TransferModel } from './DatabaseModels/TransferModel';

export interface TransferDisplayModel extends TransferModel {
  displayAmount: string;
}
