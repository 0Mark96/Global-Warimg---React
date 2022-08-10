import { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import styles from '../ChartsContainer.module.scss';

const ChartArcticData = ({arcticData}) => {
  const [screenSize, setScreenSize] = useState(window.innerWidth) // change height of chart according to width  
  const [arcticDataDate,setarcticDataDate] = useState(arcticData)
 console.log(arcticData);
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
        setarcticDataDate(arcticData.slice(min,max))
        setIsBtnSelected(id)
      }

  return (
    <>
    <div className={styles.chart_container}>
    <ResponsiveContainer width="100%" aspect={screenSize > 767 ? 2 : 1}>
      <AreaChart
      data={arcticDataDate} 

      margin={{
        top: 0,
        right: 5,
        left: -27,
        bottom: -15,
      }}
    >
    <defs>
    <linearGradient id="colorArea" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#2C82C9" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#2C82C9" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorExtend" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#89C4F4" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#89C4F4" stopOpacity={0}/>
    </linearGradient>
  </defs>
      <CartesianGrid strokeDasharray="1 5" />
      <XAxis dataKey="year" angle={-20}  minTickGap={40} tickSize={15} tickLine={false} height={55}/>
      <YAxis/>
      <Tooltip contentStyle={{color:'white',backgroundColor:'black',boxShadow:'0px 0px 10px white'}}/>
      <Area type="monotone" dataKey="extent" stroke="" fillOpacity={1} fill="url(#colorExtend)" />
      <Area type="monotone" dataKey="area" stroke="" fillOpacity={1} fill="url(#colorArea)" />
    </AreaChart>
   
  </ResponsiveContainer>
  </div>
  <div className={styles.change_date_container}>
      <button onClick={()=>changeDate(0,15,1)} className={isBtnSelected === 1 ? styles.btn_selected : null}>1979 - 1993</button>
      <button onClick={()=>changeDate(15,30,2)} className={isBtnSelected === 2 ? styles.btn_selected : null} >1994 - 2008</button>
      <button onClick={()=>changeDate(30,arcticData.lenght,3)} className={isBtnSelected === 3 ? styles.btn_selected : null}>2009 - Present</button>
      <button onClick={()=>changeDate(0,arcticData.lenght,4)} className={isBtnSelected === 4 ? styles.btn_selected : null}>1979 - Present</button>
  </div>
  </>
  )
}

export default ChartArcticData