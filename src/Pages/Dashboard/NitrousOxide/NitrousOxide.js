import React from 'react'
import {useEffect} from 'react';
import ChartNitrous from '../../../Component/DashBoard/ChartNitrous/ChartNitrous';
import style from '../Dashboard.module.scss';
import {useQuery} from 'react-query'
import { fetchData } from '../../../clientAPI/fetchData';
import { URL } from '../../../clientAPI/API';

const NitrousOxide = () => {
  const {title_chart,first_descr_chart,second_descr_chart} = style 
  const {isLoading, isError, error, data: nitrousData } = useQuery('nitrousData',()=>fetchData(URL.nitrousUrl))
 
  useEffect(()=>{
  window.scrollTo(0,0)
  },[])
 
  return (
    <>
        <h1 className={title_chart}>Nitrous Oxide</h1>
        <p className={first_descr_chart}>This chart provides on a monthly basis, the amount of nitrous oxide in the atmosphere from 2001 to the present. Expressed as a mole fraction in dry air, parts per million (ppm).</p>
        {
        isLoading ? <h1>Loading...</h1> : isError ? <h1>Error message: {error.message}</h1> :
          <ChartNitrous nitrousData={nitrousData.nitrous}/>
        }
        <p className={second_descr_chart}>
        Nitrous oxide is a gas that is produced by the combustion of fossil fuel and solid waste, nitrogen-base fertilizers, sewage treatment plants, natural processes, and other agricultural and industrial activities.<br />        
        It is the third largest heat-trapping gas in the atmosphere and the biggest ozone-destroying compound emitted by human activities.
        </p> 
    </>
  )
}

export default NitrousOxide