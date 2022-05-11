import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import styles from './header.scss';

const Header = () => {
    return (
        <Navbar expand="lg" fixed="top">
            <Container fluid>
                <Navbar.Brand href="#">ReactProjects</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                    <Nav
                        className="my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">BookLibrary</Nav.Link>
                        <Nav.Link href="#action2">Signup</Nav.Link>
                        <Nav.Link href="#action3">Notes</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Header;