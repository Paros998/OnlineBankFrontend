import React, {FC, useState} from 'react';
import {Roles} from "../../../../enums/Roles";

import {ModalBasicProps} from "../../../../interfaces/ModalBasicProps";
import BlockEmployeeModal from "./modals/BlockEmployeeModal";
import BlockClientModal from "./modals/BlockClientModal";
import axios from "axios";
import {toast} from "react-toastify";

interface BlockUserModalProps extends ModalBasicProps {
  type: Roles;
}

const BlockUserModal: FC<BlockUserModalProps> = ({type, showModal, setShowModal}) => {
  const [id,setId] = useState<number>(-1);
  const [isSubmitting,setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async () => {
    if(id === -1)
      return;

    const url = type === Roles.RoleClient ? '/clients' : '/employees';
    setIsSubmitting(true);
    try{
      await axios.put(`${url}/${id}`);
      toast.success("Zablokowano " + type === Roles.RoleClient ? 'klienta' : 'pracownika' + " pomyślnie!");
    }catch (e:any) {
      toast.error(e.message);
    }
    setIsSubmitting(false);
  }

  if(type === Roles.RoleEmployee)
    return <BlockEmployeeModal showModal={showModal} setShowModal={setShowModal} handleSubmit={handleSubmit} setId={setId} isSubmitting={isSubmitting} id={id}/>
  else if(type === Roles.RoleClient)
    return <BlockClientModal setShowModal={setShowModal} showModal={showModal} handleSubmit={handleSubmit} setId={setId} isSubmitting={isSubmitting} id={id}/>
  return null;
};

export default BlockUserModal;