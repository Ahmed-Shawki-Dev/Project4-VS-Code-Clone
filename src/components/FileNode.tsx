import { ChevronDown, ChevronRight, File, Folder } from 'lucide-react'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import type { IFile } from '../interfaces'

interface IProps {
  node: IFile
}

const FileNode = ({ node }: IProps) => {
  // * States
  const [isOpen, setIsOpen] = useState(true)
  // * Handlers
  function toggle() {
    setIsOpen(prev => !prev)
  }

  return (
    <div className="ml-5">
      <div className="flex flex-row space-x-1 space-y-2">
        <span>
          {node.isFolder ? (
            <div className="flex ml-[-23px]" onClick={toggle}>
              {isOpen ? <ChevronDown /> : <ChevronRight />}
              <Folder />
              <span className="select-none">{node.name}</span>
            </div>
          ) : (
            <div className="flex">
              <File />
              <span className="select-none">{node.name}</span>
            </div>
          )}
        </span>
      </div>
      {isOpen &&
        node &&
        node.children?.map(child => <FileNode node={child} key={uuid()} />)}
    </div>
  )
}

export default FileNode
