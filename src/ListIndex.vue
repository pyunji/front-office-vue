<template>
  <v-app>
    <list-app-bar style="background-color: #f7f1e9;"/>
      <div id = "content" class="content" style="background-color: #fdeeda;">
        <router-view ></router-view>
      </div>
    <main-footer style="padding-bottom:55px"/>
  </v-app>
</template>

<script>
import ListAppBar from "@/components/layout/ListAppBar";
import MainFooter from "@/components/layout/Footer"
export default {
  name: "Index",
  components: {
    ListAppBar,
    MainFooter,
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
