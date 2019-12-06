import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router";
import loginPage from "./pages/login";
import profilePage from "./pages/profile";
import registerPage from "./pages/register";
import uploadPage from "./pages/upload";

ReactDOM.render(
<Router>
    <Switch>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/login" component={loginPage}></Route>
        <Route exact path="/profile" component={profilePage}></Route>
        <Route exact path="/register" component={registerPage}></Route>
        <Route exact path="/upload" component={uploadPage}></Route>
    </Switch>
</Router>, document.getElementById('root'));

serviceWorker.unregister();
