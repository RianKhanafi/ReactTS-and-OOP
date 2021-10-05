import HTTPClient from "../../config/axios";

class UsersApi extends HTTPClient {
  public constructor() {
    super();
  }

  public login = (credentials: IUserLogin) => {
    return this.instance.post<IUserLogin>("/users/login", credentials);
  };

  public details = () => {
    return this.instance.get<IUser>("/users");
  };

  public register = (payload: IUserResgiter) => {
    return this.instance.post<IUserResgiter>("/users/register", payload);
  };

  public logout = () => this.instance.post("/users/logout");
}

export default UsersApi;
export const userApi = new UsersApi();
