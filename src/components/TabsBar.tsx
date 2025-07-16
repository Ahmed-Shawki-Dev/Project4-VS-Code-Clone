import { useSelector } from 'react-redux'
import type { RootState } from '../app/store'
import OpenedTab from './OpenedTab'

const TabsBar = () => {
  const { openedFiles, clickedFile } = useSelector((state: RootState) => state.fileTree)
  return (
    <div className='w-full flex flex-col'>
      <div className='flex items-center h-8 w-full bg-[#05050A] px-2 space-x-1 overflow-x-auto'>
        {openedFiles && openedFiles.map((file) => <OpenedTab file={file} key={file.id} />)}
      </div>
      <div className='w-full flex-1'>{clickedFile.fileContent}</div>
    </div>
  )
}

export default TabsBar
