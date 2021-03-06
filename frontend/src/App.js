
import Home from "./pages/home/home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";

import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";


function App() {
  return (
    <Router>
    <Switch>
          <Route exact path="/">
                  <Home/>

          </Route>

          <Route  path="/profile/:username">
                  <Profile/>

          </Route>


          <Route  path="/login">
                  <Login/>

          </Route>


          <Route  path="/register">
                  <Register/>

          </Route>



    </Switch>
    </Router>
  );
}

export default App;
