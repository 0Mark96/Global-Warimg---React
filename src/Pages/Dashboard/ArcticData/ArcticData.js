import React from 'react'
import { useDispatch, useSelector} from "react-redux";
import { fetchData } from '../../../redux/counter';
import {useEffect} from 'react'

const ArcticData = () => {
  const arcticData = useSelector(state => state.data)
  const dispatch = useDispatch()
 
  useEffect(()=>{
  dispatch(fetchData('arcticData'))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
 
  return (
    <div>
        <h1>Melted Polar Ice Caps</h1>
        {arcticData.loading && <h1>loading...</h1>}
        {!arcticData.loading && arcticData.error ? <h1>Error:{arcticData.error}</h1> : null}
        {!arcticData.loading && arcticData.data.length ? (
          <ul>
            {
              arcticData.data.map(item => <li>{item.year}</li>)
            }
          </ul>
        ):null}    
    </div>
  )
}

export default ArcticData