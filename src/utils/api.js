import Axios from "axios";
import { BASE_URL } from "../constant";

const axios = Axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const setAuthToken = (authToken) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;
};

export const clearAuthToken = () => {
  axios.defaults.headers.common["Authorization"] = "";
};

// url을 매번 받아야 하는 번거로움을 제거하기 위해서 클래스로 구성하였습니다.
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
