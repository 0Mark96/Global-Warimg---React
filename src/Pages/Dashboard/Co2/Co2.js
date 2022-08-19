import React from 'react'
import {useEffect} from 'react'
import ChartCarbonDioxide from '../../../Component/DashBoard/ChartCarbonDioxide/ChartCarbonDioxide';
import style from '../Dashboard.module.scss';
import {useQuery} from 'react-query'
import { fetchData } from '../../../clientAPI/fetchData';
import { URL } from '../../../clientAPI/API';

const CarbonDioxide = () => {
  const {title_chart,first_descr_chart,second_descr_chart} = style 

  const {isLoading, isError, error, data: co2Data } = useQuery('co2Data',()=>fetchData(URL.co2Url))
 
  useEffect(()=>{
  window.scrollTo(0,0)
},[])


  return (
    <>
        <h1 className={title_chart}>Carbon Dioxide</h1>
        <p className={first_descr_chart}>This chart provides on a quasi-daily basis, the amount of carbon dioxide (CO2) in the atmosphere. It is expressed as a mole fraction in dry air, parts per million (ppm).</p>
        {
        isLoading ? <h1>Loading...</h1> : isError ? <h1>Error message: {error.message}</h1> :
          <ChartCarbonDioxide co2Data={co2Data?.co2}/>
         }
        <p className={second_descr_chart}>
        For thousands of years, the natural concentration of CO2 in earth atmosphere was around 280 ppm. 
        From the beginning of the industrial revolution, human activities like the burning of fossil fuels, deforestation, and livestock have increased this amount by more than 30%.
        </p> 
    </>
  )
}

export default CarbonDioxide