import React from 'react'
import styles from './BtnExplore.module.scss'
import  {Link} from 'react-router-dom'

const BtnExplore = () => {
  return (
    <button className={styles.btn_explore}><Link to='dashboard'>EXPLORE</Link></button>
  )
}

export default BtnExplore