import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setOpenedFiles } from '../../app/feature/fileTreeSlice'

interface IProps {
  setShowMenu: (showMenu: boolean) => void
  x: number
  y: number
}
const DropMenu = ({ x, y, setShowMenu }: IProps) => {
  const dispatch = useDispatch()
  const menuRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [setShowMenu])

  const onClickCloseAll = () => {
    dispatch(setOpenedFiles([]))
  }

  return (
    <div ref={menuRef}>
      <ul
        className='bg-white text-black text-[10px]  px-3 cursor-pointer py-2 rounded-md'
        style={{
          position: 'absolute',
          left: x,
          top: y,
        }}
      >
        <li>Close</li>
        <li
          onClick={onClickCloseAll}
          className='cursor-pointer hover:bg-[#e4dddd59] hover:rounded-2xl '
        >
          Close All
        </li>
      </ul>
    </div>
  )
}

export default DropMenu
