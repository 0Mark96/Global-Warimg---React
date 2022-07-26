import axios from 'axios'

const fixTime = (time)=>{
            let integer = Math.floor(time)
            let decimal = Math.round((time - integer) * 100)
            
            switch(decimal){
              case 4:
                return integer + 'Gen';
                break;
              case 13:
                return integer + 'Feb'
                break;
              case 21:
                return integer + 'Mar'
                break;
              case 29:
                return integer + 'Apr'
                break;
              case 38:
                return integer + 'May'
                break;
              case 46:
                return integer + 'Jun'
                break;
              case 54:
                return integer + 'Jul'
                break;
              case 63:
                return integer + 'Aug'
                break;
              case 71:
                return integer + 'Sep'
                break;
              case 79:
                return integer + 'Oct'
                break;
              case 88:
                return integer + 'Nov'
                break;
              case 96:
                return integer + 'Dec'
                break;
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



