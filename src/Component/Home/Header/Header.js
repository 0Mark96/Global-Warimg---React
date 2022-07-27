import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import ToggleIcon from './Toggle/ToggleIcon';
import Logo from '../../../Assets/Img/logo.png';
import styles from './Header.module.scss';

const Header = () => {
  return (
        <Navbar collapseOnSelect expand="sm" style={{backgroundColor:'black'}} >
          <Container  style={{border:'3px solid white'}} class='container-xxl d-flex '>
            <Navbar.Brand as={Link} to='/'  style={{color:'white'}}><img src={Logo} width={140}/></Navbar.Brand>
            <Navbar.Toggle as='div' aria-controls="responsive-navbar-nav"><ToggleIcon /></Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav" >
              <Nav style={{border:'2px solid white'}} class='container-fluid d-flex flex-sm-row justify-content-sm-end flex-column align-items-center'>
                <Nav.Link class='m-3 me-sm-5 pe-sm-4' as={Link} to="/dashboard" style={{color:'white',fontSize:18}} >Dashboard</Nav.Link>
                <Nav.Link class='m-3 me-sm-5 pe-sm-4' href="https://marcoverardi.netlify.app/" target='_blank' style={{color:'white'}}>Portfolio</Nav.Link>
                <Nav.Link class='m-3 me-sm-5 pe-sm-4' href="https://marcoverardi.netlify.app/contact.html" target='_blank' style={{color:'white'}}>Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container> 
        </Navbar> 
   
   
  )
}

export default Header