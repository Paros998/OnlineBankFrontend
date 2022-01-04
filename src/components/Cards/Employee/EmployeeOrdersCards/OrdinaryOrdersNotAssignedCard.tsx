import React, {FC, useState} from 'react';
import CardTemplate from "../../CardTemplate";
import PriorityOrdersNotAssigned from "../../../RecordsComponents/Employee/PriorityOrdersNotAssigned";
import CenteredSpinnerTemplate from "../../../CenteredSpinner/CenteredSpinnerTemplate";
import {OrderModel} from "../../../../interfaces/DatabaseModels/OrderModel";
import ModalTemplate from "../../../Modal/ModalTemplate";
import OrderDescriptionInModal from "../../../RecordsComponents/Employee/OrderDescriptionInModal";
import axios from "axios";
import {toast} from "react-toastify";
import {useCurrentUser} from "../../../../contexts/CurrentUserContext";
import {EmployeeModel} from "../../../../interfaces/DatabaseModels/EmployeeModel";

interface OrdinaryOrdersNotAssignedCardProps {
  className?: string;
  Orders: OrderModel[] | [];
  isPending?: boolean;
  fetchOrdinary:()=>Promise<void>;
  fetchMyOrders:()=>Promise<void>;
}

const OrdinaryOrdersNotAssignedCard: FC<OrdinaryOrdersNotAssignedCardProps> = ({Orders, className, isPending,fetchOrdinary,fetchMyOrders}) => {

  const [showModal,setShowModal] = useState<boolean>(false)
  const [isSubmitting,setIsSubmitting] = useState<boolean>(false)
  const {currentUser} = useCurrentUser<EmployeeModel>()
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

  const handleSubmit = async ()=>{
    setIsSubmitting(true);

    try{
      await axios.put(`/orders/${order.order_Id}/assign-employee/${currentUser?.employeeId}`)
    }catch (e:any){
      toast.error(e.response.data.message)
    }
    setIsSubmitting(false);
    setShowModal(false);
    toast.success("Pomyślnie przypisano do zlecenia.");

    await fetchOrdinary();
    await fetchMyOrders();
  }

  return (
    <>
      <ModalTemplate
        setShow={setShowModal}
        show={showModal}
        isSubmitting={isSubmitting}
        handleSubmit={handleSubmit}
        title={'Zlecenie numer: ' + order?.order_Id}
        props={{
          size: 'lg',
          centered: true,
          contentClassName: 'border-warning bg-dark text-light rounded-card-10 '
        }}
        headerDiamondClassName='text-warning '
        headerClassName='justify-content-center'
        footerClassName='justify-content-center'
        bodyClassName='justify-content-center text-center'
        submitButtonVariant='warning'
      >
        <OrderDescriptionInModal order={order} dataColor='text-warning'/>
        <p className='fs-5 text-warning fw-bold'>
          {'Czy chcesz przypisać to zlecenie do siebie?'}
        </p>
      </ModalTemplate>

      <CardTemplate header='Zwykłe zlecenia bez przydziału pracownika'
                    className={`text-warning bg-dark border-warning bg-opacity-75 ${className}`}
                    headerClassName='text-warning'
                    bodyClassName='thumb-warning p-0'
                    headerDiamondClassName='text-warning'
                    headerLabel={
                      <div className='container-fluid w-100 '>
                        <div
                          className={`row align-items-start ps-3 pe-3 rounded-card-10 text-warning w-100 `}>
                          <div className='col-1 ms-2 text-truncate'>
                            ID Zlecenia
                          </div>
                          <div className='col ms-2 text-truncate text-center'>
                            Typ Zlecenia
                          </div>
                          <div className='col ms-2 text-truncate text-center'>
                            Data
                          </div>
                          <div className='col ms-2 text-truncate text-center'>
                            Czas Oczekiwania(D.H.M.S)
                          </div>
                        </div>
                      </div>}
      >
        <div className='container-fluid w-100 '>
          {
            Orders.length === 0 ? <p className='text-warning fw-bold'>Nie ma żadnych nagłych zleceń do wykonania.</p>
              : Orders.map((item, key) => (
                <PriorityOrdersNotAssigned
                  key={key}
                  order={item}
                  className='bg-warning text-dark align-items-center order-warning'
                  setsFunctions={{setOrder,setShowModal}}
                />
              ))
          }
          <CenteredSpinnerTemplate variant={"warning"} isPending={isPending}/>
        </div>
      </CardTemplate>
    </>
  );
};

export default OrdinaryOrdersNotAssignedCard;