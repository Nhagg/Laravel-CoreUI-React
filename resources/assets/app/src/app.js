import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Config } from './config';

// Register moddlewares ---------------------------------------
import './middlewares';

// Containers
import Full from './layout/Full/Full'

// Views

// create store ----------------------------------------------
import * as Stores from './features/base/redux/stores';
Stores.createStore();

// Default language -------------------------------------------
import { Login, Register } from './features/users';

document.body.classList.toggle('aside-menu-hidden');

import {I18nextProvider} from 'react-i18next';
import {i18next        } from './features/base/i18next';

ReactDOM.render((
    <I18nextProvider i18n={i18next}>
        <Provider store={Stores.getStore()}>
            <HashRouter>
                <Switch>
                    <Route exact path="/login" name="Login Page" component={Login}/>
                    <Route exact path="/register" name="Register Page" component={Register}/>
                    <Route path="/" name="Home" component={Full}/>
                </Switch>
            </HashRouter>
        </Provider>
    </I18nextProvider>
), document.getElementById('root'));
