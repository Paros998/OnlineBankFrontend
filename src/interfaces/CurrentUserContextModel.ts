export interface CurrentUserContextModel<T> {
  currentUser?: T;
  fetchUser: () => void;
  isPending: boolean;
  handleLogout: () => void;
}