This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# การวางโครงสร้างของ project

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

# Leaning NEXT JS

## ติดตั้งโปรเจค

```bash
npx create-next-app [project name]
```

จากนั้นเข้าไปในโปรเจค

```bash
cd [project name]
```

แล้วรันด้วนคำสั่ง

```bash
npm run dev หรือ yarn dev
```

## Routing Page

- สร้างไฟล์ขึ้นมาให้อยู่ใน level เดียวกับ \_app.js

  ![Routing Page](/public/routing_page.png)

- URL ที่ได้ http://localhost:3000/about

## Nested Page

- ให้เราสร้าง Folder ขึ้นมา ให้อยู่ level เดียวกับ \_app.js แล้วสร้าง index.js ใน Folder ตัวอย่างเช่น สร้าง Folder ชื่อ Product ขึ้นมา

![Nested Page](/public/structure_folder.png)

- URL ที่ได้ http://localhost:3000/product

## Dynamic Page

![Dynamic Page](/public/dynamic_page.png)

- URL ที่ได้ http://localhost:3000/product/[id]

## Nested Page + Dynamic Page

![Nested Page + Dynamic Page](/public/dynamic_nested.png)

- URL ที่ได้ http://localhost:3000/product/[id]/review/[id]

## วิธีใช้ Link

- ให้ import link มาไว้ใน page

```bash
import Link from "next/link"
```

```bash
<Link href="/">
    <a>Home</a>
</Link>
```

หรือ

```bash
<Link href={`/product/${productId}`}>
    <a>Product {productId}</a>
</Link>
```

## Navigation path โดยการใช้ router ตัวอย่างเช่น

```bash
const handleClick = () => {
    router.push("/product")
}

<button onClick={handleClick}>สินค้าทั้งหมด</button>
```

หรือจะใช้ replace เพื่อ clear stack url ก่อนหน้า

```bash
const handleClick = () => {
    router.replace("/")
}

```

## การเรียกค่า parameter จาก path

ให้เรา import useRouter

```bash
import { useRouter} from "next/router"

```

แล้วใช้ .query เพื่อรับค่า parameter จาก path url "http://localhost:3000//product/1"

```bash
const router = useRouter();
const productId = router.query.productId;
console.log(productId)

```

จาก console.log(productId) ก็จะเห็น productId = 1 ออกมา แล้วนำไปใช้แสดงผลต่อได้

```bash
<div className="custom-box-hero">
    <h1>Product List: {productId}</h1>
</div>

```

## การสร้างหน้า Page Not Found ของ NEXTJS

- ให้เราสร้างไฟล์ 404.js ขึ้นมาใน level เดียวกับ \_app.js ขึ้นมา
  ![Routing Page](/public/routing_page.png)

เพิ่มโค้ดในไฟล์ 404.js

```bash

function PageNotFound() {
  return <h1>404 Page with all the custom styling necessary</h1>;
}

export default PageNotFound;

```

สิ่งที่ได้
![Routing Page](/public/404.png)

## การดึงข้อมูลจาก API โดยการใช้ getStaticProps

```bash
function user({ users }) {
  return (
    <>
      Test fetch user list:{" "}
      {users.map((user) => (
        <div style={{ overflow: "scroll"}}>
          {user.name} <hr />
          {user.email}
        </div>
      ))}
    </>
  );
}

export default user;


export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data)

  return {
    props: {
      users: data,
    },
  };
}




```

# SQL พื้นฐาน

# Token Line Notification:

วิธี Generated Token
1.เข้าไปที่ `https://notify-bot.line.me/en/`
2.Login เข้าสู่ระบบให้เรียบร้อย
3.กด My page เมนูขวาบน แล้วเลือกกลุ่มไลน์ที่ต้องการให้แจ้งเตือน แล้วกด Generated Token

# Github Action

สร้าง Notification
1.สร้างโฟลเดอร์ `.github` ไดเร็กทอรีในที่เก็บของคุณ
2.สร้างโฟลเดอร์ `workflows` ในโฟลเดอร์ `.github`
3.สร้างไฟล์ `github-action.yml`
4.copy code ส่วนนี้ไปใส่ `github-action.yml`
5.push ขึ้น Github แล้วระบบจะแจ้งเตือนไปที่ Line

```yml
name: GitHub Actions Demo
on: [push]
branches: [main] # * เลือก branches ในการ push
jobs:
  Explore-GitHub-Actions: # * ชื่อ job
    runs-on: ubuntu-latest # * ชื่อ os ที่ใช้งาน
    steps:
      - run: echo "🎉 Hello KIE"
      - uses: snow-actions/line-notify@v1.0.0 # * ชื่อ lib ของ Line for Github Action
        with: # * ตัวแปรที่ส่งไป
          access_token: <Line Token>
          message: 🎉KIE ส่งงานเรียบร้อยแล้ว🎉
```

สามารถสร้าง jobs ให้หลายอัน

จะได้ `.github/workflows/github-action.yml`

ยกตัวอย่างเช่น Action ที่มีหลาย job

```yml
name: GitHub Actions Demo
on: [push]
branches: [main] # * เลือก branches ในการ push
jobs:
  Fisrt-Job: # * ชื่อ job
    runs-on: ubuntu-latest # * ชื่อ os ที่ใช้งาน
    steps:
      - run: echo "🎉 Hello KIE"
      - uses: snow-actions/line-notify@v1.0.0 # * ชื่อ lib ของ Line for Github Action
        with: # * ตัวแปรที่ส่งไป
          access_token: <Line Token>
          message: เตรียมวัตถุดิบ หั่นต้นหอม ล้างหมู หั่นหมู

  Second-Job: # * ชื่อ job
    runs-on: ubuntu-latest # * ชื่อ os ที่ใช้งาน
    needs: Fisrt-Job
    steps:
      # - run: echo "🎉 Hello KIE"
      - uses: snow-actions/line-notify@v1.0.0 # * ชื่อ lib ของ Line for Github Action
        with: # * ตัวแปรที่ส่งไป
          access_token: <Line Token>
          message: ตั้งไฟ ใส่น้ำมัน ทอดกระเทียมให้หอม

  Third-Job: # * ชื่อ job
    runs-on: ubuntu-latest # * ชื่อ os ที่ใช้งาน
    needs: Second-Job
    steps:
      - uses: snow-actions/line-notify@v1.0.0 # * ชื่อ lib ของ Line for Github Action
        with: # * ตัวแปรที่ส่งไป
          access_token: <Line Token>
          message: ผัดหมูให้สุกใส่ข้าวลงไปผัด ใส่เครื่องปรุง

  Fourth-Job: # * ชื่อ job
    runs-on: ubuntu-latest # * ชื่อ os ที่ใช้งาน
    needs: Third-Job
    steps:
      - uses: snow-actions/line-notify@v1.0.0 # * ชื่อ lib ของ Line for Github Action
        with: # * ตัวแปรที่ส่งไป
          access_token: <Line Token>
          message: ใส่ผัก แล้วตักใส่จาน

  Fifth-Job: # * ชื่อ job
    runs-on: ubuntu-latest # * ชื่อ os ที่ใช้งาน
    needs: Fourth-Job
    steps:
      - uses: snow-actions/line-notify@v1.0.0 # * ชื่อ lib ของ Line for Github Action
        with: # * ตัวแปรที่ส่งไป
          access_token: <Line Token>
          message: ตักใส่ปาก
```

วิธีการดูผลลัพธ์เวิร์กโฟลว์ของคุณ
1.เข้าไปที่ https://github.com/
2.เลือก repositories
3.เลือก Tab Action
4.คลิกเข้าไปที่ workflows ที่เรารันเพื่อดูรายละเอียด

# Database with Docker

1.สิ่งที่ต้องมี คือไฟล์ `docker-compose.yml`
2.extension ของ vscode ชื่อ `MySQL` (มีติ๊กถูกสีฟ้า)
3.พิมพ์คำสั่ง docker-compose up

# คำสั่ง MySQL พื้นฐาน

https://saixiii.com/sql-command/

1.การเลือกข้อมูลมาโชว์

```sql
SELECT [ชื่อตาราง], [ชื่อในตาราง] FROM products
```

```sql
SELECT products.* FROM products
```

```sql
SELECT products.*, products.price * 0.07 AS VAT FROM products
```

```sql
หาสินค้าที่มีราคาระหว่าง 20 ถึง 200
SELECT products.* FROM products WHERE price BETWEEN 20 AND 200
```

```sql
หาสินค้าที่มีราคาระหว่าง 20 ถึง 200
SELECT products.*, CASE WHEN products.price > 200 THEN 'Yes' ELSE 'No' END AS expensive FROM products
```

2.การสร้างตาราง

```sql
CREATE TABLE CUSTOMERS(
   ID   INT              NOT NULL,
   NAME VARCHAR (20)     NOT NULL,
   AGE  INT              NOT NULL,
   ADDRESS  CHAR (25) ,
   SALARY   DECIMAL (18, 2),
   PRIMARY KEY (ID)
);
```

3.การเพิ่มชื่อ header ในตาราง (ใช้ AS ตามด้วยชื่อ header)

```sql
SELECT products.*, products.price * 0.07 AS VAT FROM products
```

```sql
หาสินค้าที่มีราคาระหว่าง 20 ถึง 200
SELECT products.*, CASE WHEN products.price > 200 THEN 'Yes' ELSE 'No' END AS expensive FROM products
```

4.การเพิ่มข้อมูลในตาราง

```sql
INSERT INTO products VALUES (1, 'กะละมัง', 20);
```

```sql
INSERT INTO products (id,name,price)
VALUES (2, 'ถัง', 10)
```

5.การอัพเดตข้อมูลในตาราง

```sql
UPDATE products SET
    name="ขัน",
    price=5
WHERE id=2
```

6.การลบข้อมูลในตาราง

```sql
DELETE FROM products WHERE id=2
```
