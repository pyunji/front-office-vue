<template>
<v-card>
    <v-toolbar color="transparent" flat>
      <v-spacer></v-spacer>
      <v-toolbar-title class="font-weight-bold" @click="goHome()">    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HYUNDAI X TEAM2</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon to="/cart">
        <v-icon>mdi-shopping-outline</v-icon>
      </v-btn>
      
    </v-toolbar>
    
  </v-card>
</template>

<script>
export default {
  name: "AppBar",
  data() {
    return {
    };
  },
  methods: {
    goHome(){
      this.$router.push("/");
    }
  },
};
</script>
