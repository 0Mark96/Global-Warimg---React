import React from 'react'
import { useDispatch, useSelector} from "react-redux";
import { fetchData } from '../../../redux/counter';
import {useEffect} from 'react'

const Methane = () => {
  const methane = useSelector(state => state.data)
  const dispatch = useDispatch()

  useEffect(()=>{
  dispatch(fetchData('methane'))
   // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
 
  return (
    <div>
        <h1>Methane</h1>
        {methane.loading && <h1>loading...</h1>}
        {!methane.loading && methane.error ? <h1>Error:{methane.error}</h1> : null}
        {!methane.loading && methane.data.length ? (
          <ul>
            {
              methane.data.map(item => <li>{item.date}</li>)
            }
          </ul>
        ):null}    
    </div>
  )
}

export default Methane