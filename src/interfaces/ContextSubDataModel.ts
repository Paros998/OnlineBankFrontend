export interface ContextSubDataModel<T> {
  data: T;
  isPending: boolean;
  fetchData: (params?: unknown) => Promise<void>;
}
