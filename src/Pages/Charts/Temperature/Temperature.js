import React from 'react'
import { useDispatch, useSelector} from "react-redux";
import { fetchData} from '../../../redux/counter';
import {useEffect} from 'react';
import ChartTemperature from '../../../Component/DashBoard/ChartTemperature/ChartTemperature'
const Temperature = () => {
  const temperature = useSelector(state => state.data)
  const dispatch = useDispatch()
 
  useEffect(()=>{
  dispatch(fetchData('temperature'))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
 
  return (
    <>
        <h1>Temperature</h1>
        {temperature.loading && <h1>loading...</h1>}
        {!temperature.loading && temperature.error ? <h1>Error:{temperature.error}</h1> : null}
        {!temperature.loading && temperature.data.length ? (
          <ChartTemperature temperature={temperature}/>
        ) : null}   
    </>
  )
}

export default Temperature