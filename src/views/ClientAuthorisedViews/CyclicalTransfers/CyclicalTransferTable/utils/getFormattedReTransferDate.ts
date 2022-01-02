import moment from 'moment';

export const getFormattedReTransferDate = (date: string) => moment(date, 'DD.MM.YYYY',).toDate().toString()
