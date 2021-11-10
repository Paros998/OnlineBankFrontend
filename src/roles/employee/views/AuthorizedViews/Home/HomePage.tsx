import React from 'react';
import AuthorisedNavbar from "../../../../../components/AuthorisedNavbar/AuthorisedNavbar";
import ContainerWithBackgroundImage from "../../../../../components/EmployeeContainer/ContainerWithBackgroundImage";
import homeBg from "../../../../../assets/images/bg-employee-home.jpg"

const HomePage = () => {
  return (
    <>
      <AuthorisedNavbar type='employee'/>
      <ContainerWithBackgroundImage src={homeBg}>
        <div>
          hello
        </div>
      </ContainerWithBackgroundImage>
    </>
  );
};

export default HomePage;