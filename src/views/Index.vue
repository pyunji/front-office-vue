<template>
  <v-app>
    <main-app-bar/>

    <!-- <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main> -->

    <main-footer/>
  </v-app>
</template>

<script>
import MainAppBar from "@/components/layout/AppBar";
import MainFooter from "@/components/layout/Footer2"
export default {
  name: "Index",
  components: {
    MainAppBar: MainAppBar,
    MainFooter: MainFooter,
  },
  data() {
    return {
      drawer: false,
    }
  },
  methods: {
  },
  // 사용자가 리프레시했을 때 세션에 저장된 로그인 상태를 복원
  created() {
    this.$store.dispatch("userStore/loadAuth");
  },
};
</script>
<style>
.title {
  color: red;
}
</style>
