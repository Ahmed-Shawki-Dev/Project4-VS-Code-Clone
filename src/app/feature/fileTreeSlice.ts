import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { IFile } from '../../interfaces'
// import type { RootState } from '../../app/store'

export interface IClickedFile {
  fileName: string
  fileContent: string
}

export interface IInitialState {
  openedFiles: IFile[]
  clickedFile: IClickedFile
}

const initialState: IInitialState = {
  openedFiles: [],
  clickedFile: {
    fileName: '',
    fileContent: '',
  },
}

export const fileTreeSlice = createSlice({
  name: 'fileTree',
  initialState,
  reducers: {
    setOpenedFiles: (state, action: PayloadAction<IFile[]>) => {
      state.openedFiles = action.payload
    },
    closeTab: (state, action: PayloadAction<IFile[]>) => {
      state.openedFiles = action.payload
    },
  },
})

export const { setOpenedFiles, closeTab } = fileTreeSlice.actions
export default fileTreeSlice.reducer
