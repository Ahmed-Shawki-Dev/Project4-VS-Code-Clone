import { CgClose } from 'react-icons/cg'
import type { IFile } from '../interfaces'
import GetExtension from './GetExtension'
import { useDispatch, useSelector } from 'react-redux'
import { setClickedFile, setOpenedFiles } from '../app/feature/fileTreeSlice'
import type { RootState } from '../app/store'

interface IProps {
  file: IFile
}

const OpenedTab = ({ file }: IProps) => {
  const { name, content, id } = file

  // ** Handlers
  const dispatch = useDispatch()
  const { clickedFile, openedFiles } = useSelector((state: RootState) => state.fileTree)
  const onClick = () => {
    dispatch(setClickedFile({ fileName: name, fileContent: content, activeTabId: id }))
  }

  const onRemove = (selectedId: string) => {
    const filtered = openedFiles.filter((file) => file.id !== selectedId)
    dispatch(setOpenedFiles(filtered))
    const lastTab = filtered[filtered.length - 1]
    if (!lastTab) {
      dispatch(setOpenedFiles([]))
      dispatch(setClickedFile({ activeTabId: '', fileContent: '', fileName: '' }))
    }
    dispatch(
      setClickedFile({
        activeTabId: lastTab.id,
        fileContent: lastTab.content,
        fileName: lastTab.name,
      }),
    )
  }
  return (
    <div
      className='flex items-center justify-between w-40 h-7  text-sm text-white hover:bg-[#131325] transition-colors duration-200 cursor-pointer'
      onClick={onClick}
      style={{
        borderTop: id === clickedFile.activeTabId ? '2px solid #EEEEEE' : '2px solid transparent',
      }}

    >
      <div className='flex items-center space-x-2  max-w-[calc(100%-20px)] '>
        <span>
          <GetExtension Name={file.name} />
        </span>
        <span>{file.name}</span>
      </div>
      <span
        className='text-gray-400 hover:bg-[#d4cfcf3b] rounded-md cursor-pointer'
        onClick={(e) => {
          e.stopPropagation()
          onRemove(file.id ? file.id : '')
        }}
      >
        <CgClose size={14} />
      </span>
    </div>
  )
}

export default OpenedTab
