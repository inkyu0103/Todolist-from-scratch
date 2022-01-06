import Axios from "axios";
import { BASE_URL } from "../constant";

const axios = Axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

//const JWT_EXPIRE_TIME = 24 * 3600 * 1000;

export const setAuthToken = (authToken: any) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;
};

export const clearAuthToken = () => {
  axios.defaults.headers.common["Authorization"] = "";
};

// url을 매번 받아야 하는 번거로움을 제거하기 위해서 클래스로 구성하였습니다.
class CustomAxios {
  async get(url: any, config: any): Promise<any> {
    const response = await axios.get(url, {
      ...config,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  }

  async post(url: any, body: any, config: any): Promise<any> {
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
  async put(url: any, body: any, config: any): Promise<any> {
    const response = await axios.put(url, body, {
      ...config,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  }

  async delete(url: any, config: any): Promise<any> {
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
