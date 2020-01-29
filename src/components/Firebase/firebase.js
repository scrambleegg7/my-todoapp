import app from 'firebase/app';
import 'firebase/auth';

const config = {

    apiKey: "AIzaSyAIBbX96RPRECLroiUUeBp7lyGcUuz4Qhc",
    authDomain: "mytodo-d1345.firebaseapp.com",
    databaseURL: "https://mytodo-d1345.firebaseio.com",
    projectId: "mytodo-d1345",
    storageBucket: "mytodo-d1345.appspot.com",
    messagingSenderId: "714507950371",
    appId: "1:714507950371:web:809498f53886f45be9d496",
    measurementId: "G-YPG0DGKT8P"

};

class Firebase {

    constructor() {
        app.initializeApp(config);
        //this.app = 
        this.auth = app.auth();

        console.log("Firebase constructor.");
    }


    testFunc = () => {
        console.log("testFunc from Firebase component ")
    }

    // *** AUTH API ***
    doCreateUserWithEmailAndPassword = (email, password) => 
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
}
export default Firebase;