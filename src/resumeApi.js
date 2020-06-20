import axios from "axios";
import baseURL from "./base";

const resumeApi = {
  getName: async (h) => {
    const response = await axios.get(`${baseURL}/h`);
    return response.data;
  },
};

export default resumeApi;
