import axios from "axios";

const BASE_URL = "https://nestjs-boilerplate-test.herokuapp.com/api/v1";

export default class API {
  static login(data) {
    const config = {
      method: "post",
      url: `${BASE_URL}/auth/email/login`,
      headers: { "Content-Type": "application/json;charset=UTF-8" },
      data: JSON.stringify(data),
    };
    return axios(config);
  }
  static register(data) {
    const config = {
      method: "post",
      url: `${BASE_URL}/auth/email/register`,
      headers: { "Content-Type": "application/json;charset=UTF-8" },
      data: JSON.stringify(data),
    };
    return axios(config);
  }
  static async getUserData(authToken) {
    const config = {
      method: "get",
      url: `${BASE_URL}/auth/me`,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: `Bearer ${authToken}`,
      },
    };
    return await axios(config);
  }
  static patchUserData(authToken, data) {
    const config = {
      method: "patch",
      url: `${BASE_URL}/auth/me`,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: `Bearer ${authToken}`,
      },
      data: JSON.stringify(data),
    };
    return axios(config);
  }
}
