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
/* 로그인이 필요한 서비스에서 session의 token을 가져와 초기화하는 설정 시작 */

/* 주문 폼 작성 시 주문자의 정보를 member table에서 가져와 보여주기 위한 요청 */
function getMemberInfo() {
  return instance.get("/getMemberInfo");
}

export default {
  getMemberInfo,
}