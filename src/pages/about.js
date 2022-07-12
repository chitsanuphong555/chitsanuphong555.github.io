import React, { useState, useEffect } from "react";
import { fetchTodo } from "../api/todo.api";
function About() {
  const [dataPost, setDataPost] = useState([]);

  useEffect(() => {
    getTodo()
  }, []);

  const getTodo = async () => {
    let tmpdata = await fetchTodo()
    setDataPost(tmpdata)
  }
  return (
    <div>
      {dataPost.map((item, index) => {
        return (
          <div className="border-gray-300 border-2 flex flex-row h-[20vh]">
            <div className="w-6/12 flex justify-center items-center bg-amber-100">
              <span className="text-orange-500 ">{item.title}</span>
            </div>
            <div className="w-6/12 flex justify-center items-center bg-green-400">
              <button className="h-full w-full">แก้ไข</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default About;
