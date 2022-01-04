import {ClientModel} from "../interfaces/DatabaseModels/ClientModel";
import dayjs from "dayjs";
import {UserCredentials} from "../interfaces/DatabaseModels/userCredentials";
import {NewClientFormikValues} from "../interfaces/formik/NewClientFormikValues";

export const mapValuesToClient = (values:NewClientFormikValues) => {
  const {accountNumber,personalNumber,identificationNumber,dateOfBirth,fullName,balance,city,secCity,secPostalCode,
    email,postalCode,homeAddress,secHomeAddress,password,username} = values;

  //const formattedAccountNumber = accountNumber.split(/^[0-9]{4}/,4);

  let client:ClientModel = {
    accountNumber: '1206001209' + accountNumber,
    balance: balance,
    city: city,
    dateOfBirth: dayjs(dateOfBirth).format("YYYY-MM-DD"),
    dateOfCreation: dayjs(Date.now()).toISOString(),
    email: email,
    fullName: fullName,
    homeAddress: homeAddress,
    identificationNumber: identificationNumber,
    numberOfCreditsCards: 0,
    personalNumber: personalNumber,
    postalCode: postalCode,
    secCity: secCity,
    secHomeAddress: secHomeAddress,
    secPostalCode: secPostalCode
  };

  let userCredentials:UserCredentials = {
    username: username,
    password: password,
    email: email,
    appUserRole: "CLIENT"
  }

  return {client,userCredentials};
}