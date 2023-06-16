export interface UserType {
  id: number;
  name: string;
  age: number;
  active: boolean;
  profileImage: string;
  roles: string[]; // admin,system admin, QA,
}
