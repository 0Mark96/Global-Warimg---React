import React from 'react'
import { useDispatch, useSelector} from "react-redux";
import { fetchData } from '../../../redux/counter';
import {useEffect} from 'react'

const NitrousOxide = () => {
  const nitrousOxide = useSelector(state => state.data)
  const dispatch = useDispatch()
  console.log(nitrousOxide);
  useEffect(()=>{
  dispatch(fetchData('nitrousOxide'))
  },[])
 
  return (
    <div>
        <h1>Nitrous Oxide</h1>
        {nitrousOxide.loading && <h1>loading...</h1>}
        {!nitrousOxide.loading && nitrousOxide.error ? <h1>Error:{nitrousOxide.error}</h1> : null}
        {!nitrousOxide.loading && nitrousOxide.data.length ? (
          <ul>
            {
              nitrousOxide.data.map(item => <li>{item.date}</li>)
            }
          </ul>
        ):null}    
    </div>
  )
}

export default NitrousOxide