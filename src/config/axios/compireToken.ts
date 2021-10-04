import { AxiosRequestConfig } from "axios";
import HTTPClient from ".";
// import { CreateUserBody } from './types';

class Authorization extends HTTPClient {
  public constructor() {
    super();

    // this.initializeCompireToken();
  }

  // public initializeCompireToken() {
  //   let token: string | null = localStorage.getItem("MICRO:token");
  //   token = token ? JSON.parse(token).token : null;
  // }
}

export default Authorization;
