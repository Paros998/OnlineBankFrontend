import React, {Dispatch, FC, useState} from 'react';
import ModalTemplate from "../../../ModalTemplate";
import {ModalBasicProps} from "../../../../../interfaces/ModalBasicProps";
import {useFetchRawData} from "../../../../../hooks/useFetchRawData";
import {ClientModel} from "../../../../../interfaces/DatabaseModels/ClientModel";
import CenteredSpinnerTemplate from "../../../../CenteredSpinner/CenteredSpinnerTemplate";
import ClientsRecords from "../../../../RecordsComponents/Employee/ClientsRecords";
import {Roles} from "../../../../../enums/Roles";
import axios from "axios";
import {toast} from "react-toastify";

interface BlockClientModalProps extends ModalBasicProps {
}

const BlockClientModal: FC<BlockClientModalProps> = ({
                                                       setShowModal,
                                                       showModal,
                                                     }) => {

  const {rawData: ClientsActive, isPending:isPendingActive,fetchData:fetchActive} = useFetchRawData<ClientModel[]>(`/clients/active`);
  const {rawData: ClientsInactive, isPending:isPendingInactive,fetchData:fetchInactive} = useFetchRawData<ClientModel[]>(`/clients/inactive`);

  const [id,setId] = useState<number>(-1);
  const [isSubmitting,setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async () => {
    if(id === -1)
      return;

    setIsSubmitting(true);
    try{
      await axios.put(`/clients/${id}`);
      toast.success(`Zmieniono stan konta klienta pomyślnie!`);
      await fetchInactive();
      await fetchActive();
    }catch (e:any) {
      toast.error(e.message);
    }
    setIsSubmitting(false);
  }

  const handleClick = (clientId: number | undefined) => {
    if (clientId)
      if(clientId === id)
        setId(-1);
      else
        setId(clientId);
  }

  return (
    <ModalTemplate
      setShow={setShowModal}
      show={showModal}
      handleSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      title={'Blokowanie/Odblokowywanie Klienta'}
      props={{
        size: 'lg',
        centered: true,
        contentClassName: 'border-primary bg-secondary  text-primary',
        fullscreen: true
      }}
      headerDiamondClassName='text-primary '
      headerClassName='justify-content-center'
      footerClassName={'justify-content-center'}
      bodyClassName='justify-content-center text-center '
      isSubmitDisabled={id === -1}
      submitButtonClassName={id === -1 ? 'submit-disabled' : ''}
    >
      <div className='container-fluid w-100 hstack'>

        <div className='vstack w-50'>
          <h2 className='text-dark'>Aktywni Klienci</h2>
          <CenteredSpinnerTemplate variant={'dark'} isPending={isPendingActive}/>

          <div className='row align-items-start ms-1 text-dark'>
            <div className='col text-truncate'>
              Pesel
            </div>
            <div className='col text-truncate'>
              Imię i Nazwisko
            </div>
            <div className='col text-truncate'>
              Numer Konta
            </div>
            <div className='col text-truncate'>
              Data Urodzenia
            </div>
          </div>
          <ClientsRecords Clients={ClientsActive || []} handleClick={handleClick} id={id}
                          className={'rounded-pill mx-3 my-1 text-light bg-secondary-dark'}/>
        </div>

        <div className='vstack w-50'>
          <h2 >Nieaktywni Klienci</h2>
          <CenteredSpinnerTemplate variant={'primary'} isPending={isPendingInactive}/>
          <div className='row align-items-start ms-1'>
            <div className='col text-truncate'>
              Pesel
            </div>
            <div className='col text-truncate'>
              Imię i Nazwisko
            </div>
            <div className='col text-truncate'>
              Numer Konta
            </div>
            <div className='col text-truncate'>
              Data Urodzenia
            </div>
          </div>
          <ClientsRecords Clients={ClientsInactive || []} handleClick={handleClick} id={id}
                          className={'rounded-pill mx-3 my-1 text-light bg-danger'}/>
        </div>

      </div>
    </ModalTemplate>
  );
};

export default BlockClientModal;