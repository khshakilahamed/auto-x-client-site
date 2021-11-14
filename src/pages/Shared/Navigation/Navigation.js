import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navigation.css'

const Navigation = () => {
    const { user, handleLogout } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand >
                        <NavLink to="/" style={{ textDecoration: 'none' }}>
                            <h2 style={{ color: 'white' }}>Auto<span style={{ color: 'red' }}>X</span></h2>
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-auto ms-4">
                            <Nav.Link >
                                <NavLink to="/home" style={{ textDecoration: 'none' }}>
                                    <span className="nav-item" >Home</span>
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link >
                                <NavLink to="/explore" style={{ textDecoration: 'none' }}>
                                    <span className="nav-item" >Explore</span>
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link >
                                <NavLink to="/dashboard" style={{ textDecoration: 'none' }}>
                                    <span className="nav-item" >Dashboard</span>
                                </NavLink>
                            </Nav.Link>
                        </Nav>

                        {
                            user?.displayName ? <>
                                <Navbar.Text>
                                    Hello, {user.displayName}
                                </Navbar.Text>
                                <button onClick={handleLogout} className="btn btn-light ms-3">Logout</button></>
                                :
                                <NavLink to="/login">
                                    <button className="btn btn-light ms-3">login</button>
                                </NavLink>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;