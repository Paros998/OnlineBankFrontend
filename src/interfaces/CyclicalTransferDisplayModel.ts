import { CyclicalTransferModel } from './DatabaseModels/CyclicalTransferModel';

export interface CyclicalTransferDisplayModel extends CyclicalTransferModel {
  displayReTransferDate: string;
  displayAmount: string;
}
