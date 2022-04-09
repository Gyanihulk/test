import { Fragment, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/layout/Navbar";
import Login from "./Components/auth/Login";
import Register from "./Components/auth/Register";
import Alert from "./Components/layout/Alert";
import  Landing  from "./Components/layout/Landing";
import { loadUser } from "./actions/auth";
import Dashboard from "./Components/dashboard/Dashboard.js";
import PrivateRoute from "./Components/Routing/PrivateRoute";
import CreateProfile from "./Components/Profile-forms/Create-profile";
import Profiles from "./Components/Profiles/Profiles";

//Redux
import { Provider } from "react-redux";
import store from "./store";
import { LoginFail } from "./Components/auth/loginFail";
import EditProfile from "./Components/Profile-forms/EditProfile";
import AddExperience from "./Components/Profile-forms/AddExperience";
import AddEducation from "./Components/Profile-forms/AddEducation";
import Profile from "./Components/Profile/Profile";
import Messenger from "./Components/mesenger/Messenger";
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
              <Route exact path="/profiles" element={<Profiles />} />
              <Route path="/profile/:id" element={<Profile />} />
              <Route exact path="/edit-profile" element={<PrivateRoute><EditProfile/></PrivateRoute>} />
              <Route exact path="/add-experience" element={<PrivateRoute><AddExperience/></PrivateRoute>}/>
              <Route exact path="/add-education" element={<PrivateRoute><AddEducation/></PrivateRoute>}/>
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/loginFail" element={<LoginFail />} />
              <Route exact path="/dashboard" element={<PrivateRoute ><Dashboard/></PrivateRoute>} />
              <Route exact path="/create-profile" element={<PrivateRoute><CreateProfile/></PrivateRoute>}/>
              <Route exact path="/messenger" element={<Messenger/>}/>
            </Routes>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
