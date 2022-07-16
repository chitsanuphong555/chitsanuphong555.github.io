# เรียนรู้ AXIOS พื้นฐาน

## axios.get(url[, config])

```js
const axios = require("axios");

async function getUser() {
  try {
    const response = await axios.get("/user?ID=12345");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

## axios.post(url[, data[, config]])

```js
axios
  .post("/user", {
    firstName: "Fred",
    lastName: "Flintstone",
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

ดำเนินการร้องขอพร้อมกันหลายรายการ

```js
function getUserAccount() {
  return axios.get("/user/12345");
}

function getUserPermissions() {
  return axios.get("/user/12345/permissions");
}

Promise.all([getUserAccount(), getUserPermissions()]).then(function (results) {
  const acct = results[0];
  const perm = results[1];
});
```

# ข้อมูลอ้างอิง Axios API

คำขอสามารถทำได้โดยส่งการกำหนดค่าที่เกี่ยวข้อง axios(config)

```js
// GET request for remote image in node.js
axios({
  method: "get",
  url: "http://bit.ly/2mTM3nY",
  responseType: "stream",
}).then(function (response) {
  response.data.pipe(fs.createWriteStream("ada_lovelace.jpg"));
});
```

```js
// Send a POST request
axios({
  method: "post",
  url: "/user/12345",
  data: {
    firstName: "Fred",
    lastName: "Flintstone",
  },
});
```

การใช้ตัวเลือกการกำหนดค่า validateStatus คุณสามารถกำหนดรหัส HTTP ที่ควรแสดงข้อผิดพลาด

```js
axios.get("/user/12345", {
  validateStatus: function (status) {
    return status < 500; // Resolve only if the status code is less than 500
  },
});
```
