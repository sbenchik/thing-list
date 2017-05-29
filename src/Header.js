import React from 'react'
import SignOut from './SignOut'
import SignIn from './SignIn'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


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