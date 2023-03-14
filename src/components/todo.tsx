"use client"
import { CheckCircle } from 'phosphor-react'

interface TodoParams {
    val: string;
    click: (arg: string) => void; 
}

export default function Todo({ val, click }: TodoParams) {
    
  return (
    <div className="text-3xl bg-white rounded-3xl text-black flex mt-2 p-2 justify-between items-center w-4/4">
        <span className='mx-4 leading-relaxed break-words'>{val}</span>
        <span onClick={() => click(val)} className='mx-4 p-2 cursor-pointer rounded-3xl bg-white text-green-500 hover:text-white hover:bg-green-500'><CheckCircle  /></span>
    </div>
  )
}
