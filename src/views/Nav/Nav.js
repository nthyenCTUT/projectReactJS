import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {
    Outlet, NavLink
} from "react-router-dom";
class Header extends React.Component {
    render() {
        return (
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Link to='/' className="nav-link">Home</Link>
                            <Link to='todo' className="nav-link">To do</Link>
                            <Link to='about' className="nav-link">About</Link>
                            <Link to='contacts/1' className="nav-link">About 1</Link>
                            <Link to='contacts/2' className="nav-link">About 2</Link>
                            <Link to='users' className="nav-link">List Users</Link> 
                            Đổi Link sang NavLink để giữ định dạng active
                            */}
                            <NavLink to='/' className="nav-link">Home</NavLink>
                            <NavLink to='todo' className="nav-link">To do</NavLink>
                            <NavLink to='about' className="nav-link">About</NavLink>
                            <NavLink to='contacts/1' className="nav-link">About 1</NavLink>
                            <NavLink to='contacts/2' className="nav-link">About 2</NavLink>
                            <NavLink to='users' className="nav-link">List Users</NavLink>
                            <NavLink to='getAllUserAPI' className="nav-link">getAllUserAPI</NavLink>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        )

    }
}
export default Header