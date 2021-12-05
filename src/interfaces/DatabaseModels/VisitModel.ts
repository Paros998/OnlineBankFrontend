import { EmployeeModel } from "./EmployeeModel";


export interface VisitModel{
  visit_id: number;
  visitDate: string;
  visitTime: string;
  establishment: string;
  isActive: boolean;
  employee: null | EmployeeModel;
}
