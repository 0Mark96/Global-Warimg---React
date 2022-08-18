import React from 'react'
import styles from './Footer.module.scss'
import BtnExplore from '../BtnExplore/BtnExplore'
import Logo from '../../../Assets/Img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown } from '@fortawesome/free-solid-svg-icons'
import bgChartImg from '../../../Assets/Img/bgChartImg.png'

const Footer = () => {
    const {footer_section,scroll_top,bg_img1,bg_img2,logo,author} = styles

    return (
    <div className={footer_section}>
        <FontAwesomeIcon className={scroll_top} onClick={()=>window.scrollTo({top:0,left:0,behavior:'smooth'})} icon={faChevronDown}/>
        <img src={Logo} className={logo} alt='Global Warming' width={160} onClick={()=>window.scrollTo({top:0,left:0,behavior:'smooth'})}/>
        <BtnExplore />
        <p className={author}><i>Marco Verardi @2022</i></p>
        <img className={bg_img1} src={bgChartImg} alt=''/>
        <img className={bg_img2} src={bgChartImg} alt=''/>
    </div>
  )
}

export default Footer