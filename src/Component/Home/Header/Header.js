import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import ToggleIcon from './Toggle/ToggleIcon';
import Logo from '../../../Assets/Img/logo.png';
import { useState } from 'react';

const Header = () => {
  //function to toggle hamburger menu
  const [isOpen,setIsOpen] = useState(false)
  const handleNavClick = () => {
      setIsOpen(false)
  }

  return (
        <Navbar collapseOnSelect expand="sm" fixed='top' style={{backgroundColor:'rgb(3, 3, 3)',boxShadow:'0px 1px 20px -10px #FF4D00'}} className='pb-1 pt-1 pb-sm-0 pt-sm-0' >
          <Container fluid className='d-flex'>
            <Navbar.Brand as={Link} to='/'><img src={Logo} alt='Global Warming' width={160}/></Navbar.Brand>
            <Navbar.Toggle as='div' aria-controls="responsive-navbar-nav" className='p-0 me-2'><ToggleIcon isOpen={isOpen} setIsOpen={setIsOpen} /></Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav" >
              <Nav className='container-fluid d-flex flex-sm-row justify-content-sm-end flex-column align-items-center mt-5 mb-5 mt-sm-0 mb-sm-0 '>
                <Nav.Link className='m-3 me-sm-4 pe-sm-4' as={Link} to="/dashboard">DASHBOARD</Nav.Link>
                <Nav.Link onClick={handleNavClick} className='m-3 me-sm-4 pe-sm-4' href="https://marcoverardi.netlify.app/" target='_blank'>PORTFOLIO</Nav.Link>
                <Nav.Link onClick={handleNavClick} className='m-3 me-sm-4 pe-sm-4' href="https://marcoverardi.netlify.app/contact.html" target='_blank'>CONTACT</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container> 
        </Navbar> 
    
   
  )
}

export default Header