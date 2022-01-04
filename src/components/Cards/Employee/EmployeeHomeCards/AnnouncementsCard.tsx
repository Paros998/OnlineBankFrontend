import React, {FC, useState} from 'react';
import CardTemplate from "../../CardTemplate";
import ModalTemplate from "../../../Modal/ModalTemplate";
import CenteredSpinnerTemplate from "../../../CenteredSpinner/CenteredSpinnerTemplate";
import {useFetchRawData} from "../../../../hooks/useFetchRawData";
import {AnnouncementsModel} from "../../../../interfaces/DatabaseModels/AnnouncementsModel";

interface AnnouncementsProps {
  className?: string;
}

const AnnouncementsCard: FC<AnnouncementsProps> = ({className}) => {

  const {rawData: announcements, isPending} = useFetchRawData<AnnouncementsModel[]>("/dictionary/announcements");

  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalAnnouncement, setModalAnnouncement] = useState<string>('');

  return (
    <>
      <ModalTemplate
        setShow={setShowModal}
        show={showModal}
        title='Ogłoszenie'
        props={{
          size: 'lg',
          centered: true,
          contentClassName: 'border-success bg-dark text-light'
        }}
        headerDiamondClassName='text-success '
        headerClassName='justify-content-center'
        footerClassName='d-none'
        bodyClassName='text-center'

      >
        {modalAnnouncement}
      </ModalTemplate>
      <CardTemplate header={'Ogłoszenia'}
                    className={`text-light fst-normal bg-dark border-success bg-opacity-75 ${className}`}

                    headerClassName='text-success'
                    bodyClassName='thumb-success'
                    headerDiamondClassName='text-success'
      >
        {

          announcements?.length === 0 ? <p className='text-info fw-bold'>Nie znaleziono ogłoszeń</p>
            : announcements?.map((value, key) => (
              <p
                key={key}
                className='text-truncate btn bg-secondary-light text-dark rounded-card-10 w-100 text-start announcement'
                onClick={() => {
                  setModalAnnouncement(value.announcement);
                  setShowModal(true);
                }}
              >
                {value.announcement}
              </p>
            ))

        }
        <CenteredSpinnerTemplate variant={"success"} isPending={isPending}/>
      </CardTemplate>
    </>
  );
};

export default AnnouncementsCard;