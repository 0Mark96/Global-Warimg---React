import React from 'react'
import { useDispatch, useSelector} from "react-redux";
import { fetchData } from '../../../redux/counter';
import {useEffect} from 'react'

const CarbonDioxide = () => {
  const CarbonDioxide = useSelector(state => state.data)
  const dispatch = useDispatch()

  useEffect(()=>{
  dispatch(fetchData('carbonDioxide'))
 // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
 
  return (
    <div>
        <h1>Carbon Dioxide</h1>
        {CarbonDioxide.loading && <h1>loading...</h1>}
        {!CarbonDioxide.loading && CarbonDioxide.error ? <h1>Error:{CarbonDioxide.error}</h1> : null}
        {!CarbonDioxide.loading && CarbonDioxide.data.length ? (
          <ul>
            {
              CarbonDioxide.data.map(item => <li>{item.completeDate}</li>)
            }
          </ul>
        ):null}    
    </div>
  )
}

export default CarbonDioxide