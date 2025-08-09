import { useSelector } from 'react-redux'
import CodeComponent from './CodeComponent'
import TabsBar from './TabsBar'
import type { RootState } from '../app/store'

const Preview = () => {
  const { clickedFile } = useSelector((state: RootState) => state.fileTree)
  return (
    <>
      <TabsBar />
      <CodeComponent content={clickedFile.fileContent ? clickedFile.fileContent : ''} />
    </>
  )
}

export default Preview
