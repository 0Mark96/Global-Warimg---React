import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemperature } from '../clientAPI/temperatureAPI';
import { getCarbonDioxide } from '../clientAPI/carbonDioxideAPI';
import { getMethane } from '../clientAPI/methaneAPI';
import { getNitrousOxide } from '../clientAPI/nitrousOxideAPI';
import { getArcticData } from '../clientAPI/arcticDataAPI';

export const fetchData = createAsyncThunk(
    'dataCharts/fetchData',
    (page)=>{
      switch(page){
        case 'temperature': return getTemperature
        
        case 'carbonDioxide': return getCarbonDioxide
        
        case 'methane': return getMethane
        
        case 'nitrousOxide': return getNitrousOxide
        
        case 'arcticData': return getArcticData
        
        default : return null;
      }
    }
  )

const initialState = {
    data: [],
    loading:false,
    error:''
  }
  
export const dataSlice = createSlice({
  name: 'data',
  initialState,
  extraReducers: (builder) => {
   
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true
    })

    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
      state.error = ''
    })

    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
 
  },
})



export default dataSlice.reducer