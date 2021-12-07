export default {
  /* 모듈의 이름을 루트 하위 네임스페이스로 설정 */
  namespaced: true,
  /* 상태 정의 */
  state: {
    pageNo: 1,
    d1Name: "",
    d2Name: "",
    d3Name: "",
    pageItems: null
  },
  /* 상태값을 읽는 메서드 정의(Getter) */
  getters: {
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
  /* 상태값을 변경하는 동기 메서드 정의(Setter) */
  mutations: {
    setPageNo(state, pageNo){
      state.pageNo = pageNo;
    },
    setDepth(state, payload) {
      state.d1Name = payload.d1Name;
      state.d2Name = payload.d2Name;
      state.d3Name = payload.d3Name;
    },
    setPageItems(state, pageItems) {
      state.pageItems = pageItems;
    }
  },
  /* 상태값을 변경하는 비동기 메서드 정의(Setter) */
  actions: {},
};