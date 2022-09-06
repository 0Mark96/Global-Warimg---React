import { useEffect, useState } from 'react'
import styles from './LoadingBar.module.scss'
import {useLocation} from 'react-router-dom'

const LoadingBar = () => {
    const {loader_page,loader_container,loader_square} = styles
    const [isLoading, setIsLoading] = useState(true)
    const {pathname}=useLocation()
    
    useEffect(()=>{
      setIsLoading(true)
      setTimeout(()=>setIsLoading(false),1800)
    },[pathname])
  return (
    <div className={loader_page} style={{display: !isLoading && 'none'}}>
        <div className={loader_container}>
           <div className={loader_square}></div>     
        </div>
    </div>
  )
}

export default LoadingBar