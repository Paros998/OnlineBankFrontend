import React, { createContext, FC, ReactNode, useContext, useMemo } from 'react';
import { useTransfers } from '../hooks/useTransfers';
import { useCurrentUser } from './CurrentUserContext';
import { ClientModel } from '../interfaces/DatabaseModels/ClientModel';
import { useFetchRawData } from '../hooks/useFetchRawData';
import { KeyValueModel } from '../interfaces/DatabaseModels/KeyValueModel';
import { HistoryContextModel } from '../interfaces/HistoryContextModel';
import { EstimatedValues } from '../interfaces/EstimatedValues';

const HistoryContext = createContext<unknown>(null);

export const useHistory = () => useContext(HistoryContext) as HistoryContextModel;

const useHistoryEstimatedData = () => {
  const { currentUser } = useCurrentUser<ClientModel>();
  const {
    rawData: estimatedData,
    fetchData,
    isPending,
  } = useFetchRawData<KeyValueModel<string, { value: number, percentValue: number }>[]>(
    `/transfers/client/${currentUser?.clientId}/1-month-history`,
  );

  const formattedEstimatedData = useMemo(() => {
    let income;
    let outgo;

    const newEstimatedData = estimatedData
      ?.map((data) => {
        return {
          amount: Number(data.value.value.toFixed(2)),
          category: data.key,
          percent: data.value.percentValue,
        };
      })
      ?.filter((data) => {
        if (data.category === 'Suma Wydatków') {
          outgo = data;
          return false;
        } else if (data.category === 'Suma Przychodów') {
          income = data;
          return false;
        }
        return true;
      }) || [];

    return { newEstimatedData, income, outgo };
  }, [estimatedData]);

  return {
    data: {
      income: formattedEstimatedData.income || {} as EstimatedValues,
      outgo: formattedEstimatedData.outgo || {} as EstimatedValues,
      values: formattedEstimatedData.newEstimatedData,
    },
    isPending,
    fetchData,
  };
};

interface HistoryProviderProps {
  children: ReactNode;
}

const HistoryProvider: FC<HistoryProviderProps> = ({ children }) => {
  const transfers = useTransfers();
  const estimatedData = useHistoryEstimatedData();

  return (
    <HistoryContext.Provider value={{ transfers, estimatedData }}>
      {children}
    </HistoryContext.Provider>
  );
};

export default HistoryProvider;
