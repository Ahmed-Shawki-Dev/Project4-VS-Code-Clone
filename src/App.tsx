import { DiVisualstudio } from 'react-icons/di'
import FileNode from './components/FileNode'
import Tabs from './components/Tabs'
import { fileTree } from './data/fileTree'

function App() {
  return (
    <>
      <main className="bg-gray-600 w-full h-screen flex min-h-fit">
        <aside className="bg-[#0a0f1a] flex flex-col w-50 min-h-fit">
          <div className="h-7 w-full pl-2">
            <DiVisualstudio className="w-10 h-10 text-blue-500" />
          </div>
          <div className="pr-5 pt-5 ">
            <FileNode node={fileTree} />
          </div>
        </aside>

        <div className="bg-gray-950 flex-1 flex flex-col overflow-x-hidden">
          <nav className="bg-[#0a0f1a] h-10 text-nowrap ">
            <Tabs />
          </nav>
          <div></div>
        </div>
      </main>
    </>
  )
}

export default App
