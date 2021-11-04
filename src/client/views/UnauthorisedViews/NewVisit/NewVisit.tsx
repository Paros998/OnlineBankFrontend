import React from 'react';
import UnauthorisedNavbar from "../../../../components/UnauthorisedNavbar/UnauthorisedNavbar";
import {Image} from "react-bootstrap";
import bgHappy1 from "../../../../assets/images/bg-happy2.jpeg"
import Footer from "../../../../components/Footer/Footer";
import {NewVisitFormikValues} from "../../../../interfaces/NewVisitFormikValues";
import {Formik} from "formik";
import NewVisitForm from "../../../../components/NewVisitForm/NewVisitForm";
import axios from "axios";
import {useHistory} from "react-router-dom";
import {toast} from "react-toastify";

const formikValues: NewVisitFormikValues = {
  establishment: "",
  visitDate: new Date(),
  visitTime: '',
  isActive: true
};

const sendValues = {
  establishment: "",
  visitDate: '',
  visitTime: '',
  isActive: true
}

const NewVisit = () => {
  const history = useHistory();
  const handleSubmit = async (values: NewVisitFormikValues) => {
    sendValues.visitDate = values.visitDate.toDateString();
    sendValues.visitTime = values.visitTime;
    sendValues.isActive = values.isActive;
    sendValues.establishment = values.establishment;
    try{
      const response = await axios.post(`/visits`,sendValues);
      if(response.status === 200){
        toast.success("👍 Success");
        history.push("/client/home");
      }
    }catch (e: any){
      toast.error(`👎 ${e.response.data.message}`);
    }
  }

  return (
    <>
      <UnauthorisedNavbar/>
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
          <NewVisitForm
            className='d-flex h-75 justify-content-center align-items-center'
          />
        </Formik>

      </div>

      <Footer />
    </>
  );
};

export default NewVisit;