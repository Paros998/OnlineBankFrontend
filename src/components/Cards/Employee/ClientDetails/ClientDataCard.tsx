import React, {FC} from 'react';
import CardTemplate from "../../CardTemplate";
import {ClientModel} from "../../../../interfaces/DatabaseModels/ClientModel";
import dayjs from "dayjs";
import CenteredSpinnerTemplate from "../../../CenteredSpinner/CenteredSpinnerTemplate";
import CreditCardRecord from "../../../RecordsComponents/Employee/CreditCardRecord";
import {CreditCardModel} from "../../../../interfaces/DatabaseModels/CreditCardModel";

interface ClientDataCardProps {
  className?: string;
  client: ClientModel;
  clientCreditCards: CreditCardModel[] | [];
  isPending:boolean;
  fetchCreditCards: ()=>Promise<void>;
}

const ClientDataCard: FC<ClientDataCardProps> = ({className, client,clientCreditCards,fetchCreditCards,isPending}) => {
  const {accountNumber, numberOfCreditsCards, balance, dateOfCreation} = client;



  return (
    <CardTemplate
      header='Szczegóły Konta'
      className={`text-secondary-light bg-danger fs-5 ${className}`}
      headerClassName='text-secondary-light'
      bodyClassName='text-secondary-light thumb-light'
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
        {clientCreditCards && clientCreditCards.map((card, key) => (
              <CreditCardRecord card={card} key={key} fetchData={fetchCreditCards}/>
          )
        )
        }
      </div>
    </CardTemplate>
  );
};

export default ClientDataCard;