import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost'
});

/* 로그인이 필요한 서비스에서 session의 token을 가져와 초기화하는 설정 시작 */
instance.interceptors.request.use(function (config) {
  const token = sessionStorage.getItem('authToken');
  config.headers.Authorization =  token ? `Bearer ${token}` : '';
  return config;
});
/* 로그인이 필요한 서비스에서 session의 token을 가져와 초기화하는 설정 시작 */

// 요청 HTTP에 Authorization 헤더 추가, 값은 JWT로 설정
function addAuthHeader(authToken) {
  console.log(authToken);
  instance.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
}

// 요청 HTTP에 Authorization 헤더 제거
function removeAuthHeader() {
  delete instance.defaults.headers.common['Authorization'];
}

// 객체 내보내기
export default {
  addAuthHeader,
  removeAuthHeader
}