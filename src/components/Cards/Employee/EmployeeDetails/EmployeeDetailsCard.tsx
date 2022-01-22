import React, {FC} from 'react';
import CardTemplate from "../../CardTemplate";
import {useFetchRawData} from "../../../../hooks/useFetchRawData";
import {EmployeeModel} from "../../../../interfaces/DatabaseModels/EmployeeModel";
import CenteredSpinnerTemplate from "../../../CenteredSpinner/CenteredSpinnerTemplate";
import {AppUserModel} from "../../../../interfaces/DatabaseModels/AppUserModel";
import moment from 'moment';

interface EmployeeDetailsCardProps{
  className?: string;
  employeeId: number | undefined;
}

const wrapperClassName = "text-white mb-0";
const dataClassName = 'text-end text-white fw-bold';
const labelDataWrapperClassName = 'd-flex justify-content-between mt-3';

const EmployeeDetailsCard:FC<EmployeeDetailsCardProps> = ({ className,employeeId }) => {
  const { rawData: employee, isPending: isPendingEmployee } = useFetchRawData<EmployeeModel>(`/employees/${employeeId}`);
  const { rawData: employeeUser, isPending: isPendingUser } = useFetchRawData<AppUserModel>(`/users/employee/${employeeId}`);

  const isDataPending = isPendingEmployee || isPendingUser;

  return (
    <CardTemplate
      header='Dane Pracownika'
      className={`text-light' fst-normal bg-dark border-light bg-opacity-75 ${className}`}
      headerClassName='text-light'
      bodyClassName='thumb-light'
      headerDiamondClassName='text-light'
    >
      <div className='container-fluid w-100 '>
        <CenteredSpinnerTemplate variant='light' isPending={isDataPending}/>

        {
          !isDataPending && (
            <>
              <h5 className='text-center text-light'>Dane osobowe</h5>

              <section className={wrapperClassName}>
                <div className='d-flex justify-content-between'>
                  E-mail:

                  <span className={dataClassName}>
                    {employee?.email}
                  </span>
                </div>

                <div className={labelDataWrapperClassName}>
                  Imie i nazwisko:

                  <span className={dataClassName}>
                    {employee?.fullName}
                  </span>
                </div>

                <div className={labelDataWrapperClassName}>
                  PESEL:

                  <span className={dataClassName}>
                    {employee?.personalNumber}
                  </span>
                </div>

                <div className={labelDataWrapperClassName}>
                  Numer identyfikacyjny:

                  <span className={dataClassName}>
                    {employee?.identificationNumber}
                  </span>
                </div>

                <div className={labelDataWrapperClassName}>
                  Data urodzin:

                  <span className={dataClassName}>
                    {moment(employee?.dateOfBirth).format('DD.MM.YYYY')}
                  </span>
                </div>

                <div className={labelDataWrapperClassName}>
                  Adres zamieszkania:

                  <span className={dataClassName}>
                    {employee?.homeAddress}
                  </span>
                </div>

                <div className={labelDataWrapperClassName}>
                  Miasto:

                  <span className={dataClassName}>
                    {employee?.city}
                  </span>
                </div>

                <div className={labelDataWrapperClassName}>
                  Kod pocztowy:

                  <span className={dataClassName}>
                    {employee?.postalCode}
                  </span>
                </div>
              </section>

              <h5 className='text-center text-light'>Dane logowania</h5>

              <section className={wrapperClassName}>
                <div className='d-flex justify-content-between'>
                  Login:

                  <span className={dataClassName}>
                    {employeeUser?.username}
                  </span>
                </div>

                <div className={labelDataWrapperClassName}>
                  Hasło:

                  <span className={dataClassName}>
                    {employeeUser?.password}
                  </span>
                </div>

                <div className={labelDataWrapperClassName}>
                  Rola:

                  <span className={dataClassName}>
                    {employeeUser?.appUserRole}
                  </span>
                </div>
              </section>
            </>
          )
        }
      </div>
    </CardTemplate>
  );
};

export default EmployeeDetailsCard;
