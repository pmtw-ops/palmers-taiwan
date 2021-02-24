import { configureStore } from '@reduxjs/toolkit'

// import layoutReducer from '@/redux/slices/layoutSlice'
// import authReducer from './slices/auth_slice'
import homeLogoReducer from './slices/home_logo_slice'



export default configureStore({
  reducer: {
    homeLogo: homeLogoReducer
  },
  devTools: true,
})