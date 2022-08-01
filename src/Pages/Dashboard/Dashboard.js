import { Outlet } from "react-router-dom";
import NavBarMobile from "../../Component/DashBoard/NavBarMobile/NavBarMobile";
import styles from './Dashboard.module.scss';
import Media from 'react-media';

const Chartsdashboard = () => { 
  return (
    <>
     <Media query="(max-width: 991px)" render={() =>
          (
            <NavBarMobile />
          )}
      />
    <Media query="(min-width: 992px)" render={() =>
          (
            <h1>NavBar desktop</h1>
          )}
    /> 
    
        <div className={styles.singleChartPage}>
           <Outlet/>
        </div>
    </>
  )
}

export default Chartsdashboard
