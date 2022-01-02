import { useMemo } from "react";
import { useCurrentUser } from "../../../../contexts/CurrentUserContext";
import { ClientModel } from "../../../../interfaces/DatabaseModels/ClientModel";
import { useFetchRawData } from "../../../../hooks/useFetchRawData";
import { TransferModel } from "../../../../interfaces/DatabaseModels/TransferModel";
import { getFormattedTransferDate } from "../utils/getFormattedTransferDate";
import { getFormattedAmount } from "../utils/getFormattedAmount";
import { TransferTypes } from "../../../../enums/TransferTypes";
import { HistorySearchFormikValues } from "../../../../interfaces/formik/HistorySearchFormikValues";
import { TransferDisplayModel } from '../../../../interfaces/TransferDisplayModel';

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
    ) || [], [transfers, getFormattedTransferDate]);

  return { formattedTransfers: formattedTransfers, isPending, fetchTransfers: fetchData };
};
