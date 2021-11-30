import axios from "axios";

axios.defaults.baseURL = "http://localhost:80";

function getProductList(d1name,d2name,d3name,pageNo) {
  return axios.get(`/product/list/${d1name}/${d2name}/${d3name}`,{params:{pageNo}});
}

export default {
  getProductList
}