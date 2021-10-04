import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

declare module "axios" {
  interface AxiosResponse<T> extends Promise<T> {}
}

abstract class HTTPClient {
  protected readonly instance: AxiosInstance;

  public constructor(baseURL?: string) {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
    });

    this._initializeResponseInterceptor();
    this._initializeRequestInterceptor();
  }

  private _initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(
      this._handleRequest,
      this._handleError
    );
  };

  private _handleRequest = (config: AxiosRequestConfig) => {
    let token: string | null = localStorage.getItem("MICRO:token");
    token = token ? JSON.parse(token).token : null;
    config.headers && (config.headers["Authorization"] = `${token}`);

    return config;
  };

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError
    );
  };

  private _handleResponse = ({ data }: AxiosResponse) => data;
  public _handleError = (error: any) => Promise.reject(error);
}

export default HTTPClient;
