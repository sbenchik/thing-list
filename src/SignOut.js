import React from 'react'
import { Button } from 'react-bootstrap';

import { auth, githubProvider } from './base'
import './SignOut.css'

const SignOut = ({ signOut }) => {
    return(
       <Button className="logout" onClick={signOut}>Sign Out</Button>          
    )
}

export default SignOut