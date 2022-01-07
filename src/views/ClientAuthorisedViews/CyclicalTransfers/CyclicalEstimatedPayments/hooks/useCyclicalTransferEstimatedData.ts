import { useFetchRawData } from '../../../../../hooks/useFetchRawData';
import { KeyValueModel } from '../../../../../interfaces/DatabaseModels/KeyValueModel';
import { useCurrentUser } from '../../../../../contexts/CurrentUserContext';
import { ClientModel } from '../../../../../interfaces/DatabaseModels/ClientModel';
import { CyclicalTransferEstimatedValues } from '../../../../../interfaces/CyclicalTransferEstimatedData';

export const useCyclicalTransferEstimatedData = () => {
  const { currentUser } = useCurrentUser<ClientModel>();
  const {
    rawData: estimatedData,
    fetchData: fetchEstimatedData
  } = useFetchRawData<KeyValueModel<string, { value: number, percentValue: number }>[]>(
    `/cyclical-transfers/client/${currentUser?.clientId}/estimate`,
  );

  const formattedEstimatedValues: CyclicalTransferEstimatedValues[] = estimatedData?.map((data) => {
    return {
      amount: Number(data.value.value.toFixed(2)),
      category: data.key,
      percent: data.value.percentValue,
    };
  }) || [];

  return {
    totalSum: formattedEstimatedValues?.shift()?.amount || 0,
    data: formattedEstimatedValues,
    fetchEstimatedData,
  };
};
