import React, { FC } from 'react';
import moment from 'moment';
import { LoanModel } from '../../../../interfaces/DatabaseModels/LoanModel';

const wrapperClassName = "text-black w-50";
const dataClassName = 'text-end text-black fw-bold';
const labelDataWrapperClassName = 'd-flex justify-content-between mt-4';

interface GeneratedLoanDataProps {
  currentLoan: LoanModel;
}

const GeneratedLoanData: FC<GeneratedLoanDataProps> = ({ currentLoan }) => {
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
    </section>
  );
};

export default GeneratedLoanData;
