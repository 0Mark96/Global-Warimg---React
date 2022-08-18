import React from 'react'
import { useDispatch, useSelector} from "react-redux";
import { fetchData } from '../../../redux/counter';
import {useEffect} from 'react'
import ChartMethane from '../../../Component/DashBoard/ChartMethane/ChartMethane';
import style from '../Dashboard.module.scss';

const Methane = () => {
  const methane = useSelector(state => state.data)
  const dispatch = useDispatch()
  const {title_chart,first_descr_chart,second_descr_chart} = style 

  useEffect(()=>{
  dispatch(fetchData('methane'))
  window.scrollTo(0,0)
  },[dispatch])
 
  return (
    <>
        <h1 className={title_chart}>Methane</h1>
        <p className={first_descr_chart}>This chart provides on a monthly basis, the amount of methane in the atmosphere from 1983 to the present. Expressed as a mole fraction in dry air, parts per million (ppm).</p>
        {methane.loading && <h1>loading...</h1>}
        {!methane.loading && methane.error ? <h1>Error:{methane.error}</h1> : null}
        {!methane.loading && !methane.error ? (
          <ChartMethane methane={methane.data}/>
        ) : <h3>Sorry for the inconvenience</h3>}  
        <p className={second_descr_chart}>
        Methane is a flammable gas formed by geological and biological processes. Some of the natural ones are leaks from natural gas systems and wetlands.
        50-65% of total global methane emissions come from human activities. These include livestock, agriculture, oil and gas systems, waste from homes and businesses, landfills, and so on.
        <br />Methane is a gas with a global warming potential several times stronger than of CO2. For more than 650,000 years, methane concentration in the atmosphere was between 350 – 800 ppb. From the beginning of the industrial revolution, human activities have increased this amount by around 150%.
        </p> 
    </>
  )
}

export default Methane