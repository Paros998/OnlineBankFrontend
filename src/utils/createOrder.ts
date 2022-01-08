import {ClientModel} from "../interfaces/DatabaseModels/ClientModel";
import {EmployeeModel} from "../interfaces/DatabaseModels/EmployeeModel";
import {OrderTypes} from "../enums/OrderTypes";
import {OrderModel} from "../interfaces/DatabaseModels/OrderModel";
import dayjs from "dayjs";
import {CreditCardModel} from "../interfaces/DatabaseModels/CreditCardModel";
import {UserCredentials} from "../interfaces/DatabaseModels/userCredentials";
import {LoanModel} from "../interfaces/DatabaseModels/LoanModel";
import {OrderJsonBody} from "../interfaces/DatabaseModels/OrderJsonBody";

export const createOrder = (type: string,
                            currentUser:
                              (ClientModel | null) |
                              (EmployeeModel | null),
                            values:
                              CreditCardModel |
                              UserCredentials |
                              ClientModel |
                              EmployeeModel |
                              LoanModel,
                            fromClient?: boolean
) => {
  let order: OrderModel = {
    decision: "inProgress",
    orderType: type,
    isActive: true,
    createDate: dayjs(Date.now()).toISOString().replaceAll('Z',''),
    requestBody: "",
    client: null,
    orderingEmployee: null,
    employee: null
  };

  switch (type) {
    case OrderTypes.EditEmployee:
    case OrderTypes.CreateUser: {
      order.orderingEmployee = currentUser as EmployeeModel;
      order.orderingEmployee.dateOfBirth = dayjs(order.orderingEmployee.dateOfBirth).toISOString().replaceAll('Z','');
      break;
    }
    case OrderTypes.LoanRequest:
    case OrderTypes.CreateCreditCard:
    case OrderTypes.BlockCreditCard:
    case OrderTypes.DeleteCreditCard:
    case OrderTypes.UnblockCreditCard:
    case OrderTypes.EditClient: {
      order.client = currentUser as ClientModel;
      order.client.dateOfBirth = dayjs(order.client.dateOfBirth).format("YYYY-MM-DD");
      break;
    }
    case OrderTypes.EditUser: {
      if(fromClient){
        order.client = currentUser as ClientModel;
        order.client.dateOfBirth = dayjs(order.client.dateOfBirth).format("YYYY-MM-DD");
      }else {
        order.orderingEmployee = currentUser as EmployeeModel;
        order.orderingEmployee.dateOfBirth = dayjs(order.orderingEmployee.dateOfBirth).format("YYYY-MM-DD");
      }
      break;
    }
  }

  function localDateReplacer(name:any,value:any){
    if(name === 'dateOfBirth')
      return dayjs(value).format("YYYY-MM-DD");
    else return value;
  }

  const body:OrderJsonBody = {
    order: order,
    requestBody: JSON.stringify(values,localDateReplacer)
  }

  console.log(body);

  return body;
}
