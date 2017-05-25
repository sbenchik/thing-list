import React from 'react'

import { auth, githubProvider } from './base'
import './SignIn.css'

const SignIn = () => {
    const authenticate = (provider) => {
        auth.signInWithPopup(provider)
    }
    
    return(
       <button className="Login" onClick={() => authenticate(githubProvider)}>Login with Github</button>          
    )
}

export default SignIn