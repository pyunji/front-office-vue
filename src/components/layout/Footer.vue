<template>
  <div>
    <v-navigation-drawer app width="340" color="white" v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title v-if="$store.getters['userStore/getUserId'] !== ''" class="text-h6">
            {{ $store.getters["userStore/getUserId"] }}회원님 반갑습니다.
          </v-list-item-title>
          <v-list-item-title v-else class="text-h6"> 현재 로그인이 필요합니다 </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <div v-for="(value, i1) in Categories" :key="i1">
          <div v-for="(value2, i2) in value" :key="i2">
            <v-list-group v-for="(value3, d1name) in value2" :key="d1name">
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>{{ d1name }}</v-list-item-title>
                </v-list-item-content>
              </template>
              <div v-for="(value4, index) in value3" :key="index">
                <v-list-group no-action sub-group v-for="(value5, d2name) in value4" :key="d2name">
                  <template v-slot:activator>
                    <v-list-item-content>
                      <v-list-item-title>{{ d2name }}</v-list-item-title>
                    </v-list-item-content>
                  </template>
                  <v-list-item
                    v-for="(d3name, index2) in value5"
                    :key="index2"
                    @click="showDepthItems(d1name, d2name, d3name)"
                  >
                    <v-list-item-title>{{ d3name }}</v-list-item-title>
                  </v-list-item>
                </v-list-group>
              </div>
            </v-list-group>
          </div>
        </div>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn
            v-if="$store.getters['userStore/getUserId'] !== ''"
            block
            class="button"
            v-on:click="handleLogout()"
            >Logout</v-btn
          >
          <v-btn v-else block class="button" v-on:click="handleLogin()">Login</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-footer app padless>
      <v-bottom-navigation absolute dark>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-btn to="/">
          <v-icon>mdi-home-outline</v-icon>
        </v-btn>
        <v-btn v-if="$store.getters['userStore/getUserId'] !== ''">
          <v-icon @click="goWishList()">mdi-heart-outline</v-icon>
        </v-btn>
        <v-btn v-else>
          <v-icon @click="handleLogin()">mdi-heart-outline</v-icon>
        </v-btn>

        <v-btn v-if="$store.getters['userStore/getUserId'] !== ''">
          <v-icon @click="goMyPage()">mdi-account-outline</v-icon>
        </v-btn>
        <v-btn v-else>
          <v-icon @click="handleLogin()">mdi-account-outline</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-footer>
  </div>
</template>

<script>
import main from "@/apis/product/main";
import productAPI from "@/apis/product/list";
export default {
  name: "Footer",

  data: () => ({
    drawer: false,
    Categories: null,
    name: "",
  }),

  methods: {
    handleLogin() {
      this.$router.push({ path: "/login" }).catch(() => {});
    },
    handleLogout() {
      this.$store.dispatch("userStore/deleteAuth");
      this.$router.push("/");
    },
    // goOrderList() {
    //   this.$router.push("/order/orderlist");
    // },
    goMyPage() {
      this.$router.push("/mypage");
    },
    goWishList() {
      this.$router.push("/wishlist");
    },
    async showDepthItems(d1Name, d2Name, d3Name) {
      // 사용자가 선택한 depth를 store에 저장
      this.$store.commit("productStore/setDepth", { d1Name, d2Name, d3Name });
      // depth와 pageNo를 통해 비동기 api 요청
      const response = await productAPI.getProductList(d1Name, d2Name, d3Name, 1);
      // 요청 후 가져온 상품 데이터를 store에 저장
      this.$store.commit("productStore/setPageItems", response.data);

      // 현재 경로가 product/list가 아니면 경로 이동
      this.$router.push("/product/list").catch(() => {
        // 해당 경로에서 데이터만 바뀔 시 카테고리 내비게이션이 다시 들어가게 함
        this.drawer = !this.drawer;
      });
    },
  },
  beforeCreate() {
    main.getCategories().then((response) => {
      this.Categories = response.data;
    });
  },
};
</script>
<style>
.black {
  background-color: #000051 !important;
}
</style>