import { Outlet } from "react-router-dom";
import NavBarMobile from "../../Component/DashBoard/NavBarMobile/NavBarMobile";
import styles from './Dashboard.module.scss';
import Media from 'react-media';
import SideBar from "../../Component/DashBoard/SideBar/SideBar";
import { useState } from "react";
import classnames from "classnames";

const Chartsdashboard = () => { 
  const {singleChartPage,active,BG_draw,draw1,draw2,draw3} = styles
  const [isOpen,setIsOpen]= useState(true); //is menu open? if so move chart content to right

  return (
    <>
     <Media query="(max-width: 991px)" render={() =>
          (
            <NavBarMobile />
          )}
      />
    <Media query="(min-width: 992px)" render={() =>
          (
            <SideBar isOpen={isOpen} setIsOpen={setIsOpen}/>
          )}
    /> 
    
        {/*  PAGES OF GRAPHS */}
        <div className={classnames(singleChartPage,{[active]:isOpen})}>
           <Outlet/>
           <div className={`${BG_draw} ${draw1}`}></div>
           <div className={`${BG_draw} ${draw2}`}></div>
           <div className={`${BG_draw} ${draw3}`}></div>
        </div>
    </>
  )
}

export default Chartsdashboard
