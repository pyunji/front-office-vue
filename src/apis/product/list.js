import axios from "axios";

function getProductList(d1name,d2name,d3name,pageNo) {
  return axios.get(`/product/list/${d1name}/${d2name}/${d3name}`,{params:{pageNo}});
}

export default {
  getProductList
}