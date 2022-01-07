import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import OrderDescriptionInModal from "../../../../RecordsComponents/Employee/OrderDescriptionInModal";
import ModalTemplate from "../../../ModalTemplate";
import {OrderModel} from "../../../../../interfaces/DatabaseModels/OrderModel";
import axios from "axios";
import {toast} from "react-toastify";
import {useCurrentUser} from "../../../../../contexts/CurrentUserContext";
import {EmployeeModel} from "../../../../../interfaces/DatabaseModels/EmployeeModel";
import CenteredSpinnerTemplate from "../../../../CenteredSpinner/CenteredSpinnerTemplate";

interface AssignOrderModalProps {
  setShowModal: Dispatch<SetStateAction<boolean>>
  showModal: boolean;
  order?: OrderModel;
  fetchOrders: () => Promise<void>;
  isPending?: boolean;
}

const AssignOrderModal: FC<AssignOrderModalProps> = ({setShowModal, showModal, order, fetchOrders, isPending}) => {
  const {currentUser} = useCurrentUser<EmployeeModel>();
  const [isSubmitting, setIsSubmitting] = useState<boolean>();
  const handleSubmit = async () => {
    setIsSubmitting(true);

    if (order) {
      try {
        await axios.put(`/orders/${order.order_Id}/assign-employee/${currentUser?.employeeId}`)
      } catch (e: any) {
        toast.error(e.response.data.message)
      }
      setIsSubmitting(false);
      setShowModal(false);
      toast.success("Pomyślnie przypisano do zlecenia.");
      await fetchOrders();
    }
  }

  return (
    <ModalTemplate
      setShow={setShowModal}
      show={showModal}
      isSubmitting={isSubmitting}
      handleSubmit={handleSubmit}
      submitButtonVariant={'warning'}
      title={'Zlecenie numer:' + order?.order_Id}
      props={{
        size: 'lg',
        centered: true,
        contentClassName: 'border-warning bg-dark text-light'
      }}
      headerDiamondClassName='text-warning '
      headerClassName='justify-content-center'
      footerClassName='justify-content-center'
      bodyClassName='justify-content-center text-center'
    >
      <CenteredSpinnerTemplate variant={'success'} isPending={isPending}/>
      {
        order &&
        <>
            <OrderDescriptionInModal order={order} dataColor={'text-warning'}/>
            <p className='fs-5 text-warning'>
              {'Czy chcesz przypisać to zlecenie do siebie?'}
            </p>
        </>
      }
    </ModalTemplate>
  );
};

export default AssignOrderModal;