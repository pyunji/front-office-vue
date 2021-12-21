<!--컴포넌트 UI 정의-->
<template>
  <div>
    <v-toolbar
      flat
      color="grey lighten-1"
      class="text-center mt-4">
      <v-toolbar-title style="font-weight: bold; font-size:18px;">{{$store.getters["userStore/getUserId"]}}님의 마일리지</v-toolbar-title>
    </v-toolbar>

    <div class="mt-4">
      <div class="text-center mb-4">{{userMileage}} M</div>
    </div>

  </div>
</template>
  
<script>
import userApi from "@/apis/member/user";

export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name:"Mileage",
  //추가하고 싶은 컴포넌트들 목록
  components:{
  },
  //컴포넌트 데이터 정의
  data: function() {
    return {
      userMileage:null,
    };
  },
  //컴포넌트 메소드 정의
  methods:{
  },
  async created() {
    await userApi.getUserMileage()
      .then((response)=> {
        this.userMileage = response.data;
        console.log(this.userMileage);
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