import axiosConfig from "@/apis/axiosConfig";

export default {
  /* 모듈의 이름을 루트 하위 네임스페이스로 설정 */
  namespaced: true,
  /* 상태 정의 */
  state: {
    userId: "",
    authToken: "",
  },
  /* 상태값을 읽는 메서드 정의(Getter) */
  getters: {
    getUserId(state) {
      return state.userId;
    },
    getAuthToken(state) {
      return state.authToken;
    },
  },
  /* 상태값을 변경하는 동기 메서드 정의(Setter) */
  mutations: {
    setUserId(state, payload) {
      state.userId = payload;
    },
    setAuthToken(state, payload) {
      state.authToken = payload;
    },
  },
  /* 상태값을 변경하는 비동기 메서드 정의(Setter) */
  actions: {
    setUserIdByAsync(context, payload) { // payload = {userId:xxx, duration:3000, ...}
      new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit("setUserId", payload.userId); // mutations을 이용해 상태 변경
          resolve(context.state.userId); // -> then(data)로 전달됨
        }, payload.duration);
      })
      .then((data) => { // 성공하면
        console.log("userId 상태 변경 성공: ", data);
      })
      .catch((err) => { // 실패하면
        console.log("userId 상태 변경 실패: ", err);
      })
    },

    saveAuth(context, payload) { // payload={userId: xxx, authToken: xxx}
      // 상태 저장
      context.commit("setUserId", payload.userId);
      context.commit("setAuthToken", payload.authToken);

      // 브라우저를 리프레시 하더라도 sessionStorage (동일한 브라우저의 경우 공유하는 저장소)에서 로그인 정보를 가져올 수 있게 하자
      // 로그인 성공 -> 상태 저장, session storage에 저장.
      sessionStorage.setItem("userId", payload.userId);
      sessionStorage.setItem("authToken", payload.authToken);

      // 로그인 성공 후 모든 요청은 Axios의 공통 헤더에 Authorization을 추가
      axiosConfig.addAuthHeader(payload.authToken);
    },

    /* 리프레시 처리하기 */
    loadAuth(context, payload) {
      // 세션 스토리지에 저장된 내용을 읽어서 상태 복원
      // A || B  ==> A가 없다면 B
      context.commit("setUserId", sessionStorage.getItem("userId") || "");
      context.commit("setAuthToken", sessionStorage.getItem("authToken") || "");

      // authToken이 있을 경우 Axios의 공통 헤더에 Authorization을 추가
      if(context.state.authToken !== "") {
        axiosConfig.addAuthHeader(context.state.authToken);
      }
    },

    /* 로그아웃 처리하기 */
    deleteAuth(context, payload) {
      // 상태 날리기
      context.commit("setUserId", "");
      context.commit("setAuthToken", "");

      // sessionStorage에서 지우기
      sessionStorage.removeItem("userId");
      sessionStorage.removeItem("authToken");

      // 헤더 지우기
      axiosConfig.removeAuthHeader();
    }
  },
};