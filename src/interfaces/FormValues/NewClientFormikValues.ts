import {ClientModel} from "../DatabaseModels/ClientModel";

export interface NewClientFormikValues extends ClientModel{
  username:string;
  password:string;
}
