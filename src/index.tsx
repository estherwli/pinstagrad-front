import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router";
import loginPage from "./pages/loginPage";
import profilePage from "./pages/profilePage";
import registerPage from "./pages/registerPage";
import uploadPage from "./pages/uploadPage";

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
