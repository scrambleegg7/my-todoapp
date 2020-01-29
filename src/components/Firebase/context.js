import React from 'react';
import firebase from './firebase';

const FirebaseContext = React.createContext(null);

console.log("withFirebase -> Componnt firebase")
    

export const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
        {firebase => <Component {...props} firebase={firebase}  /> }
    </FirebaseContext.Consumer>
)

export default FirebaseContext;