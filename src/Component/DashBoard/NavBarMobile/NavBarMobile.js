import { Link } from "react-router-dom";
import styles from './NavBarMobile.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

const NavBarMobile = () => {
  const {navbar_mobile_cont,open_menu} = styles
  const [isMenuOpen,setIsOpenMenu]= useState()

  return (
    <div className={navbar_mobile_cont }>
      <FontAwesomeIcon icon={faChevronDown} className={open_menu}/>
      <Link to='/'>Home</Link>
    </div>
  )
}

export default NavBarMobile