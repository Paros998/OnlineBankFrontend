import React, {FC, ReactNode, useState} from 'react';
import CardTemplate from "../../CardTemplate";
import PriorityOrdersNotAssigned from "../../../RecordsComponents/Employee/PriorityOrdersNotAssigned";
import CenteredSpinnerTemplate from "../../../CenteredSpinner/CenteredSpinnerTemplate";
import {OrderModel} from "../../../../interfaces/DatabaseModels/OrderModel";
import ModalTemplate from "../../../Modal/ModalTemplate";
import OrderDescriptionInModal from "../../../RecordsComponents/Employee/OrderDescriptionInModal";
import {toast} from "react-toastify";
import axios from "axios";
import {useCurrentUser} from "../../../../contexts/CurrentUserContext";
import {EmployeeModel} from "../../../../interfaces/DatabaseModels/EmployeeModel";
import {useHistory} from "react-router-dom";

interface OrdersProps {
  className?: string;
  children?: ReactNode;
  Orders: OrderModel[] | [];
  showLabel?: boolean;
  isPending?: boolean;
  rowsClassName?: string;
  hideLastLabel?: boolean;
  fetchPriorities?: () => Promise<void>;
  fetchMyOrders?: () => Promise<void>;
}

const PriorityOrdersNotAssignedCard: FC<OrdersProps> = ({
                                                          className,
                                                          Orders,
                                                          showLabel,
                                                          isPending,
                                                          rowsClassName,
                                                          hideLastLabel,
                                                          fetchMyOrders,
                                                          fetchPriorities
                                                        }) => {

  const [showModal, setShowModal] = useState<boolean>(false)
  const [showAfterModal, setShowAfterModal] = useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const history = useHistory();
  const {currentUser} = useCurrentUser<EmployeeModel>()
  const [order, setOrder] = useState<OrderModel>({
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

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await axios.put(`/orders/${order.order_Id}/assign-employee/${currentUser?.employeeId}`)
      setShowAfterModal(true);
    } catch (e: any) {
      toast.error(e.response.data.message)
    }
    setIsSubmitting(false);
    setShowModal(false);
    toast.success("Pomyślnie przypisano do zlecenia.");

    if (history.location.pathname === '/employee/home')
      history.push('/employee/orders')
    else{
      if (fetchPriorities && fetchMyOrders) {
        await fetchPriorities();
        await fetchMyOrders();
      }
    }
  }

  const handleRedirect = () => {
    if(order.client)
      history.push(`/employee/client/${order.client.clientId}/${order.order_Id}`);
    if(order.orderingEmployee)
      history.push(`admin/employee/${order.orderingEmployee.employeeId}/${order.order_Id}`);
  }

  return (
    <>
      <ModalTemplate
        setShow={setShowAfterModal}
        show={showAfterModal}
        handleSubmit={handleRedirect}
        title={'Zlecenie numer: ' + order?.order_Id}
        props={{
          size: 'lg',
          centered: true,
          contentClassName: 'border-primary bg-dark text-light rounded-card-10 '
        }}
        headerDiamondClassName='text-primary '
        headerClassName='justify-content-center'
        footerClassName='justify-content-center'
        bodyClassName='justify-content-center text-center'
        submitButtonVariant='primary'
        submitButtonTitle={'Przejdź'}
        closeButtonTitle={"Zostań"}
      >
        <p className='fs-5 text-primary fw-bold'>
          {'Czy chcesz przejść do szczegółów przypisanego zlecenia?'}
        </p>
      </ModalTemplate>

      <ModalTemplate
        setShow={setShowModal}
        show={showModal}
        isSubmitting={isSubmitting}
        handleSubmit={handleSubmit}
        title={'Zlecenie numer:' + order?.order_Id}
        props={{
          size: 'lg',
          centered: true,
          contentClassName: 'border-primary bg-dark text-light'
        }}
        headerDiamondClassName='text-primary '
        headerClassName='justify-content-center'
        footerClassName='justify-content-center'
        bodyClassName='justify-content-center text-center'
      >
        <OrderDescriptionInModal order={order} dataColor={'text-primary'}/>
        <p className='fs-5 text-primary'>
          {'Czy chcesz przypisać to zlecenie do siebie?'}
        </p>
      </ModalTemplate>

      <CardTemplate header='Priorytetowe zlecenia bez przydziału pracownika'
                    className={`text-primary bg-light border-primary bg-opacity-75 ${className}`}
                    headerClassName='text-primary'
                    bodyClassName='thumb-primary p-0'
                    headerDiamondClassName='text-primary'
                    headerLabel={showLabel &&
                    <div className='container-fluid w-100 '>
                        <div
                            className={`row align-items-start ps-3 pe-3 rounded-card-10 text-primary-dark w-100 ${rowsClassName}`}>
                            <div className='col-1 ms-2 text-truncate'>
                                ID Zlecenia
                            </div>
                            <div className='col-4 ms-2 text-truncate text-center'>
                                Typ Zlecenia
                            </div>
                            <div className='col ms-2 text-truncate text-center'>
                                Data
                            </div>
                            <div className='col ms-2 text-truncate text-end' hidden={hideLastLabel}>
                                Czas Oczekiwania(D.H.M.S)
                            </div>
                        </div>
                    </div>}
      >
        <div className='container-fluid w-100 '>
          {Orders.length === 0
            ? <p className='text-primary-dark fw-bold'>Nie ma żadnych nagłych zleceń do wykonania.</p>
            : Orders.map((item, key) => (
              <PriorityOrdersNotAssigned
                key={key}
                order={item}
                className={`bg-primary text-dark order-primary`}
                setsFunctions={{setOrder,setShowModal}}
              />
            ))}
          <CenteredSpinnerTemplate variant={"primary"} isPending={isPending}/>
        </div>
      </CardTemplate>
    </>
  );
};

export default PriorityOrdersNotAssignedCard;