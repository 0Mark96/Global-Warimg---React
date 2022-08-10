import { useDispatch, useSelector} from "react-redux";
import { fetchData } from '../../../redux/counter';
import {useEffect} from 'react'
import ChartArcticData from "../../../Component/DashBoard/ChartArcticData/ChartArcticData";

const ArcticData = () => {
  const arcticData = useSelector(state => state.data)
  const dispatch = useDispatch()
 
  useEffect(()=>{
  dispatch(fetchData('arcticData'))
  window.scrollTo(0,0)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
 
  return (
    <>
        <h1>Melted Polar Ice Caps</h1>
        <p>This chart provides the average monthly arctic sea ice extent each September since 1979, derived from satellite observations. </p>
        {arcticData.loading && <h1>loading...</h1>}
        {!arcticData.loading && arcticData.error ? <h1>Error:{arcticData.error}</h1> : null}
        {!arcticData.loading && arcticData.data.length ? (
          <ChartArcticData arcticData={arcticData.data}/>
        ) : null}  
        <p>
        The arctic is warming around twice as fast as global average. Some of the reasons for this are: The arctic amplification, the albedo effect, and black carbon. From 1979 to 1996, we lost 2.2 – 3% of the arctic ice cover. From 2010 to present we are losing 12.85% per decade!<br />        
        Another consequence is permafrost thawing. This is a process in which large amounts of methane is released to the atmosphere, fueling more the process of global warming.
        </p> 
    </>
  )
}

export default ArcticData