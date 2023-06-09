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

หรือ เราสามารถประยุกต์ใช้ให้ทำการแนบค่าที่เป็น Authorization หรือ Token ที่อยู่ใน cookie ก็ได้อีกด้วย
ยกตัวอย่างให้เรา สร้าง function กลางขึ้นมา 1 ตัว ให้ชื่อไฟล์ `MainApi.tsx`

```js
import axios from "axios";

function MainApi(
  methods: any,
  namePath: any,
  parameterData: any,
  headers: any
): Promise<unknown> {
  return new Promise((resolve, reject) => {
    axios({
      method: methods,
      url: namePath,
      headers: headers,
      data: parameterData,
    })
      .then((response) => {
        resolve(response);
      })
      .catch(async (error) => {
        reject(error);
      });
  });
}

export default MainApi;
```

แล้วทำ function กลางขึ้นมา เพื่อนำ access token ที่ได้มาแนบไปกับ api อื่นๆ ให้ไฟล์ชื่อว่า GlobalAccessAPI.js

[getCookie] ตัวนี้เราจะใช้ lib ตัวอื่นมาประยุกต์ใช้ก็ได้

```js
import { getCookie } from "../checkToken/CookieGlobal";
import MainApi from "../checkToken/MainAPI";

function GlobalAccessAPI(methods, namePath, parameterData) {
  if (getCookie("access_token_system") !== null) {
    let objectHeader = {
      AuthorizationAccessToken: {
        Authorization: `Bearer ${getCookie("access_token_system")}`,
        "Authorization-Access-OneID": `${getCookie(
          "access_token__one_id_system"
        )}`,
        "Authorization-Refresh-OneID": `${getCookie(
          "refresh_token__one_id_system"
        )}`,
      },
    };
    return new Promise((resolve, reject) => {
      MainApi(
        methods,
        namePath,
        parameterData,
        objectHeader.AuthorizationAccessToken
      )
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
          if (
            err.response?.status === 401 ||
            err?.response?.data?.message === "invalid or expired jwt"
          ) {
          }
        });
    });
  } else {
  }
}

export default GlobalAccessAPI;
```

วิธีการนำไปใช้ ในส่วนต่อไปนี้เราจะให้แนบ Token ที่เก็บอยู่ใน cookie เพื่อไป get ข้อมูล โดยเงื่อนไข api นี้ต้องมี access token นี้เท่านั้นถึงจะ get ข้อมูลจากระบบนี้ได้ ตัวอย่างเช่น

```js
import GlobalAccessAPI from "../configs/globalToken/GlobalAccessAPI";

const fetchProductData = () => {
  GlobalAccessAPI("get", DATA_ALLPRODUCT, {})
    .then((res) => {
      setDataAllProduct(res.data.data);
      setLoading(false);
    })
    .catch((err) => {
      setLoading(false);
    });
};
```

เราก็จะได้ข้อมูลของสินค้ามา

การใช้ตัวเลือกการกำหนดค่า validateStatus คุณสามารถกำหนดรหัส HTTP ที่ควรแสดงข้อผิดพลาด

```js
axios.get("/user/12345", {
  validateStatus: function (status) {
    return status < 500; // Resolve only if the status code is less than 500
  },
});
```
