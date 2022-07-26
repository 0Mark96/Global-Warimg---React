import { Outlet } from "react-router-dom";
import NavBar from "../../Component/NavBar/NavBar";
import styles from './Charts.module.scss';

const Chartsdashboard = () => { 
  return (
    <>
    <NavBar />
        <div className={styles.singleChartPage}>
           <Outlet/>
        </div>
    </>
  )
}

export default Chartsdashboard