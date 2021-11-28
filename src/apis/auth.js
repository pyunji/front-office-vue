import axios from "axios";


function join(user) { //user={id:xxx, name:xxx, password:xxx, role:xxx, email:xxx}
  /* axios의 모든 메서드는 promise를 리턴한다 */
  // const promise = axios.post();
  // return promise;
  return axios.post(
    "/member/join2",
    {
      mid:        user.id,
      mname:      user.name,
      mpassword:  user.password,
      mrole:      user.role,
      memail:     user.email
  }
  );
}

function login(user) { //user={id:xxx, password:xxx}
  console.log("데이터 바인딩 확인 id :", user.id);
  console.log("데이터 바인딩 확인 id :", user.password);
  return axios.post(
    "/login",
    `mid=${user.id}&mpassword=${user.password}`
  );
}

export default {
  join,
  login
}