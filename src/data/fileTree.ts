import { v7 as uuid } from 'uuid'
import type { IFile } from '../interfaces'

export const fileTree: IFile = {
  id: uuid(),
  name: 'VS Code Clone',
  isFolder: true,
  children: [
    {
      id: uuid(),
      name: 'public',
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: 'vite.svg',
          isFolder: false,
          content: '<svg><!-- Vite logo --></svg>',
        },
      ],
    },
    {
      id: uuid(),
      name: 'index.ts',
      isFolder: false,
      content: `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)`,
    },
    {
      id: uuid(),
      name: 'node_modules',
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: 'react.js',
          isFolder: false,
          content: '// React core library (mocked)',
        },
        {
          id: uuid(),
          name: 'vite',
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: 'vite.js',
              isFolder: false,
              content: `import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

interface IProps {
  content: string
}

const CodeComponent = ({ content }: IProps) => {
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {String(content)}
    </SyntaxHighlighter>
  )
}`,
            },
          ],
        },
      ],
    },
  ],
}
