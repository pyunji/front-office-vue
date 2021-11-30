import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:80'
});

function getProductList(d1name,d2name,d3name,pageNo) {
  return instance.get(`/product/list/${d1name}/${d2name}/${d3name}`,{params:{pageNo}});
}

export default {
  getProductList
}