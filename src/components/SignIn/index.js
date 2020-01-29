import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';

import { SignUpLink } from '../SignUp';

const SignInPage = () => (
    <div>
        <h1>SignIn</h1>
        <SignInForm />
        <SignUpLink />
    </div>
)

const INITIAL_STATE = {
    email : '',
    password : '',
    error: null
}


class SignInFormBase extends Component {

    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {
        //console.log("current state : " + JSON.stringify(this.input));
        const {
            email,password
        } = this.state;

        console.log("submit email and password")
        //this.props.firebase.testFunc();
        const myCreate = this.props.firebase.doSignInWithEmailAndPassword(email,password);
        myCreate.then(
                authUser => {
                    this.setState({...INITIAL_STATE});
                    this.props.history.push(ROUTES.HOME);
                });
        myCreate.catch(error => {
            this.setState({error});
            })
        event.preventDefault();
    };

    onChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        });
    };

    render() { 

        const {
            username,email,password,error
        } = this.state;

        const isInvalid =  email === '' || password === '';

        return(
            <form onSubmit={this.onSubmit} >
                <input name="email" value={email} onChange={this.onChange} type="text" placeholder="Mail Address"/>
                <input name="password" value={password} onChange={this.onChange} type="password" placeholder="password"/>
            
                <button disabled={isInvalid} type="submit">SignIn</button>
                {error && <p>{error.message}</p>}
            
            </form>
        )
    }
}

const SignInForm =  compose( withRouter, 
                            withFirebase)
                            (SignInFormBase);

export default SignInPage;
export { SignInForm, SignUpLink };