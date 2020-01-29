import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';


const SignOutButton = ({firebase}) => (
    <button type="button" onClick={firebase.doSignOut}>
        SignOut
    </button>
)

export default withFirebase(SignOutButton);