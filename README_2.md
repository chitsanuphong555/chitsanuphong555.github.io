# Token Line Notification:

<!-- TODO USE TOKEN: 0Sm31a2dg4ldVr0w2llNT4aBVGKmldmsVw59QK0UGnd -->

# Github Action

1.สร้างโฟลเดอร์ `.github` ไดเร็กทอรีในที่เก็บของคุณ
2.สร้างโฟลเดอร์ `workflows` ในโฟลเดอร์ `.github`
3.สร้างไฟล์ `github-action.yml`
4.copy code ส่วนนี้ไปใส่ `github-action.yml`

```bash
name: GitHub Actions Demo
on: [push]
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
