<template>
  <div>
    <v-app-bar color="black" dark app>
      <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->
      <v-row align="center">
        <v-img src="@/assets/logo.png" width="15"></v-img>
        <v-icon>mdi-cart-outline</v-icon>
      </v-row>
    </v-app-bar>
    <v-app-bar color="black" dark app>
      <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->
      <v-row align="center">
        <v-img src="@/assets/logo.png" width="15"></v-img>
        <v-icon>mdi-cart-outline</v-icon>
      </v-row>
    </v-app-bar>

  </div>
</template>

<script>
export default {
  name: "AppBar",
  data() {
    return {
      drawer: false,
    };
  },
};
</script>