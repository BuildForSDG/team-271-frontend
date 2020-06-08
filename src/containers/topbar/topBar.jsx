import React, {useState}from 'react';
import './topbar.css';
import {Navbar, NavDropdown, Nav, Button, Modal} from 'react-bootstrap';
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function TopBar(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <React.Fragment>
            <Navbar expand="lg" id='navigation'>
            <Navbar.Brand href="#home" id='brand'><h2>WONYA</h2></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav ml-auto">
                <Nav.Link id='nav_link' href="#link">Link</Nav.Link>
                <Nav.Link id='nav_link' href="#home">Home</Nav.Link>
                <NavDropdown alignRight title={<FontAwesomeIcon icon={faUserCircle} size='2x'/>} id="basic-nav-dropdown">
                    <NavDropdown.Item onClick={handleShow}>Logout</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Logout</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to logout?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
                <Button variant="primary">
                  Confirm
                </Button>
            </Modal.Footer>
        </Modal>
        </React.Fragment>
        
    )
}

export default TopBar;