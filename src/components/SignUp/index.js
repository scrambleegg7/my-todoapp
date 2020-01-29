import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';

const SignUpPage = () => (
    <div>
        <h1>SignUp</h1>
        <SignUpForm />
    </div>
)

const INITIAL_STATE = {
    username : '',
    email : '',
    passwordOne : '',
    passwordTwo : '',
    error: null
}

const SignUpLink = () => (
    <p>
        if you do not have an account ?
        <Link to={ROUTES.SIGN_UP}>SignUp</Link>
    </p>
)

class SignUpFormBase extends Component {

    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {
        //console.log("current state : " + JSON.stringify(this.input));
        const {
            username,email,passwordOne,passwordTwo
        } = this.state;

        console.log("submit email and password")
        //this.props.firebase.testFunc();
        const myCreate = this.props.firebase.doCreateUserWithEmailAndPassword(email,passwordOne);
        myCreate.then(
                authUser => {
                    this.setState({...INITIAL_STATE});
                    this.props.history.push(ROUTES.HOME);
                });
        myCreate.catch(error => {this.setState({error})})
        event.preventDefault();
    };

    onChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        });
    };

    render() { 

        const {
            username,email,passwordOne,passwordTwo,error
        } = this.state;

        const isInvalid = passwordOne !== passwordTwo || email === '' || username === '';

        return(
            <form onSubmit={this.onSubmit} >
                <input name="username" value={username} onChange={this.onChange} type="text" placeholder="FullName"/>
                <input name="email" value={email} onChange={this.onChange} type="text" placeholder="Mail Address"/>
                <input name="passwordOne" value={passwordOne} onChange={this.onChange} type="password" placeholder="password"/>
                <input name="passwordTwo" value={passwordTwo} onChange={this.onChange} type="password" placeholder="confirm password"/>
            
                <button disabled={isInvalid} type="submit">SignUp</button>
                {error && <p>{error.message}</p>}
            
            </form>
        )
    }

}

const SignUpForm =  compose( withRouter, 
                            withFirebase)
                            (SignUpFormBase);

export default SignUpPage;
export { SignUpForm, SignUpLink };