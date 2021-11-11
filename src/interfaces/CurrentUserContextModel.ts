export interface CurrentUserContextModel<T> {
  currentUser?: T;
  fetchUser: <T>() => Promise<void>;
  isPending: boolean;
  handleLogout: () => void;
  role: string;
}
