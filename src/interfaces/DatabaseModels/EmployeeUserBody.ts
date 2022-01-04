import {EmployeeModel} from "./EmployeeModel";
import {UserCredentials} from "./userCredentials";

export interface EmployeeUserBody{
  employee: EmployeeModel;
  userCredentials: UserCredentials;
}