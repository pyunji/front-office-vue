<template>
  <v-card>
    <v-toolbar flat style="background-color: #f7f1e9;">
      <v-spacer></v-spacer>
      <v-toolbar-title class="font-weight-bold">    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; HYUNDAI X TEAM2 </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon @click="goCart()">mdi-shopping-outline</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs v-model="tab" align-with-title
                background-color="transparent"
                grow>
          <v-tabs-slider color="black"></v-tabs-slider>

          <v-tab class="ma-0 pa-0" v-for="item in items" :key="item.tab" @click="changeComponent(item)">
            <div style="font-weight: bold; font-size:18px;">{{ item.tab }}</div>
          </v-tab>

        </v-tabs>
      </template>

    </v-toolbar>

   <v-container class="pa-0">
      <v-tabs-items v-model="tab"  style="background-color: #fdeeda;" class="mr-0">
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
        { tab: "이벤트", path: "event" },
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
      if(this.$store.getters["userStore/getUserId"]==='') {
        this.$router.push("/login");
      } else {
        this.$router.push("/cart");
      }
    }
  },
};
</script>
<style>
.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active), .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-icon, .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-btn, .theme--light.v-tabs > .v-tabs-bar .v-tab--disabled {
    color: #959ace;
}

.v-application .primary--text {
    color: #000051 !important;
    caret-color: #000051 !important;
}
</style>