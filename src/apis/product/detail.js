import axios from "axios";

axios.defaults.baseURL = "http://localhost:80";
function getProductDetail(){
  return axios.get("/product/{depth1}/{depth2}/{depth3}/{pcolorId}");
}


export default {
  getProductDetail,
}