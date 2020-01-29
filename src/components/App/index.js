import React, {Component} from 'react';
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
import { AuthUserContext } from '../Session';
 
class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            authUser : null,
        };
    }

    componentDidMount() {
        this.listner = 
        this.props.firebase.auth.onAuthStateChanged(
            authUser => {
                authUser ?
                this.setState({ authUser }) :
                this.setState({ authUser : null });
            },
        );
    }

    componentWillUnmount() {
        this.listner();
    }

    render() {
        return (
            <AuthUserContext.Provider value={this.state.authUser}>
                <Router>
                    <div>
                        <Navigation />
                        <hr />
                    </div>
                </Router>
            </AuthUserContext.Provider>
        )
    }
};

//export default App;
export default withFirebase(App);
