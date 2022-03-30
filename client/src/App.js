import { Fragment, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/layout/Navbar";
import Login from "./Components/auth/Login";
import Register from "./Components/auth/Register";
import Alert from "./Components/layout/Alert";
import { Landing } from "./Components/layout/Landing";
import { loadUser } from "./actions/auth";
import Dashboard from "./Components/dashboard/Dashboard.js";
import PrivateRoute from "./Components/Routing/PrivateRoute";


//Redux
import { Provider } from "react-redux";
import store from "./store";
import { LoginFail } from "./Components/auth/loginFail";

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <div className="container">
            <Navbar />
            <Alert />

            <Routes>
              <Route exact path="/" element={<Landing />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/loginFail" element={<LoginFail />} />
              <Route exact path="/dashboard" element={<PrivateRoute ><Dashboard/></PrivateRoute>} />
            </Routes>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
