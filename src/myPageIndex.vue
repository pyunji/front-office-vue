<template>
  <v-app style="background-color: #fdeeda;">
    <mypage-bar/>

    <mypage-footer style="padding-bottom:60px"/>
  </v-app>
</template>

<script>
import MypageBar from "@/components/layout/mypageBar";
import MypageFooter from "@/components/layout/mypageFooter";
export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name:"myPageIndex",
  //추가하고 싶은 컴포넌트들 목록
  components:{
    MypageBar: MypageBar, 
    MypageFooter:MypageFooter,
  },
  //컴포넌트 데이터 정의
  data: function() {
    return {
    };
  },
  //컴포넌트 메소드 정의
  methods:{
  }
}
</script>

<!--컴포넌트 스타일 정의-->
<!--scoped를 생략하면 전역으로 사용-->
<style scoped>

</style>