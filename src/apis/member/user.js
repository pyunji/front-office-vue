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

function getUserInfo() {
  return instance.get("/member");
}

function updateUserInfo(user) {
  console.log("updateUserInfo");
  console.log(user);
  return instance.post("/member",{
    mid:       user.mid,
    memail:    user.memail,
    mphone:    user.mphone,
    mtel:      user.mtel,
    mzipcode:  user.mzipcode,
    maddress1: user.maddress1,
    maddress2: user.maddress2,
    birth:     user.birth,
    gender:    user.gender,
    ref_id:    user.ref_id,
  });
}

function wthdMember(mid) {
 return instance.post("/member/wthd",`mid=${mid}`);
}

function getGradeInfo() {
  return instance.get("/grade")
}

function getUserGrade() {
  return instance.get("/member/grade");
}

function getUserMileage() {
  return instance.get("/member/mileage");
}

export default {
  getUserInfo,
  updateUserInfo,
  wthdMember,
  getGradeInfo,
  getUserGrade,
  getUserMileage
}