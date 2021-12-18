import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:81'
});

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
      memail:     user.email,
      mphone:     user.phone
  }
  );
}

function login(user) { //user={id:xxx, password:xxx}
  // console.log("데이터 바인딩 확인 id :", user.id);
  // console.log("데이터 바인딩 확인 id :", user.password);
  return instance.post(
    "/login",
    `mid=${user.id}&mpassword=${user.password}`
  );
}

function checkPW(id,password) {
  // console.log("checkPW실행");
  // console.log("데이터 바인딩 확인 id :", id);
  // console.log("데이터 바인딩 확인 id :", password);
  return instance.post(
    "/checkPW",
    `mid=${id}&mpassword=${password}`
  );
}

export default {
  join,
  login,
  checkPW
}