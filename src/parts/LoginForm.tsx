import { ChangeEvent } from "hoist-non-react-statics/node_modules/@types/react";
import React from "react";
import { withRouter } from "react-router";

import UsersApi from "../constants/api/users";
import useForm from "../helpers/hoox/useForm";
import { RouteComponentProps } from "react-router";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectUser, setUser } from "../redux/features/users";
type IState = {
  userLogin: IUserLogin[] &
    {
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void;
      (e?: any): void;
    }[];
};
const LoginForm: React.FC<any> = ({ history }) => {

  const users = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const [state, setState]: IState["userLogin"] = useForm({
    email: "",
    password: "",
  });

  // SyntheticEvent if you dont quite care
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const userApi = new UsersApi();


    userApi
      .login({ email: state.email, password: state.password })
      .then((response) => {
        localStorage.setItem(
          "MICRO:token",
          JSON.stringify({
            ...response.data,
            email: state.email,
          })
        );

        userApi.details().then((detail) => {
          dispatch(setUser(detail.data));
          const redirect = localStorage.getItem("MICRO:redirect");
          const userCookie: { name: string; thumbnail: string } = {
            name: detail.data?.name,
            thumbnail: detail.data?.name,
          };

          const expires: Date = new Date(
            new Date().getTime() + 7 * 24 * 60 * 60 * 1000
          );

          document.cookie = `MICRO:user=${JSON.stringify(
            userCookie
          )}; expires=${expires.toUTCString()}; path:/;`;
          history.push(redirect || "/");
        });
      });
  };


  console.log("users =>", users);


  return (
    <>
      <div className="flex justify-center items-center pb-24">
        <div className="w-3/12">
          <h1 className="text-4xl text-gray-900 pb-6">
            <span className="font-bold">Continue</span> Study, <br />
            Finish your <span className="font-bold">Goals</span>
          </h1>
          <form onSubmit={onSubmit}>
            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="text-lg mb-2">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                className="border border-gray-600 w-full focus:border-teal-500 bg-white focus:outline-none border-0 px-6 py-3 w-1/2"
                placeholder="Your email address"
                onChange={setState}
                value={state.email}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="password" className="text-lg mb-2">
                Password
              </label>

              <input
                type="password"
                name="password"
                className="border border-gray-600 w-full focus:border-teal-500 bg-white focus:outline-none border-0 px-6 py-3 w-1/2"
                placeholder="Your password"
                onChange={setState}
                value={state.password}
              />
            </div>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none-shadow-inner text-white px-6 py-3 mt-4 w-full"
            >
              Masuk
            </button>
          </form>
        </div>
        <div className="w-1/12"></div>
        <div className="w-5/12 flex justify-end pt-24 pr-16">
          <div className="relative" style={{ width: 369, height: 440 }}>
            <div
              className="absolute border-indigo-700 border-2 -mt-8 -ml-16 left-0"
              style={{ width: 324, height: 374 }}
            ></div>
            <div className="absolute w-full h-full -mb-8 -ml-8">
              <img
                src="assets/images/login-image.png"
                alt="Mbak Alyssa Cakep euy"
              />
            </div>
            <div
              className="absolute z-10 bg-white py-3 px-4 -mt-12 bottom-0 right-0"
              style={{ width: 290 }}
            >
              <p className="text-gray-900 mb-2">
                Semua sudah terarah dengan baik dan perlu ikuti saja
              </p>
              <span className="text-gray-600">Tamara, UX Designer</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(LoginForm);
