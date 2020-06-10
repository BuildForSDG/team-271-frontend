import React, { useState, useEffect } from 'react';
import './topbar.css';
import { Navbar, NavDropdown, Nav, Button, Modal } from 'react-bootstrap';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useHistory } from 'react-router-dom';

function TopBar() {
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const history = useHistory();

  const handleLogout = () => {
    localStorage.setItem('loginStatus', false);
    setShow(false);
    history.push('/login');
  };

  useEffect(() => {
    const loginStatus = JSON.parse(localStorage.getItem('loginStatus'));
    setHide(loginStatus);
  }, []);

  return (
    <React.Fragment>
      <Navbar expand="lg" id="navigation">
        <Navbar.Brand as={Link} to="/" id="brand">
          <h2>WONYA</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav ml-auto">
            <Nav.Link hidden={hide} id="nav_link" as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link id="nav_link" hidden={hide} as={Link} to="/register">
              Signup
            </Nav.Link>
            <Nav.Link id="nav_link" as={Link} to="/home">
              Home
            </Nav.Link>
            <NavDropdown alignRight title={<FontAwesomeIcon icon={faUserCircle} size="2x" />} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={handleShow}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to logout?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleLogout}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default TopBar;
