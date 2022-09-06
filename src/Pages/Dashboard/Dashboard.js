import { Outlet } from "react-router-dom";
import NavBarMobile from "../../Component/DashBoard/NavBarMobile/NavBarMobile";
import styles from './Dashboard.module.scss';
import Media from 'react-media';
import SideBar from "../../Component/DashBoard/SideBar/SideBar";
import { useState, useEffect} from "react";
import classnames from "classnames";
import { useLocation } from "react-router-dom";
import LoadingBar from "../../Component/DashBoard/LoadingBar/LoadingBar";

const Chartsdashboard = () => { 
  const {single_chart_page,active,BG_draw,draw1,draw2,draw3} = styles
  const [isOpen,setIsOpen]= useState(true); //is menu open? if so move chart content to right
  // const [isLoading,setIsLoading] = useState(true)

  // on route change scroll to top pages
  const  {pathname} = useLocation()
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname]);

  //change screen color accordin to page
  const location = useLocation()
 
  const urlCases = {
    '/dashboard': 'linear-gradient(#ff4d0004,#ff4d0015)',
    '/dashboard/co2': 'linear-gradient(#8884d805,#8884d828)',
    '/dashboard/methane': 'linear-gradient(#a75f0c1a,#97540809)',
    '/dashboard/nitrous': 'linear-gradient(#fdb1470a,#fdb14734)',
    '/dashboard/arctic': 'linear-gradient(#87c1f10c,#87c1f131)',
    };

    const style = {
      background: urlCases[location.pathname]
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
        <div className={classnames(single_chart_page,{[active]:isOpen})}>
              
              <LoadingBar />
              <Outlet/>
           
           <div className={`${BG_draw} ${draw1}`} style={style}></div>
           <div className={`${BG_draw} ${draw2}`} style={style}></div>
           <div className={`${BG_draw} ${draw3}`} style={style}></div>
        </div>
    </>
  )
}

export default Chartsdashboard
