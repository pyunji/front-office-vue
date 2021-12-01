import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:81'
});

/* 로그인이 필요한 서비스에서 session의 token을 가져와 초기화하는 설정 시작 */
instance.interceptors.request.use(function (config) {
  const token = sessionStorage.getItem('authToken');
  config.headers.Authorization =  token ? `Bearer ${token}` : '';
  return config;
});
/* 로그인이 필요한 서비스에서 session의 token을 가져와 초기화하는 설정 시작 */

function insertCartItem(pstockid, quantity) {
  console.log("insertCartItem실행");
  console.log(pstockid+" "+quantity);
  return instance.post("/cart",{
    mid: null,
    pstockid: pstockid,
    quantity: quantity,
  });
}

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
  deleteOneItem,
  insertCartItem,
}