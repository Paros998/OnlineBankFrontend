import { Roles } from '../../enums/Roles';

export interface AppUserModel {
  userId?: number;
  username: string;
  password: string;
  email: string;
  appUserRole: Roles;
  locked?: boolean;
  enabled?: boolean;
}
