import React, { FC } from 'react';
import { LoanModel } from '../../../../../interfaces/DatabaseModels/LoanModel';
import moment from 'moment';

interface ActiveLoanDataProps {
  currentLoan?: LoanModel;
}

const wrapperClassName = "text-black";
const dataClassName = 'text-end text-black fw-bold';
const labelDataWrapperClassName = 'd-flex justify-content-between mt-2';

const ActiveLoanData: FC<ActiveLoanDataProps> = ({ currentLoan }) => {
  if (currentLoan) {
    return (
      <section className={wrapperClassName}>
        <div className={labelDataWrapperClassName}>
          Data zawarcia:

          <span className={dataClassName}>
            {moment(currentLoan.concludedDate).format('DD.MM.YYYY')}
          </span>
        </div>

        <div className={labelDataWrapperClassName}>
          Przewidywana data spłaty pożyczki:

          <span className={dataClassName}>
            {currentLoan.estimatedEndDate}
          </span>
        </div>

        <div className={labelDataWrapperClassName}>
          Termin spłaty następnej pożyczki:

          <span className={dataClassName}>
            {currentLoan.nextRatePayDay}
          </span>
        </div>

        <div className={labelDataWrapperClassName}>
          Ilość rat:

          <span className={dataClassName}>
            {currentLoan.numOfRates}
          </span>
        </div>

        <div className={labelDataWrapperClassName}>
          Roczne oprocentowanie:

          <span className={dataClassName}>
            {currentLoan.yearlyInterestPercent}
          </span>
        </div>

        <div className={labelDataWrapperClassName}>
          Aktualna kwota raty:

          <span className={dataClassName}>
            {currentLoan.rateAmount}
          </span>
        </div>

        <div className={labelDataWrapperClassName}>
          Podstawowa kwota raty:

          <span className={dataClassName}>
            {currentLoan.basicRateAmount}
          </span>
        </div>

        <div className={labelDataWrapperClassName}>
          Podstawowa kwota pożyczki:

          <span className={dataClassName}>
            {currentLoan.basicLoanAmount}
          </span>
        </div>

        <div className={labelDataWrapperClassName}>
          Podstawowa prowizja:

          <span className={dataClassName}>
            {currentLoan.commission}
          </span>
        </div>

        <div className={labelDataWrapperClassName}>
          Kwota oprocentowania:

          <span className={dataClassName}>
            {currentLoan.interestAmount}
          </span>
        </div>

        <div className={labelDataWrapperClassName}>
          Doliczona kwota karna:

          <span className={dataClassName}>
            {currentLoan.penaltyAmount}
          </span>
        </div>

        <div className={labelDataWrapperClassName}>
          Spłacono:

          <span className={dataClassName}>
            {currentLoan.totalPaidOff}
          </span>
        </div>

        <div className={labelDataWrapperClassName}>
          Zostało do zapłaty:

          <span className={dataClassName}>
            {currentLoan.toRepaidOff}
          </span>
        </div>

        <div className={labelDataWrapperClassName}>
          Ilość rat do spłaty:

          <span className={dataClassName}>
            {currentLoan.ratesLeftToPay}
          </span>
        </div>
      </section>
    );
  }

  return (
    <h5 className='h-90 d-flex justify-content-center align-items-center'>
      Aktualnie nie masz żadnej pożyczki do spłaty
    </h5>
  );
};

export default ActiveLoanData;
