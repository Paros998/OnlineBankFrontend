import React, {FC, useState} from 'react';
import CardTemplate from "../../CardTemplate";
import {Form, Formik} from "formik";
import NewClientForm from "../../../Forms/NewClientForm/NewClientForm";
import {NewClientFormikValues} from "../../../../interfaces/FormValues/NewClientFormikValues";
import * as yup from "yup";
import dayjs from "dayjs";
import {User} from "../../../../interfaces/User";
import jwtDecode from "jwt-decode";
import {Roles} from "../../../../enums/Roles";
import {useCurrentUser} from "../../../../contexts/CurrentUserContext";
import {EmployeeModel} from "../../../../interfaces/DatabaseModels/EmployeeModel";
import {toast} from "react-toastify";
import axios from "axios";
import {mapValuesToClient} from "../../../../utils/mapValuesToClient";
import {createOrder} from "../../../../utils/createOrder";
import {OrderTypes} from "../../../../enums/OrderTypes";
import {useHistory} from "react-router-dom";
import {OrderModel} from "../../../../interfaces/DatabaseModels/OrderModel";

interface NewClientCardProps {
  className?: string;
}

const todayMinus18 = new Date();
todayMinus18.setUTCFullYear(todayMinus18.getUTCFullYear() - 18);

const validationSchema = yup.object().shape({
  balance: yup.number()
    .optional().min(0, "Stan konta nie może być ujemny"),
  accountNumber: yup.string()
    .required("Numer konta jest wymagany").max(16, "Musi posiadać 16 cyfr").min(16, "Musi posiadać 16 cyfr").matches(/^[0-9]*$/, "To nie jest numer konta"),

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
    .required("Kod pocztowy jest wymagany").matches(/^([A-Z][a-zA-Z]*)+( )+([0-9]{2}-[0-9]{3}$)/, "To nie jest adres pocztowy"),

  secCity: yup.string()
    .optional().max(50, "Nazwa może zawierać 50 znaków maksymalnie").min(5, "Za mało znaków"),
  secHomeAddress: yup.string()
    .optional().max(50, "Adres może zawierać 50 znaków maksymalnie").min(5, "Za mało znaków"),
  secPostalCode: yup.string()
    .optional().matches(/^([A-Z][a-zA-Z]*)+( )+([0-9]{2}-[0-9]{3}$)/, "To nie jest adres pocztowy"),

  username: yup.string()
    .required("Login jest wymagany").min(3, "Login musi zawierać co najmniej 3 znaki"),
  password: yup.string()
    .required("Hasło jest wymagane").min(3, "Hasło musi zawierać co najmniej 3 znaki"),
});

const formikValues: NewClientFormikValues = {
  balance: 0,
  accountNumber: "",

  fullName: "",
  personalNumber: "",
  identificationNumber: "",

  dateOfBirth: "",
  email: "",

  city: "",
  homeAddress: "",
  postalCode: "",

  secCity: "",
  secHomeAddress: "",
  secPostalCode: "",

  username: "",
  password: ""

}

const NewClientCard: FC<NewClientCardProps> = ({className, children}) => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const history = useHistory();
  const {currentUser} = useCurrentUser<EmployeeModel>();

  let employeeId = -1;

  if (currentUser)
    employeeId = currentUser.employeeId;

  const handleSubmit = async (values: NewClientFormikValues) => {
    setIsSubmitting(true);
    const token = localStorage.getItem('JWT_USER_TOKEN');
    if (!token) return;

    const tokenData: User = jwtDecode(token);
    const role = tokenData?.authorities[0].authority;

    if (role === Roles.RoleAdmin) {
      const body = mapValuesToClient(values);
      try {
        await axios.post("/clients",
          body
        );

        toast.success("Pomyślnie utworzono nowego klienta.");
        history.push("/employee/clients")
        return;

      } catch (e: any) {
        toast.error(e.response.data.message);
      }

    } else {
      try {
        const employee = currentUser ? currentUser : null;

        const ClientUserBody = mapValuesToClient(values);
        try {
          await axios.post("/clients/only-client",
            ClientUserBody.client
          );

          toast.success("Pomyślnie utworzono nowego klienta.");

        } catch (e: any) {
          toast.error(e.response.data.message);
        }

        const order: OrderModel = createOrder(OrderTypes.CreateUser, employee);

        const requestBody = ClientUserBody.userCredentials

        await axios.post("/orders", order, {
          params: {
            requestBody: requestBody
          }
        });

        toast.success("Pomyślnie utworzono zlecenie utworzenia użytkownika klienta.");

      } catch (e: any) {
        toast.error(e.response.data.message);
      }
    }
    setIsSubmitting(false);
  }

  return (
    <CardTemplate header={'Nowy Klient'}

                  className={`text-dark fst-normal bg-taupe border-light bg-opacity-75 ${className} `}
                  headerClassName='text-dark'
                  bodyClassName='thumb-dark'
                  headerDiamondClassName='text-dark'
    >
      {children}
      <Formik<NewClientFormikValues>
        initialValues={formikValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <NewClientForm/>
      </Formik>

    </CardTemplate>
  );
};

export default NewClientCard;

function Yup() {
  throw new Error('Function not implemented.');
}
