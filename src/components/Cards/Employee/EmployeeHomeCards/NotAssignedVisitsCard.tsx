import React, {FC, useState} from 'react';
import {Button} from "react-bootstrap";
import CardTemplate from "../../CardTemplate";
import NotAssignedVisits from "../../../RecordsComponents/Employee/NotAssignedVisits";
import {useCurrentUser} from "../../../../contexts/CurrentUserContext";
import {EmployeeModel} from "../../../../interfaces/DatabaseModels/EmployeeModel";
import axios from "axios";
import {toast} from "react-toastify";
import ModalTemplate from "../../../Modal/ModalTemplate";
import CenteredSpinnerTemplate from "../../../CenteredSpinner/CenteredSpinnerTemplate";
import {VisitModel} from "../../../../interfaces/DatabaseModels/VisitModel";

interface NotAssignedVisitsCardProps {
  className?: string;
  employeeVisitsFetch: () => Promise<void>;
  notAssignedVisitsFetch: () => Promise<void>;
  Visits: VisitModel[] | [];
  isPending?: boolean;
}

const NotAssignedVisitsCard: FC<NotAssignedVisitsCardProps> = ({className, employeeVisitsFetch,notAssignedVisitsFetch, Visits, isPending}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [visitId, setVisitId] = useState<number>(-1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const {currentUser} = useCurrentUser<EmployeeModel>();

  let employeeId = -1;

  if (currentUser)
    employeeId = currentUser.employeeId;


  const handleSubmit = async () => {
    setIsSubmitting(true);

    if (visitId === -1 || employeeId === -1)
      return;

    try {
      await axios.put(`/visits/${visitId}`, {
        employeeId
      });

      setShowModal(false);
      setIsSubmitting(false);

      toast.success("Przypisano poprawnie do wizyty.");
      await employeeVisitsFetch();
      await notAssignedVisitsFetch();


    } catch (e: any) {
      toast.error(e.message)
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <ModalTemplate
        setShow={setShowModal}
        show={showModal}
        isSubmitting={isSubmitting}
        title='Wizyta Klienta'
        handleSubmit={handleSubmit}
        props={{
          size: 'lg',
          centered: true,
          contentClassName: 'border-primary bg-dark text-light'
        }}
        headerClassName='justify-content-center'
        footerClassName='justify-content-center'
        bodyClassName='justify-content-center'
      >
        <p className='text-center fs-4'>Czy chcesz przypisać wizytę o numerze: <span
          className='text-primary fw-bold'>{visitId}</span></p>
      </ModalTemplate>

      <CardTemplate header={'Wizyty klientów do przypisania'}
                    className={`text-light bg-secondary border-dark bg-opacity-75  ${className}`}
                    headerClassName='text-dark'
                    bodyClassName='thumb-dark'
                    headerDiamondClassName='text-dark'
      >
        <div className='container-fluid w-100 '>
          {
            Visits.length === 0 ?
              <p className='text-dark fw-bold'>Nie ma żadnych wizyt klientów wymagających przypisania.</p>
              : Visits.map((value) => (

                <Button className='bg-transparent mb-3 p-2 rounded-pill border-0 w-100' onClick={() => {
                  setVisitId(value.visit_id);
                  setShowModal(true);
                }}>
                  <NotAssignedVisits
                    visit={value}/>
                </Button>
              ))

          }
          <CenteredSpinnerTemplate variant={"dark"} isPending={isPending}/>
        </div>
      </CardTemplate>
    </>
  );
};

export default NotAssignedVisitsCard;