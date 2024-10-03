export type TUser = {
  id: string;
  password: string;
  needPasswordChange: boolean;
  role: 'admin' | 'user' | 'faculty';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
};
