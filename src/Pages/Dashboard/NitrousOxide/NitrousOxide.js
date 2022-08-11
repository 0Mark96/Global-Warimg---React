import React from 'react'
import { useDispatch, useSelector} from "react-redux";
import { fetchData } from '../../../redux/counter';
import {useEffect} from 'react'
import ChartNitrous from '../../../Component/DashBoard/ChartNitrous/ChartNitrous';

const NitrousOxide = () => {
  const nitrousOxide = useSelector(state => state.data)
  const dispatch = useDispatch()
  
  useEffect(()=>{
  dispatch(fetchData('nitrousOxide'))
  window.scrollTo(0,0)
  },[dispatch])
 
  return (
    <>
        <h1>Nitrous Oxide</h1>
        <p>This chart provides on a monthly basis, the amount of nitrous oxide in the atmosphere from 2001 to the present. Expressed as a mole fraction in dry air, parts per million (ppm).</p>
        {nitrousOxide.loading && <h1>loading...</h1>}
        {!nitrousOxide.loading && nitrousOxide.error ? <h1>Error:{nitrousOxide.error}</h1> : null}
        {!nitrousOxide.loading && !nitrousOxide.error ? (
          <ChartNitrous nitrousOxide={nitrousOxide.data}/>
        ) : <h3>Sorry for the inconvenience</h3>}  
        <p>
        Nitrous oxide is a gas that is produced by the combustion of fossil fuel and solid waste, nitrogen-base fertilizers, sewage treatment plants, natural processes, and other agricultural and industrial activities.<br />        
        It is the third largest heat-trapping gas in the atmosphere and the biggest ozone-destroying compound emitted by human activities.
        </p> 
    </>
  )
}

export default NitrousOxide