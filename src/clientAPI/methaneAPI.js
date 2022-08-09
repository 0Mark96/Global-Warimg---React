import axios from 'axios'

const fixDate = (date)=>{
    return date.replace('.','/')
}

export const getMethane = axios
                             .get("https://global-warming.org/api/methane-api")
                             .then((response)=>response.data.methane)
                             .then((fixedResponse)=> fixedResponse.map(item=>(
                                {
                                  methane:item.average,
                                  date:fixDate(item.date)
                                }
                             )))
                             
                                  
;