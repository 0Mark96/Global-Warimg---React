import menuIcon from '../../../Assets/Img/menu.svg';
import styles from './SideBar.module.scss';
import logo from '../../../Assets/Img/logo.png';
import classnames from 'classnames';
import NavLink from './NavLink/NavLink.js';
import { useNavigate } from 'react-router-dom';

const SideBar = ({isOpen,setIsOpen}) => {
    const {sideBar_cont,active,menu_icon,logo_img,menu_and_logo} = styles
    let navigate = useNavigate()

    return (
        <aside className={classnames(sideBar_cont,{[active]:isOpen})}>
            <div className={menu_and_logo}>
                <img src={logo} className={logo_img} alt='logo' onClick={()=>navigate('/')}/>
                <img src={menuIcon} className={menu_icon} alt='icon menu' onClick={()=>setIsOpen(!isOpen)}/>
            </div>
            <NavLink isOpen={isOpen}/>
        </aside>
    )
}

export default SideBar