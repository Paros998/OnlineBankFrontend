import React, {FC} from 'react';
import ModalTemplate from "../../ModalTemplate";
import {ModalBasicProps} from "../../../../interfaces/ModalBasicProps";
import {toast} from "react-toastify";
import axios from "axios";
import NewEmployeeForm from "../../../Forms/NewEmployeeForm/NewEmployeeForm";
import {NewEmployeeFormikValues} from "../../../../interfaces/formik/NewEmployeeFormikValues";

import {Formik} from "formik";
import {NewEmployeeFormikInitialValues} from "../../../../constants/FormikInitialValues/NewEmployeeFormikInitialValues";
import * as yup from "yup";
import dayjs from "dayjs";
import {EmployeeUserBody} from "../../../../interfaces/DatabaseModels/EmployeeUserBody";
import {Roles} from "../../../../enums/Roles";

interface NewEmployeeModalProps extends ModalBasicProps {

}

const todayMinus18 = new Date();
todayMinus18.setUTCFullYear(todayMinus18.getUTCFullYear() - 18);

const employeeValidationSchema = yup.object().shape({

  fullName: yup.string()
    .required("Dane są wymagane").max(70, "Maksymalny limit znaków to 70").min(10, "Minimalna ilość znaków to 10")
    .matches(/^([AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ][AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpRrSsŚśTtUuWwYyZzŹźŻż]*)+( )+([AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ][AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpRrSsŚśTtUuWwYyZzŹźŻż-]*)$/
      , {message: "Dane są w złym formacie", excludeEmptyString: true}),
  personalNumber: yup.string()
    .required("Pesel jest wymagany").length(11, "Wymagane jest 11 znaków").matches(/^[0-9]{11}$/, "To nie jest pesel"),
  identificationNumber: yup.string()
    .required("Numer dowodu jest wymagany").length(9, "Wymagane jest 9 znaków").matches(/^([A-Z]{3})+([0-9]{6})$/, "To nie jest numer dowodu"),

  dateOfBirth: yup.date()
    .required("Data urodzenia jest wymagana").max(dayjs(todayMinus18).toDate(), "Wymagane jest 18 lat"),
  email: yup.string()
    .required("Adres email jest wymagany").email("To nie jest adres email").max(50, "Limit znaków jest równy 50"),

  city: yup.string()
    .required("Miasto jest wymagane").max(50, "Nazwa może zawierać 50 znaków maksymalnie"),
  homeAddress: yup.string()
    .required("Adres jest wymagany").max(50, "Adres może zawierać 50 znaków maksymalnie"),
  postalCode: yup.string()
    .required("Kod pocztowy jest wymagany").matches(/^([AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ][AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpRrSsŚśTtUuWwYyZzŹźŻż]*)+( )+([0-9]{2}-[0-9]{3}$)/, "To nie jest adres pocztowy"),

  username: yup.string()
    .required("Login jest wymagany").min(3, "Login musi zawierać co najmniej 3 znaki"),
  password: yup.string()
    .required("Hasło jest wymagane").min(3, "Hasło musi zawierać co najmniej 3 znaki"),

  appUserRole: yup.string().required("Rola jest wymagana")
});

const NewEmployeeModal: FC<NewEmployeeModalProps> = ({setShowModal, showModal}) => {

  const handleSubmit = async (values: NewEmployeeFormikValues) => {

    const body: EmployeeUserBody = {
      employee: {
        fullName: values.fullName,
        email: values.email,
        city: values.city,
        postalCode: values.postalCode,
        homeAddress: values.homeAddress,
        dateOfBirth: new Date(values.dateOfBirth),
        personalNumber: values.personalNumber,
        identificationNumber: values.identificationNumber
      },
      userCredentials: {
        username: values.username,
        email: values.email,
        password: values.password,
        appUserRole: values.appUserRole === Roles.RoleEmployee ?  'EMPLOYEE' : 'ADMIN',
      }
    }

    try {
      await axios.post(`/employees`,body);
      toast.success("Utworzono nowego pracownika pomyślnie.")
    } catch (e: any) {
      toast.error(e.message);
    }

  }

  return (
    <ModalTemplate
      setShow={setShowModal}
      show={showModal}
      title={'Tworzenie Pracownika'}
      props={{
        size: 'lg',
        centered: true,
        contentClassName: 'border-info bg-dark text-info',
        fullscreen: true,
      }}
      headerDiamondClassName='text-info '
      headerClassName='justify-content-center'
      footerClassName={'justify-content-center'}
      bodyClassName='justify-content-center text-center'
      submitButtonClassName='d-none'
    >
      <Formik<NewEmployeeFormikValues>
        initialValues={NewEmployeeFormikInitialValues}
        onSubmit={handleSubmit}
        validationSchema={employeeValidationSchema}
      >
        <NewEmployeeForm/>
      </Formik>
    </ModalTemplate>
  );
};

export default NewEmployeeModal;