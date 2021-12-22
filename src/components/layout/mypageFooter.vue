<!--컴포넌트 UI 정의-->
<template>
  <div>
    <v-footer app padless>
      <v-bottom-navigation absolute dark>
        <!--<v-btn>
          {{ $store.getters["userStore/getUserId"] }}회원님
        </v-btn>-->
        <v-btn @click="goUpdateForm()">
          회원 정보 변경 / 탈퇴
        </v-btn>
        <v-btn @click="handleLogout()">
          Logout
        </v-btn>
      </v-bottom-navigation>
    </v-footer>
  </div>
</template>

<script>
export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name:"mypageFooter",
  //추가하고 싶은 컴포넌트들 목록
  components:{
  },
  //컴포넌트 데이터 정의
  data: function() {
    return {
    };
  },
  //컴포넌트 메소드 정의
  methods:{
    handleLogout() {
      this.$store.dispatch("userStore/deleteAuth");
      this.$router.push("/");
    },
    goUpdateForm() {
      this.$router.push("/checkPW");
    },
  }
}
</script>

<!--컴포넌트 스타일 정의-->
<!--scoped를 생략하면 전역으로 사용-->
<style scoped>

</style>