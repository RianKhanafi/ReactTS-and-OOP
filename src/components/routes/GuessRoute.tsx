import React from "react";
import { Route, Redirect, withRouter,  } from "react-router-dom";

const GuestRoute = ({
  component: Component,
  location,
  ...rest
}: any  ) => {
  const ok: string | null = localStorage.getItem("MICRO:token");


//   const params = location?.search.substring(1).split("&");
//   const path = params.find((item) => item.indexOf("path") > -1);
//   const redirect = path?.split("=")[1];

//   if (!ok && redirect) localStorage.setItem("MICRO:redirect", redirect);

  return (
    <Route
      {...rest}
      render={(props) => {
        return ok ? <Redirect to="/"/> :<Component {...props} />;
      }}
    />
  );
};

export default withRouter(GuestRoute);