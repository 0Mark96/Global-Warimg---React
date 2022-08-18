import { useDispatch, useSelector} from "react-redux";
import { fetchData} from '../../../redux/counter';
import {useEffect} from 'react';
import ChartTemperature from '../../../Component/DashBoard/ChartTemperature/ChartTemperature';
import style from '../Dashboard.module.scss'

const Temperature = () => {
  const temperature = useSelector(state => state.data)
  const dispatch = useDispatch()
  const {title_chart,first_descr_chart,second_descr_chart} = style 

  useEffect(()=>{
  dispatch(fetchData('temperature'))
  window.scroll(0,0)
  },[dispatch])

  return (
    <>
        <h1 className={title_chart}>Temperature</h1>
        <p className={first_descr_chart}>This chart provides on a monthly basis, the global mean surface temperature anomaly from 1880 to the present (in celsius).</p>
        {temperature.loading && <h1>loading...</h1>}
        {!temperature.loading && temperature.error ? <h1>Error:{temperature.error}</h1> : null}
        {!temperature.loading && !temperature.error ? (
          <ChartTemperature temperature={temperature.data}/>
        ) : <h3>Sorry for the inconvenience</h3>}  
        <p className={second_descr_chart}>
        The current global warming rate is not natural. From 1880 to 1981 was (0.07°C / 0.13°F) per decade. Since 1981 this rate has increased to (0.18°C / 0.32°F). <br />
        Some of the past sudden increase on global temperature present in this graph, correspond to the Roman Warm Period and the Medieval Warm Period. These events were at regional and not global scale. <br />
        The total average global temperature rise since the industrial revolution is around (1.0 °C / 1.8 °F). Earth northern hemisphere is warming faster. The arctic has warmed between (2 °C / 3.6 °F) and (4 °C / 7.2 °F).
        </p> 
    </>
  )
}

export default Temperature