import axios from 'axios'

export const getArcticData= axios
                             .get("https://global-warming.org/api/arctic-api")
                             .then((response)=>response.data?.arcticData)
                                            
;
