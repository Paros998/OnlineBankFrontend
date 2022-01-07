import { ContextSubDataModel } from './ContextSubDataModel';
import { TransferDisplayModel } from './TransferDisplayModel';
import { TransferEstimatedData } from './TransferEstimatedData';

export interface HistoryContextModel {
  transfers: ContextSubDataModel<TransferDisplayModel[]>;
  estimatedData: ContextSubDataModel<TransferEstimatedData>;
}
