export default {
  /* 모듈의 이름을 루트 하위 네임스페이스로 설정 */
  namespaced: true,
  /* 상태 정의 */
  state: {
    d1Names:null,
    newItems:null,
    bestItems:null,
  },
  /* 상태값을 읽는 메서드 정의(Getter) */
  getters: {
    getD1Names(state) {
      return state.d1Names;
    },
    getNewItems(state) {
      return state.newItems;
    },
    getBestItems(state) {
      return state.bestItems;
    }
  },
  /* 상태값을 변경하는 동기 메서드 정의(Setter) */
  mutations: {
    setD1Names(state, d1Names){
      state.d1Names = d1Names;
    },
    setNewItems(state, newItems){
      state.newItems = newItems;
    },
    setBestItems(state, bestItems){
      state.bestItems = bestItems;
    },
  },
  /* 상태값을 변경하는 비동기 메서드 정의(Setter) */
  actions: {},
};