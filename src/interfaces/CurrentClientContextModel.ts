import { ClientModel } from "./ClientModel";
import { TokenData } from "./TokenData";


export interface CurrentClientContextModel {
  currentUser?: ClientModel;
  fetchUser: (tokenData?: TokenData) => void;
}