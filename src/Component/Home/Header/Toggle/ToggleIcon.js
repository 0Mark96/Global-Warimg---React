import style from './ToggleIcon.module.scss';
import classnames from "classnames";



const ToggleIcon = ({isOpen,setIsOpen}) => {
 const {nav_menu,active,span1,span2,span3} = style
  
 return (
        <div className={classnames(nav_menu,{[active]:isOpen})} onClick={()=>setIsOpen(!isOpen)}>
           <span className={span1}></span>
           <span className={span2}></span>
           <span className={span3}></span>
        </div>
  )
}

export default ToggleIcon
