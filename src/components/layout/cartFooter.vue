<template>
  <v-card flat>
    <v-container fluid>
      <v-row class="child-flex">
        <div style="height: 48px">&nbsp;</div>
        <div id="fixed" class="p-0">
          <v-toolbar style="background-color: #000051;">
            <v-spacer />
            <v-toolbar-title style="color: #ffffff;" class="font-weight-bold;" @click="toOrderForm()"
              >{{ totalPrice | comma }}원 주문 하기</v-toolbar-title
            >
            <v-spacer />
          </v-toolbar>
        </div>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { eventBus } from "../../main";
import orderform from "@/apis/member/orderform";
export default {
  name: "Footer",

  data: () => ({
    drawer: false,
    totalPrice: 0,
    selectedItems: [],
  }),
  filters: {
    comma(val) {
      return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },

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
    },
  },
  created() {
    // 형제컴포넌트에서 값을 받는 리스너
    eventBus.$on("setTotalPrice", (data) => {
      this.totalPrice = data;
    });
    eventBus.$on("setToOrderItems", (data) => {
      this.selectedItems = data;
    });
  },
};
</script>

<style scope>
#fixed {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 100;
}
</style>
