import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './counter'

export default configureStore({
  reducer: {
    data: dataReducer,
  },
})