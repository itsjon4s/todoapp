"use client";

import Todo from "@/components/Task";
import { Plus } from "phosphor-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<string[]>(["Loading..."]);
  const [text, setText] = useState("");

  useEffect(() => {
    setTodos(getTasks());
  }, []);

  const getTasks = (): string[] => {
    let tasks;
    if (localStorage.getItem("todos") === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem("todos") as string);
    }
    return tasks;
  };

  const setTasks = (newTask: string): string[] => {
    let tasks;
    if (localStorage.getItem("todos") === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem("todos") as string);
    }
    tasks.unshift(newTask);
    localStorage.setItem("todos", JSON.stringify(tasks));
    return tasks;
  };

  const addTodo = (e: any) => {
    e.preventDefault();
    if (text.trim() === "") {
      return;
    }
    setTasks(text);
    setTodos(getTasks());
    setText("");
  };

  const deleteTodo = (str: string) => {
    let newList;
    const i = todos.indexOf(str);
    newList = todos.filter((_, index) => index !== i);
    setTodos(newList);
    localStorage.setItem("todos", JSON.stringify(newList));
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold pb-4">To do List</h1>
      <div className="p-4 bg-[#ccc]  rounded-lg">
        <div className="flex">
          <input
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="Insert the task here"
            type="text"
            className="text-black p-3 text-lg rounded-lg font-medium"
          />
          <button
            onClick={addTodo}
            className="text-2xl border-none  rounded-3xl ml-2 cursor-pointer bg-[#181818] p-3"
            type="submit"
          >
            <Plus />
          </button>
        </div>
        <div className="flex flex-col space-y-2">
          <ul className="min-w-[30%] list-none">
            {todos.map((val, i) => (
              <Todo val={val} click={deleteTodo} key={i} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
