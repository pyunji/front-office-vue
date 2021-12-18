<template>
  <v-card>
    <v-footer app padless>
      <v-row >
        <v-col class="pa-0">
          <v-toolbar v-on:click="putShoppingBag()">
            <v-spacer />
            <v-toolbar-title class="font-weight-bold mb-2 ml-2">쇼핑백 담기</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
        </v-col>

        <v-col class="pa-0">
          <v-toolbar dark>
            <v-spacer />
            <router-link to="/" style="text-decoration: none; color: inherit;">
            <v-toolbar-title class="font-weight-bold mb-2 mr-2">바로 주문</v-toolbar-title>
            </router-link>
            <v-spacer />
          </v-toolbar>
        </v-col>
      </v-row>
    </v-footer>
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
      if(this.$store.getters["userStore/getUserId"]==='') {
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