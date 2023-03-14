"use client"

import Todo from '@/components/todo'
import { PlusCircle } from 'phosphor-react'
import { useEffect, useState } from 'react'

export default function Home() {

  const [todos, setTodos] = useState<string[]>(["Loading..."])
  const [text, setText] = useState("")

  useEffect(() => {
    setTodos(getTasks())
  }, [])

  const getTasks = (): string[] => {
    let tasks;
    if(localStorage.getItem("todos") === null) {
      tasks = []
    } else {
      tasks = JSON.parse(localStorage.getItem("todos") as string)
    }
    return tasks
  }

  const setTasks = (newTask: string): string[] => {
    let tasks;
    if(localStorage.getItem("todos") === null) {
      tasks = []
    } else {
      tasks = JSON.parse(localStorage.getItem("todos") as string)
    }
    tasks.unshift(newTask)
    localStorage.setItem("todos", JSON.stringify(tasks))
    return tasks
  }


  const addTodo = (e: any) => {
    e.preventDefault()
    if(text.trim() === '') {
      return
    }
    setTasks(text)
    setTodos(getTasks())
    setText('')
  }

  const deleteTodo = (str: string) => {
    let newList;
    const i = todos.indexOf(str);
    newList = todos.filter((_, index) => index !== i)
    setTodos(newList)
    localStorage.setItem("todos", JSON.stringify(newList))
  }


  return (
    <main className='m-2'>
      <header className="text-5xl flex items-center justify-center min-h-[20vh]">
        <h1>To do List</h1>
      </header>
      <form className="flex items-center justify-center min-h-[20vh]">
        <input onChange={(e => setText(e.target.value))}  value={text} placeholder="Insert the task here" type="text" className="p-2 pl-4 text-2xl border-none rounded-3xl text-black leading-relaxed break-words" />
        <button onClick={addTodo} className="p-2 pl-4 text-2xl border-none  rounded-3xl ml-2 cursor-pointer bg-white text-green-500 hover:text-white hover:bg-green-500" type="submit">
          <PlusCircle className="mt-[o.3rem] ml-[-8px]" size={25}/>
        </button>
      </form>

      <div className="flex justify-center items-center">
        <ul className="min-w-[30%] list-none">
          {todos.map((val, i) => <Todo val={val} click={deleteTodo} key={i}/>)}
        </ul>
      </div>
    </main>
  )
}
