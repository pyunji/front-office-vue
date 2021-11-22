<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      Exam02CounterState
    </div>
    <div class="card-body">
      <h6>[Counter State 읽기]</h6>
      <p>counter/count 단방향 바인딩: {{$store.state.counter.count}}</p>
      <p>counter/count 단방향 바인딩: {{$store.getters["counter/getCount"]}}</p> <!-- 이렇게 접근해야함. $store.getters.counter.getCount 불가능 -->
      <p>counter/count 단방향 바인딩: {{getCount()}}</p>
      <p>counter/count 단방향 바인딩: {{computedCount}}</p>
      <p>counter/count 양방향 바인딩: <input type="text" v-model.number="$store.state.counter.count"/></p>

      <hr/>

      <h6>[Counter State 변경]</h6>
      <p>Component value 양방향 바인딩<input type="text" v-model.number="value"/></p>
      <div class="mt-2">
        <button class="btn btn-info btn-sm mr-2" @click="changeCountByMutation">counter/count 변경(Mutation 동기 방식)</button>
        <button class="btn btn-info btn-sm mr-2" @click="changeCountByAction">counter/count 변경(Action 비동기 방식)</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 컴포넌트의 대표이름(devtools에 나오는 이름)
  name:"Exam02CounterState",
  // 추가하고 싶은 컴포넌트를 등록
  components: {
  },
  // 컴포넌트에서 이용하는 데이터 정의
  data: function() {
    return {
      value: 0
    };
  },
  // 컴포넌트 메서드 정의
  methods: {
    getCount() {
      return this.$store.state.counter.count;
      // return this.$store.getters["counter/getCount"];
    },
    changeCountByMutation(){
      //mutation은 반드시 commit으로 실행해야한다.

      //commit을 얻을 수 있는 스토어 객체를 가져온다
      // this.$store.commit("setcount", this.value); // root에서 찾기 때문에 이렇게 하면 안된다.
      this.$store.commit("counter/setCount", this.value);

    },
    changeCountByAction() {
      // action은 반드시 dispatch로 실행해야한다.
      this.$store.dispatch("counter/setCountByAsync", {value: this.value, duration:3000});
    }
  },
  // 메서드는 렌더링이 되면 반복해서 호출되지만, computed는 값이 바뀌지 않으면 캐싱된 것을 사용한다.
  computed: {
    computedCount() {
      // return this.$store.state.counter.count;
      return this.$store.getters["counter/getCount"];
    }
  }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>