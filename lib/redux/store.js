import { configureStore } from '@reduxjs/toolkit'

import layoutReducer from '@/redux/slices/layoutSlice'
import authReducer from './slices/auth_slice'

export default configureStore({
  reducer: {
    notes: authReducer
  },
  devTools: true,
})