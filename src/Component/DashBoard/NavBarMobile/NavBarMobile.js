import { Link } from "react-router-dom";
import styles from './NavBarMobile.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import classnames from "classnames";
import Logo from '../../../Assets/Img/logo.png';
import NavLink from './NavLink/NavLink'

const NavBarMobile = () => {
  const {navbar_mobile_cont,open_menu_icon,active} = styles
  const [isMenuOpen,setIsMenuOpen]= useState(false)

  return (
    <div className={classnames(navbar_mobile_cont,{[active]:isMenuOpen})}>
      <FontAwesomeIcon icon={faChevronDown} className={open_menu_icon} onClick={()=>setIsMenuOpen(!isMenuOpen)}/>
      <Link to='/' className={styles.logo}><img src={Logo} alt='Global Warming'/></Link>
      <NavLink isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/> 
    </div>
  )
}

export default NavBarMobile