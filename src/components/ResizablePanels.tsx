import type { ReactNode } from 'react'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
interface IProps {
  panelSizeArray?: number[] | undefined
  leftPanel: ReactNode
  rightPanel: ReactNode
  showLeftPanel: boolean
}
const ResizablePanels = ({
  panelSizeArray = [20, 80],
  leftPanel,
  rightPanel,
  showLeftPanel,
}: IProps) => {
  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`
  }
  return (
    <PanelGroup direction='horizontal' onLayout={onLayout} autoSaveId={'condition'}>
      {showLeftPanel && (
        <>
          <Panel defaultSize={panelSizeArray[0]} minSize={10} maxSize={80} collapsible>
            {leftPanel}
          </Panel>
          <PanelResizeHandle className='border-r-2 border-[#a0959554]' />
        </>
      )}
      <Panel defaultSize={panelSizeArray[1]}>{rightPanel}</Panel>
    </PanelGroup>
  )
}

export default ResizablePanels
