import axios from 'axios'

const fixDate = (date)=>{
    return date.replace('.','/')
}

export const getNitrousOxide = axios
                             .get("https://global-warming.org/api/nitrous-oxide-api")
                             .then((response)=>response.data.nitrous)
                             .then((fixedResponse)=> fixedResponse.map(item=>(
                                {
                                  Nitrous:item.average,
                                  date:fixDate(item.date)
                                }
                             )))
                             
                                  
;

