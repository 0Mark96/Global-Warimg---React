import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Brush, Label} from 'recharts';

const ChartTemperature = ({temperature}) => {
  const isLargeScreen = window.innerWidth > 999

  return (
    <div style={{border:'1px solid black'}}>
    <ResponsiveContainer width="99%" aspect={isLargeScreen ? 2 : 1}>
      <AreaChart
      data={temperature.data} 
      // margin={{
      //   top: 10,
      //   right: 30,
      //   left: 0,
      //   bottom: 0,
      // }}
      margin={{
        top: 0,
        right: 0,
        left: -25,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" angle={-20}  minTickGap={40} tickSize={15} tickLine={false} height={55} />
      <YAxis dataKey="station" domain={[-2, 2]}/>
      <Tooltip />
      {/* <Brush dataKey='time' height={40} stroke="#003">
         <AreaChart data={temperature.data}>
           <Area type="monotone" dataKey="station" stroke="#000"  />
         </AreaChart>
      </Brush> */}
      <Area type="monotone" dataKey="station" stroke="#8884d8" fill="#8884d8"/> 
    </AreaChart>
   
  </ResponsiveContainer>
  </div>
  )
}

export default ChartTemperature