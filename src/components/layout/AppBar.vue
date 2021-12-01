<template>
  <v-card>
    <v-toolbar color="transparent" flat>
      <v-spacer></v-spacer>
      <v-toolbar-title>    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| THE | HANDSOME |</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon @click="goCart()">mdi-shopping-outline</v-icon>
      </v-btn>
      <template v-slot:extension>
        <v-tabs v-model="tab" align-with-title>
          <v-tabs-slider color="primary"></v-tabs-slider>

          <v-tab v-for="item in items" :key="item.tab" @click="changeComponent(item)">
            <!-- <router-link :to="item.path">
            {{ item.tab }}
            </router-link> -->
            {{ item.tab }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
   <v-container fluid>
      <v-tabs-items v-model="tab" >
        <v-tab-item v-for="item in items" :key="item.tab" >
          <!-- <v-card flat > -->
            <router-view :name="componentName" ></router-view>
            <!-- <v-card-text v-text="text"></v-card-text> -->
          <!-- </v-card> -->
        </v-tab-item>
      </v-tabs-items>
    </v-container>
    
  </v-card>
</template>

<script>
export default {
  name: "AppBar",
  data() {
    return {
      tab: null,
      items: [
        { tab: "홈", path: "home" },
        { tab: "신상품", path: "new" },
        { tab: "베스트", path: "best" },
      ],
      componentName: "home",
    };
  },
  methods: {
    changeComponent(item) {
      this.componentName = item.path;
    },
    goCart() {
      console.log("goCart() 실행");
      if(this.$store.state.userId==='') {
        this.$router.push("/login");
      } else {
        this.$router.push("/cart");
      }
    }
  },
};
</script>
