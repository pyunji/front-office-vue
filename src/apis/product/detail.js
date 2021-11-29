import axios from "axios";


function getProductDetail(){
  return axios.get("/product/{depth1}/{depth2}/{depth3}/{pcolorId}");
}


export default {
  getProductDetail,
}