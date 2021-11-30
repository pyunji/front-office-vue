import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:80'
});

axios.defaults.baseURL = "http://localhost:80";

function setCategory(pcolorId){
  return axios.get(`/product/set/${pcolorId}`);
}
 
export default {
  setCategory
}