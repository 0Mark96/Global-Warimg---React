import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import ToggleIcon from './Toggle/ToggleIcon';
import Logo from '../../../Assets/Img/logo.png';
// import styles from './Header.module.scss';

const Header = () => {
  return (
        <Navbar collapseOnSelect expand="sm" style={{backgroundColor:'black',borderBottom:'2px solid orange'}} className='pb-1 pt-1 pb-sm-0 pt-sm-0' >
          <Container fluid className='d-flex'>
            <Navbar.Brand as={Link} to='/'><img src={Logo} alt='Global Warming' width={160}/></Navbar.Brand>
            <Navbar.Toggle as='div' aria-controls="responsive-navbar-nav"><ToggleIcon /></Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav" >
              <Nav className='container-fluid d-flex flex-sm-row justify-content-sm-end flex-column align-items-center mt-5 mb-5 mt-sm-0 mb-sm-0 '>
                <Nav.Link className='m-3 me-sm-4 pe-sm-4' as={Link} to="/dashboard">Dashboard</Nav.Link>
                <Nav.Link className='m-3 me-sm-4 pe-sm-4' href="https://marcoverardi.netlify.app/" target='_blank'>Portfolio</Nav.Link>
                <Nav.Link className='m-3 me-sm-4 pe-sm-4' href="https://marcoverardi.netlify.app/contact.html" target='_blank'>Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container> 
        </Navbar> 
    
   
  )
}

export default Header