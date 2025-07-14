import type { IFile } from '../interfaces'

export const hasRepeat = (openedFiles: IFile[], file: IFile) => {
  openedFiles.some(File => {
    if (File.id === file.id) return
  })
}
