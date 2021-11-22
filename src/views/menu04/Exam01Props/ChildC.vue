<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      ChildC
    </div>
    <div class="card-body">
      <p>propA: {{propA + 10}}</p>
      <p>propB: {{propB + 10}}</p>
      <p>propC: {{propC + 10}}</p>
      <p>propD: {{propD}}</p>
      <p>propE: {{propE + 10}}</p>
      <p>propF: {{propF.message}}</p>
      <p>propG: 
        <ul>
          <li v-for="(value, index) in propG" :key="index">
            {{value}}
          </li>
        </ul>
      </p>
      <p>propI: {{propI}}</p>
    </div>
  </div>
</template>

<script>
export default {
  // 컴포넌트의 대표이름(devtools에 나오는 이름)
  name: "ChildC",
  // 추가하고 싶은 컴포넌트를 등록
  components: {},
  // 컴포넌트에서 이용하는 데이터 정의
  data: function() {
    return {};
  },
  // 컴포넌트 메서드 정의
  methods: {},
  props: {
    propA: null, //어떤 타입이든 가능
    propB: Number, //숫자 타입만 가능
    propC: [String, Number], //여러개의 가능한 타입(값 타입이 배열 아님)
    propD: {
      //문자 타입이고 반드시 필요
      type: String,
      required: true,
    },
    propE: {
      //숫자 타입이고 기본값은 5
      type: Number,
      default: 5,
    },
    propF: {
      //객체 타입이고 기본값은 {message: "Hello"}
      type: Object,
      default() {
        return { message: "Hello" };
      },
    },
    propG: {
      //배열 타입이고 기본값은 ["black", "white"]
      type: Array,
      default() {
        return ["black", "white"];
      },
    },
    propI: {
      //사용자 유효성 검사 가능
      validator(value) {
        return value > 0;
      },
    },
  },
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped></style>
