import { TransferModel } from "../interfaces/DatabaseModels/TransferModel";
import { getDefaultRowStyle } from "../utils/getDefaultRowStyle";

export const defaultColumnStyle = {
  headerAlign: 'center',
  headerClasses: 'border-top text-dark',
  classes: (cell: TransferModel, row: TransferModel, rowIndex: number) => {
    return getDefaultRowStyle(rowIndex);
  },
}
