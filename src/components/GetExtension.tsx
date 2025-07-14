import { File } from 'lucide-react'

interface IProps {
  Name: string
  isFolder?: boolean
  isOpen?: boolean
}

const getIcon:Record<string,string> = {
  ts: '/icons/typescript',
  js: '/icons/javascript',
  tsx: '/icons/react_ts',
  svg: '/icons/svg',
  // *Folders
  node_modules: '/icons/folder-node',
  public: '/icons/folder-public',
}

const GetExtension = ({ Name, isFolder, isOpen }: IProps) => {
  // *Handler
const extenction = Name.split('.').pop()

if (extenction && getIcon[extenction]){
  return isFolder ? (
  isOpen ? (
    <img src={`${getIcon[extenction]}-open.svg`} className="w-5 h-5" />
  ) : (
    <img src={`${getIcon[extenction]}.svg`} className="w-5 h-5" />
  )
) : (
  <img src={`${getIcon[extenction]}.svg`} className="w-5 h-5" />
)
}



  // * Default Values
  if (isFolder)
    return isOpen ? (
      <img src="/icons/folder-default-open.svg" className="w-5 h-5" />
    ) : (
      <img src="/icons/folder-default.svg" className="w-5 h-5" />
    )

  return <File className="w-5 h-5" />
}

export default GetExtension
