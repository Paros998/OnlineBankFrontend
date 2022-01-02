import { useMemo } from "react";
import { useCurrentUser } from "../../../../contexts/CurrentUserContext";
import { ClientModel } from "../../../../interfaces/DatabaseModels/ClientModel";
import { useFetchRawData } from "../../../../hooks/useFetchRawData";
import { TransferModel } from "../../../../interfaces/DatabaseModels/TransferModel";
import { getFormattedTransferDate } from "../utils/getFormattedTransferDate";
import { getFormattedAmount } from "../utils/getFormattedAmount";
import { TransferTypes } from "../../../../enums/TransferTypes";
import { HistorySearchFormikValues } from "../../../../interfaces/formik/HistorySearchFormikValues";

export const useTransfers = (params?: HistorySearchFormikValues) => {
  const { currentUser } = useCurrentUser<ClientModel>();
  const {
    rawData: transfers,
    isPending,
    fetchData
  } = useFetchRawData<TransferModel[]>(`/transfers/client/${currentUser?.clientId}`, params);

  const formattedTransfers = useMemo(() =>
    transfers?.map((transfer) =>
      (
        {
          ...transfer,
          amount: getFormattedAmount(transfer.amount as number, transfer.type as TransferTypes),
          transferDate: getFormattedTransferDate(transfer.transferDate),
        }
      )
    ), [transfers, getFormattedTransferDate]) as TransferModel[];

  return { formattedTransfers: formattedTransfers, isPending, fetchTransfers: fetchData };
};
