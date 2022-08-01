import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './NavLink.module.scss';
import {Link,useNavigate,useLocation } from 'react-router-dom';
import classnames from 'classnames';

//importing image for nav link
import TempImg from '../../../../Assets/Img/temperature.svg';
import Co2Img from '../../../../Assets/Img/co2.svg';
import MethImg from '../../../../Assets/Img/methane.svg';
import NitrImg from '../../../../Assets/Img/nitrous.svg';
import IceImg from '../../../../Assets/Img/ice.svg';
import HomeImg from '../../../../Assets/Img/home.svg';

const NavLink = ({isMenuOpen,setIsMenuOpen}) => {
    const {single_link_cont,span_orange,link_container} = styles
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
        setIsMenuOpen(!isMenuOpen)
        navigate(url)
    }

   
    
  return (
    isMenuOpen ? (
    <Container className={link_container}>
     
      <Row>
        <Col className={single_link_cont} onClick={()=>handleLink('')}>
            <img src={TempImg} alt=''/>
            <Link to=''>Temperature</Link>
            <span className={classnames({[span_orange]:tempPathName})}></span>
        </Col>
        <Col className={single_link_cont} onClick={()=>handleLink('co2')}>
            <img src={Co2Img} alt=''/>
            <Link to='co2'>Carbon Dioxide</Link>
            <span className={classnames({[span_orange]:carbPathName})}></span>
        </Col>
        <Col className={single_link_cont} onClick={()=>handleLink('methane')}>
            <img src={MethImg} alt=''/>
            <Link to='methane'>Methane</Link>
            <span className={classnames({[span_orange]:methPathName})}></span>
        </Col>
      </Row>
      
      <Row>
        <Col className={single_link_cont} onClick={()=>handleLink('nitrous')}>
            <img src={NitrImg} alt=''/>
            <Link to='nitrous'>Nitrous Oxide</Link>
            <span className={classnames({[span_orange]:nitrPathName})}></span>
        </Col>
        <Col className={single_link_cont} onClick={()=>handleLink('arctic')}>
            <img src={IceImg} alt=''/>
            <Link to='arctic'>Polar Ice</Link>
            <span className={classnames({[span_orange]:arcticPathName})}></span>
        </Col>
        <Col className={single_link_cont} onClick={()=>handleLink('/')}>
            <img src={HomeImg} alt=''/>
            <Link to='/'>Back Home</Link>
            <span></span>
        </Col>
      </Row>
   
    </Container>
     ) : null
  ) 
}

export default NavLink