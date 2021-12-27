import moment from "moment";

export const getTodayDate = () => moment(new Date(Date.now())).format('DD.MM.YYYY HH:mm:ss');
