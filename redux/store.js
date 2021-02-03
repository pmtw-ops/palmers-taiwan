import { configureStore } from '@reduxjs/toolkit'

import layoutReducer from '@/redux/slices/layoutSlice'
// import clockReducer from './lib/slices/clockSlice'
// import counterReducer from './lib/slices/counterSlice'
// import notesReducer from './lib/slices/notesSlice'

export default configureStore({
  reducer: {
  },
  devTools: true,
})