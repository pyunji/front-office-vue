<template>
  <v-card> 
    <v-app-bar  app  outlined  inverted-scroll white flat>
      <v-btn style="margin" icon @click="goback()">
        <v-icon>mdi-arrow-left-circle</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <!--<v-btn icon to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>-->

      <v-toolbar-title class="font-weight-bold" @click="gohome()">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HYUNDAI X TEAM2</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn v-if="iswish===false" icon v-on:click="putWishList()">
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn v-else icon v-on:click="deleteWishList()">
        <v-icon color="red">mdi-heart</v-icon>
      </v-btn>
    </v-app-bar>
  
  </v-card>
</template>

<script>
import wishlist from "@/apis/member/wishlist";

export default {
  name: "AppBar",
  props:["pstockid"],
  data() {
    return {
      iswish:false,
    };
  },
  methods: {
    goback(){
      this.$router.go(-1);
    },
    gohome(){
      this.$router.push("/");
    },
    async putWishList() {
      console.log("putWishList 실행");
      if(this.$store.getters["userStore/getUserId"]==='') {
        this.$router.push("/login");
      } else {
        console.log("pstockid 확인"+this.pstockid);
        await wishlist.insertWishItem(this.pstockid);
        //관심상품 담은 후 처리    
        this.iswish = true;
      }
    },
    async deleteWishList() {
      console.log("deleteWishList 실행");
      console.log("pstockid 확인"+this.pstockid);
      await wishlist.deleteWishItem(this.pstockid);
      this.iswish = false;
    },
  },
  // //이미 담겨있는 상품인지 확인
  watch:{
    pstockid:function(val) {
      console.log("watch 실행" + val);
      wishlist.checkIsWish(val)
      .then((response)=>{
        console.log("watch 실행" + response.data);
        if(response.data===1) {
          this.iswish = true;
        }
      })
      .catch((error)=>{
        console.log(error);
      });
    }
  }
};
</script>
