import FileNode from './components/FileNode'
import { fileTree } from './data/fileTree'

function App() {
  return (
    <>
      {fileTree.children?.map(file =>{
        return <FileNode filename={file.name} />
      })}
    </>
  )
}

export default App
