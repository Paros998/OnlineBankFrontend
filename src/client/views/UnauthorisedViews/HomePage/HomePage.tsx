import React from 'react';
import {Button} from "react-bootstrap";
import bankLogo from '../../../../assets/images/logo.png'
// @ts-ignore
import bankHomeVideo from "../../../../assets/videos/bankHomePage.mp4";

import NewClient from "./NewClient";
import BackgroundVideo from "./BackgroundVideo";
import Footer from "../../../../components/Footer/Footer";
import {Link} from "react-router-dom";
import UnauthorisedNavbar from "../../../../components/UnauthorisedNavbar/UnauthorisedNavbar";

const HomePage = () => {
  return (
    <><BackgroundVideo src={bankHomeVideo} loop={true} autoPlay={true} colorClass={"bg-light-blue"}/>
      <div className='container p-2 mt-3 z-1000 font-poppins font-color-light '>

        <div className='d-flex align-items-center justify-content-between '>
          <img src={bankLogo} alt='BankLogo' className='img-fluid'/>

          <div className='fw-bold fs-1 '>
            Witaj w Przyszłości w naszym Banku
          </div>

          <Link to={'/client/login'} className='text-decoration-none font-color-light'>
            <Button variant='primary' size={"lg"} className='rounded-pill mh-50px w-250px btn-primary-hover'>
              Logowanie
            </Button>
          </Link>
        </div>

        <div className='d-flex justify-content-between mt-5 font-weight-extra-normal fs-3 fst-italic p-1 '>
          <ul>
            <li className='mt-3 mb-3'>
              Otwarta bankowość - Wszystkie konta w jednym miejscu.
            </li>
            <li className='mt-3 mb-3'>
              Bezpieczne bankowanie w czasie epidemii.
            </li>
            <li className='mt-3 mb-3'>
              Tarcza finansowa dla pracowników i firm.
            </li>
            <li className='mt-3 mb-3'>
              Ciesz się życiem - otwórz i polecaj konto z aplikacją oraz zyskaj premię.
            </li>
            <li className='mt-3 mb-3'>
              Moje cele - Dodaj cel w aplikacji i zacznij oszczędzać.
            </li>
            <li className='mt-3 mb-3'>
              Bank porad - Dowiedz się, jak skuteczniej zarządzać swoimi finansami.
            </li>
            <li className='mt-3 mb-3'>
              Nowoczesna bankowość w jednym wydaniu, tylko u nas.
            </li>
          </ul>
        </div>

        <NewClient/>
        <div className='w-100 d-flex justify-content-center'>
          <Link to={'/home'} className='text-decoration-none font-color-light'>
            <Button variant='dark' size={"lg"} className='rounded-pill mh-50px w-250px btn-primary-hover'>
              Powrót
            </Button>
          </Link>
        </div>
      </div>
      <Footer positionClass={'fixed-bottom'}/>
    </>

  );
};

export default HomePage;