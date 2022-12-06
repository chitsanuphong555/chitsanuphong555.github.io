import React, {useState, useEffect} from "react";
import { fetchTodo } from "../api/todo.api";

function Homepage() {
  const [dataPost, setDataPost] = useState([]);

  useEffect(() => {
    getTodo()
  }, []);

  const getTodo = async () => {
    let tmpdata = await fetchTodo()
    setDataPost(tmpdata)
  }
  return (
    <div className="relative flex items-center justify-center">
      {/* <select name="" id="">
        <option value="1" disabled hidden>เลือกข้อมูล</option>
        {dataPost.map((item, index) => {
          return (
            <option value={item.id} key={index}>
              {item.title}
            </option>
          );
        })}
      </select> */}
    </div>
  );
}
export default Homepage;
