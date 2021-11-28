<!--컴포넌트 UI 정의-->
<template>
  <v-container class="px-0" fluid>
    <v-checkbox id="masterCheckbox" v-model="selectAll" label="전체 선택"></v-checkbox>
    <p>selectedItems:{{ selectedItems }}</p>
    <v-card v-for="(cartItem, i) in cartItems" :key="i">
      <v-list-item two-line>
        <v-list-item-action>
          <v-checkbox v-model="selectedItems" :value="cartItems[i]" />
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">
            <p>{{ cartItem.brand.name }}</p>
            <p style="font-size: 15px">{{ cartItem.productCommon.name }}</p>
          </v-list-item-title>
          <v-list-item-subtitle>₩{{ cartItem.productColor.price }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-card-text>
        <v-img width="100" :src="cartItem.productColor.img1" />
        <p class="mt-2">
          옵션 수량 : {{ cartItem.productColor.colorCode }} / {{ cartItem.productStock.sizeCode }} /
          {{ cartItem.cart.quantity }}개
        </p>
        <p>적립 마일리지 : 59,000M</p>
        <p>적립 H.Point : 1,180P</p>
      </v-card-text>
    </v-card>

    <v-card class="mt-3">
      <v-container>
        <p class="ml-4">총 1개 상품</p>

        <v-img class="mb-3" src="@/assets/photos/cartimage2.png" />

        <v-flex class="btn sample1 white" style="float: left">
          <v-btn>품절상품 삭제</v-btn>
        </v-flex>

        <v-flex class="btn sample1 white" style="float: right; display: inline-block">
          <v-btn>선택상품 삭제</v-btn>
        </v-flex>

        <v-btn class="btn black white--text" width="100%" to="/orderform">
          선택상품 주문하기
        </v-btn>
      </v-container>
    </v-card>

    <v-btn depressed color="error" class="mt-3" width="100%" align-center to="/orderform">
      <p>12,500원</p>
      <p>주문하기</p>
    </v-btn>
  </v-container>
</template>

<script>
import cart from "@/apis/member/cart";

export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name: "Cart",
  //추가하고 싶은 컴포넌트들 목록
  components: {},
  //컴포넌트 데이터 정의
  data: function () {
    return {
      masterCheck:false,
      checkbox: true,
      cartItems: [],
      cartSize: 0,
      selectedItems: [],
    };
  },
  //컴포넌트 메소드 정의
  methods: {},
  beforeCreate() {
    cart.cartItems().then((response) => {
      this.cartItems = response.data;
      this.cartSize = response.data.length;
      console.log("response.data =", response.data);
      console.log("response.data.length =", this.cartSize);
    });
  },
  computed: {
    selectAll: {
      // 체크박스들이 전체 선택되면 true를 반환 아니면 false를 반환
      get: function () {
          return this.cartItems ? this.selectedItems.length == this.cartItems.length : false;
      },

      set: function (value) {
        // tmp
          var selectedItems = [];

          // 마스터 체크박스가 체크된 경우
          if (value) {
              this.cartItems.forEach(function (cartItem) {
                  selectedItems.push(cartItem);
              });
          }
          // 마스터 체크박스가 체크되었으면 모든 아이템이 들어갈 것이고, 체크 해제되었으면 빈 리스트가 할당될 것이다.
          this.selectedItems = selectedItems;
      }
    },
  }
}
</script>

<!--컴포넌트 스타일 정의-->
<!--scoped를 생략하면 전역으로 사용-->
<style scoped></style>
