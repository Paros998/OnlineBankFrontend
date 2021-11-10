import {EmployeeModel} from "./EmployeeModel";

export interface CurrentEmployeeContextModel {
  currentEmployee?: EmployeeModel;
  fetchEmployee: () => void;
  isPending: boolean;
  handleLogout: () => void;
}