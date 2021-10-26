import Axios from "axios";
import { BASE_URL } from "../constant";

const axios = Axios.create({
  baseURL: BASE_URL,
});

class CustomAxios {
  async get(url, config) {
    const response = await axios.get(url, {
      ...config,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  }

  async post(url, body, config) {
    //어라... 꼭 body에서 알아야 하나...?
    const response = await axios.post(url, body, {
      ...config,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  }
  async put(url, body, config) {
    const response = await axios.put(url, body, {
      ...config,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  }

  async delete(url, config) {
    const response = await axios.delete(url, {
      ...config,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  }
}

export default new CustomAxios();
