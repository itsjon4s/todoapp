"use client";
import { Check } from "phosphor-react";

interface TaskParams {
  val: string;
  click: (arg: string) => void;
}

export default function Task({ val, click }: TaskParams) {
  return (
    <div className="text-xl font-medium bg-white rounded-lg text-black flex mt-2 p-2 justify-between items-center w-4/4">
      <span className="px-2 leading-relaxed break-words">{val}</span>
      <span
        onClick={() => click(val)}
        className="text-2xl text-[#fff] border-none  rounded-3xl ml-2 cursor-pointer bg-[#181818] p-3"
      >
        <Check  />
      </span>
    </div>
  );
}
