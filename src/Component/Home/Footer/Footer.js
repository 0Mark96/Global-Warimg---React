import React from 'react'
import styles from './Footer.module.scss'
import BtnExplore from '../BtnExplore/BtnExplore'
import Logo from '../../../Assets/Img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown } from '@fortawesome/free-solid-svg-icons'
import bgChartImg from '../../../Assets/Img/bgChartImg.png'

const Footer = () => {
    
    return (
    <div className={styles.footer_section}>
        <FontAwesomeIcon onClick={()=>window.scrollTo({top:0,left:0,behavior:'smooth'})} icon={faChevronDown} className={styles.scroll_top}/>
        <img src={Logo} alt='Global Warming' width={160}/>
        <BtnExplore />
        <p><i>Marco Verardi @2022</i></p>
        <img className={styles.img1} src={bgChartImg} alt=''/>
        <img className={styles.img2} src={bgChartImg} alt=''/>
    </div>
  )
}

export default Footer