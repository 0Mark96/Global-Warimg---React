import React from 'react'
import styles from './MainSection.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown } from '@fortawesome/free-solid-svg-icons'
import bgChartImg from '../../../Assets/Img/bgChartImg.png'
import BtnExplore from '../BtnExplore/BtnExplore'

const MainSection = () => {
    const {main_section, home_title, info_site, scroll_down, bg_chart_img1, bg_chart_img2} = styles
  
    return (
    <div className={main_section}>
        <h1 className={home_title}>Global Warming live graphs</h1>
        <p className={info_site}>
          This site delivers up to date information about the earth's 
          current temperature and the concentration of greenhouse 
          gases in the atmosphere
        </p>
        <BtnExplore />
        <FontAwesomeIcon onClick={()=>window.scrollTo({top:500,left:0,behavior:'smooth'})} icon={faChevronDown} className={scroll_down}/>
        <img className={bg_chart_img1} src={bgChartImg} alt=''/>
        <img className={bg_chart_img2} src={bgChartImg} alt=''/>
    </div>
    
  )
}

export default MainSection 