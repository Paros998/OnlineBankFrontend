import moment from "moment";
import { getTodayDate } from "../../../../../utils/getTodayDate";

export const getFormattedTransferDate = (date: string) => {
  const momentDate = moment(date).format('DD.MM.YYYY');
  const yesterday = moment(getTodayDate(), 'DD.MM.YYYY').add(-1, 'days').format('DD.MM.YYYY');
  const today = moment(getTodayDate(), 'DD.MM.YYYY').format('DD.MM.YYYY');

  if (momentDate === today) {
    return 'Dzisiaj';
  } else if (momentDate === yesterday) {
    return 'Wczoraj';
  }
  return momentDate;
};
