<!--컴포넌트 UI 정의-->
<template>
  <v-card>
    <v-toolbar flat>
      <v-btn icon>
        <v-icon @click="goback()">mdi-arrow-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title style="font-weight: bold; font-size:18px;">이벤트 상세보기</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon @click="goCart()">mdi-shopping-outline</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name:"EventBar",
  data() {
    return {
    };
  },
  //컴포넌트 메소드 정의
  methods:{
    goback(){
      this.$router.go(-1);
    },
    goCart() {
      this.$router.push("/cart");
    }
  }
}
</script>

<!--컴포넌트 스타일 정의-->
<!--scoped를 생략하면 전역으로 사용-->
<style scoped>

</style>