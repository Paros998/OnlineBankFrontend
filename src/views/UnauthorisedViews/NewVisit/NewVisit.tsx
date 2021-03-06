import React from 'react';
import moment from "moment";
import {Image} from "react-bootstrap";
import axios from "axios";
import {Formik} from "formik";
import {useHistory} from "react-router-dom";
import {toast} from "react-toastify";
import UnauthorisedNavbar from "../../../components/UnauthorisedNavbar/UnauthorisedNavbar";
import bgHappy1 from "../../../assets/images/bg-happy2.jpeg"
import Footer from "../../../components/Footer/Footer";
import {NewVisitFormikValues} from "../../../interfaces/formik/NewVisitFormikValues";
import NewVisitForm from "../../../components/Forms/NewVisitForm/NewVisitForm";

const formikValues: NewVisitFormikValues = {
  establishment: "",
  visitDate: moment(new Date()).toDate(),
  visitTime: '',
  isActive: true
};

const NewVisit = () => {
  const history = useHistory();
  const handleSubmit = async ({ visitDate, ...values }: NewVisitFormikValues) => {
    const initialisedDate = moment(visitDate).format('DD.MM.YYYY');

    if (values.establishment === '') {
      toast.info("Wartość w wyborze Placówki jest niepoprawna 🔒");
      return;
    }
    if (values.visitTime === '') {
      toast.info("Wartość w wyborze Godziny jest niepoprawna 🔒");
      return;
    }

    try {
      const response = await axios.post(`/visits`, { ...values, visitDate: initialisedDate });
      if (response.status === 200) {
        toast.success("Wizyta została utworzona\nDziękujemy 👍");
        history.goBack();
      }
    } catch (e: any) {
      toast.error(`👎 ${e.response.data.message}`);
    }
  }

  return (
    <>
      <UnauthorisedNavbar
        type='client'
      />

      <div className='position-relative vh-100'>
        <Image
          src={bgHappy1}
          className='start-50 w-50 min-vh-100 position-absolute top-left-0'
        />

        <Image
          src={bgHappy1}
          className='w-50 h-100 position-absolute top-left-0'
        />

        <Formik<NewVisitFormikValues>
          initialValues={formikValues}
          onSubmit={handleSubmit}
        >
          <NewVisitForm className='d-flex h-75 justify-content-center align-items-center'/>
        </Formik>
      </div>

      <Footer/>
    </>
  );
};

export default NewVisit;
