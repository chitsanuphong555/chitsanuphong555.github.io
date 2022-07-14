import React, { useState, useEffect } from "react";
import { finalFetchTodo } from "../logic/knowledge.logic";

function Homepage() {
  const [dataPost, setDataPost] = useState([]);

  useEffect(() => {
    getTodo();
  }, []);

  const getTodo = async () => {
    let tmpdata = await finalFetchTodo();
    setDataPost(tmpdata);
  };
  return (
    <>
      {dataPost.map((item, index) => {
        return (
          <div
            className={
              index % 2 === 0
                ? "border-gray-300 border-2 flex flex-row bg-gray-500 h-[20vh]"
                : "border-gray-300 border-2 flex flex-row bg-amber-100 h-[20vh]"
            }
          >
            <span className="">{item}</span>
          </div>
        );
      })}
    </>
  );
}
export default Homepage;
