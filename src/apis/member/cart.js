import axios from "axios";

axios.defaults.baseURL = "http://localhost:81";

function cartItems() {
  return axios.get("/cart");
}

function deleteSelected(delItems) {
  return axios.post(
    "/cart/deleteSelected",
    delItems
    );
}

function deleteOneItem(pstockid) {
  console.log("pstockid 다시 확인 = ", pstockid);
 return axios.post("/cart/delete", 
      pstockid, 
      {headers: {"Content-Type": "text/plain"}} // 기본으로 json 타입으로 인식하므로 문자열이라고 명시해주었다
      );
}
export default {
  cartItems,
  deleteSelected,
  deleteOneItem
}