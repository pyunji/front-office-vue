import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:82'
});

/* 로그인이 필요한 서비스에서 session의 token을 가져와 초기화하는 설정 시작 */
instance.interceptors.request.use(function (config) {
  const token = sessionStorage.getItem('authToken');
  config.headers.Authorization =  token ? `Bearer ${token}` : '';
  return config;
});
/* 로그인이 필요한 서비스에서 session의 token을 가져와 초기화하는 설정 시작 */

function orderForm(cartItems) {
  console.log(cartItems);
  return instance.post("/order/orderform", cartItems);
}

/* 주문서 폼에서 주문하기 버튼을 누르면 주문 절차가 시작된다
 * 만들어진 주문번호를 반환한다.
 */
function makeOrder(orders) {
  return instance.post("/order/ordercomplete", orders);
}

/* 
  주문번호에 해당하는 주문완료 페이지 데이터를 넘겨준다.
 */
function orderComplete(oid) {
  return instance.get(`/order/ordercomplete?oid=${oid}`);
}
function getOrderMember(){
  return instance.get("/member/orderMember");
}

export default {
  orderForm,
  makeOrder,
  orderComplete,
  getOrderMember,
}