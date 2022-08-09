import { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import styles from '../ChartsContainer.module.scss';

const ChartTemperature = ({temperature}) => {
  const [screenSize, setScreenSize] = useState(window.innerWidth) // change height of chart according to width
  const [temperatureDate,setTemperatureDate] = useState(temperature) // change the range date show on chart on butn clicked
  const [isBtnSelected,setIsBtnSelected]= useState() // if button is selected change style

  // change aspect of responsive container while window resize
  useEffect(()=>{
    function handleResize() {
      setScreenSize(window.innerWidth)
    }
    window.addEventListener('resize',handleResize)
    
  })

  // change date on btn selected
  const changeDate = (min,max,id) => {
    setTemperatureDate(temperature.slice(min,max))
    setIsBtnSelected(id)
  }

  return (
    <>
    <div className={styles.chart_container}>
    <ResponsiveContainer width="100%" aspect={screenSize > 767 ? 2 : 1}>
      <AreaChart
      data={temperatureDate} 

      margin={{
        top: 0,
        right: 5,
        left: -40,
        bottom: -15,
      }}
    >
      <CartesianGrid strokeDasharray="1 5" />
      <XAxis dataKey="time" angle={-20}  minTickGap={40} tickSize={15} tickLine={false} height={55}/>
      <YAxis dataKey="celcius" domain={[-2, 2]}/>
      <Tooltip contentStyle={{color:'white',backgroundColor:'black',boxShadow:'0px 0px 10px white'}}/>
      <Area type="monotone" dataKey="celcius" stroke="" fill="#ff3300"/> 
    </AreaChart>
   
  </ResponsiveContainer>
  </div>
  <div className={styles.change_date_container}>
      <button onClick={()=>changeDate(0,576,1)} className={isBtnSelected === 1 ? styles.btn_selected : null}>1880 - 1928</button>
      <button onClick={()=>changeDate(576,1140,2)} className={isBtnSelected === 2 ? styles.btn_selected : null} >1928 - 1975</button>
      <button onClick={()=>changeDate(1140,temperature.lenght,3)} className={isBtnSelected === 3 ? styles.btn_selected : null}>1975 - Present</button>
      <button onClick={()=>changeDate(0,temperature.lenght,4)} className={isBtnSelected === 4 ? styles.btn_selected : null}>1880 - Present</button>
  </div>
  </>
  )
}

export default ChartTemperature