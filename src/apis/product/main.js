import axios from "axios";

const instance = axios.create({
  //baseURL: 'http://localhost:80'
  baseURL:'http://kosa1.iptime.org:50220'
});

function getNewItems(d1name="WOMEN") {
  return instance.get("/product/new", {params:{d1name}});
}

function getBestItems(d1name="WOMEN") {
  return instance.get("/product/best", {params:{d1name}});
}

function getD1Names() {
  return instance.get("/product/d1names");
}
function getCategories(){
  return instance.get("/product/getCategoryList");
}
function reduceStock(stocks) {
  return instance.post("/stock/reduce", stocks);
}

export default {
  getNewItems,
  getBestItems,
  getD1Names,
  getCategories,
  reduceStock
}