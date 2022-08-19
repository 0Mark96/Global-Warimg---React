import axios from "axios";

const axiosAPI = axios.create({
    baseURL: "https://global-warming.org/api"
})


export const fetchData =(url)=>{
    return (
      axiosAPI.get(url)
      .then(response => response.data)
    )
}