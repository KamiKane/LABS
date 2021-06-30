import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap'
export default function Navigation() {
    return (
        <Navbar collapseOnSelect static='top'
         expand="sm" bg='dark' variant='dark'>
            <Container>
                <Navbar.Toggle />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav>
                        <Nav.Link href='/'>Repertoire</Nav.Link>
                        <Nav.Link href="/ajoutContact">Ajouter Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
} 