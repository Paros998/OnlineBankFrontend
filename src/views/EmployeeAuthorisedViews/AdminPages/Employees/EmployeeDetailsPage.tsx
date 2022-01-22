import React from 'react';
import AuthorisedNavbar from '../../../../components/AuthorisedNavbar/AuthorisedNavbar';
import SideNavbar from '../../../../components/SideNavbar/SideNavbar';
import ContainerWithBackgroundImage from '../../../../components/EmployeeContainer/ContainerWithBackgroundImage';
import { useHistory, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import EmployeeDetailsCard from '../../../../components/Cards/Employee/EmployeeDetails/EmployeeDetailsCard';
import EmployeeOrdersCard from '../../../../components/Cards/Employee/EmployeeDetails/EmployeeOrdersCard';

const EmployeeDetailsPage = () => {
  const {employeeId}: { employeeId: string,orderId: string} = useParams();

  const history = useHistory();

  const handleBackClick = () => {
    history.goBack();
  }

  return (
    <>
      <AuthorisedNavbar/>
      <SideNavbar/>
      <ContainerWithBackgroundImage className='bg-secondary-light'>
        <div className='d-flex rounded-card-10 bg-secondary w-100 text-dark mh-700px mnh-700px '>
          <EmployeeDetailsCard className='w-50' employeeId={parseInt(employeeId)}/>
          <EmployeeOrdersCard className='w-50 me-2' employeeId={parseInt(employeeId)} />
        </div>
        <div className='w-90 pe-4 mnh-200px align-items-center d-flex'>
          <Button
            className='w-25 rounded-pill mx-auto my-auto'
            variant='secondary-dark'
            onClick={handleBackClick}
          >
            Wstecz
          </Button>
        </div>
      </ContainerWithBackgroundImage>
    </>
  );
};

export default EmployeeDetailsPage;
