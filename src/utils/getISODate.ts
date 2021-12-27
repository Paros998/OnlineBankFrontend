import moment from "moment";

export const getISODate = (date: string | Date) => moment(date, 'DD.MM.YYYY HH:mm:ss').toISOString();
