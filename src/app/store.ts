import { configureStore } from '@reduxjs/toolkit'
import { fileTreeSlice } from './feature/fileTreeSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

const persistConfig = {
  key: 'fileTree',
  storage,
  whitelist: ['openedFiles', 'clickedFile'],
}

const persistedFileTreeReducer = persistReducer(persistConfig, fileTreeSlice.reducer)

export const store = configureStore({
  reducer: {
    fileTree: persistedFileTreeReducer,
  },
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
