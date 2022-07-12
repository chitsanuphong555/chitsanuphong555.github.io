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
Explore-GitHub-Actions: # _ ชื่อ job
runs-on: ubuntu-latest # _ ชื่อ os ที่ใช้งาน
steps: - run: echo "🎉 Hello KIE"

```

จะได้ `.github/workflows/github-action.yml`
