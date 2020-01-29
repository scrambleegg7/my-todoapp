import React  from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';

import * as ROUTES from '../../constants/routes';

import { withFirebase } from '../Firebase';
import { AuthUserContext, withAuthentication } from '../Session';
import Home from '../Home';

const App = () => (
    <div>
        <h1>App Page</h1>
        <Navigation />        
    </div>
);

export default withAuthentication(App);
//export default App;


