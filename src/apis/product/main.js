import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:80'
});


function getNewItems(d1name="WOMEN") {
  return instance.get("/product/list", {params:{d1name}});
}

function getD1Names() {
  return instance.get("/product/d1names");
}
function getCategories(){
  return instance.get("/product/getCategoryList");
}


export default {
  getNewItems,
  getD1Names,
  getCategories
}