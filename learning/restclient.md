# REST Client

เปิดโปรแกรม VS Code จากนั้นให้กดไปที่ Extension ให้ค้นหาว่า Rest Client แล้วทำการติดตั้ง

## ขั้นตอนในการใช้งาน

ให้สร้างไฟล์ขึ้นมา [name].http (นามสกุลไฟล์ .http)

![Example Rest Client](/public/rest1.png)

จะได้ response กลับมาแบบนี้
![Example Rest Client](/public/rest2.png)

### แบบกำหนด header และ body

เราสามารถระบุข้อมูลใน header และ body ได้ด้วย โดยเขียนบรรทัดถัดไปจาก url

![Example Rest Client](/public/rest3.png)

จะได้ response กลับมาแบบนี้

![Example Rest Client](/public/rest4.png)

### การใช้งาน Variable

ใน Postman เราสามารถสร้าง variable และเรียกใช้งานใน header หรือ body ได้ด้วยรูปแบบ {{ชื่อ variable}} ใน REST Client ก็ทำได้เหมือนกัน

ในตัวอย่างต่อไปนี้ ได้ทำการสร้าง Variable ที่ชื่อ @name= "Hola" และ @job= "programmer" การเรียกใช้ ให้ใช้แบบนี้ {{name}} และ {{job}}

![Example Rest Client](/public/rest5.png)
