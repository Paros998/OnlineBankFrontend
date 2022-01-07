import React, { createContext, FC, ReactNode, useContext, useMemo } from 'react';
import { CyclicalTransferDisplayModel } from '../interfaces/CyclicalTransferDisplayModel';
import { useCurrentUser } from './CurrentUserContext';
import { ClientModel } from '../interfaces/DatabaseModels/ClientModel';
import { useFetchRawData } from '../hooks/useFetchRawData';
import { CyclicalTransferModel } from '../interfaces/DatabaseModels/CyclicalTransferModel';
import moment from 'moment';
import { KeyValueModel } from '../interfaces/DatabaseModels/KeyValueModel';
import { CyclicalTransferContextModel } from '../interfaces/CyclicalTransferContextModel';

const CyclicalTransferContext = createContext<unknown>(null);

export const useCyclicalTransfers = () => useContext(CyclicalTransferContext) as CyclicalTransferContextModel;

const useCyclicalTransferData = () => {
  const { currentUser } = useCurrentUser<ClientModel>();
  const {
    rawData: cyclicalTransfers,
    isPending,
    fetchData,
  } = useFetchRawData<CyclicalTransferModel[]>(`/cyclical-transfers/client/${currentUser?.clientId}`);

  const formattedCyclicalTransfers: CyclicalTransferDisplayModel[] = useMemo(() =>
    cyclicalTransfers?.map((cyclicalTransfer) => {
      return {
        ...cyclicalTransfer,
        displayAmount: `${(cyclicalTransfer.amount * -1).toFixed(2)} PLN`,
        displayReTransferDate: moment(cyclicalTransfer.reTransferDate).format('DD.MM'),
      };
    }) || [], [cyclicalTransfers]);

  return {
    data: formattedCyclicalTransfers,
    isPending,
    fetchData,
  };
};

const useCyclicalTransferEstimatedData = () => {
  const { currentUser } = useCurrentUser<ClientModel>();
  const {
    rawData: estimatedData,
    fetchData,
    isPending,
  } = useFetchRawData<KeyValueModel<string, { value: number, percentValue: number }>[]>(
    `/cyclical-transfers/client/${currentUser?.clientId}/estimate`,
  );

  const formattedEstimatedData = useMemo(() => {
    let totalSum = 0;

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
          totalSum = data.amount;
          return false;
        }
        return true;
      }) || [];

    return { newEstimatedData, totalSum };
  }, [estimatedData]);

  return {
    data: {
      totalSum: formattedEstimatedData.totalSum,
      values: formattedEstimatedData.newEstimatedData,
    },
    isPending,
    fetchData,
  };
};

interface CyclicalTransferProviderProps {
  children: ReactNode;
}

const CyclicalTransferProvider: FC<CyclicalTransferProviderProps> = ({ children }) => {
  const cyclicalTransfers = useCyclicalTransferData();
  const estimatedData = useCyclicalTransferEstimatedData();

  return (
    <CyclicalTransferContext.Provider value={{ cyclicalTransfers, estimatedData }}>
      {children}
    </CyclicalTransferContext.Provider>
  );
};

export default CyclicalTransferProvider;
