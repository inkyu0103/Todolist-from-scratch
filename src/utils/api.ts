import Axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../constant";

const axios = Axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

//const JWT_EXPIRE_TIME = 24 * 3600 * 1000;

export const setAuthToken = (authToken: string) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;
};

export const clearAuthToken = () => {
  axios.defaults.headers.common["Authorization"] = "";
};

class CustomAxios {
  async get(url: string, config?: AxiosRequestConfig) {
    const response = await axios.get(url, {
      ...config,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  }

  // body tpye은 요청하는 쪽마다 다를텐데 이런 경우에는 any를 사용해야 하나?
  async post(url: string, body: any, config?: AxiosRequestConfig) {
    try {
      const response = await axios.post(url, body, {
        ...config,
        headers: {
          "Content-Type": "application/json",
          ...config?.headers,
        },
      });
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  async put(url: string, body: any, config?: AxiosRequestConfig) {
    const response = await axios.put(url, body, {
      ...config,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  }

  async delete(url: string, config?: AxiosRequestConfig) {
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
