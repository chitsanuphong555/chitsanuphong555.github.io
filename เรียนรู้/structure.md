# AXIOS

ติดตั้ง Axios ให้เรียบร้อย

1.ให้สร้างโฟล์เดอร์มา 2 โฟลเดอร์เก็บไว้ใน src คือ api และ logic

2.ในโฟล์เดอร์ api ให้ไฟล์ชื่อ [name].api.js ใช้เป็นตัวดึงข้อมูลมาแล้ว export ไปใช้ ยกตัวอย่างเช่น

```js
import axios from "axios";

export async function fetchTodo() {
  let data = await axios
    .get("https://jsonplaceholder.typicode.com/todos?_limit=4")
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return data;
}
```

3.ในโฟล์เดอร์ logic ให้ไฟล์ชื่อ [name].logic.js ให้ import ไฟล์ api ที่สร้างไว้มาใช้ ยกตัวอย่างเช่น

```js
import { fetchTodo } from "./../api/todo.api";

export async function finalFetchTodo() {
  let data = await fetchTodo();

  const final = data.map((item) => {
    if (item.title.indexOf("autem") > -1 || item.title.indexOf("minus") > -1) {
      return <p className="text-red-500">{item.title}</p>;
    } else {
      return <p className="text-blue-500">{item.title}</p>;
    }
  });

  return final;
}
```

4.ยกตัวอย่างการนำข้อมูลที่ดึงมา มาใช้ในหน้าที่ต้องการแสดงข้อมูล เช่น

```js
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
```

ภาพที่ได้

![Structure Project](/public/structure_data.png)
