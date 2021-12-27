import axios from "axios";

const instance = axios.create({
  //baseURL: 'http://localhost:80'
  baseURL:'http://kosa1.iptime.org:50220'
});

//axios.defaults.baseURL = "http://localhost:80";
axios.defaults.baseURL = 'http://kosa1.iptime.org:50220';

function setCategory(pcolorId){
  return axios.get(`/product/set/${pcolorId}`);
}

function getWithItems(pcolorId){
  return axios.get(`/product/get/WithItems/${pcolorId}`)
}
 
export default {
  setCategory,
  getWithItems
}