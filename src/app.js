import "./style/index.scss";
import baseURL from "./base";
import { options } from "./resumeApi";

fetch(`${baseURL}/user/1`, options)
  .then((response) => response.json())
  .then((data) => {
    document.getElementById(
      "banner-name"
    ).innerText = `MY NAME IS ${data.name.toUpperCase()} AND THIS IS MY RESUME/CV`;
  });
