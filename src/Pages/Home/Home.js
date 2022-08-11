import { useEffect } from 'react'
import Header from '../../Component/Home/Header/Header'
import styles from './Home.module.scss'
import MainSection from '../../Component/Home/MainSection/MainSection'
import InfoSection from '../../Component/Home/InfoSection/InfoSection'
import Footer from '../../Component/Home/Footer/Footer'

const Home = () => {
  const {home_page} = styles
  
  useEffect(()=>{
  window.scrollTo(0,0)
  },[])

  return (
    <div className={home_page}>
        <Header />
        <MainSection />
        <InfoSection />
        <Footer />
    </div>
    
  )
}

export default Home  
 



