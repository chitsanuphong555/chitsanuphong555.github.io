# Config tailwind css พื้นฐาน

ในไฟล์ `tailwind.config.js ` เราสามารถกำหนด theme ให้เป็น default ได้ ยกตัวอย่างการกำหนด borderRadius

```js
module.exports = {
  theme: {
    borderRadius: {
      none: "0",
      sm: ".125rem",
      DEFAULT: ".25rem",
      lg: ".5rem",
      full: "9999px",
    },
  },
};
```

การใช้งาน เราสามารถเลือกตามที่เรา config ได้ดังนี้

```js
.rounded-none { border-radius: 0 }
.rounded-sm   { border-radius: .125rem }
.rounded      { border-radius: .25rem }
.rounded-lg   { border-radius: .5rem }
.rounded-full { border-radius: 9999px }
```

หรือว่าเราจะแทนที่ theme เริ่มต้นของเราก็ได้ และเราสามารถดู `Key Configuration reference` ที่ https://tailwindcss.com/docs/theme อยู่ด้านล่าง
