import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import SignOut from './SignOut'
import SignIn from './SignIn'

import './Header.css'

const Header = ({ uid, signOut, signIn }) => {
    return (
        <Navbar>
            <Navbar.Header>
                   <h1>Todo List</h1>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem> { uid ? <SignOut signOut={signOut}/> : <SignIn authHandler={signIn}/>} </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header