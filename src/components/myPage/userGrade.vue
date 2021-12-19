<template>
  <div>
    <v-toolbar
      flat
      color="grey lighten-1">
      <v-toolbar-title style="font-weight: bold; font-size:18px;">고객 등급</v-toolbar-title>
    </v-toolbar>

    <div class="mt-4">
      <div class="text-center mb-4"><img v-bind:src="`${userGrade.gimg}`" width="90px" height="90px" /></div>
      <p class="text-center" style="font-weight: bold; font-size:15px;">현재 등급은 {{userGrade.glevel}}Level 입니다.</p>
      <p v-if="userGrade.glevel<5" class="mt-2 text-center">다음 등급까지 {{userGrade.remain}}점 남았습니다.</p>
    </div>

  </div>
</template>


<script>
import userApi from "@/apis/member/user";

export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name:"userGrade",
  //추가하고 싶은 컴포넌트들 목록
  components:{
  },
  //컴포넌트 데이터 정의
  data: function() {
    return {
      userGrade:null,
    };
  },
  //컴포넌트 메소드 정의
  methods:{
  },
  async created() {
    await userApi.getUserGrade()
      .then((response)=> {
        this.userGrade = response.data;
        console.log(this.userGrade);
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