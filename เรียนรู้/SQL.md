# Token Line Notification:

วิธี Generated Token
1.เข้าไปที่ `https://notify-bot.line.me/en/`
2.Login เข้าสู่ระบบให้เรียบร้อย
3.กด My page เมนูขวาบน แล้วเลือกกลุ่มไลน์ที่ต้องการให้แจ้งเตือน แล้วกด Generated Token

<!-- TODO USE TOKEN: 0Sm31a2dg4ldVr0w2llNT4aBVGKmldmsVw59QK0UGnd -->

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
          access_token: 0Sm31a2dg4ldVr0w2llNT4aBVGKmldmsVw59QK0UGnd
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
          access_token: 0Sm31a2dg4ldVr0w2llNT4aBVGKmldmsVw59QK0UGnd
          message: เตรียมวัตถุดิบ หั่นต้นหอม ล้างหมู หั่นหมู

  Second-Job: # * ชื่อ job
    runs-on: ubuntu-latest # * ชื่อ os ที่ใช้งาน
    needs: Fisrt-Job
    steps:
      # - run: echo "🎉 Hello KIE"
      - uses: snow-actions/line-notify@v1.0.0 # * ชื่อ lib ของ Line for Github Action
        with: # * ตัวแปรที่ส่งไป
          access_token: 0Sm31a2dg4ldVr0w2llNT4aBVGKmldmsVw59QK0UGnd
          message: ตั้งไฟ ใส่น้ำมัน ทอดกระเทียมให้หอม

  Third-Job: # * ชื่อ job
    runs-on: ubuntu-latest # * ชื่อ os ที่ใช้งาน
    needs: Second-Job
    steps:
      - uses: snow-actions/line-notify@v1.0.0 # * ชื่อ lib ของ Line for Github Action
        with: # * ตัวแปรที่ส่งไป
          access_token: 0Sm31a2dg4ldVr0w2llNT4aBVGKmldmsVw59QK0UGnd
          message: ผัดหมูให้สุกใส่ข้าวลงไปผัด ใส่เครื่องปรุง

  Fourth-Job: # * ชื่อ job
    runs-on: ubuntu-latest # * ชื่อ os ที่ใช้งาน
    needs: Third-Job
    steps:
      - uses: snow-actions/line-notify@v1.0.0 # * ชื่อ lib ของ Line for Github Action
        with: # * ตัวแปรที่ส่งไป
          access_token: 0Sm31a2dg4ldVr0w2llNT4aBVGKmldmsVw59QK0UGnd
          message: ใส่ผัก แล้วตักใส่จาน

  Fifth-Job: # * ชื่อ job
    runs-on: ubuntu-latest # * ชื่อ os ที่ใช้งาน
    needs: Fourth-Job
    steps:
      - uses: snow-actions/line-notify@v1.0.0 # * ชื่อ lib ของ Line for Github Action
        with: # * ตัวแปรที่ส่งไป
          access_token: 0Sm31a2dg4ldVr0w2llNT4aBVGKmldmsVw59QK0UGnd
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
