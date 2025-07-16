export interface IFile {
  id: string | undefined
  name: string
  isFolder: boolean
  children?: IFile[]
  content?: string
}
