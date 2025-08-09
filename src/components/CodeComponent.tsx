import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

interface IProps {
  content: string
}

const CodeComponent = ({ content }: IProps) => {
  return (
    <SyntaxHighlighter
      language='typescript'
      style={atomOneDark}
      customStyle={{ background: 'black' }}
      showLineNumbers
      
    >
      {String(content)}
    </SyntaxHighlighter>
  )
}

export default CodeComponent
