<!-- 컴포넌트 UI 정의 -->
<template>
  <v-card outlined>
    <v-card-title>Exam02View</v-card-title>
    <v-card-text>
      <sub-a-component class="mb-2"/>
      <!-- 프로그램 방식 화면 이동 -->
      <v-btn color="yellow" class="mr-2" v-on:click="goUrl">/menu01/exam01view</v-btn>
      <v-btn color="yellow" class="mr-2" v-on:click="goUrl()">/menu01/exam01view</v-btn>
      <v-btn color="yellow" class="mr-2" @click="goUrl">/menu01/exam01view</v-btn>
      <v-btn color="yellow" class="mr-2" @click="goUrl()">/menu01/exam01view</v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
import SubAComponent from "./SubAComponent";
export default {
  // 컴포넌트의 대표이름(devtools에 나오는 이름)
  name:"Exam02View",
  // 추가하고 싶은 컴포넌트를 등록
  components: {
    SubAComponent
  },
  // 컴포넌트에서 이용하는 데이터 정의
  data: function() {
    return {
    };
  },
  // 컴포넌트 메서드 정의
  methods: {
    goUrl() {
      // 현재 컴포넌트의 라우터에게 url 정보를 제공할테니 그쪽으로 이동해라
      this.$router.push("/menu01/exam01view");
      //this.$router.push("/menu01/exam02view"); <- 현재 페이지로 이동하는 것은 에러가 발생한다 따라서 .catch(()=>{});를 붙여주면 좋다
      /* 이 방식들도 가능 */
      // this.$router.push({path: "/menu01/exam01view"});
      // this.$router.push({name: "menu01_exam01view"});
    }
  },
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>