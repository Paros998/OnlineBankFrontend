import React, {FC, useState} from 'react';
import {OrderModel} from "../../../../interfaces/DatabaseModels/OrderModel";
import CardTemplate from "../../CardTemplate";
import PriorityOrdersNotAssigned from "../../../RecordsComponents/Employee/PriorityOrdersNotAssigned";
import CenteredSpinnerTemplate from "../../../CenteredSpinner/CenteredSpinnerTemplate";
import ModalTemplate from "../../../Modal/ModalTemplate";
import OrderDescriptionInModal from "../../../RecordsComponents/Employee/OrderDescriptionInModal";

interface MyOrdersDoneCardProps {
  className?: string;
  Orders: OrderModel[] | [];
  isPending?: boolean;
}

const MyOrdersDoneCard: FC<MyOrdersDoneCardProps> = ({Orders, className, isPending}) => {
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
          contentClassName: 'border-secondary bg-dark text-light rounded-card-10 '
        }}
        headerDiamondClassName='text-secondary '
        headerClassName='justify-content-center'
        footerClassName='d-none'
        bodyClassName='justify-content-center text-center'
      >
        <OrderDescriptionInModal order={order} dataColor='text-secondary'/>
      </ModalTemplate>

      <CardTemplate header='Moje zlecenia zakończone'
                    className={`text-secondary bg-dark border-secondary bg-opacity-75 ${className}`}
                    headerClassName='text-secondary'
                    bodyClassName='thumb-secondary p-0'
                    headerDiamondClassName='text-secondary'
                    headerLabel={
                      <div className='container-fluid w-100 '>
                        <div
                          className={`row align-items-start ps-3 pe-3 rounded-card-10 text-secondary w-100 `}>
                          <div className='col-2 ms-2 text-truncate'>
                            ID Zlecenia
                          </div>
                          <div className='col ms-2 text-truncate text-center'>
                            Typ Zlecenia
                          </div>
                          <div className='col ms-2 text-truncate text-center'>
                            Data
                          </div>
                        </div>
                      </div>}
      >
        <div className='container-fluid w-100 '>
          {

            Orders.length === 0 ? <p className='text-secondary fw-bold'>Brak historii zleceń!</p>
              : Orders.map((item, key) => (
                <PriorityOrdersNotAssigned
                  key={key}
                  order={item}
                  className='bg-secondary text-dark align-items-center order-secondary'
                  hideLastCol={true}
                  setsFunctions={{setOrder,setShowModal}}
                />
              ))
          }
          <CenteredSpinnerTemplate variant={"secondary"} isPending={isPending}/>
        </div>
      </CardTemplate>
    </>
  );
};

export default MyOrdersDoneCard;