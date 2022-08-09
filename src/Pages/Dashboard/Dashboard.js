import { Outlet } from "react-router-dom";
import NavBarMobile from "../../Component/DashBoard/NavBarMobile/NavBarMobile";
import styles from './Dashboard.module.scss';
import Media from 'react-media';
import SideBar from "../../Component/DashBoard/SideBar/SideBar";
import { useEffect, useState } from "react";
import classnames from "classnames";
import { useLocation } from "react-router-dom";

const Chartsdashboard = () => { 
  const {singleChartPage,active,BG_draw,draw1,draw2,draw3} = styles
  const [isOpen,setIsOpen]= useState(true); //is menu open? if so move chart content to right
  // 'linear-gradient(#ff4d0004,#ff4d0015)'
  //change screen color accordin to page
  const [gradient,setGradient] = useState()
  const location = useLocation()
 
  useEffect(()=>{
    switch(location.pathname){
      case '/dashboard/co2':
        setGradient('linear-gradient(#8884d805,#8884d828)')
        break;
      case '/dashboard/methane':
        setGradient('linear-gradient(#a75f0c1a,#97540809)')
        break;
      case '/dashboard/nitrous':
        setGradient('linear-gradient(#fdb1470a,#fdb14734)')
        break;
      case '/dashboard/arctic':
        setGradient('linear-gradient(#87c1f10c,#87c1f131)')
        break;
      default:
        setGradient('linear-gradient(#ff4d0004,#ff4d0015)')
    }
  },[location])
 
  const style = {
    background:gradient
  }
 
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
           <div className={`${BG_draw} ${draw1}`} style={style}></div>
           <div className={`${BG_draw} ${draw2}`} style={style}></div>
           <div className={`${BG_draw} ${draw3}`} style={style}></div>
        </div>
    </>
  )
}

export default Chartsdashboard
