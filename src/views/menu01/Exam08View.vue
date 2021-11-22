<!-- 컴포넌트 UI 정의 -->
<template>
  <v-card>
    <v-card-title>
      Exam08View
    </v-card-title>
    <v-card-text>
      <div>kind: {{ $route.query.kind }}</div>
      <div>color: {{ $route.query.color }}</div>
      <div>kind: {{ kind }}</div>
      <div>color: {{ color }}</div>

      <v-divider/>

      <v-btn color="orange" small class="mr-2" @click="goHome">홈으로 이동</v-btn>
      <v-btn color="orange" small class="mr-2" @click="goBack">뒤로 이동</v-btn>


    </v-card-text>
  </v-card>
</template>

<script>
export default {
  // 컴포넌트의 대표이름(devtools에 나오는 이름)
  name:"Exam08View",
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
    goHome() {
      this.$router.push("/");
    },
    goBack() {
      // 히스토리에서 직전 url로 이동
      this.$router.go(-1);
    }
  },
  // 컴포넌트가 생성된 후 실행되는 메서드
  created() {
    console.log(this.$route);
    console.log(this.$route.query.kind);
    console.log(this.$route.query.color);
  },
  props:[
    "kind",
    "color"
  ]
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>
</style>