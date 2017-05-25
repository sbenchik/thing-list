import React from 'react'

import { auth, githubProvider } from './base'
import './SignOut.css'

const SignOut = ({ signOut }) => {
    return(
       <button className="logout" onClick={signOut}>Sign Out</button>          
    )
}

export default SignOut