import moment from "moment";

export const getISODate = (date: string | Date, format?: string) => {
  const defaultFormat = 'DD.MM.YYYY HH:mm:ss';
  return moment(date, format || defaultFormat).toISOString();
};
