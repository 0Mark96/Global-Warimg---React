import {useEffect} from 'react'
import ChartArcticData from "../../../Component/DashBoard/ChartArcticData/ChartArcticData";
import style from '../Dashboard.module.scss';
import {useQuery} from 'react-query'
import { fetchData } from '../../../clientAPI/fetchData';
import { URL } from '../../../clientAPI/API';

const ArcticData = () => {
 
  const {title_chart,first_descr_chart,second_descr_chart} = style 
  const {isLoading, isError, error, data: arcticData } = useQuery('arcticData',()=>fetchData(URL.arcticUrl))

  useEffect(()=>{
  window.scrollTo(0,0)
  },[])
 
  return (
    <>
        <h1 className={title_chart}>Melted Polar Ice Caps</h1>
        <p className={first_descr_chart}>This chart provides the average monthly arctic sea ice extent each September since 1979, derived from satellite observations. </p>
        {
        isLoading ? <h1>Loading...</h1> : isError ? <h1>Error message: {error.message}</h1> :
           <ChartArcticData arcticData={arcticData?.arcticData}/>
        }
        <p className={second_descr_chart}>
        The arctic is warming around twice as fast as global average. Some of the reasons for this are: The arctic amplification, the albedo effect, and black carbon. From 1979 to 1996, we lost 2.2 – 3% of the arctic ice cover. From 2010 to present we are losing 12.85% per decade!<br />        
        Another consequence is permafrost thawing. This is a process in which large amounts of methane is released to the atmosphere, fueling more the process of global warming.
        </p> 
    </>
  )
}

export default ArcticData