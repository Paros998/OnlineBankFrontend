import { CyclicalTransferDisplayModel } from '../../../../../interfaces/formik/CyclicalTransferDisplayModel';
import { CyclicalTransferModel } from '../../../../../interfaces/DatabaseModels/CyclicalTransferModel';

export const getPreviousCyclicalTransferData = (displayData: CyclicalTransferDisplayModel) => {
  const previousData: Partial<CyclicalTransferDisplayModel> = { ...displayData };

  delete previousData.displayReTransferDate;
  delete previousData.displayAmount;

  return previousData as CyclicalTransferModel;
};
