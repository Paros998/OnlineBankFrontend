import {EmployeeModel} from "../DatabaseModels/EmployeeModel";

export interface NewEmployeeFormikValues extends EmployeeModel {
  username:string;
  password:string;
  appUserRole:string;
}