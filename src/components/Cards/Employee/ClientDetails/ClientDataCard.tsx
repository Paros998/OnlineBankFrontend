import React, {FC, useState} from 'react';
import CardTemplate from "../../CardTemplate";
import {ClientModel} from "../../../../interfaces/DatabaseModels/ClientModel";
import dayjs from "dayjs";
import {useFetchRawData} from "../../../../hooks/useFetchRawData";
import {CreditCardModel} from "../../../../interfaces/DatabaseModels/CreditCardModel";
import CenteredSpinnerTemplate from "../../../CenteredSpinner/CenteredSpinnerTemplate";
import {Form} from "formik";
import SubmitButton from "../../../SubmitButton/SubmitButton";
import {Button} from "react-bootstrap";
import axios from "axios";

interface ClientDataCardProps {
  className?: string;
  client: ClientModel;
}

const ClientDataCard: FC<ClientDataCardProps> = ({className, client}) => {
  const {accountNumber, numberOfCreditsCards, balance, dateOfCreation, clientId} = client;

  const {rawData,fetchData,isPending} = useFetchRawData<CreditCardModel[]>(`credit-cards/client/${client?.clientId}`);

  const [isSubmitting,setIsSubmitting] = useState(false);

  const handleSubmit = async (cardId:number) => {
    setIsSubmitting(true);

    const response = await axios.put(`credit-cards/${cardId}/active`);

    if(response.status === 200)
      await fetchData();

    setIsSubmitting(false);
  }

  return (
    <CardTemplate
      header='Szczegóły Konta'
      className={`text-secondary-light bg-danger fs-5 ${className}`}
      headerClassName='text-secondary-light'
      bodyClassName='text-secondary-light thumb-secondary-light'
      headerDiamondClassName='text-secondary-light'
    >
      <div className='vstack '>
        <span className='fw-bold'>
          Numer Rachunku
        </span>
        <span>
          {accountNumber}
        </span>
        <span className='fw-bold'>
          Saldo
        </span>
        <span>
          {balance + ' PLN'}
        </span>
        <span className='fw-bold'>
          Utworzono
        </span>
        <span>
          {dayjs(dateOfCreation).format("YYYY.MM.DD dd HH:mm:ss Z")}
        </span>
        <hr/>
        <span className='fw-bold'>
          Karty Kredytowe
        </span>
        <span>
          {numberOfCreditsCards }
        </span>
        <hr/>
        {numberOfCreditsCards ? (numberOfCreditsCards > 0 &&
            <CenteredSpinnerTemplate
                isPending={isPending}
                variant={'light'}
            />
        ):(<></>)}
        {rawData && rawData.map(({cardImage,cardId,cardNumber,expireDate,pinNumber,cvvNumber,isActive}, key) => (
              <div className='bg-secondary rounded-card-10 vstack mt-1 text-light p-2 ' key={key}>
                <span>
                  Id Karty: {cardId}
                </span>
                <span>
                  Numer Karty: {cardNumber}
                </span>
                <span>
                  Włączona: {isActive ? "TAK" : "NIE"}
                </span>
                <span>
                  Data wygaśnięcia: {dayjs(expireDate).format("YYYY.MM.DD dd HH:mm:ss Z")}
                </span>
                <span>
                  CVV: {cvvNumber}
                </span>
                <span>
                  Pin: {pinNumber}
                </span>
                  <Button
                    variant='dark'
                    className='w-30 mx-auto rounded-pill'
                    onClick={()=>{
                      handleSubmit(cardId);
                    }}
                    disabled={isSubmitting}
                  >
                    {isActive ? "Zablokuj" : "Odblokuj"}
                  </Button>
              </div>
          )
        )
        }
      </div>
    </CardTemplate>
  );
};

export default ClientDataCard;