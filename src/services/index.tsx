import { AXIOS } from "../config/axios.config";
import API_URL from "../constants/api.url";

async function getWorkSpace() {
  try {
    const response = await AXIOS.get(API_URL.WorkSpaces);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

export { getWorkSpace };
