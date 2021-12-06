import Vue from 'vue'
import Vuex from 'vuex'

import counter from "./counter";
// import paging from "./paging";
import productAPI from "../apis/product/list"

import axiosConfig from "@/apis/axiosConfig";

Vue.use(Vuex)

export default new Vuex.Store({
  // state와 mutations는 반드시 정의해야함
  /* 루트 상태 정의 */
  state: {
    userId: "",
    authToken: "",

    count: 0,
    pageNo: 1,
    d1Name: "",
    d2Name: "",
    d3Name: "",
    pageItems: null
  },
  /* 루트 상태값을 읽는 메서드 정의(Getter) */
  getters: {
    getUserId(state) {
      return state.userId;
    },
    getAuthToken(state) {
      return state.authToken;
    },

    getPageNo(state) {
      return state.pageNo;
    },
    getDepth(state) {
      return {
        "d1Name": state.d1Name,
        "d2Name": state.d2Name,
        "d3Name": state.d3Name
      }
    },
    getPageItems(state){
      return state.pageItems;
    }
  },
  /* 루트 상태값을 변경하는 동기 메서드 정의(Setter) */
  mutations: {
    setUserId(state, payload) {
      state.userId = payload;
    },
    setAuthToken(state, payload) {
      state.authToken = payload;
    },

    setPageNo(state, pageNo){
      state.pageNo = pageNo;
    },
    setDepth(state, payload) {
      state.d1Name = payload.d1Name;
      state.d2Name = payload.d2Name;
      state.d3Name = payload.d3Name;
    },
    setPageItems(state, pageItems) {
      console.log("-----------",pageItems);
      state.pageItems = pageItems;
    }
  },
  /* 루트 상태값을 변경하는 비동기 메서드 정의(Setter) */
  actions: {
    async FETCH_ITEMS({commit}, {d1Name, d2Name, d3Name}) {
      // 비동기 처리
      commit('setDepth', {d1Name, d2Name, d3Name});
      const response = await productAPI.getProductList(d1Name, d2Name, d3Name);
      console.log(response);
      commit('setPageItems', response.data);
    },

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
  /* 루트가 아닌 자식 상태를 정의한 모듈을 가져오기 */
  modules: {
    counter,
    // paging
  }
})
