import { useMemo } from 'react';
import moment from 'moment';
import { useCurrentUser } from '../contexts/CurrentUserContext';
import { ClientModel } from '../interfaces/DatabaseModels/ClientModel';
import { useFetchRawData } from './useFetchRawData';
import { TransferModel } from '../interfaces/DatabaseModels/TransferModel';
import { TransferTypes } from '../enums/TransferTypes';
import { HistorySearchFormikValues } from '../interfaces/formik/HistorySearchFormikValues';
import { TransferDisplayModel } from '../interfaces/TransferDisplayModel';

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
          transferDate: moment(transfer.transferDate).format('DD.MM.YYYY'),
          displayAmount: getFormattedAmount(transfer.amount as number, transfer.type as TransferTypes),
        }
      )
    ) || [], [transfers]);

  return { data: formattedTransfers, isPending, fetchData };
};
