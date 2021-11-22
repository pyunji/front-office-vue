<!-- 컴포넌트 UI 정의 -->
<template>
  <v-card>
    <v-card-title>
      Exam06View
    </v-card-title>
    <v-card-subtitle>params(path variable)로 데이터 얻기</v-card-subtitle>
    <v-card-text>
      <!-- $router: 라우터 객체 -->
      <!-- $route : url을 통해서 넘어오는 정보를 가진 객체 -->
      <div>bno: {{ $route.params.bno }}</div>
      <div>bno: {{ bno }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  // 컴포넌트의 대표이름(devtools에 나오는 이름)
  name:"Exam06View",
  // 추가하고 싶은 컴포넌트를 등록
  components: {

  },
  // 컴포넌트에서 이용하는 데이터 정의
  data: function() {
    return {
    };
  },
  // 컴포넌트 메서드 정의
  methods: {
    
  },
  // 컴포넌트가 생성될 때 자동 실행
  created() {
    console.log("Exam06View 컴포넌트가 생성됨");
    // 자바스크립트에서는 $가 붙은 단어 앞에 this를 붙여야 함
    console.log(this.$route);
    console.log(this.$route.params.bno);

  },
  props: [
    "bno"
  ]
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>