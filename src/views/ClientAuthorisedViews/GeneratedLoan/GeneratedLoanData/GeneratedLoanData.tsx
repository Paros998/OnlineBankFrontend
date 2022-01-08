import React from 'react';
import moment from 'moment';
import { LoanModel } from '../../../../interfaces/DatabaseModels/LoanModel';
import { useLocation } from 'react-router-dom';

const wrapperClassName = "text-black w-50";
const dataClassName = 'text-end text-black fw-bold';
const labelDataWrapperClassName = 'd-flex justify-content-between mt-4';

const GeneratedLoanData = () => {
  const { state: currentLoan } = useLocation<LoanModel>();

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
          {moment(currentLoan.estimatedEndDate).format('DD.MM.YYYY')}
        </span>
      </div>

      <div className={labelDataWrapperClassName}>
        Termin spłaty następnej pożyczki:

        <span className={dataClassName}>
          {moment(currentLoan.nextRatePayDay).format('DD.MM.YYYY')}
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
          {currentLoan.yearlyInterestPercent}%
        </span>
      </div>

      <div className={labelDataWrapperClassName}>
        Aktualna kwota raty:

        <span className={dataClassName}>
          {currentLoan.rateAmount.toFixed(2)} PLN
        </span>
      </div>

      <div className={labelDataWrapperClassName}>
        Podstawowa kwota raty:

        <span className={dataClassName}>
          {currentLoan.basicRateAmount.toFixed(2)} PLN
        </span>
      </div>

      <div className={labelDataWrapperClassName}>
        Podstawowa kwota pożyczki:

        <span className={dataClassName}>
          {currentLoan.basicLoanAmount.toFixed(2)} PLN
        </span>
      </div>

      <div className={labelDataWrapperClassName}>
        Podstawowa prowizja:

        <span className={dataClassName}>
          {currentLoan.commission.toFixed(2)} PLN
        </span>
      </div>

      <div className={labelDataWrapperClassName}>
        Kwota oprocentowania:

        <span className={dataClassName}>
          {currentLoan.interestAmount.toFixed(2)} PLN
        </span>
      </div>
    </section>
  );
};

export default GeneratedLoanData;
