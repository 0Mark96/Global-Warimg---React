import styles from './NavLink.module.scss';
import classnames from 'classnames';
import { Link, useLocation, useNavigate } from 'react-router-dom';

//importing image for nav link
import TempImg from '../../../../Assets/Img/temperature.svg';
import Co2Img from '../../../../Assets/Img/co2.svg';
import MethImg from '../../../../Assets/Img/methane.svg';
import NitrImg from '../../../../Assets/Img/nitrous.svg';
import IceImg from '../../../../Assets/Img/ice.svg';
import HomeImg from '../../../../Assets/Img/home.svg';

const NavLink = ({isOpen}) => {
    const {nav_container,active,link_container,border_left_orange,link_icon} = styles
        //capture location to add orange line down the link
        let location = useLocation()
        const tempPathName = location.pathname === '/dashboard'
        const carbPathName = location.pathname === '/dashboard/co2'
        const methPathName = location.pathname === '/dashboard/methane'
        const nitrPathName = location.pathname === '/dashboard/nitrous'
        const arcticPathName = location.pathname === '/dashboard/arctic'   
    
        // after click the link close menu and navigate to page
        let navigate = useNavigate();
        const handleLink = (url)=>{
            navigate(url)
        }

    return (
    <nav className={classnames(nav_container,{[active]:isOpen})}>
        <div className={classnames(link_container,{[border_left_orange]:tempPathName})} onClick={()=>handleLink('')}>
            <img className={link_icon} src={TempImg} alt=''/>
            <Link to=''>Temperature</Link>   
        </div>
        <div className={classnames(link_container,{[border_left_orange]:carbPathName})} onClick={()=>handleLink('co2')}>
            <img className={link_icon} src={Co2Img} alt=''/>
            <Link to='co2'>Carbon Dioxide</Link>   
        </div>
        <div className={classnames(link_container,{[border_left_orange]:methPathName})} onClick={()=>handleLink('methane')}>
            <img className={link_icon} src={MethImg} alt=''/>
            <Link to='methane'>Methane</Link>   
        </div>
        <div className={classnames(link_container,{[border_left_orange]:nitrPathName})} onClick={()=>handleLink('nitrous')}>
            <img className={link_icon} src={NitrImg} alt=''/>
            <Link to='nitrous'>Nitrous Oxide</Link>   
        </div>
        <div className={classnames(link_container,{[border_left_orange]:arcticPathName})} onClick={()=>handleLink('arctic')}>
            <img className={link_icon} src={IceImg} alt=''/>
            <Link to='arctic'>Polar Ice</Link>   
        </div>
        <div className={link_container} onClick={()=>handleLink('/')}>
            <img className={link_icon} src={HomeImg} alt=''/>
            <Link to='/'>Back Home</Link>   
        </div>
    </nav>
  )
}

export default NavLink