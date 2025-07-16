import { ChevronDown, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuid } from 'uuid'
import { setClickedFile, setOpenedFiles } from '../app/feature/fileTreeSlice'
import type { RootState } from '../app/store'
import type { IFile } from '../interfaces'
import GetExtension from './GetExtension'

interface IProps {
  node: IFile
}

const FileNode = ({ node }: IProps) => {
  // * States
  const [isOpen, setIsOpen] = useState(true)
  // * Handlers
  function toggle() {
    setIsOpen((prev) => !prev)
  }

  const onClickFileHandler = (openedFiles: IFile[], file: IFile) => {
    if (openedFiles.includes(file)) {
      dispatch(
        setClickedFile({ fileName: node.name, fileContent: node.content, activeTabId: node.id }),
      )
      return
    } else {
      dispatch(setOpenedFiles([...openedFiles, node]))
      dispatch(
        setClickedFile({ fileName: node.name, fileContent: node.content, activeTabId: node.id }),
      )
    }
  }

  const dispatch = useDispatch()
  const { openedFiles } = useSelector((state: RootState) => state.fileTree)

  return (
    <div className='ml-5'>
      <div className='flex flex-row space-x-1 space-y-2'>
        <span>
          {node.isFolder ? (
            <div className='flex ml-[-23px] cursor-pointer' onClick={toggle}>
              {isOpen ? (
                <ChevronDown className='select-none' />
              ) : (
                <ChevronRight className='select-none' />
              )}
              <GetExtension Name={node.name} isOpen={isOpen} isFolder={node.isFolder} />
              <span className='select-none'>{node.name}</span>
            </div>
          ) : (
            <div
              className='flex cursor-pointer'
              onClick={() => onClickFileHandler(openedFiles, node)}
            >
              <GetExtension Name={node.name} />
              <span className='select-none'>{node.name}</span>
            </div>
          )}
        </span>
      </div>
      {isOpen && node && node.children?.map((child) => <FileNode node={child} key={uuid()} />)}
    </div>
  )
}

export default FileNode
