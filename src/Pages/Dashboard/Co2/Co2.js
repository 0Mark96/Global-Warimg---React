import React from 'react'
import { useDispatch, useSelector} from "react-redux";
import { fetchData } from '../../../redux/counter';
import {useEffect} from 'react'
import ChartCarbonDioxide from '../../../Component/DashBoard/ChartCarbonDioxide/ChartCarbonDioxide';
import style from '../Dashboard.module.scss';

const CarbonDioxide = () => {
  const CarbonDioxide = useSelector(state => state.data)
  const dispatch = useDispatch()
  const {title_chart,first_descr_chart,second_descr_chart} = style 

  useEffect(()=>{
  dispatch(fetchData('carbonDioxide'))
  window.scrollTo(0,0)
},[dispatch])


  return (
    <>
        <h1 className={title_chart}>Carbon Dioxide</h1>
        <p className={first_descr_chart}>This chart provides on a quasi-daily basis, the amount of carbon dioxide (CO2) in the atmosphere. It is expressed as a mole fraction in dry air, parts per million (ppm).</p>
        {CarbonDioxide.loading && <h1>loading...</h1>}
        {!CarbonDioxide.loading && CarbonDioxide.error ? <h1>Error:{CarbonDioxide.error}</h1> : null}
        {!CarbonDioxide.loading && !CarbonDioxide.error ? (
          <ChartCarbonDioxide CarbonDioxide={CarbonDioxide.data}/>
        ) : <h3>Sorry for the inconvenience</h3>}  
        <p className={second_descr_chart}>
        For thousands of years, the natural concentration of CO2 in earth atmosphere was around 280 ppm. 
        From the beginning of the industrial revolution, human activities like the burning of fossil fuels, deforestation, and livestock have increased this amount by more than 30%.
        </p> 
    </>
  )
}

export default CarbonDioxide