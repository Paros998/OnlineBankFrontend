import moment from "moment";

export const getTodayDate = (format?: string) => moment(new Date(Date.now())).format(format || 'DD.MM.YYYY HH:mm:ss');
