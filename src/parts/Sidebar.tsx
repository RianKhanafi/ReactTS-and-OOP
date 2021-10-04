import React from "react";
import { ReactComponent as DefaultUser } from "../assets/images/default-avatar.svg";

import { Link, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

import { RouteComponentProps } from "react-router-dom";
import { selectUser } from "../redux/features/users";
import { useAppSelector } from "../redux/hooks";

const Sidebar: React.FC<RouteComponentProps> = ({ match, history }) => {
  const USERS: IUser = useAppSelector(selectUser);
  const getNavLinkClass = (path: string) => {
    return match.path === path
      ? "active text-white bg-indigo-900"
      : "text-indigo-900";
  };

  //   const USERS = useSelector((state) => state.users);

  const logout = () => {
    // users.logout().then((res) => {
    //   localStorage.removeItem("MICRO:token");
    //   history.push("/login");
    // });
  };
  return (
    <aside
      className="bg-indigo-1000 max-h-screen h-screen overflow-y-auto"
      style={{ width: 280 }}
    >
      <div
        className="max-h-screen h-screen fixed bg-indigo-1000 flex-col content-between"
        style={{ width: 280 }}
      >
        <div className="flex flex-col text-center mt-8">
          <div className="border border-indigo-500 mx-auto p-2 inlline-flex rounded-full overflow-hidden mb-3">
            {USERS?.avatar ? (
              <img
                src={"http://" + USERS?.avatar}
                alt={USERS.name}
                className="object-cover w-24 h-24"
              />
            ) : (
              <DefaultUser
                className="fill-indigo-500 w-24 h-24"
                style={{ width: 90, height: 90 }}
              ></DefaultUser>
            )}
          </div>

          <h6 className="text-white text-xl">
            {USERS.name ? USERS.name : "Username"}
          </h6>
          <span className="text-sm text-indigo-500">
            {/* {USERS?.profession ?? "Profession"} */}
          </span>

          <ul className="main-menu mt-12">
            <li>
              <Link
                className={[
                  "nav-link relative flex items-center py-3  px-5 transition-all duration-200  hover:text-white active:text-white focus:outline-none w-full text-left ",
                  getNavLinkClass("/"),
                ].join(" ")}
                to="/"
              >
                My Class
              </Link>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className={[
                  "nav-link relative flex items-center py-3  px-5 transition-all duration-200  hover:text-white active:text-white focus:outline-none w-full text-left",
                  getNavLinkClass("/library"),
                ].join(" ")}
                href={`${process.env.REACT_APP_FRONT_PAGE_URL}/library`}
              >
                Library
              </a>
            </li>
            <li>
              <Link
                className={[
                  "nav-link relative flex items-center py-3  px-5 transition-all duration-200  hover:text-white active:text-white focus:outline-none w-full text-left ",
                  getNavLinkClass("/transactions"),
                ].join(" ")}
                to="/transactions"
              >
                Transaction
              </Link>
            </li>
            <li>
              <Link
                className={[
                  "nav-link relative flex items-center py-3  px-5 transition-all duration-200  hover:text-white active:text-white focus:outline-none w-full text-left ",
                  getNavLinkClass("/settings"),
                ].join(" ")}
                to="/settings"
              >
                Settings
              </Link>
            </li>
          </ul>
        </div>
        <div className="my-auto"></div>

        <ul className="main-menu mt-12">
          <li>
            <button
              className={[
                "nav-link text-indigo-500 relative flex items-center py-3  px-5 transition-all duration-200  hover:text-white active:text-white focus:outline-none w-full text-left ",
                getNavLinkClass("/logout"),
              ].join(" ")}
              onClick={logout}
            >
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default withRouter(Sidebar);
