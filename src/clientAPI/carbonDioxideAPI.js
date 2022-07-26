import axios from 'axios'

export const getCarbonDioxide = axios
                             .get("https://global-warming.org/api/co2-api")
                             .then((response)=>response.data.co2)
                             .then((fixedresponse) => fixedresponse.map(item => (
                                {
                                 trend:item.trend,
                                 completeDate:`${item.day}/${item.month}/${item.year}`,
                                }
                            ))
                                  )
;



