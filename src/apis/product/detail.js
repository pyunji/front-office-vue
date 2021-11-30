import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:80'
});

axios.defaults.baseURL = "http://localhost:80";
function getProductDetail(){
  return axios.get("/product/{depth1}/{depth2}/{depth3}/{pcolorId}");
}


export default {
  getProductDetail,
}