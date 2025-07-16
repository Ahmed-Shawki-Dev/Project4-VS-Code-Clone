import { DiVisualstudio } from 'react-icons/di'
import FileNode from './components/FileNode'
import { fileTree } from './data/fileTree'
import TabsBar from './components/TabsBar'

function App() {
  return (
    <main className="h-screen flex flex-row min-h-fit w-full">
      <aside className="bg-[#05050a] flex flex-col w-80 min-h-fit">
        <div className="h-7 w-full pl-2">
          <DiVisualstudio className="w-10 h-10 text-blue-500" />
        </div>
        <div className="pr-5 pt-5 ">
          <FileNode node={fileTree} />
        </div>
      </aside>

      <TabsBar />
    </main>
  )
}

export default App
