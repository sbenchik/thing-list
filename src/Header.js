import React from 'react'
import SignOut from './SignOut'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


import './Header.css'

const Header = () => {
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    Todo List
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem> <SignOut /> </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header