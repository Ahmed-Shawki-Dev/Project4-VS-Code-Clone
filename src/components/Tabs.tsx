import { X } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { closeTab } from '../app/feature/fileTreeSlice'
import type { RootState } from '../app/store'
import type { IFile } from '../interfaces'
import GetExtension from './GetExtension'

const Tabs = () => {
  const { openedFiles } = useSelector((state: RootState) => state.fileTree)
  const dispatch = useDispatch()

  // **Handlers
  const CloseTab = (tabs: IFile[], tab: IFile) => {
    return tabs.filter(Tab => Tab !== tab)
  }

  return (
    <div className="h-full w-full flex flex-row ">
      {openedFiles &&
        openedFiles.map((tab, idx, arr) => (
          <div
            className="bg-[#0e1420] w-fit pl-1 pr-1 text-center h-full  flex justify-between
          items-center  space-x-5 border-1 border-b-0 border-l-0 border-black"
            key={idx}
          >
            <span className="flex">
              <GetExtension Name={tab.name} />
              <span className="">{tab.name}</span>
            </span>

            <span
              className="cursor-pointer"
              onClick={() => dispatch(closeTab(CloseTab(arr, tab)))}
            >
              <X className="w-5 h-5" />
            </span>
          </div>
        ))}
    </div>
  )
}

export default Tabs
