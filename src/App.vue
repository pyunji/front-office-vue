<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {
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
