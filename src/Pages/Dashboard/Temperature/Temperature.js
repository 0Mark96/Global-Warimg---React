import ChartTemperature from '../../../Component/DashBoard/ChartTemperature/ChartTemperature';
import style from '../Dashboard.module.scss'
import {useQuery} from 'react-query'
import { fetchData } from '../../../clientAPI/fetchData';
import { URL } from '../../../clientAPI/API';

const Temperature = () => {
  const {title_chart,first_descr_chart,second_descr_chart} = style 

  const {isLoading, isError, error, data: temperatureData } = useQuery('temperatureData',()=>fetchData(URL.temperatureUrl))
 
  return (
    <>
        <h1 className={title_chart}>Temperature</h1>
        <p className={first_descr_chart}>This chart provides on a monthly basis, the global mean surface temperature anomaly from 1880 to the present (in celsius).</p>
        {!!isLoading && <h1>Loading...</h1>}
        {!!isError && <h1>Error message : {error.message}</h1>}
        {!isError && !isLoading && <ChartTemperature temperatureData={temperatureData?.result}/>}
        <p className={second_descr_chart}>
        The current global warming rate is not natural. From 1880 to 1981 was (0.07°C / 0.13°F) per decade. Since 1981 this rate has increased to (0.18°C / 0.32°F). <br />
        Some of the past sudden increase on global temperature present in this graph, correspond to the Roman Warm Period and the Medieval Warm Period. These events were at regional and not global scale. <br />
        The total average global temperature rise since the industrial revolution is around (1.0 °C / 1.8 °F). Earth northern hemisphere is warming faster. The arctic has warmed between (2 °C / 3.6 °F) and (4 °C / 7.2 °F).
        </p> 
    </>
  )
}

export default Temperature