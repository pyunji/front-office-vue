<!--컴포넌트 UI 정의-->
<template>
  <v-card>
    <v-toolbar flat style="background-color: #f7f1e9;">
      <v-spacer></v-spacer>
      <v-toolbar-title style="font-weight: bold; font-size:18px; ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;좋아요</v-toolbar-title>
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

   <v-container class="pa-0" >
      <v-tabs-items v-model="tab"  style="background-color: #f7f1e9;">
        <v-tab-item v-for="item in items" :key="item.tab" >
          <router-view :name="componentName" ></router-view>
        </v-tab-item>
      </v-tabs-items>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name:"WishBar",
  data() {
    return {
      tab: null,
      items: [
        { tab: "상품", path: "product" },
        { tab: "브랜드", path: "brand" },
      ],
      componentName: "product",
    };
  },
  //컴포넌트 메소드 정의
  methods:{
    changeComponent(item) {
      this.componentName = item.path;
    },
    goCart() {
      this.$router.push("/cart");
    }
  }
}
</script>

<!--컴포넌트 스타일 정의-->
<!--scoped를 생략하면 전역으로 사용-->
<style>
.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active), .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-icon, .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-btn, .theme--light.v-tabs > .v-tabs-bar .v-tab--disabled {
    color: #959ace;
}

.v-application .primary--text {
    color: #000051 !important;
    caret-color: #000051 !important;
}
</style>