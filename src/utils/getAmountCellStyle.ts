import { defaultRowStyle } from '../constants/defaultRowStyle';

export const getAmountCellStyle = (cell: string) => {
  if (!cell.includes('-')) {
    return `${defaultRowStyle} text-success`;
  }
  return `${defaultRowStyle}`;
};
