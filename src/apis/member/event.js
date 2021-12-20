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

function selectAllEvent() {
  return instance.get("/event");
}

function selectEvent(eno) {
  console.log("selectEvent 실행" + eno);
  return instance.get(`/event/${eno}`);
}

function selectForMain() {
  return instance.get("/event/main");
}

export default {
  selectAllEvent,
  selectEvent,
  selectForMain,
}