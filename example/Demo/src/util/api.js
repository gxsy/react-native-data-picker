import axios from "axios";
const instance = axios.create({
  baseURL: "http://10.213.128.100:10001/webAPI/",
  timeout: 1000,
  headers: { "Content-Type": "application/x-www-form-urlencoded" }
});

export default {
  post: (url, data) => instance.post(url, data),
};
