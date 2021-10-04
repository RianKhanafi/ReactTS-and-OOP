import React from "react";
import {
  Route,
  Redirect,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";

export interface MemberProps {
  path: string;
  component: React.FC<RouteComponentProps>;
  exact?: boolean;
}

const MemberRoute: React.FC<RouteComponentProps & MemberProps> = ({
  component: Component,
  match,
  path,
  location,
  ...rest
}) => {
  const ok = localStorage.getItem("MICRO:token");
  localStorage.removeItem("MICRO:redirect");

  return (
    <Route
      {...rest}
      render={(props) =>
        ok ? (
          <Component {...props} />
        ) : path === "/joined/:class" ? (
          <Redirect to={`/login?path=${location.pathname}`} />
        ) : (
          <Redirect to={`/private?path=${location.pathname}`} />
        )
      }
    />
  );
};

export default withRouter(MemberRoute);
