import type { ReactNode } from 'react'
import { BiLogoTypescript } from 'react-icons/bi'
import { FaHtml5 } from 'react-icons/fa'

const map: Record<string,ReactNode> = {
  ts: <BiLogoTypescript />,
  html: <FaHtml5 />,
}


const getExtension = (name:string) => {
  return <>{Object.keys(map)?.map((extension)=>{
    if(extension === name){
      return map[extension]
    }
  })}</>
}

export default getExtension
