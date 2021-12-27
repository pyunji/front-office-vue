import axios from "axios";

const instance = axios.create({
  //baseURL: 'http://localhost:82'
  baseURL:'http://kosa1.iptime.org:50420'
});

/* 로그인이 필요한 서비스에서 session의 token을 가져와 초기화하는 설정 시작 */
instance.interceptors.request.use(function (config) {
  const token = sessionStorage.getItem('authToken');
  config.headers.Authorization =  token ? `Bearer ${token}` : '';
  return config;
});
/* 로그인이 필요한 서비스에서 session의 token을 가져와 초기화하는 설정 시작 */

/* 한 명의 회원의 모든 주문내역을 보여줌 */
function showAllOrder() {
  return instance.get("/order/orderlist");
}



export default {
  showAllOrder,
}