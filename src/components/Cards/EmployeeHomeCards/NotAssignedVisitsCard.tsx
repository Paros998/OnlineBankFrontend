import React, {FC, useState} from 'react';
import {Button, Spinner} from "react-bootstrap";
import CardTemplate from "../CardTemplate";
import {useFetchVisitsNotAssigned} from "../../../hooks/useFetchVisitsNotAssigned";
import NotAssignedVisits from "../../RecordsComponents/Employee/NotAssignedVisits";
import {useCurrentUser} from "../../../contexts/CurrentUserContext";
import {EmployeeModel} from "../../../interfaces/DatabaseModels/EmployeeModel";
import {User} from "../../../interfaces/User";
import jwtDecode from "jwt-decode";
import {Roles} from "../../../enums/Roles";
import axios from "axios";
import {toast} from "react-toastify";
import ModalTemplate from "../../Modal/ModalTemplate";

interface NotAssignedVisitsCardProps {
  className?: string
}

const NotAssignedVisitsCard: FC<NotAssignedVisitsCardProps> = ({className}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [visitId, setVisitId] = useState<number>(-1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const Visits = useFetchVisitsNotAssigned();
  const {currentUser} = useCurrentUser<EmployeeModel>();
  let employeeId = -1;

  if (currentUser)
    employeeId = currentUser.employeeId;

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const token = localStorage.getItem('JWT_USER_TOKEN');
    if (!token) return;

    const tokenData: User = jwtDecode(token);
    const role = tokenData?.authorities[0].authority;

    if (role !== (Roles.RoleAdmin || Roles.RoleEmployee))
      return;

    if (visitId === -1 || employeeId === -1)
      return;

    try {
      const response = await axios.put(`/visits/${visitId}`, {
        employeeId
      });

      if (response.status === 200) {
        setShowModal(false);
        setIsSubmitting(false);
        toast.success("Przypisano poprawnie do wizyty.");
      }

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
          size:'lg',
          centered:true,
          contentClassName:'border-primary bg-dark text-light'
        }}
        headerClassName='justify-content-center'
        footerClassName='justify-content-center'
        bodyClassName='justify-content-center'
      >
        <p className='text-center fs-4'>Czy chcesz przypisać wizytę o numerze: <span className='text-primary fw-bold'>{visitId}</span></p>
      </ModalTemplate>

      <CardTemplate header={'Wizyty klientów do przypisania'}
                    className={`text-light bg-secondary border-dark bg-opacity-75  ${className}`}
                    headerClassName='text-dark'
                    bodyClassName='thumb-dark'
                    headerDiamondClassName='text-dark'
      >
        <div className='container-fluid w-100 '>
          {
            Visits ? (
              Visits.length === 0 ? <p className='text-dark fw-bold'>Nie ma żadnych wizyt klientów wymagających przypisania.</p>
                : Visits.map((value) => (

                  <Button className='bg-transparent mb-3 p-2 rounded-pill border-0 w-100'  onClick={()=>{
                    setVisitId(value.visit_id);
                    setShowModal(true);
                  }}>
                    <NotAssignedVisits
                      visit={value}/>
                  </Button>
                ))
            ) : (
              <Spinner animation={"border"} variant={"light"}/>
            )
          }
        </div>
      </CardTemplate>
    </>
  );
};

export default NotAssignedVisitsCard;