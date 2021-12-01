<!--컴포넌트 UI 정의-->
<template>
  <div>
    <v-card class="mt-5 mb-8" outlined>
      <v-card-text>
        <v-container>
          <div v-for="(oneOrder, j) in allOrders" :key="j">
          <v-row>
            <v-col cols="12">
              <v-card class="pa-2 justify-center" outlined tile><div @click="goToOrderComplete(oneOrder.oid)">주문 날짜<btn style="float: right;"><v-icon>mdi-chevron-right</v-icon></btn></div> </v-card>
            </v-col>
            <v-divider/>
             
          </v-row>
          <div v-for="(oneItem, i) in oneOrder.orderItemListMap" :key="i">
            
            <v-row>
              <v-col cols="12">
              <v-card class="pa-1 justify-center" outlined tile><div>주문 상태 : {{oneItem.ostatus}}</div> </v-card>
            </v-col>
              <v-col cols="4">
                <v-img
                  class="mr-2"
                  :src="oneItem.img1"
                  width="100"
                  height="100"
                />
              </v-col>
              <v-col cols="6">
                <v-card class="pa-2" outlined tile>
                  <div>{{oneItem.pname}}</div>
                  <div>{{oneItem.ccode}} | {{oneItem.scode}}</div>
                  <div>{{oneItem.ocount}} 개</div>
                  <div>{{oneItem.totalPrice}}원</div>
                </v-card>
              </v-col>
              <v-col cols="2"> </v-col>
            </v-row>
            <v-btn width="100%" depressed> 주문 배송 조회 </v-btn>
            <div class="mb-2"></div>
          </div>
          
          </div>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped>
/* .container {
    border: 1px solid green;
  }
  .row {
    border: 1px solid red;
  }
  .col {
    border: 1px solid blue;
  } */
</style>

<script>

import ordercheck from "@/apis/order/ordercheck"
import orderform from "@/apis/order/orderform";

export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name: "",
  //추가하고 싶은 컴포넌트들 목록
  components: {},
  //컴포넌트 데이터 정의
  data: function () {
    return {
      allOrders : [],
    };
  },
  //컴포넌트 메소드 정의
  methods: {
    async goToOrderComplete(oid) {
      let orderCompleteItems = {};
      await orderform.orderComplete(oid)
        .then((response) => {
          orderCompleteItems = response.data;
        });
      console.log("orderCompleteItems", orderCompleteItems);
      this.$router.push({
        name:'ordercomplete',
        params: {
          initOrderItems: orderCompleteItems
        }
      });
    }

  },

  async created() {
    await ordercheck.showAllOrder()
      .then((response) => {
        this.allOrders = response.data;
        console.log("this.allOrders =", this.allOrders);
      });
  }
};
</script>

<!--컴포넌트 스타일 정의-->
<!--scoped를 생략하면 전역으로 사용-->
<style scoped></style>
