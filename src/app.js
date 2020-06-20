import "./style/index.scss";
import baseURL from "./base";

const apiTest = "http://localhost:8080/h";

const options = {
  method: "GET", // 请求参数
  credentials: "same-origin", // cookie设置
};
fetch(apiTest, options)
  .then(function (response) {
    const a = response;
    return response;
  })
  .then(function (myJson) {
    console.log(myJson.text()); // 响应数据
  })
  .catch(function (err) {
    console.log(err); // 异常处理
  });

// $('#test').html(getTest());
