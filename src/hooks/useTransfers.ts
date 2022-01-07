import { useMemo } from "react";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import { ClientModel } from "../interfaces/DatabaseModels/ClientModel";
import { useFetchRawData } from "./useFetchRawData";
import { TransferModel } from "../interfaces/DatabaseModels/TransferModel";
import { getFormattedTransferDate } from "../views/ClientAuthorisedViews/History/utils/getFormattedTransferDate";
import { getFormattedAmount } from "../views/ClientAuthorisedViews/History/utils/getFormattedAmount";
import { TransferTypes } from "../enums/TransferTypes";
import { HistorySearchFormikValues } from "../interfaces/formik/HistorySearchFormikValues";
import { TransferDisplayModel } from '../interfaces/TransferDisplayModel';

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
