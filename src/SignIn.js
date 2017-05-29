import React from 'react'

import { auth, githubProvider } from './base'
import { Button } from 'react-bootstrap';

import './SignIn.css'

const SignIn = ({ authHandler }) => {
    const authenticate = (provider) => {
        auth
        .signInWithPopup(provider)
        .then(authHandler)
    }
    
    return(
       <Button bsStyle="outline-success" className="Login" onClick={() => authenticate(githubProvider)}>Login with Github</Button>          
    )
}

export default SignIn