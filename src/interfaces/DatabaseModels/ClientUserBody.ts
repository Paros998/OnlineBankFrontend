import {ClientModel} from "./ClientModel";
import {UserCredentials} from "./userCredentials"

export interface ClientUserBody {
  client: ClientModel;
  userCredentials: UserCredentials;
}