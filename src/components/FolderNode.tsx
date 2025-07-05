import { Folder } from 'lucide-react'
interface IProps {
  foldername: string
}
const FolderNode = ({ foldername }: IProps) => {
  return (
    <div className="flex flex-row space-x-1">
      <span>
        <Folder className="w-5" />
      </span>
      <span>{foldername}</span>
    </div>
  )
}
export default FolderNode
