<template>
  
    

    <v-footer app>
      <v-bottom-navigation >
        
     <v-flex text-sm-center xs12 sm6 class="btn sample1 white" href="/">
      <v-btn v-on:click="goShoppingBag()" >쇼핑백 담기</v-btn>
    </v-flex>

    <v-flex xs12 sm6 class="btn sample1 black" >
      <v-btn v-on:click="goorderForm()" class="text--white" >바로 주문</v-btn>
    </v-flex>
      </v-bottom-navigation>
    </v-footer>
  
</template>

<script>
export default {
  name: "Footer",

  data: () => ({
    drawer: false,
    
  }),
  methods: {
    goOrderForm() {
      
      this.$router.push("/orderform");

    },
    goShoppingBag() {
      
      this.$router.push("/");

    }
  },
};
</script>
