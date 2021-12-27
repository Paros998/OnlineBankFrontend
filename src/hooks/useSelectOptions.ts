import { useFetchRawData } from "./useFetchRawData";

export const useSelectOptions = <T extends unknown>(endpoint: string) => {
  const { rawData: dropdownData } = useFetchRawData<T[]>(endpoint);

  let newOptions;

  if (dropdownData) {
    newOptions = dropdownData.map((element) => (
      { key: element as string, value: element as string }
    ));
  }

  return newOptions || [];
};
