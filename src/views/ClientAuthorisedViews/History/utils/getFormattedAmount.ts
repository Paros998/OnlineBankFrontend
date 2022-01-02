import { TransferTypes } from "../../../../enums/TransferTypes";

export const getFormattedAmount = (amount: number, type: TransferTypes) => {
  return `${(type === TransferTypes.Outgoing ? amount * -1 : amount).toFixed(2)} PLN`;
};
