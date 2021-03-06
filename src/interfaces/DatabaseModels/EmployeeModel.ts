export interface EmployeeModel {
  employeeId?: number;
  email: string;
  fullName: string;
  personalNumber: string;
  identificationNumber: string;
  dateOfBirth: string | Date;
  homeAddress: string;
  city: string;
  postalCode: string;
}