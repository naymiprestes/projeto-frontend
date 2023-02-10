import axios from "axios";

const api = axios.create({
  //baseURL: "https://contact-db.onrender.com",
  baseURL: "http://localhost:3333",
  // timeout: 5000,
});

export default api;
