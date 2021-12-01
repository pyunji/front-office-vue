<template>
  <v-app>
    <main-app-bar/>

    <v-main>
        
      <v-container fluid >
    
        <router-view @productForCart="handleEvent"/>
        
      </v-container>
      
    </v-main>
    <main-footer v-bind:pstockid="pstockid" v-bind:quantity="quantity"/>
  </v-app>
</template>

<script>
import MainAppBar from "@/components/layout/productAppBar";
import MainFooter from "@/components/layout/productFooter"
export default {
  name: "Index",
  components: {
    MainAppBar: MainAppBar,
    MainFooter: MainFooter,
  },
  data() {
    return {
      drawer: false,
      pstockid:null,
      quantity:null,
    }
  },
  methods: {
    handleEvent(arg1,arg2) {
      console.log("productIndex 실행 : "+arg1+" "+arg2);
      this.pstockid = arg1;
      this.quantity = arg2;
    },
  },
  // 사용자가 리프레시했을 때 세션에 저장된 로그인 상태를 복원
  created() {
    this.$store.dispatch("loadAuth");
  },
};
</script>
<style>
.title {
  color: red;
}
</style>
