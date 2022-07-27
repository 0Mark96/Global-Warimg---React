import React from 'react'
import Header from '../../Component/Home/Header/Header'
import styles from './Home.module.scss'

const Home = () => {
  const {home_page} = styles
  
  return (
    <div className={home_page}>
        <Header />
    </div>
    
  )
}

export default Home  
 



/* <Media query="(max-width: 778px)" render={() =>
          (
           <h1>NavBar mobile</h1>
          )}
        />
    <Media query="(min-width: 779px)" render={() =>
          (
            <h1>NavBar desktop</h1>
          )}
    /> */