import React from 'react'
import { useDispatch, useSelector} from "react-redux";
import { fetchData } from '../../../redux/counter';
import {useEffect} from 'react'
import ChartCarbonDioxide from '../../../Component/DashBoard/ChartCarbonDioxide/ChartCarbonDioxide';

const CarbonDioxide = () => {
  const CarbonDioxide = useSelector(state => state.data)
  const dispatch = useDispatch()

  useEffect(()=>{
  dispatch(fetchData('carbonDioxide'))
  window.scrollTo(0,0)
 // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  

  return (
    <>
        <h1>Carbon Dioxide</h1>
        <p>This chart provides on a quasi-daily basis, the amount of carbon dioxide (CO2) in the atmosphere. It is expressed as a mole fraction in dry air, parts per million (ppm).</p>
        {CarbonDioxide.loading && <h1>loading...</h1>}
        {!CarbonDioxide.loading && CarbonDioxide.error ? <h1>Error:{CarbonDioxide.error}</h1> : null}
        {!CarbonDioxide.loading && CarbonDioxide.data.length ? (
          <ChartCarbonDioxide CarbonDioxide={CarbonDioxide.data}/>
        ) : null}  
        <p>
        For thousands of years, the natural concentration of CO2 in earth atmosphere was around 280 ppm. 
        From the beginning of the industrial revolution, human activities like the burning of fossil fuels, deforestation, and livestock have increased this amount by more than 30%.
        </p> 
    </>
  )
}

export default CarbonDioxide