import { TransferTypes } from "../enums/TransferTypes";

export const getColorOfCash = (transferType: string) =>  {
  return transferType === TransferTypes.Incoming && 'text-success';
};
