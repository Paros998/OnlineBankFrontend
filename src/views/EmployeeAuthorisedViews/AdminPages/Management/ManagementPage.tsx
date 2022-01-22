import React, {useState} from 'react';
import AuthorisedNavbar from "../../../../components/AuthorisedNavbar/AuthorisedNavbar";
import SideNavbar from "../../../../components/SideNavbar/SideNavbar";
import ContainerWithBackgroundImage from "../../../../components/EmployeeContainer/ContainerWithBackgroundImage";
import usersBg from "../../../../assets/images/bg-employee-users.jpg";
import EmployeesPageActionCard
  from "../../../../components/Cards/Admin/AdminCards/EmployeesPageActionCard";
import {AdminActionsModalTypes} from "../../../../enums/AdminActionsModalTypes";
import AdminActionsModals from "../../../../components/Modal/AdminModals/AdminActionsModals";
import AnnouncementsManageCard from "../../../../components/Cards/Admin/AdminCards/AnnouncementsManageCard";

const UsersPage = () => {
  const [showModal,setShowModal] = useState<boolean>(false);
  const [modalType,setModalType] = useState<AdminActionsModalTypes>(AdminActionsModalTypes.NOTHING);
  return (
    <>
      <AuthorisedNavbar/>
      <SideNavbar/>
      <ContainerWithBackgroundImage src={usersBg} >
        <AdminActionsModals showModal={showModal} modalType={modalType} setShowModal={setShowModal}/>
        <div className='d-flex w-100 mh-500px mnh-500px justify-content-between'>
          <EmployeesPageActionCard className='w-100'  setShowModal={setShowModal} setModalType={setModalType}/>
        </div>
        <div className='d-flex w-100 mh-700px mnh-600px justify-content-between pb-5'>
          <AnnouncementsManageCard className='w-100'/>
        </div>
      </ContainerWithBackgroundImage>
    </>
  );
};

export default UsersPage;