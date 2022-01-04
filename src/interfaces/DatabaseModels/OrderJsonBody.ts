import {OrderModel} from "./OrderModel";


export interface OrderJsonBody {
  order: OrderModel;
  requestBody: string
}