import { transferCategoryClassNames } from '../constants/transferCategoryClassNames';
import { defaultRowStyle } from '../constants/defaultRowStyle';

export const getCategoryCellStyle = (cell: string) => {
  return `${defaultRowStyle} ${transferCategoryClassNames[cell]}`;
};
