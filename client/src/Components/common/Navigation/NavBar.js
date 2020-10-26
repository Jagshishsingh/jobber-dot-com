import React from 'react'
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';

function NavBar() {
    return (
        <Navbar bg="dark" expand="lg">
            {/* --------------------LEFT SIDE ---------------------- */}
            <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/jobs">Jobs</Nav.Link>
                </Nav>
                {/* --------------------RIGHT SIDE ---------------------- */}

                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="danger">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
