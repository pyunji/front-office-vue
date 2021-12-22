<!--컴포넌트 UI 정의-->
<template>
  <v-card>
    <v-toolbar flat>
      <v-spacer></v-spacer>
      <v-toolbar-title style="font-weight: bold; font-size:18px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;마이페이지</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon @click="goBack()">mdi-close</v-icon>
      </v-btn>
    <keep-alive>
      <template v-slot:extension>
        <v-tabs v-model="tab" align-with-title
                background-color="transparent"
                grow>
          <v-tabs-slider style="color: #000051;"></v-tabs-slider>

          <v-tab class="ma-0 pa-0" v-for="item in items" :key="item.tab" @click="changeComponent(item)">
            <div style="font-weight: bold; font-size:18px; ">{{ item.tab }}</div>
          </v-tab>

        </v-tabs>
      </template>
    </keep-alive>
    </v-toolbar>

   <v-container class="pa-0">
      <v-tabs-items v-model="tab" >
        <v-tab-item v-for="item in items" :key="item.tab" >
          <router-view :name="componentName" ></router-view>
        </v-tab-item>
      </v-tabs-items>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name:"mypageBar",
  components: {
  },
  data() {
    return {
      tab: null,
      items: [
        { tab: "주문", path: "order" },
        { tab: "쿠폰", path: "coupon" },
        { tab: "마일리지", path: "mileage" },
        { tab: "등급", path: "grade" },
      ],
      componentName: "order",
    };
  },
  //컴포넌트 메소드 정의
  methods:{
    changeComponent(item) {
      this.componentName = item.path;
    },
    goBack() {
      this.$router.go(-1);
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