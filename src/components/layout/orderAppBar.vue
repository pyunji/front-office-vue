<template>
  <v-card> 
    <v-app-bar  app  outlined   white flat>
      <v-btn style="margin" icon to="/">
        <v-icon>mdi-arrow-left-circle</v-icon>
      </v-btn>
      <v-btn icon to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      
      

      <v-toolbar-title class="font-weight-bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HYUNDAI X TEAM2</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-app-bar>
  
  </v-card>
</template>

<script>
export default {
  name: "AppBar",
  data() {
    return {};
  },
};
</script>
