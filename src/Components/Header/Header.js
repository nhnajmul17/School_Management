import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import useAuth from '../../hooks/useAuth';

const Header = () => {
    return (
        <div>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand data-aos="fade-right" data-aos-duration="2000" className='fw-bold' href="/">This is Heda</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav data-aos="fade-left" data-aos-duration="2000" >

                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/notice">Notice</Nav.Link>
                            <Nav.Link as={Link} to="/news">News</Nav.Link>
                            <Nav.Link as={Link} to="/class">Class</Nav.Link>
                            <Nav.Link as={Link} to="/club">Club</Nav.Link>
                            <Nav.Link as={Link} to="/teachers">Teachers</Nav.Link>
                            <Nav.Link as={Link} to="/calender">Calender</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>


                            <Nav.Link as={Link} to="/login">Login</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;