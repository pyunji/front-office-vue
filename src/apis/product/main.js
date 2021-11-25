import axios from "axios";

function getNewItems(d1name="WOMEN") {
  return axios.get("/product/list", {params:{d1name}});
}

function getD1Names() {
  return axios.get("/product/d1names");
}

export default {
  getNewItems,
  getD1Names
}