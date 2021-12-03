import {ClientModel} from "./ClientModel";
import {EmployeeModel} from "./EmployeeModel";

export interface OrderModel{
  order_Id:number;
  orderType:string;
  createDate:Date;
  isActive:boolean;
  requestBody:string;
  client:ClientModel | null;
  employee:EmployeeModel | null;
}
// private Long order_Id;
//
// private String orderType;
// private LocalDate createDate;
// private Boolean isActive;
//
// @Type(type = "com.vladmihalcea.hibernate.type.json.JsonBinaryType")
// private JsonBinaryType requestBody;
//
// @ManyToOne(fetch = FetchType.LAZY)
// @JoinColumn(name = "client_id")
// private Client client;
//
// @ManyToOne(fetch = FetchType.LAZY)
// @JoinColumn(name = "employee_id")
// private Employee employee;