import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:81'
});



function getDisplayContext() {
  return instance.get("/display");
}

export default {
  getDisplayContext,
}