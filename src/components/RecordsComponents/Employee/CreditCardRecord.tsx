import React, {FC, useState} from 'react';
import dayjs from "dayjs";
import {Button} from "react-bootstrap";
import {CreditCardModel} from "../../../interfaces/DatabaseModels/CreditCardModel";
import axios from "axios";
import {toast} from "react-toastify";
import {CheckCircleFill, XCircleFill} from "react-bootstrap-icons";

interface CreditCardRecordProps {
  card: CreditCardModel;
  fetchData: () => Promise<void>;
}

const CreditCardRecord: FC<CreditCardRecordProps> = ({card, fetchData}) => {
  const {cardId, cardNumber, isActive, cvvNumber, pinNumber, expireDate,cardImage} = card;

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [cvvVisible,setCvvVisible] = useState<boolean>(false);
  const [pinVisible,setPinVisible] = useState<boolean>(false);

  const handleSubmit = async (cardId: number) => {
    setIsSubmitting(true);

    try {
      await axios.put(`credit-cards/${cardId}/active`);
    } catch (e: any) {
      toast.error(e?.response?.data?.message);
    }
    toast.success("Zaktualizowano kartę kredytową!");
    await fetchData();

    setIsSubmitting(false);
  }

  return (
    <div
      className='bg-secondary rounded-card-10 vstack mt-1 text-light fw-bold p-2 text-shadow-black'
      style={{
        backgroundImage:`url(${cardImage})`,
        backgroundSize:"contain"
      }}
    >
      <span >
        Id Karty: {cardId}
      </span>
      <span>
        Numer Karty: {cardNumber}
      </span>
      <span>
        Włączona: {isActive ? <span className='bg-light rounded-circle pe-1 pb-1 ps-1'><CheckCircleFill className='text-success'/></span>
        : <span className='bg-light rounded-circle pe-1 pb-1 ps-1'><XCircleFill className='text-primary'/></span>}
      </span>
      <span>
        Data wygaśnięcia: {dayjs(expireDate).format("MM/YY")}
      </span>
      <span
        className='w-25'
        onMouseEnter={()=>{
          setCvvVisible(true);
        }}
        onMouseLeave={()=>{
          setCvvVisible(false);
        }}
      >
        CVV: {cvvVisible ? cvvNumber : '***'}
      </span>
      <span
        className='w-25'
        onMouseEnter={()=>{
          setPinVisible(true);
        }}
        onMouseLeave={()=>{
          setPinVisible(false);
        }}
      >
        Pin: {pinVisible ? pinNumber : '****'}
      </span>
      <Button
        variant={isActive ? "primary-dark" : "success"}
        className='w-30 mx-auto rounded-pill'
        onClick={() => {
          handleSubmit(cardId);
        }}
        disabled={isSubmitting}
      >
        {isActive ? "Zablokuj" : "Odblokuj"}
      </Button>
    </div>
  );
};

export default CreditCardRecord;