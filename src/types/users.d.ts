type IUserLogin = {
  email: string;
  password: string;
};
type IUser = {
  id?: number;
  name: string;
  role: string;
  email: string;
  password?: string;
  profession: string;
  avatar?: string | null;
  token?: string | null;
  refreshToken?: string | null;
};

type IUserResgiter = {
  name: string;
  email: string;
  password: string;
  profession: string;
};
