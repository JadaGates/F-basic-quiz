import baseURL from "./base";
import {
  listEducation,
  options,
  showUserAvatar,
  showUserDescription,
  showUserName,
} from "./resumeApi";

export const getUserId = function () {
  const url = window.location.href.toString();
  const regPattern = /user\/(\d+)/g;
  url.match(regPattern);
  return RegExp.$1;
};

export const userBasicInfo = function (userIdVal) {
  fetch(`${baseURL}/user/${userIdVal}`, options)
    .then((response) => response.json())
    .then((data) => {
      showUserName(data);
      showUserDescription(data);
      showUserAvatar(data);
    });
};

export const userEducationInfo = function (userIdVal) {
  fetch(`${baseURL}/user/${userIdVal}/educations`, options)
    .then((response) => response.json())
    .then((data) => {
      listEducation(data);
    });
};
