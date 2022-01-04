import {ClientModel} from "../interfaces/DatabaseModels/ClientModel";
import {EmployeeModel} from "../interfaces/DatabaseModels/EmployeeModel";
import {OrderTypes} from "../enums/OrderTypes";
import {OrderModel} from "../interfaces/DatabaseModels/OrderModel";
import dayjs from "dayjs";

export const createOrder = (type: string, currentUser:
                                    (ClientModel | null) |
                                    (EmployeeModel | null),
                                    fromClient?:boolean

) => {
  let order: OrderModel = {
    decision: "inProgress",
    orderType: type,
    isActive: true,
    createDate: dayjs(Date.now()).toISOString(),
    requestBody: "",
    client: null,
    orderingEmployee: null,
    employee: null
  };

  switch (type) {
    case OrderTypes.EditEmployee:
    case OrderTypes.CreateUser: {
      order.orderingEmployee = <EmployeeModel>currentUser;
      break;
    }
    case OrderTypes.LoanRequest:
    case OrderTypes.CreateCreditCard:
    case OrderTypes.BlockCreditCard:
    case OrderTypes.DeleteCreditCard:
    case OrderTypes.UnblockCreditCard:
    case OrderTypes.EditClient:{
      order.client = <ClientModel>currentUser;
      break;
    }
    case OrderTypes.EditUser:{
      fromClient
        ? order.client = <ClientModel> currentUser
        : order.orderingEmployee = <EmployeeModel>currentUser;
      break;
    }
  }

  return order;
}