export const options = {
  method: "GET", // 请求参数
  headers: { "Access-Control-Allow-Origin": "http://localhost:64305" },
  credentials: "same-origin", // cookie设置
  mode: "cors", // 跨域
};

export const showUserName = function (data) {
  document.getElementById(
    "banner-name"
  ).innerText = `MY NAME IS ${data.name.toUpperCase()} AND THIS IS MY RESUME/CV`;
};

export const showUserDescription = function (data) {
  document.getElementById("about-me").innerText = `${data.description}`;
};

export const showUserAvatar = function (data) {
  const imgObj = document.getElementById("user-avatar");
  imgObj.setAttribute("src", data.avatar);
};

export const listEducation = function (data) {
  const ul = document.getElementById("education-list");

  function creatList(upperList, val, id) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(val));
    li.setAttribute("id", id);
    upperList.appendChild(li);
  }
  data.forEach((element) => {
    creatList(ul, element.year, "year");
    creatList(ul, element.title, "title");
    creatList(ul, element.description, "description");
  });
};
