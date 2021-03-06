import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import AuthUserContext from './context';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';



const withAuthorization = condition => myComponent => {

    class withAuthorization extends Component {

        componentDidMount() {
            this.listner = this.props.firebase.auth.onAuthStateChanged(
                authUser => {
                    if (!condition(authUser)) {
                        this.props.history.push(ROUTES.SIGN_IN);
                    }
                }
            )
        }

        componentWillUnmount() {
            this.listner();
        }

        render() {
            return (
                <AuthUserContext.Consumer>
                    {authUser => condition(authUser) ? 
                    <Component {...this.props} /> : null }
                </AuthUserContext.Consumer>
            )    
        }
    }

    return compose(withRouter, withFirebase)
                    (withAuthorization);
    
};

export default withAuthorization;