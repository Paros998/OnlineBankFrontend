import React, {useState} from 'react';
import AuthorisedNavbar from "../../../../components/AuthorisedNavbar/AuthorisedNavbar";
import SideNavbar from "../../../../components/SideNavbar/SideNavbar";
import ContainerWithBackgroundImage from "../../../../components/EmployeeContainer/ContainerWithBackgroundImage";
import employeesBg from "../../../../assets/images/bg-employee-new-client.jpg";
import EmployeesCard from "../../../../components/Cards/Admin/AdminEmployeesPageCards/EmployeesCard";
import EmployeesPageActionCard
  from "../../../../components/Cards/Admin/AdminEmployeesPageCards/EmployeesPageActionCard";
import {AdminActionsModalTypes} from "../../../../enums/AdminActionsModalTypes";
import AdminActionsModals from "../../../../components/Modal/AdminModals/AdminActionsModals";


const EmployeesPage = () => {
  const [showModal,setShowModal] = useState<boolean>(false);
  const [modalType,setModalType] = useState<AdminActionsModalTypes>(AdminActionsModalTypes.NOTHING);
  return (
    <>
      <AuthorisedNavbar/>
      <SideNavbar/>
      <ContainerWithBackgroundImage src={employeesBg} className=''>
        <AdminActionsModals showModal={showModal} modalType={modalType} setShowModal={setShowModal}/>
        <div className='d-flex w-100 mh-900px mnh-700px justify-content-between'>
          <EmployeesCard className='w-60'/>
          <EmployeesPageActionCard className='w-40' setShowModal={setShowModal} setModalType={setModalType}/>
        </div>
      </ContainerWithBackgroundImage>
    </>
  );
};

export default EmployeesPage;