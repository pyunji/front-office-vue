<template>
  <v-card flat>
    <v-container fluid>
      <v-row class="child-flex">
        <div>
          <v-toolbar v-on:click="putShoppingBag()">
            <v-spacer />
            <v-toolbar-title class="font-weight-bold">쇼핑백 담기</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
        </div>

        <div>
          <v-toolbar dark>
            <v-spacer />
            <router-link to="/" style="text-decoration: none; color: inherit;">
            <v-toolbar-title  class="font-weight-bold">바로 주문</v-toolbar-title>
            </router-link>
            <v-spacer />
          </v-toolbar>
        </div>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import cart from "@/apis/member/cart";

export default {
  name: "Footer",
  props:["pstockid","quantity"],
  data: () => ({
    drawer: false,
  }),
  methods: {
    goOrderForm() {
      this.$router.push("/orderform");
    },
    async putShoppingBag() {
      console.log("putShoppingBag 실행");
      if(this.$store.state.userId==='') {
        this.$router.push("/login");
      } else {
        console.log(this.pstockid+" "+this.quantity);
        await cart.insertCartItem(this.pstockid, this.quantity);
        //장바구니 담은 후 처리
        this.$router.push("/cart");
      }
    },
  },
};
</script>