import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./assets/css/style.css";
import GuessRoute from "./components/routes/GuessRoute";
import UsersApi from "./constants/api/users";
import { setUser } from "./redux/features/users";
import { useAppDispatch } from "./redux/hooks";
import Home from "./views";
import Login from "./views/login";
import People from "./views/people";
import Register from "./views/register";

// import Authorization from "./config/axios/authorization";

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const userApi = new UsersApi();
    userApi.details().then((response) => {
      dispatch(setUser(response.data));
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <GuessRoute path="/login" component={Login} />
          <GuessRoute path="/register" component={Register} />
          <Route path="/people">
            <People />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
