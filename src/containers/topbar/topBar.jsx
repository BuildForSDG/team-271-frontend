import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './topBar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Container, Navbar, Nav, NavDropdown, Modal, Button} from 'react-bootstrap';
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
 
function TopBar(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

    return(
        <Container fluid id='topbar'>
            <Navbar expand="lg" id="navbar">
            <Navbar.Brand href="#" id='brand'><h3>WONYA</h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav ml-auto">
                    <Nav.Link href="#" id='lin'>Link</Nav.Link>
                    <Nav.Link href="#" id='lin'>Home</Nav.Link>
                    <Nav.Link href="#" id='lin'>Contact Us</Nav.Link>  
                </Nav>
                <NavDropdown alignRight title={<FontAwesomeIcon icon={faUserCircle} size='2x'/>} id="basic-nav-dropdown">
                    <NavDropdown.Item href="#" onClick={handleShow} >Logout</NavDropdown.Item>
                </NavDropdown>
            </Navbar.Collapse>
        </Navbar>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Sign Out</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to signout?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>

        </Container>
    )
}

export default TopBar;