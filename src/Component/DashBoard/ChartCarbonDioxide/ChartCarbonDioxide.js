import { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import styles from '../ChartsContainer.module.scss';

const ChartCarbonDioxide = ({co2Data}) => {
  // change aspect of responsive container while window resize
  const [screenSize, setScreenSize] = useState(window.innerWidth)   
  useEffect(()=>{
    function handleResize() {
      setScreenSize(window.innerWidth)
    }
    window.addEventListener('resize',handleResize)
  },[])

  // function to mutate array, before being displayed
  const mutateData = ()=>{
    return co2Data.filter(item => item.day === '1').map(item => (
      {
      co2:item.trend,
      completeDate:`${item.day}/${item.month}/${item.year}`,
      }
    ))    
  }
  //----
  
  const [carbonDioxideTime,setCarbonDioxideTime] = useState(mutateData()) // final array that will be displayed
  
  // change time on btn selected and update carbonDioxideTime
    const [isBtnSelected,setIsBtnSelected]= useState() // if button is selected change style
    const changeDate = (min,max,id) => {
        setCarbonDioxideTime(mutateData().slice(min,max))
        setIsBtnSelected(id)
      }
   
  return (
    <>
    <div className={styles.chart_container}>
    <ResponsiveContainer width="100%" aspect={screenSize > 767 ? 2 : 1}>
    <AreaChart
      data={carbonDioxideTime} 

      margin={{
        top: 0,
        right: 5,
        left: -27,
        bottom: -15,
      }}
    >
  <defs>
    <linearGradient id="colorArea" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
  </defs>
      <CartesianGrid strokeDasharray="1 5" />
      <XAxis dataKey={'completeDate'} angle={-20}  minTickGap={40} tickSize={15} tickLine={false} height={55}/>
      <YAxis dataKey="co2" domain={[350,450]}/>
      <Tooltip contentStyle={{color:'white',backgroundColor:'black',boxShadow:'0px 0px 10px white'}}/>
      <Area type="monotone" dataKey="co2" stroke="" fill="url(#colorArea)"/> 
    </AreaChart>
    </ResponsiveContainer>
  </div>
  {/* RANGE TIME MIN-MAX CHART */}
  <div className={styles.change_date_container}>
      <button onClick={()=>changeDate(0,48,1)} className={isBtnSelected === 1 ? styles.btn_selected : null}>2012 - 2015</button>
      <button onClick={()=>changeDate(48,84,2)} className={isBtnSelected === 2 ? styles.btn_selected : null} >2016 - 2018</button>
      <button onClick={()=>changeDate(84,co2Data.lenght,3)} className={isBtnSelected === 3 ? styles.btn_selected : null}>2019 - Present</button>
      <button onClick={()=>changeDate(0,co2Data.lenght,4)} className={isBtnSelected === 4 ? styles.btn_selected : null}>2012 - Present</button>
  </div>
  </>
  )
}

export default ChartCarbonDioxide