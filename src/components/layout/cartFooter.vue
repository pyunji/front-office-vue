<template>
  <v-card flat>
    <v-container fluid>
      <v-row class="child-flex">
        <div>
          <v-toolbar color="red" class="white--text">
            <v-spacer />
            <router-link to="/" style="text-decoration: none; color: inherit;">
            <v-toolbar-title class="font-weight-bold;">375000원 주문 하기</v-toolbar-title>
            </router-link>
            <v-spacer />
          </v-toolbar>
        </div>

      </v-row>
    </v-container>
  </v-card>
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
      this.$router.push("/cart");
    },
  },
};
</script>
