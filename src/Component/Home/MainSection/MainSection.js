import React from 'react'
import styles from './MainSection.module.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown } from '@fortawesome/free-solid-svg-icons'
import bgChartImg from '../../../Assets/Img/bgChartImg.png'

const MainSection = () => {
    const {main_section, btn_explore, scroll_down, img1, img2} = styles
  
    return (
    <div className={main_section}>
        <h1>Global Warming live graphs</h1>
        <p>
          This site delivers up to date information about the earth's 
          current temperature and the concentration of greenhouse 
          gases in the atmosphere
        </p>
        <button className={btn_explore}><Link to='dashboard'>EXPLORE</Link></button>
        <FontAwesomeIcon onClick={()=>window.scrollTo(-100,100)} icon={faChevronDown} className={scroll_down}/>
        <img className={img1} src={bgChartImg} alt=''/>
        <img className={img2} src={bgChartImg} alt=''/>
    </div>
    
  )
}

export default MainSection 