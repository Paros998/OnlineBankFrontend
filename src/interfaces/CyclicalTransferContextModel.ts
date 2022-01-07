import { CyclicalTransferDisplayModel } from './CyclicalTransferDisplayModel';
import { CyclicalTransferEstimatedData } from './CyclicalTransferEstimatedData';

interface CyclicalTransferReturnModel<T> {
  data: T;
  isPending: boolean;
  fetchData: (params?: unknown) => Promise<void>;
}

export interface CyclicalTransferContextModel {
  cyclicalTransfers: CyclicalTransferReturnModel<CyclicalTransferDisplayModel[]>;
  estimatedData: CyclicalTransferReturnModel<CyclicalTransferEstimatedData>;
}
