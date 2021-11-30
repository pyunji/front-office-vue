import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:81'
});

function cartItems() {
  return instance.get("/cart");
}

function deleteSelected(delItems) {
  return instance.post(
    "/cart/deleteSelected",
    delItems
    );
}

function deleteOneItem(pstockid) {
  console.log("pstockid 다시 확인 = ", pstockid);
 return instance.post("/cart/delete", 
      pstockid, 
      {headers: {"Content-Type": "text/plain"}} // 기본으로 json 타입으로 인식하므로 문자열이라고 명시해주었다
      );
}
export default {
  cartItems,
  deleteSelected,
  deleteOneItem
}