import React from 'react';

import AuthUserContext from './context';
import {withFirebase} from '../Firebase';

const withAuthentication = () => Component => {
    
    class WithAuthentication extends React.Component {

        constructor(props) {
            super(props);

            this.state = {
                authUser : null,
            }

            console.log("WithAuthentication...")
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
                    <Component {...this.this.props} />
                </AuthUserContext.Provider>
            );
        }
    }
    return withFirebase(WithAuthentication);
}

export default withAuthentication;