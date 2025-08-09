import { useSelector } from 'react-redux'
import type { RootState } from '../app/store'
import OpenedTab from './OpenedTab'
import DropMenu from './ui/DropMenu'
import {  useState } from 'react'

const TabsBar = () => {
  const [menuPosition, setMenuPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const [showMenu, setShowMenu] = useState(false)
  const { openedFiles } = useSelector((state: RootState) => state.fileTree)
  return (
    <div
      className='w-full flex flex-col'
      onContextMenu={(e) => {
        e.preventDefault()
        setMenuPosition({ x: e.clientX, y: e.clientY })
        setShowMenu(true)
      }}
    >
      <div className='flex items-center h-8 w-full bg-[#0c0c0f] px-2 space-x-1 overflow-x-auto'>
        {openedFiles && openedFiles.map((file) => <OpenedTab file={file} key={file.id} />)}
      </div>
      {showMenu && <DropMenu x={menuPosition['x']} y={menuPosition['y']} setShowMenu={setShowMenu}/>}
    </div>
  )
}

export default TabsBar
