import { ClientModel } from "./ClientModel";

export interface CurrentClientContextModel {
  currentUser?: ClientModel;
  fetchUser: () => void;
  isPending: boolean;
  handleLogout: () => void;
}