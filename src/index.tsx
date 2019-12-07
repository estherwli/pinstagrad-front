import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import App from './App';
import Login from "./pages/login";
import Profile from "./pages/profile";
import Register from "./pages/register";
import Upload from "./pages/upload";

const routing = (
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/login" component={ Login } />
            <Route exact path="/profile" component={ Profile } />
            <Route exact path="/register" component={ Register } />
            <Route exact path="/upload" component={ Upload } />
        </Switch>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
