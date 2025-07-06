import FileNode from './components/FileNode'
import { fileTree } from './data/fileTree'

function App() {
  return (
    <>
      <FileNode node={fileTree} />
    </>
  )
}

export default App
