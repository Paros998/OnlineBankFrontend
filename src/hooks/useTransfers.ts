import { useMemo } from "react";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import { ClientModel } from "../interfaces/DatabaseModels/ClientModel";
import { useFetchRawData } from "./useFetchRawData";
import { TransferModel } from "../interfaces/DatabaseModels/TransferModel";
import { TransferTypes } from "../enums/TransferTypes";
import { HistorySearchFormikValues } from "../interfaces/formik/HistorySearchFormikValues";
import { TransferDisplayModel } from '../interfaces/TransferDisplayModel';
import moment from 'moment';
import { getTodayDate } from '../utils/getTodayDate';

const getFormattedTransferDate = (date: string) => {
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

const getFormattedAmount = (amount: number, type: TransferTypes) => {
  return `${(type === TransferTypes.Outgoing ? amount * -1 : amount).toFixed(2)} PLN`;
};

export const useTransfers = (params?: HistorySearchFormikValues, areRecentTransfers?: boolean) => {
  const { currentUser } = useCurrentUser<ClientModel>();

  const endpoint = areRecentTransfers
    ? `/transfers/recent/client/${currentUser?.clientId}`
    : `/transfers/client/${currentUser?.clientId}`;

  const {
    rawData: transfers,
    isPending,
    fetchData
  } = useFetchRawData<TransferModel[]>(endpoint, params);

  const formattedTransfers: TransferDisplayModel[] = useMemo(() =>
    transfers?.map((transfer) =>
      (
        {
          ...transfer,
          displayAmount: getFormattedAmount(transfer.amount as number, transfer.type as TransferTypes),
          displayTransferDate: getFormattedTransferDate(transfer.transferDate),
        }
      )
    ) || [], [transfers]);

  return { data: formattedTransfers, isPending, fetchData };
};
