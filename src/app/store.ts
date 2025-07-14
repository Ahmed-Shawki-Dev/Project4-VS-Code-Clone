import { configureStore } from '@reduxjs/toolkit'
import { fileTreeSlice } from './feature/fileTreeSlice'

export const store = configureStore({
  reducer: {
    fileTree: fileTreeSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
