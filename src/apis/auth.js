import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:81'
});

/* 추가 시작 */
function addAuthHeader(authToken) {
  console.log(authToken);
  instance.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
}

// 요청 HTTP에 Authorization 헤더 제거
function removeAuthHeader() {
  delete instance.defaults.headers.common['Authorization'];
}

/* 추가 끝 */
function join(user) { //user={id:xxx, name:xxx, password:xxx, role:xxx, email:xxx}
  /* axios의 모든 메서드는 promise를 리턴한다 */
  // const promise = axios.post();
  // return promise;
  return instance.post(
    "/join2",
    {
      mid:        user.id,
      mname:      user.name,
      mpassword:  user.password,
      menabled:   user.enabled,
      mrole:      user.role,
      memail:     user.email
  }
  );
}

function login(user) { //user={id:xxx, password:xxx}
  console.log("데이터 바인딩 확인 id :", user.id);
  console.log("데이터 바인딩 확인 id :", user.password);
  return instance.post(
    "/login",
    `mid=${user.id}&mpassword=${user.password}`
  );
}

export default {
  join,
  login,
  addAuthHeader,
  removeAuthHeader
}