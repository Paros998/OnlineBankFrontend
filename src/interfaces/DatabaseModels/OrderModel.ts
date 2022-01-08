import {ClientModel} from "./ClientModel";
import {EmployeeModel} from "./EmployeeModel";

export interface OrderModel{
  order_Id?:number;
  orderType:string;
  decision:string;
  createDate:string;
  waitingTime?:string;
  isActive:boolean;
  requestBody:string | any;
  client?:ClientModel | null;
  orderingEmployee?: EmployeeModel | null;
  employee?:EmployeeModel | null;
}