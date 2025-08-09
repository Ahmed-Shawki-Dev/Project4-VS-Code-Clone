import { DiVisualstudio } from 'react-icons/di'
import FileNode from './components/FileNode'
import { fileTree } from './data/fileTree'
import ResizablePanels from './components/ResizablePanels'
import Preview from './components/Preview'
import type { RootState } from './app/store'
import { useSelector } from 'react-redux'
import WelcomePage from './components/WelcomePage'

function App() {
  const { openedFiles } = useSelector((state: RootState) => state.fileTree)
  return (
    <main className='h-screen flex flex-row min-h-fit w-full'>
      <ResizablePanels
        leftPanel={
          <aside className='bg-[#0c0c0f] flex flex-col w-full min-h-full'>
            <div className='h-7 w-full pl-2'>
              <DiVisualstudio className='w-10 h-10 text-blue-500' />
            </div>
            <div className='pr-5 pt-5 whitespace-nowrap'>
              <FileNode node={fileTree} />
            </div>
          </aside>
        }
        rightPanel={openedFiles.length ? <Preview /> : <WelcomePage />}
        showLeftPanel
      />
    </main>
  )
}

export default App
