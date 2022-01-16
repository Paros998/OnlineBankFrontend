import React, {Dispatch, FC} from 'react';
import ModalTemplate from "../../../ModalTemplate";
import {ModalBasicProps} from "../../../../../interfaces/ModalBasicProps";
import {useFetchRawData} from "../../../../../hooks/useFetchRawData";
import {ClientModel} from "../../../../../interfaces/DatabaseModels/ClientModel";
import CenteredSpinnerTemplate from "../../../../CenteredSpinner/CenteredSpinnerTemplate";
import ClientsRecords from "../../../../RecordsComponents/Employee/ClientsRecords";

interface BlockClientModalProps extends ModalBasicProps {
  setId:Dispatch<React.SetStateAction<number>>;
  id:number;
}

const BlockClientModal:FC<BlockClientModalProps> = ({setShowModal,setId,showModal,handleSubmit,isSubmitting,id}) => {

  const {rawData:Clients,isPending} = useFetchRawData<ClientModel[]>(`/dictionary/clients`);

  const handleClick = (clientId:number | undefined)=>{
    if(clientId)
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
        fullscreen:true
      }}
      headerDiamondClassName='text-primary '
      headerClassName='justify-content-center'
      footerClassName={'justify-content-center'}
      bodyClassName='justify-content-center text-center '
      isSubmitDisabled={id === -1}
      submitButtonClassName={id === -1 ? 'submit-disabled' : ''}
    >
      <div className='container-fluid w-100 '>
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
      </div>
      <CenteredSpinnerTemplate variant={'primary'} isPending={isPending}/>
      <ClientsRecords Clients={Clients || []} handleClick={handleClick} id={id} className={'rounded-pill mx-3 my-1'}/>

    </ModalTemplate>
  );
};

export default BlockClientModal;