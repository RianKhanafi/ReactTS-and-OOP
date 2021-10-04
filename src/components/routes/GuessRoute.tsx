import React from "react";
import {
  Route,
  Redirect,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";
import { MemberProps } from "./MemberRoute";

const GuestRoute: React.FC<RouteComponentProps & MemberProps> = ({
  component: Component,
  location,
  ...rest
}) => {
  
  const ok: string | null = localStorage.getItem("MICRO:token");
  const params = location?.search.substring(1).split("&");
  const path = params.find((item) => item.indexOf("path") > -1);
  const redirect = path?.split("=")[1];

  if (!ok && redirect) localStorage.setItem("MICRO:redirect", redirect);

  return (
    <Route
      {...rest}
      render={(props) => {
        return ok ? <Redirect to="/" /> : <Component {...props} />;
      }}
    />
  );
};

export default withRouter(GuestRoute);
