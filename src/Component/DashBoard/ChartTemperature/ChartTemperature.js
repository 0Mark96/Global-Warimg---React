import { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import style from '../ChartsContainer.module.scss';


const ChartTemperature = ({temperatureData}) => {
  const [screenSize, setScreenSize] = useState(window.innerWidth) // change aspect of chart according to width
  const [temperatureTime,setTemperatureTime] = useState(temperatureData) // change the range Time show on chart on butn clicked
  const [isBtnSelected,setIsBtnSelected]= useState() // if button is selected change style

  // change aspect of responsive container while window resize
  useEffect(()=>{
    function handleResize() {
      setScreenSize(window.innerWidth)
    }
    window.addEventListener('resize',handleResize)
  })

  // change Time on btn selected
  const changeTime = (min,max,id) => {
    setTemperatureTime(temperatureData.slice(min,max))
    setIsBtnSelected(id)
  }
 

  // This function change years label (XAxis), transforming decimal number in month 
  const formatXAxis = (value)=>{
    let integer = Math.floor(value)
    let decimal = Math.round((value - integer) * 100)
    switch(decimal){
      case 4:
        return integer + 'Gen';
        
      case 13:
        return integer + 'Feb'
        
      case 21:
        return integer + 'Mar'
        
      case 29:
        return integer + 'Apr'
        
      case 38:
        return integer + 'May'
        
      case 46:
        return integer + 'Jun'
        
      case 54:
        return integer + 'Jul'
        
      case 63:
        return integer + 'Aug'
        
      case 71:
        return integer + 'Sep'
        
      case 79:
        return integer + 'Oct'
        
      case 88:
        return integer + 'Nov'
        
      case 96:
        return integer + 'Dec'
        
      default:
        return integer
    } 
  }

  return (
    <>
    <div className={style.chart_container}>
    <ResponsiveContainer width="100%" aspect={screenSize > 767 ? 2 : 1}>
      <AreaChart
      data={temperatureTime} 

      margin={{
        top: 0,
        right: 5,
        left: -40,
        bottom: -15,
      }}
    >
      <CartesianGrid strokeDasharray="1 5" />
      <XAxis dataKey="time" angle={-20}  minTickGap={40} tickSize={15} tickLine={false} height={55} tickFormatter={formatXAxis}/>
      <YAxis dataKey="station" domain={[-2, 2]}/>
      <Tooltip labelFormatter={formatXAxis} contentStyle={{color:'white',backgroundColor:'black',boxShadow:'0px 0px 10px white'}}/>
      <Area type="monotone" dataKey="station" stroke="" fill="#ff3300"/> 
    </AreaChart>
   
  </ResponsiveContainer>
  </div>
    {/* RANGE TIME MIN-MAX CHART */}
  <div className={style.change_date_container}>
      <button onClick={()=>changeTime(0,576,1)} className={isBtnSelected === 1 ? style.btn_selected : null}>1880 - 1928</button>
      <button onClick={()=>changeTime(576,1140,2)} className={isBtnSelected === 2 ? style.btn_selected : null} >1928 - 1975</button>
      <button onClick={()=>changeTime(1140,temperatureData.lenght,3)} className={isBtnSelected === 3 ? style.btn_selected : null}>1975 - Present</button>
      <button onClick={()=>changeTime(0,temperatureData.lenght,4)} className={isBtnSelected === 4 ? style.btn_selected : null}>1880 - Present</button>
  </div>
  </>
  )
}

export default ChartTemperature