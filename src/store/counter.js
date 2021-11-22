export default {
  /* 모듈의 이름을 루트 하위 네임스페이스로 설정 */
  namespaced: true,
  /* 상태 정의 */
  state: {
    count: 0
  },
  /* 상태값을 읽는 메서드 정의(Getter) */
  getters: {
    getCount(state, getters, rootState, rootGetters) {
      return state.count;
    }
  },
  /* 상태값을 변경하는 동기 메서드 정의(Setter) */
  mutations: {
    setCount(state, payload) {
      state.count += payload;
    }
  },
  /* 상태값을 변경하는 비동기 메서드 정의(Setter) */
  actions: {
    // action의 매개변수는 context와 payload
    setCountByAsync(context, payload) { //payload = {value:xxx, duration:3000}
      new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit("setCount", payload.value);
          resolve(context.state.count);
        }, payload.duration);
      })
      .then((data) => {
        console.log(`counter/count 상태 변경 성공: ${data}`);
      })
      .catch((err) => {
        console.log(`counter/count 상태 변경 실패: ${err}`);
      });
    }
  },
};