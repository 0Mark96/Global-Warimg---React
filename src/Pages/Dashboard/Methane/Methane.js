import React from 'react'
import {useEffect} from 'react'
import ChartMethane from '../../../Component/DashBoard/ChartMethane/ChartMethane';
import style from '../Dashboard.module.scss';
import {useQuery} from 'react-query'
import { fetchData } from '../../../clientAPI/fetchData';
import { URL } from '../../../clientAPI/API';

const Methane = () => {
  const {title_chart,first_descr_chart,second_descr_chart} = style 
  const {isLoading, isError, error, data: methaneData } = useQuery('methaneData',()=>fetchData(URL.methaneUrl))

  useEffect(()=>{
  window.scrollTo(0,0)
  },[])
 
  return (
    <>
        <h1 className={title_chart}>Methane</h1>
        <p className={first_descr_chart}>This chart provides on a monthly basis, the amount of methane in the atmosphere from 1983 to the present. Expressed as a mole fraction in dry air, parts per million (ppm).</p>
        {
        isLoading ? <h1>Loading...</h1> : isError ? <h1>Error message: {error.message}</h1> :
          <ChartMethane methaneData={methaneData?.methane}/>
        }
        <p className={second_descr_chart}>
        Methane is a flammable gas formed by geological and biological processes. Some of the natural ones are leaks from natural gas systems and wetlands.
        50-65% of total global methane emissions come from human activities. These include livestock, agriculture, oil and gas systems, waste from homes and businesses, landfills, and so on.
        <br />Methane is a gas with a global warming potential several times stronger than of CO2. For more than 650,000 years, methane concentration in the atmosphere was between 350 – 800 ppb. From the beginning of the industrial revolution, human activities have increased this amount by around 150%.
        </p> 
    </>
  )
}

export default Methane