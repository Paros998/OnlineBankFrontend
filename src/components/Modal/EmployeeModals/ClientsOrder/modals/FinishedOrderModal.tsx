import React, {Dispatch, FC, SetStateAction} from 'react';
import {OrderModel} from "../../../../../interfaces/DatabaseModels/OrderModel";
import {OrderTypes} from "../../../../../enums/OrderTypes";
import LoanFinishOrderModal from "./FinishedOrderModals/LoanFinishOrderModal";
import OrdinaryFinishOrderModal from "./FinishedOrderModals/OrdinaryFinishOrderModal";

interface ShowFinishedOrderModalProps {
  setShowModal:Dispatch<SetStateAction<boolean>>
  showModal:boolean;
  order:OrderModel;
}

const FinishedOrderModal:FC<ShowFinishedOrderModalProps> = ({showModal,setShowModal,order}) => {
  const loanModal:boolean =  order.orderType === OrderTypes.LoanRequest

  if(loanModal)
    return <LoanFinishOrderModal setShowModal={setShowModal} showModal={showModal} order={order}/>
  else return <OrdinaryFinishOrderModal setShowModal={setShowModal} showModal={showModal} order={order}/>
};

export default FinishedOrderModal;