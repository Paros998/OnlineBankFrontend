import {ClientModel} from "./ClientModel";

export interface LoanModel {
  loanId: number,
  isActive: boolean,
  concludedDate: string,
  initialRatesNumber: number,
  estimatedEndDate: string,
  nextRatePayDay: string,
  numOfRates: number,
  yearlyInterestPercent: number,
  rateAmount: number,
  basicRateAmount: number,
  basicLoanAmount: number,
  commission: number,
  interestAmount: number,
  penaltyAmount: number,
  totalPaidOff: number,
  toRepaidOff: number,
  ratesLeftToPay: number,
  client: ClientModel
}