import { File } from 'lucide-react'
interface IProps {
  filename: string
}

const FileNode = ({ filename }: IProps) => {
  return (
    <div className="flex flex-row space-x-1">
      <span>
        <File className="w-5" />
        
      </span>
      <span>{filename}</span>
    </div>
  )
}

export default FileNode
