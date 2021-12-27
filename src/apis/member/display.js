import axios from "axios";

const instance = axios.create({
  //baseURL: 'http://localhost:81'
  baseURL:'http://kosa1.iptime.org:50320'
});



function getDisplayContext() {
  return instance.get("/display");
}

export default {
  getDisplayContext,
}