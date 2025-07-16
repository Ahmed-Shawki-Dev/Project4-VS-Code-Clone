import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { IFile } from '../../interfaces'

export interface IClickedFile {
  fileName: string
  fileContent: string | undefined
  activeTabId: string | undefined
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
    activeTabId: '',
  },
}

export const fileTreeSlice = createSlice({
  name: 'fileTree',
  initialState,
  reducers: {
    setOpenedFiles: (state, action: PayloadAction<IFile[]>) => {
      state.openedFiles = action.payload
    },
    setClickedFile: (state, action: PayloadAction<IClickedFile>) => {
      state.clickedFile = action.payload
    },

  },
})

export const { setOpenedFiles, setClickedFile} = fileTreeSlice.actions
export default fileTreeSlice.reducer
