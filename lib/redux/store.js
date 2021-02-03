import { configureStore } from '@reduxjs/toolkit'

import layoutReducer from '@/redux/slices/layoutSlice'
import notesReducer from './slices/notesSlice'

export default configureStore({
  reducer: {
    notes: notesReducer
  },
  devTools: true,
})