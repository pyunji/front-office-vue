<template>
  <div style="background-color: #f7f1e9;">
    <v-toolbar
      flat
      color="grey lighten-1"
    >
      <v-toolbar-title style="font-weight: bold; font-size:18px;">평가 기준 및 혜택</v-toolbar-title>
    </v-toolbar>

    <v-tabs vertical class="mt-4" style="background-color: #f7f1e9;">
      <v-tab v-for="grade in grades" :key="grade" style="background-color: #f7f1e9;">
        {{grade.glevel}} Level
      </v-tab>

      <v-tab-item v-for="grade in grades" :key="grade" style="background-color: #f7f1e9;">
        <div class="text-center mb-4"><img v-bind:src="`${grade.gimg}`" width="90px" height="90px" /></div>
        <p class="text-center" style="font-weight: bold; font-size:15px;">혜택</p>
        <p v-if="grade.grate>0" class="mt-2 text-center">마일리지 추가 적립 ({{grade.grate}}% 추가적립)</p>
        <p  class="mt-2 text-center">생일 축하 쿠폰</p>
        <p class="text-center" style="font-weight: bold; font-size:15px;">등급 평가 조건</p>
        <p class="mt-2 text-center">{{grade.gnote}}</p>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import userApi from "@/apis/member/user";

export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name:"gradeInfo",
  //추가하고 싶은 컴포넌트들 목록
  components:{
  },
  //컴포넌트 데이터 정의
  data: function() {
    return {
      grades:[],
    };
  },
  //컴포넌트 메소드 정의
  methods:{
  },
  async created() {
    await userApi.getGradeInfo()
      .then((response)=> {
        this.grades = response.data;
      }).catch((error)=>{
        console.log(error);
      });
  }
}
</script>

<!--컴포넌트 스타일 정의-->
<!--scoped를 생략하면 전역으로 사용-->
<style scoped>

</style>