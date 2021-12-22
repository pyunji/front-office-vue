<template>
  <v-app>
    <main-app-bar v-bind:pstockid="pstockid"/>
    <v-main>
      <v-container fluid >
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import MainAppBar from "@/components/layout/productAppBar";
export default {
  name: "Index",
  components: {
    MainAppBar: MainAppBar,
  },
  data() {
    return {
      drawer: false,
    }
  },
  // 사용자가 리프레시했을 때 세션에 저장된 로그인 상태를 복원
  created() {
    this.$store.dispatch("userStore/loadAuth");
  },
};
</script>
<style>

</style>
