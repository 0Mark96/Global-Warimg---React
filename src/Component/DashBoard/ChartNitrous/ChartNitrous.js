import { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import styles from '../ChartsContainer.module.scss';

const ChartNitrous = ({nitrousData}) => {
  const [screenSize, setScreenSize] = useState(window.innerWidth) // change height of chart according to width  
  const [nitrousOxideTime,setNitrousOxideTime] = useState(nitrousData)

  // change aspect of responsive container while window resize
  useEffect(()=>{
    function handleResize() {
      setScreenSize(window.innerWidth)
    }
    window.addEventListener('resize',handleResize)
  },[])
  
// change date on btn selected
    const [isBtnSelected,setIsBtnSelected]= useState() // if button is selected change style
    const changeDate = (min,max,id) => {
        setNitrousOxideTime(nitrousData.slice(min,max))
        setIsBtnSelected(id)
      }

// formatig objet date replacing dot with slash
  const formatDate = (value)=>{
      return value.replace(".","/")
  }

  return (
    <>
    <div className={styles.chart_container}>
    <ResponsiveContainer width="100%" aspect={screenSize > 767 ? 2 : 1}>
      <AreaChart
      data={nitrousOxideTime} 

      margin={{
        top: 0,
        right: 5,
        left: -27,
        bottom: -15,
      }}
    >
          <defs>
    <linearGradient id="colorArea" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#FDB147" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#FDB147" stopOpacity={0}/>
    </linearGradient>
  </defs>
      <CartesianGrid strokeDasharray="1 5" />
      <XAxis dataKey="date" angle={-20}  minTickGap={40} tickSize={15} tickLine={false} height={55} tickFormatter={formatDate}/>
      <YAxis dataKey="average" domain={[300,350]}/>
      <Tooltip labelFormatter={formatDate} contentStyle={{color:'white',backgroundColor:'black',boxShadow:'0px 0px 10px white'}}/>
      <Area type="monotone" dataKey="average" stroke="" fill="url(#colorArea)"/> 
    </AreaChart>
   
  </ResponsiveContainer>
  </div>
  <div className={styles.change_date_container}>
      <button onClick={()=>changeDate(0,84,1)} className={isBtnSelected === 1 ? styles.btn_selected : null}>2001 - 2007</button>
      <button onClick={()=>changeDate(84,168,2)} className={isBtnSelected === 2 ? styles.btn_selected : null} >2008 - 2014</button>
      <button onClick={()=>changeDate(168,nitrousData.lenght,3)} className={isBtnSelected === 3 ? styles.btn_selected : null}>2015 - Present</button>
      <button onClick={()=>changeDate(0,nitrousData.lenght,4)} className={isBtnSelected === 4 ? styles.btn_selected : null}>2001 - Present</button>
  </div>
  </>
  )
}

export default ChartNitrous