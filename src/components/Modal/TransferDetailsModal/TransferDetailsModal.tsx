import React, { FC } from 'react';
import DetailsModal from "../DetailsModal/DetailsModal";
import { TransferModel } from "../../../interfaces/DatabaseModels/TransferModel";
import { AccountNumberFormat } from "../../../constants/AccountNumberFormat";
import NumberFormat from "react-number-format";
import { transferCategoryClassNames } from "../../../constants/transferCategoryClassNames";
import { amountColor } from "../../../constants/amountColor";

interface HistoryDetailsModalProps {
  showModal: boolean;
  toggleVisibility: () => void;
  data: TransferModel;
}

const dataWrapperClassName = 'd-flex justify-content-between';

const TransferDetailsModal: FC<HistoryDetailsModalProps> = ({ showModal, toggleVisibility, data }) => {
  return (
    <DetailsModal
      header='Szczegóły transakcji'
      showModal={showModal}
      toggleVisibility={toggleVisibility}
    >
      <div className={dataWrapperClassName}>
        <p className='fw-bold'>Data:</p>
        <p>{data.transferDate}</p>
      </div>

      <div className={dataWrapperClassName}>
        <p className='fw-bold'>Kategoria:</p>
        <p className={transferCategoryClassNames[data.category]}>
          {data.category}
        </p>
      </div>

      <div className={dataWrapperClassName}>
        <p className='fw-bold'>Odbiorca/nadawca:</p>
        <p>{data.receiver_sender}</p>
      </div>

      <div className={dataWrapperClassName}>
        <p className='fw-bold'>Kwota:</p>
        <p className={amountColor[data.type]}>
          {data.amount}
        </p>
      </div>

      <div className={dataWrapperClassName}>
        <p className='fw-bold'>Tytuł:</p>
        <p>{data.title}</p>
      </div>

      <div className={dataWrapperClassName}>
        <p className='fw-bold'>Na numer konta:</p>
        <NumberFormat
          format={AccountNumberFormat}
          displayType='text'
          value={data.toAccountNumber}
        />
      </div>
    </DetailsModal>
  );
};

export default TransferDetailsModal;
