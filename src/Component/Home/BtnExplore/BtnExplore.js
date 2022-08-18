import React from 'react'
import styles from './BtnExplore.module.scss'
import  {Link} from 'react-router-dom'

const BtnExplore = () => {
  return (
    <Link className={styles.btn_explore} to='dashboard'>EXPLORE</Link>
  )
}

export default BtnExplore