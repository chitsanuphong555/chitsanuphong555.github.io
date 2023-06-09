# พื้นฐาน Cypress

## ใช้ทำ Automated Test

![Cypress.io](/public/cypress.png)

## ขั้นตอนการติดตั้ง

1.ให้เราลง Node ก่อน

2.mkdir test-cypress

3.cd test-cypress

4.ให้เราพิมพ์คำสั่ง `npm init` เพื่อให้มีตัว package.json เกิดขึ้นมา

5.ทำการติดตั้ง cypress `npm install cypress --save-dev`

6.เพื่อให้ง่ายต่อการเรียกใช้ครั้งถัดไป เพิ่มคำสั่งนี้ลงใน package.json ของเรา

```js
{
  "scripts": {
    "cypress:open": "cypress open"
  }
}
```

แล้วลองรันโปรเจคของเรา โดยใช้คำสั่ง

```js
npm run cypress:open
```

ผลลัพท์ที่ได้

![Cypress.io](/public/cypress01.png)

7.โครงสร้างโฟลเดอร์ในโปรเจคของเรา

![Cypress.io](/public/cypress02.png)

- e2e เอาไว้เก็บพวก Test Case ต่าง ๆ โดย Test Case แต่ละไฟล์ที่เขียน จะต้องมี name.spec.ts
- fixtures ไว้เก็บข้อมูล Test Data เช่น ชื่อ, อีเมล, รูป
- plugins เก็บปลั๊กอินต่าง ๆ ที่จะมาช่วยเสริมกำลังของการเขียน Test Case
- reporters เป็นตัวแสดงรายงานผลทดสอบจาก lib mochawesome
- screenshots โฟลเดอร์นี้จะถูกสร้างขึ้นมาก็ต่อเมื่อ เรารันคอมมานด์ cy.screenshot('name') ที่ใช้สำหรับบันทึกหน้าจอ รูปภาพที่บันทึกสำเร็จแล้วก็จะมาอยู่โฟลเดอร์นี้
- support เก็บพวก Custom Command ที่เขียนขึ้นมาเอง หรือ Command ที่อยากจะ Overwrite มัน เพื่อเอาไว้ใช้ในตัวเทสเคสของเราอีกที
- video เป็นวีดีโอตอนทดสอบ แล้วก็แสดงผลลัพท์

## ทดลองการเขียน Test Cast ง่ายๆ โดยเราจะเขียนให้ Upload File

ให้เราสร้างไฟล์ file.cy.ts ไว้ในไฟลเดอร์ e2e

```js
const fakepath = "C:\\fakepath\\";
describe("File", () => {
  it("Should open file", () => {
    cy.visit("http://127.0.0.1:5500/test.html");
    cy.get("#upfile").invoke("attr", "accept").should("eq", "image/*");
    cy.get("#upfile").selectFile("./cypress/fixtures/example.json");
    cy.get("#upfile").should("have.value", `${fakepath}example.json`);
  });
});
```

อธิบายเพิ่มเติม

- describe () คือ การบอกว่าเราจะเทสอะไร ตั้งชื่อไป
- it () คือ การบอกว่าเราจะเทสอย่างไร โดยข้างในฟังก์ชันก็เขียน Test Step ลงไป
- expect () คือ ผลลัพธ์ที่เราคาดหวัง อยากให้เป็นอะไร
- equal () คือ ผลลัพธ์ที่มันควรจะเป็น
- cy.visit () คือ เข้าไปที่ url ไหน
- cy.get () คือ ตัวที่ selector element ไหนใน web page เรา
  ให้เราสร้างไฟล์ test.html ไว้ในระดับเดียวกับ package.json ให้เพิ่มโค้ด สร้าง Input ขึ้นมา ใส่ ID ชื่อ upfile

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <input accept="image/*" type="file" id="upfile" />
  </body>
</html>
```
