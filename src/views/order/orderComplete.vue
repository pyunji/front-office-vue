<!--컴포넌트 UI 정의-->
<template>
  <div>
    <v-card class="mt-5 mb-8" outlined>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" align="center" justify="center">
              <v-card class="pa-2" outlined tile height="150" style="display: flex"
                ><div style="font-size: 25px; font-weight: bold; margin: auto auto">
                  주문이 완료 되었습니다.
                </div>
              </v-card>
            </v-col>
          </v-row>

          <div class="card mt-2">
            <v-row class="mb-1">
              <v-col cols="12" style="font-weight: bold">
                주문 번호: {{ initOrderItems.oid }}<br/> 주문 날짜: {{ initOrderItems.odate }}
                
              </v-col>
            </v-row>

            <div v-for="(orderItem, i) in initOrderItems.orderCompleteItems" :key="i">
              <v-row class="mb-2">
                <v-col cols="4">
                  <v-img class="mr-2" :src="`${orderItem.img1}`" width="100" height="100" />
                </v-col>
                <v-col cols="6">
                  <div style="font-weight: bold">{{ orderItem.bname }}</div>
                  <div>{{ orderItem.pname }}</div>
                  <div>
                    {{ orderItem.ccode }} | {{ orderItem.scode }} | {{ orderItem.ocount }} 개
                  </div>
                  <div style="font-weight: bold">{{ orderItem.totalPrice }}원</div>
                </v-col>
                <v-col cols="2"> </v-col>
              </v-row>
            </div>
          </div>
          <v-list>
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-title class="">결제정보</v-list-item-title>
            
          </template>
          
          <v-list-item-content>
            <v-list-item-title>할인 전 가격: {{initOrderItems.beforeDcPrice | comma }}</v-list-item-title>
            <v-list-item-title>할인 후 가격: {{initOrderItems.afterDcPrice | comma}}</v-list-item-title>
            <v-list-item-title>마일리지 반영 가격: {{usedMileage}}</v-list-item-title>
            <v-list-item-title>총 가격: {{initOrderItems.afterDcPrice | comma}}</v-list-item-title>
          </v-list-item-content>
          
        </v-list-group>

        <v-list-group>
          <template v-slot:activator>
            <v-list-item-title class="">배송지 정보</v-list-item-title>
                      
          </template>
          <v-list-item-content>
                        <v-list-item-title>받는 사람:  {{initOrderItems.oreceiver}}</v-list-item-title>
            <v-list-item-title>우편번호:  {{initOrderItems.ozipcode}}</v-list-item-title>
            <v-list-item-title>주소: {{initOrderItems.oaddress}}</v-list-item-title>
            <v-list-item-title>핸드폰: {{initOrderItems.ophone}}</v-list-item-title>
            <v-list-item-title>전화번호: {{initOrderItems.otel}}</v-list-item-title>
            <v-list-item-title>메모: {{initOrderItems.memo}}</v-list-item-title>
          </v-list-item-content>
        </v-list-group>

        <v-list-group>
          <template v-slot:activator>
            <v-list-item-title class="">결제수단</v-list-item-title>
           
          </template>
           <v-list-item-content>

            <v-list-item-title>결제정보 {{initOrderItems.paymentInfo}}</v-list-item-title>
            <v-list-item-title>결제수단 {{initOrderItems.paymentMethod}}</v-list-item-title>
          </v-list-item-content>
        </v-list-group>
      </v-list>
        </v-container>
        <v-btn width="100%" depressed color="black">
          <div style="font-weight: bold" @click="toOrderList"> 주문 내역 확인 </div>
        </v-btn>
      </v-card-text>
    </v-card>
    <div>{{ orderItem }}</div>
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
export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name: "",
  filters: {
    comma(val) {
      return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  //추가하고 싶은 컴포넌트들 목록
  components: {},
  //컴포넌트 데이터 정의
  data: function () {
    return {
      // orderItems: {},
      photoFileName: "orderComplete.jpg",
      show: false,
      newDate: "",
    };
  },
  props: {
    initOrderItems: Object,
  },
  //컴포넌트 메소드 정의
  methods: {
    toOrderList() {
      this.$router.push("/order/orderlist");
    }
//     formattingDate(){
    
      

// var year = today.getFullYear();
// var month = ('0' + (today.getMonth() + 1)).slice(-2);
// var day = ('0' + today.getDate()).slice(-2);

// var dateString = year + '-' + month  + '-' + day;

// console.log(dateString);
//     }
  },

  created() {
    // this.orderItems = this.initOrderItems;
    console.log("주문 아이템", this.initOrderItems);
  },
};
</script>

<!--컴포넌트 스타일 정의-->
<!--scoped를 생략하면 전역으로 사용-->
<style scoped></style>
