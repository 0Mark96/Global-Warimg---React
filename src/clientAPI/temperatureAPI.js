import axios from 'axios'

const fixTime = (time)=>{
            let integer = Math.floor(time)
            let decimal = Math.round((time - integer) * 100)
            
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

export const getTemperature = axios
                             .get("https://global-warming.org/api/temperature-api")
                             .then((response)=>response.data.result)
                             .then((fixedresponse) => fixedresponse.map(item => (
                                                        {
                                                         station:item.station,
                                                         time:fixTime(item.time)
                                                        }))
                                  )
;



