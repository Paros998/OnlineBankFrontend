export interface EditCardConfirmModalEntity {
  header: string;
  bodyHeader: string;
  bodyContent: string;
  handleAction: () => Promise<void>;
}
