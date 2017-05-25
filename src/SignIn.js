import React from 'react'

import { auth, githubProvider } from './base'
import './SignIn.css'

const SignIn = ({ authHandler }) => {
    const authenticate = (provider) => {
        auth
        .signInWithPopup(provider)
        .then(authHandler)
    }
    
    return(
       <button className="Login" onClick={() => authenticate(githubProvider)}>Login with Github</button>          
    )
}

export default SignIn