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
