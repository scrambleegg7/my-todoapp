import React from 'react';

import { FirebaseContext } from '../Firebase';


const TestOne = () => (
    <FirebaseContext.Consumer>

        {firebase => {
            return (
                <div>
                    I have accessed to Firebase and render somthing. 
                </div>
            )
            
        }}
    </FirebaseContext.Consumer>
)

export default TestOne;