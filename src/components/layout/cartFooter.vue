<template>
  <v-card flat>
    <v-container fluid>
      <v-row class="child-flex">
        <div>
          <v-toolbar color="indigo" class="white--text">
            <v-spacer />
            <v-toolbar-title class="font-weight-bold;" @click="toOrderForm()">{{totalPrice}}원 주문 하기</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
        </div>

      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import {eventBus} from '../../main'
import orderform from "@/apis/member/orderform";
export default {
  name: "Footer",

  data: () => ({
    drawer: false,
    totalPrice: 0,
    selectedItems: [],

  }),
  methods: {
    goOrderForm() {
      this.$router.push("/orderform");
    },
    goShoppingBag() {
      this.$router.push("/cart");
    },
    setTotalPrice(totalPrice) {
      this.totalPrice = totalPrice;
    },
    async toOrderForm() {
      let response = await orderform.getMemberInfo();
      let initMemberInfo = response.data;
      let toOrderItemList = [];
      this.selectedItems.forEach((item) => {
        let toOrderItem = {
          pstockid: item.pstockid,
          img1: item.img1,
          pprice: Number(item.pprice),
          scode: item.oscode,
          ccode: item.occode,
          bname: item.bname,
          pname: item.pname,
          quantity: Number(item.quantity),
          appliedPrice: Number(item.pprice) * Number(item.quantity),
        };
        toOrderItemList.push(toOrderItem);
      });
      this.$router.push({
        name: "orderform",
        params: {
          initCartItems: toOrderItemList,
          initMemberInfo: initMemberInfo,
        },
      });
    }
  },
  created() {
    // 형제컴포넌트에서 값을 받는 리스너
    eventBus.$on('setTotalPrice', (data) => {
      this.totalPrice = data;
    });
    eventBus.$on('setToOrderItems', (data) => {
      this.selectedItems = data;
    });
    // console.log("totalPrice =", this.totalPrice);
    // console.log("selectedItems =", this.selectedItems);
  }
};
</script>
