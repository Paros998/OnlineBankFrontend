import React, {FC, useState} from 'react';
import {OrderModel} from "../../../../interfaces/DatabaseModels/OrderModel";
import CardTemplate from "../../CardTemplate";
import PriorityOrdersNotAssigned from "../../../RecordsComponents/Employee/PriorityOrdersNotAssigned";
import CenteredSpinnerTemplate from "../../../CenteredSpinner/CenteredSpinnerTemplate";
import OrderDescriptionInModal from "../../../RecordsComponents/Employee/OrderDescriptionInModal";
import ModalTemplate from "../../../Modal/ModalTemplate";


interface MyOrdersNotFinishedCardProps {
  className?: string;
  Orders: OrderModel[] | [];
  isPending?: boolean;
}

const MyOrdersNotFinishedCard: FC<MyOrdersNotFinishedCardProps> = ({Orders, className, isPending}) => {

  const [showModal,setShowModal] = useState<boolean>(false)
  const [order,setOrder] = useState<OrderModel>({
    client: undefined,
    createDate: "",
    decision: "",
    employee: undefined,
    isActive: false,
    orderType: "",
    orderingEmployee: undefined,
    requestBody: undefined,
    order_Id: -999
  })

  return (
  <>
    <ModalTemplate
      setShow={setShowModal}
      show={showModal}
      title={'Zlecenie numer: ' + order?.order_Id}
      props={{
        size: 'lg',
        centered: true,
        contentClassName: 'border-success bg-dark text-light rounded-card-10 '
      }}
      headerDiamondClassName='text-success '
      headerClassName='justify-content-center'
      footerClassName='d-none'
      bodyClassName='justify-content-center text-center'
    >
      <OrderDescriptionInModal order={order} dataColor='text-success'/>
    </ModalTemplate>

    <CardTemplate header='Moje aktywne zlecenia'
                  className={`text-success bg-dark border-success bg-opacity-75 ${className}`}
                  headerClassName='text-success'
                  bodyClassName='thumb-success p-0'
                  headerDiamondClassName='text-success'
                  headerLabel={
                    <div className='container-fluid w-100 '>
                        <div
                            className={`row align-items-start ps-3 pe-3 rounded-card-10 text-success w-100 `}>
                            <div className='col-1 ms-2 text-truncate'>
                                ID Zlecenia
                            </div>
                            <div className='col ms-2 text-truncate text-center'>
                                Typ Zlecenia
                            </div>
                            <div className='col ms-2 text-truncate text-center'>
                                Data
                            </div>
                            <div className='col ms-2 text-truncate text-center' >
                                Czas Oczekiwania(D.H.M.S)
                            </div>
                        </div>
                    </div>}
    >
      <div className='container-fluid w-100 '>
        {
          Orders.length === 0 ? <p className='text-success fw-bold'>Brak aktywnych zleceń do wykonania!</p>
            : Orders.map((item, key) => (
              <PriorityOrdersNotAssigned
                key={key}
                order={item}
                className='bg-success text-dark align-items-center order-success'
                setsFunctions={{setOrder,setShowModal}}
              />
            ))
        }
        <CenteredSpinnerTemplate variant={"success"} isPending={isPending}/>
      </div>
    </CardTemplate>
  </>
  );
};

export default MyOrdersNotFinishedCard;