<!--컴포넌트 UI 정의-->
<template>
  
  <div>
    
    <v-card class="mt-5 mb-8" outlined>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" align="center" justify="center">
              <v-card
                class="pa-2  "
                outlined
                tile height = "150" style="display:flex"   
              ><div  style="  font-size: 25px; font-weight: bold; margin:auto auto;">주문이 완료 되었습니다.</div>
              </v-card>
            </v-col>
          </v-row>
          
          <div class = "card mt-2">
          <v-row class="mb-1">
            
            <v-col cols="12">
              <div style="font-weight: bold"> 주문 번호: {{initOrderItems.oid}}</div>
              
            </v-col>
          </v-row>
    
          <div v-for="(orderItem, i) in initOrderItems.orderItemListMap" :key="i">
          <v-row class="mb-2">
            <v-col cols="4">
              
                <v-img class="mr-2" :src="`${orderItem.img1}`" width="100" height="100"/>
              
            </v-col>
            <v-col cols="6">
                
                <div style="font-weight: bold">{{orderItem.bname}}</div>
                <div>{{orderItem.pname}}</div>
                <div>{{orderItem.ccode}} | {{orderItem.scode}} |  {{orderItem.ocount}} 개</div>
               
            
                
              
            </v-col>
            <v-col cols="2">
            </v-col>
          </v-row>
          </div>
          </div>
          
        </v-container>
        <v-btn width="100%" depressed  color="black"> <div style="font-weight: bold">주문 배송 조회</div> </v-btn>
      </v-card-text>
    
    </v-card>
    <div>{{orderItem}}</div>
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
  //추가하고 싶은 컴포넌트들 목록
  components: {},
  //컴포넌트 데이터 정의
  data: function () {
    return {
      // orderItems: {},
      photoFileName: "orderComplete.jpg",
      show: false,
    };
  },
  props: {
    initOrderItems: Object
  },
  //컴포넌트 메소드 정의
  methods: {},

  created(){
    // this.orderItems = this.initOrderItems;
    console.log("주문 아이템", this.initOrderItems);
  }
};
</script>

<!--컴포넌트 스타일 정의-->
<!--scoped를 생략하면 전역으로 사용-->
<style scoped></style>
