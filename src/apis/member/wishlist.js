import axios from "axios";

const instance = axios.create({
  //baseURL: 'http://localhost:81'
  baseURL:'http://kosa1.iptime.org:50320'
});

/* 로그인이 필요한 서비스에서 session의 token을 가져와 초기화하는 설정 시작 */
instance.interceptors.request.use(function (config) {
  const token = sessionStorage.getItem('authToken');
  config.headers.Authorization =  token ? `Bearer ${token}` : '';
  return config;
});

function wishItems() {
  return instance.get("/wish");
}

function insertWishItem(pstockid) {
  console.log("insertWishItem");
  console.log(pstockid+" ");
  return instance.post("/wish",{
    mid: null,
    pstockid: pstockid,
  });
}

function deleteWishItem(pstockid) {
  console.log("deleteWishItem");
  console.log("pstockid 다시 확인 = ", pstockid);
 return instance.delete("/wish/"+pstockid);
}

function checkIsWish(pstockid) {
  console.log("checkIsWish")
  console.log("pstockid 다시 확인 = ", pstockid);
  return instance.get("/wish/"+pstockid);
}

export default {
  wishItems,
  insertWishItem,
  deleteWishItem,
  checkIsWish,
}