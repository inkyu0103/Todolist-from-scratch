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

  async post(url, config, body) {
    const response = await axios.get(url, {
      ...config,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  }
  async put(url, config, body) {
    const response = await axios.get(url, {
      ...config,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  }
  async delete(url, config, body) {
    const response = await axios.get(url, {
      ...config,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  }
}

export default new CustomAxios();
