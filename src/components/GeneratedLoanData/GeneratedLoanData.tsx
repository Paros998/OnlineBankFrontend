import React, { FC } from 'react';
import moment from 'moment';
import { LoanModel } from '../../interfaces/DatabaseModels/LoanModel';

const wrapperClassName = "w-50";
const dataClassName = 'text-end fw-bold';
const labelDataWrapperClassName = 'd-flex justify-content-between mt-4';

interface GeneratedLoanDataProps {
  currentLoan: LoanModel;
  additionalWrapperClassName?:string;
  additionalLabelDataWrapperClassName?:string;
  additionalDataClassName?:string;
}

const GeneratedLoanData: FC<GeneratedLoanDataProps> = ({ currentLoan,additionalDataClassName,additionalLabelDataWrapperClassName,additionalWrapperClassName }) => {
  return (
    <section className={wrapperClassName + ' ' + additionalWrapperClassName}>
      <div className={labelDataWrapperClassName + ' ' + additionalLabelDataWrapperClassName}>
        Data zawarcia:

        <span className={dataClassName + ' ' + additionalDataClassName}>
          {moment(currentLoan.concludedDate).format('DD.MM.YYYY')}
        </span>
      </div>

      <div className={labelDataWrapperClassName + ' ' + additionalLabelDataWrapperClassName}>
        Przewidywana data spłaty pożyczki:

        <span className={dataClassName + ' ' + additionalDataClassName}>
          {moment(currentLoan.estimatedEndDate).format('DD.MM.YYYY')}
        </span>
      </div>

      <div className={labelDataWrapperClassName + ' ' + additionalLabelDataWrapperClassName}>
        Termin spłaty następnej pożyczki:

        <span className={dataClassName + ' ' + additionalDataClassName}>
          {moment(currentLoan.nextRatePayDay).format('DD.MM.YYYY')}
        </span>
      </div>

      <div className={labelDataWrapperClassName + ' ' + additionalLabelDataWrapperClassName}>
        Ilość rat:

        <span className={dataClassName + ' ' + additionalDataClassName}>
          {currentLoan.numOfRates}
        </span>
      </div>

      <div className={labelDataWrapperClassName + ' ' + additionalLabelDataWrapperClassName}>
        Roczne oprocentowanie:

        <span className={dataClassName + ' ' + additionalDataClassName}>
          {currentLoan.yearlyInterestPercent}%
        </span>
      </div>

      <div className={labelDataWrapperClassName + ' ' + additionalLabelDataWrapperClassName}>
        Aktualna kwota raty:

        <span className={dataClassName + ' ' + additionalDataClassName}>
          {currentLoan.rateAmount.toFixed(2)} PLN
        </span>
      </div>

      <div className={labelDataWrapperClassName + ' ' + additionalLabelDataWrapperClassName}>
        Podstawowa kwota raty:

        <span className={dataClassName + ' ' + additionalDataClassName}>
          {currentLoan.basicRateAmount.toFixed(2)} PLN
        </span>
      </div>

      <div className={labelDataWrapperClassName + ' ' + additionalLabelDataWrapperClassName}>
        Podstawowa kwota pożyczki:

        <span className={dataClassName + ' ' + additionalDataClassName}>
          {currentLoan.basicLoanAmount.toFixed(2)} PLN
        </span>
      </div>

      <div className={labelDataWrapperClassName + ' ' + additionalLabelDataWrapperClassName}>
        Podstawowa prowizja:

        <span className={dataClassName + ' ' + additionalDataClassName}>
          {currentLoan.commission.toFixed(2)} PLN
        </span>
      </div>

      <div className={labelDataWrapperClassName + ' ' + additionalLabelDataWrapperClassName}>
        Kwota oprocentowania:

        <span className={dataClassName + ' ' + additionalDataClassName}>
          {currentLoan.interestAmount.toFixed(2)} PLN
        </span>
      </div>
    </section>
  );
};

export default GeneratedLoanData;
