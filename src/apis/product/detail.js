import axios from "axios";

function setCategory(pcolorId){
  return axios.get(`/product/set/${pcolorId}`);
}
 
export default {
  setCategory
}