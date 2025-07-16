import { CgClose } from 'react-icons/cg'
import type { IFile } from '../interfaces'
import GetExtension from './GetExtension'
import { useDispatch, useSelector } from 'react-redux'
import {  setClickedFile } from '../app/feature/fileTreeSlice'
import type { RootState } from '../app/store'

interface IProps {
  file: IFile
}

const OpenedTab = ({ file }: IProps) => {
  const { name, content, id } = file
  // ** Handlers
  const dispatch = useDispatch()
  const {clickedFile} =useSelector((state:RootState)=>state.fileTree)
  const onClick = () => {
    dispatch(setClickedFile({ fileName: name, fileContent: content, activeTabId: id }))
  }
  return (
    <div
      className='flex items-center justify-between w-40 h-7 px-2 bg-[#05050A]  text-sm text-white hover:bg-[#131325] transition-colors duration-200 cursor-pointer'
      onClick={onClick}
      style={{borderTop: id===clickedFile.activeTabId ? "2px solid #2B7FFF" :"2px solid transparent"}}
    >
      <div className='flex items-center space-x-2  max-w-[calc(100%-20px)] '>
        <span>
          <GetExtension Name={file.name} />
        </span>
        <span>{file.name}</span>
      </div>
      <span className='text-gray-400 hover:bg-[#d4cfcf3b] rounded-md cursor-pointer'>
        <CgClose size={14} />
      </span>
    </div>
  )
}

export default OpenedTab
