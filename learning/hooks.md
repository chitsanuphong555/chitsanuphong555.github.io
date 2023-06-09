# React Hooks

## useMemo

### useMemo คือการ Cache ค่า Value ถูกเรียกครั้งแรกเมื่อมีการ Render และครั้งต่อไปเมื่อมีการ Re-Render และ ค่าใน Array deps มีการเปลี่ยนแปลง โดย Return ออกเป็นค่า Value

### ปัญหาการ Re-Render นั้นเป็นปัญหาใหญ่ ที่ทำให้เกิดการ Render ที่หนักหน่วง ตามปกติทุกการ Render จะเกิดการจอง Memory (Memory allocation) และบางทีการ Render Component ซ้ำ ๆ เกินความจำเป็นอาจจะทำให้เกิดการจัดสรรหน่วยความจำอย่างไม่ถูกต้อง (Memory Leak) ได้

- Timestamp แสดงครั้งแรกเมื่อมีการ Render
- Timestamp แสดงอีกครั้งเมื่อมีการ Re-Render และ ค่า Some Value มีการเปลี่ยนแปลงเท่านั้น
- เป็นกรณีการ Re-Render เฉพาะที่จำเป็น

## แก้ปัญหาด้วย useMemo

```js
const getTimestamp = () => new Date().getTime();

const numberWithoutMemo = getTimestamp();

const getNumberWithMemo = useMemo(() => {
  return getTimestamp();
}, [someValue]);
```

###

มาดูโครงสร้างของ useMemo กันก่อน ฟังก์ชัน useMemo จะรับค่าตัวแปร 2 ค่า คือ Fuction และ Array

###

1. Function ก็ ฟังก์ชันอ่ะแหละ จะทำอะไรก็แล้วแต่ แต่สุดท้าย Return ค่าที่จะให้ useMemo มันจำด้วย (สำคัญเลย!) เพราะ useMemo เนี่ยมันจะต้อง Return ค่าเป็น Value เท่านั้น
2. Array จะเก็บตัวแปรทั้งหมดที่เมื่อตัวแปรพวกนี้เปลี่ยนแล้วจะเรียกใช้งานฟังก์ชัน

###

จาก Code ด้านบน ค่าตัวแปร randomNumberจะถูก Initial ครั้งแรกและจะถูกเปลี่ยนก็ต่อเมื่อเรากดปุ่ม Random เท่านั้นเพราะ ถ้าไล่จากโค้ดคือ เมื่อกดปุ่มแล้วตัวแปร isRandom จะเปลี่ยน และส่งผลให้ useMemo ถูกเรียกใช้นั่นเอง

## useCallback

### useCallback คือการ Cache Function ไม่ ถูกเรียกครั้งแรกเมื่อมีการ Render โดยจะถูกเรียกก็ต่อเมื่อสั่ง Call ฟังก์ชัน และ ค่าใน Array deps มีการเปลี่ยนแปลง โดย Return ออกเป็น Function

### แบบใช้ useCallback

- Timestamp ไม่แสดงครั้งแรกเรียกเมื่อมีการ Render (จะแสดงเมื่อเราสั่ง Call ฟังก์ชันเอง)
- Timestamp แสดงเมื่อสั่ง Call ฟังก์ชัน และ ค่าใน Some Value มีการเปลี่ยนแปลงเท่านั้น
- เป็นกรณีการ Re-Render เฉพาะที่จำเป็น

```js
const getTimestamp = () => new Date().getTime();

const numberWithoutCallback = getTimestamp();

const getNumber = useCallback(() => {
  setNumberWithCallback(() => getTimestamp());
}, [someValue]);
```

## สรุป

### หลักการของ useMemo คือการ Cache ข้อมูลไว้

- ถูกเรียกครั้งแรกเมื่อมีการ Render
- ถูกเรียกอีกครั้งเมื่อมีการ Re-Render และ ค่าใน Array deps มีการเปลี่ยนแปลง
- Return ออกเป็นค่า Value

### หลักการของ useCallback คือการ Cache ฟังก์ชันไว้

- ไม่ถูกเรียกเมื่อมีการ Render (จะถูกเรียกเมื่อเราสั่ง Call ฟังก์ชันเอง)
- ถูกเรียกอีกครั้งเมื่อสั่ง Call ฟังก์ชัน และ ค่าใน Array deps มีการเปลี่ยนแปลง
- Return ออกเป็น Function

## useContext
