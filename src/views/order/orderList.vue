<!--컴포넌트 UI 정의-->
<template>
  <div>
    <v-card class="mt-5 mb-8" outlined style="background-color: #f7f1e9;">
      <v-card-text>
        <v-container>
          <div v-for="(oneOrder, j) in allOrders" :key="j" >
          <v-row>
            <v-col cols="12">
              <div @click="goToOrderComplete(oneOrder.oid)" style="font-weight: bold; font-size: large"><span>주문 날짜 {{oneOrder.orderHistoryItems[0].odate}}</span><v-btn style="float: right; background-color: #ffffff;"><v-icon>mdi-chevron-right</v-icon></v-btn></div> 

            </v-col>
            <v-divider/>
             
          </v-row>
          <div v-for="(oneItem, i) in oneOrder.orderHistoryItems" :key="i">

            <div class= "card mb-2"  style="background-color: #f7f1e9;">

            <v-row>
              
              <v-col cols="12">

              <div style=" font-weight: bold; color:blue; float: right; opacity: 0.5" >{{oneItem.ostatus}}</div> 

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

                
                  <div style="font-weight: bold; ">{{oneItem.bname}}</div>
                  <div>{{oneItem.pname}}</div>
                  <div>{{oneItem.ccode}} | {{oneItem.scode}} | {{oneItem.ocount}} 개</div>
                  <div style="font-weight: bold; font-size: large">{{oneItem.totalPrice | comma}}원</div>
                

              </v-col>
              <v-col cols="2"> </v-col>
            </v-row>
            <button type="button" class="btn btn-secondary" style="color:#000051; background-color: #fdeeda; font-weight: bold;"> 주문 취소하기 </button>
            
          </div>
          </div>
          <v-divider/>
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

import orderlist from "@/apis/order/orderlist"
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
  filters: {
    comma(val) {
      return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
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
    await orderlist.showAllOrder()
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
