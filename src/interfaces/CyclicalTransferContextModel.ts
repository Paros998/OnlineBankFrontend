import { CyclicalTransferDisplayModel } from './CyclicalTransferDisplayModel';
import { CyclicalTransferEstimatedData } from './CyclicalTransferEstimatedData';
import { ContextSubDataModel } from './ContextSubDataModel';

export interface CyclicalTransferContextModel {
  cyclicalTransfers: ContextSubDataModel<CyclicalTransferDisplayModel[]>;
  estimatedData: ContextSubDataModel<CyclicalTransferEstimatedData>;
}
