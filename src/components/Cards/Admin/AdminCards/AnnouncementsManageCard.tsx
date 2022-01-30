import React, {FC, useState} from 'react';
import {AnnouncementsModel} from "../../../../interfaces/DatabaseModels/AnnouncementsModel";
import CardTemplate from "../../CardTemplate";
import CenteredSpinnerTemplate from "../../../CenteredSpinner/CenteredSpinnerTemplate";
import {useFetchRawData} from "../../../../hooks/useFetchRawData";
import RequestSubmitButton from "../../../SubmitButton/RequestSubmitButton";
import {toast} from "react-toastify";
import axios from "axios";
import ModalTemplate from "../../../Modal/ModalTemplate";
import TextInput from "../../../Inputs/TextInput/TextInput";
import {Form, Formik} from "formik";
import {Button} from "react-bootstrap";

interface AnnouncementsManageCardProps {
  className?: string;
}

const AnnouncementsManageCard: FC<AnnouncementsManageCardProps> = ({className}) => {
  const {
    rawData: Announcements,
    isPending,
    fetchData: fetchAnnouncements
  } = useFetchRawData<AnnouncementsModel[]>('/dictionary/announcements');

  const [showModal, setShowModal] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);
  const [newModal, setNewModal] = useState<boolean>(false);

  const [modalAnnouncement, setModalAnnouncement] = useState<AnnouncementsModel>({announcement:''});

  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isDeletingOne, setIsDeletingOne] = useState<boolean>(false);
  const [isDeletingAll, setIsDeletingAll] = useState<boolean>(false);

  const deleteAnnouncement = async (announcementId: number | undefined) => {
    setIsDeletingOne(true);
    try {
      await axios.delete(`/announcements/${announcementId}`);
      toast.success("Usunięto ogłoszenie pomyślnie.");
      await fetchAnnouncements();
    } catch (e: any) {
      toast.error(e.message);
    }
    setIsDeletingOne(false);
  }

  const deleteAll = async () => {
    setIsDeletingAll(true);
    try {
      await axios.delete(`/announcements`);
      toast.success("Usunięto wszystkie ogłoszenia pomyślnie.");
      await fetchAnnouncements();
    } catch (e: any) {
      toast.error(e.message);
    }
    setIsDeletingAll(false);
  }

  const addAnnouncement = async (announcement:AnnouncementsModel) => {
    setIsAdding(true);
    try {
      await axios.post(`/announcements`,announcement);
      toast.success("Dodano ogłoszenie pomyślnie.");
      await fetchAnnouncements();
    } catch (e: any) {
      toast.error(e.message);
    }
    setIsAdding(false);
    setNewModal(false);
  }

  const editAnnouncement = async (announcement:AnnouncementsModel) => {
      setIsEditing(true);
      try {
        await axios.put(`/announcements/${announcement.announcementID}`,announcement);
        toast.success("Zedytowano ogłoszenie pomyślnie.");
        await fetchAnnouncements();
      } catch (e: any) {
        toast.error(e.message);
      }
      setIsEditing(false);
      setEditModal(false);
    }

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
        {modalAnnouncement?.announcement}
      </ModalTemplate>

      <ModalTemplate
        setShow={setNewModal}
        show={newModal}
        title='Nowe ogłoszenie'
        props={{
          size: 'lg',
          centered: true,
          contentClassName: 'border-info bg-dark text-light'
        }}
        headerDiamondClassName='text-info '
        headerClassName='justify-content-center'
        footerClassName='d-none'
        bodyClassName='text-center'
      >
        <Formik<AnnouncementsModel>
          initialValues={{announcement:''}}
          onSubmit={addAnnouncement}
        >
          <Form className='h-100 vstack'>
            <div className='mt-1 mb-4'>
              <TextInput name={'announcement'}
                         label='Treść ogłoszenia'
                         inputMode={"text"}
                         className={'py-3'}
              />
            </div>

            <div className='hstack justify-content-center my-auto'>
              <Button
                type='reset'
                className='w-20 rounded-pill my-auto me-3'
                variant='secondary'
              >
                Resetuj
              </Button>
              <RequestSubmitButton
                props={{
                  variant: 'info',
                  className: 'w-20 rounded-pill my-auto'
                }}
                isSubmitting={isAdding}
              >
                Stwórz
              </RequestSubmitButton>
            </div>
          </Form>
        </Formik>
      </ModalTemplate>

      <ModalTemplate
        setShow={setEditModal}
        show={editModal}
        title='Edycja ogłoszenia'
        props={{
          size: 'lg',
          centered: true,
          contentClassName: 'border-info bg-dark text-light'
        }}
        headerDiamondClassName='text-info '
        headerClassName='justify-content-center'
        footerClassName='d-none'
        bodyClassName='text-center'
      >
        <Formik<AnnouncementsModel>
          initialValues={modalAnnouncement}
          onSubmit={editAnnouncement}
        >
          <Form className='h-100 vstack'>
            <div className='mt-1 mb-4'>
              <TextInput name={'announcement'}
                         label='Treść ogłoszenia'
                         inputMode={"text"}
                         className={'py-3'}
              />
            </div>

            <div className='hstack justify-content-center my-auto'>
              <Button
                type='reset'
                className='w-20 rounded-pill my-auto me-3'
                variant='secondary'
              >
                Resetuj
              </Button>
              <RequestSubmitButton
                props={{
                  variant: 'info',
                  className: 'w-30 rounded-pill my-auto'
                }}
                isSubmitting={isEditing}
              >
                Potwierdź edycję
              </RequestSubmitButton>
            </div>
          </Form>
        </Formik>
      </ModalTemplate>

      <CardTemplate header={'Zarządzanie ogłoszeniami'}
                    className={`text-dark fst-normal bg-success border-dark bg-opacity-75 ${className}`}
                    headerClassName='text-dark'
                    bodyClassName='thumb-dark'
                    headerDiamondClassName='text-dark'
                    headerLabel={
                      <div className='d-flex justify-content-center px-3'>
                        <button
                          className='btn btn-info mx-3 border-dark'
                          onClick={()=>setNewModal(true)}
                        >
                          Dodaj ogłoszenie
                        </button>

                        <RequestSubmitButton
                          isSubmitting={isDeletingAll}
                          props={{
                            className: 'btn btn-danger mx-3 border-dark',
                            onClick: deleteAll
                          }}
                        >
                          Usuń wszystkie
                        </RequestSubmitButton>
                      </div>
                    }
      >
        {
          Announcements?.length === 0 ? <p className='text-info fw-bold'>Nie znaleziono ogłoszeń</p>
            : Announcements?.map((announcement, key) => (
              <p
                key={key}
                className='text-truncate  bg-secondary-dark text-light rounded-card-10 w-100 mx-auto py-1 align-items-center d-flex'
              >
                <span
                  className='w-80 mx-auto rounded-card-10 text-start text-truncate text-light btn announcement'
                  onClick={()=>{
                    setShowModal(true);
                    setModalAnnouncement(announcement);
                  }}
                >
                  {announcement.announcement}
                </span>

                <button
                  className='btn btn-info mx-3 '
                  onClick={()=>{
                    setModalAnnouncement(announcement);
                    setEditModal(true);
                  }}
                >
                  Edytuj
                </button>

                <RequestSubmitButton
                  isSubmitting={isDeletingOne}
                  props={{
                    className: 'btn btn-danger mx-3 ',
                    onClick: () => deleteAnnouncement(announcement.announcementID)
                  }}
                >
                  Usuń
                </RequestSubmitButton>
              </p>
            ))

        }
        <CenteredSpinnerTemplate variant={"success"} isPending={isPending}/>
      </CardTemplate>
    </>
  );
};

export default AnnouncementsManageCard;