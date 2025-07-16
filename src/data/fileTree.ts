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
        },
      ],
    },
    {
      id: uuid(),
      name: 'index.ts',
      isFolder: false,
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
              content: "Hello World!"
            },
          ],
        },
      ],
    },
  ],
}
