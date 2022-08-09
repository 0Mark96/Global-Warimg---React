import axios from 'axios'

export const getCarbonDioxide = axios
                             .get("https://global-warming.org/api/co2-api")
                             .then((response)=>response.data.co2)
                             .then((fixedresponse) => {
                                const filterResponse = fixedresponse.filter(item => item.day === '1')
                                return(
                                    filterResponse.map(item => (
                                                    {
                                                    co2:item.trend,
                                                    completeDate:`${item.day}/${item.month}/${item.year}`,
                                                    }
                                                  ))   
                                      )
                            }
                            );




