import "./style/index.scss";
import baseURL from "./base";
import {
  listEducation,
  options,
  showUserAvatar,
  showUserDescription,
  showUserName,
} from "./resumeApi";

const url = window.location.href.toString();
const regPattern = /user\/(\d+)/g;
url.match(regPattern);
const userId = RegExp.$1;

fetch(`${baseURL}/user/${userId}`, options)
  .then((response) => response.json())
  .then((data) => {
    showUserName(data);
    showUserDescription(data);
    showUserAvatar(data);
  });

fetch(`${baseURL}/user/${userId}/educations`, options)
  .then((response) => response.json())
  .then((data) => {
    listEducation(data);
  });
