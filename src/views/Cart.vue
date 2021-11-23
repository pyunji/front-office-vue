<!--컴포넌트 UI 정의-->
<template>
<v-container
    class="px-0"
    fluid
  >
    <v-checkbox
      v-model="checkbox"
      label='전체 선택'
    ></v-checkbox>
  <v-card>
  <v-list-item two-line>
    <v-list-item-action>
      <v-checkbox />
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title class="headline mb-1">
        <p>TIME HOMME</p>
        <p style="font-size:15px">후드 구스 다운 점퍼</p>
      </v-list-item-title>
      <v-list-item-subtitle>₩1,180,000</v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
  <v-card-text>
    <v-img src="@/assets/photos/cartimage1.png"/>
    <p class="mt-2">옵션 수량 : LIGHT GREEN / 100 / 1개</p>
    <p>적립 마일리지 : 59,000M</p>
    <p>적립 H.Point : 1,180P</p>
  </v-card-text>
</v-card>


<v-card class="mt-3">
  <v-container>
    <p class="ml-4"> 총 1개 상품</p>

    <v-img class="mb-3" src="@/assets/photos/cartimage2.png"/>

    <v-flex  class="btn sample1 white" style="float:left">
      <v-btn >품절상품 삭제</v-btn>
    </v-flex>

    <v-flex  class="btn sample1 white" style="float:right; display:inline-block" >
      <v-btn>선택상품 삭제</v-btn>
    </v-flex>

      <v-btn class="btn black white--text" width="100%" to="/orderform">
        선택상품 주문하기
      </v-btn>
  </v-container>
</v-card>

<v-btn depressed
      color="error" class="mt-3"
      width="100%"
      align-center
      to="/orderform">
  <p>12,500원</p>
  <p>주문하기</p>
</v-btn>
</v-container>

</template>

<script>
export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name:"Cart",
  //추가하고 싶은 컴포넌트들 목록
  components:{
  },
  //컴포넌트 데이터 정의
  data: function() {
    return {
      checkbox:true,
    };
  },
  //컴포넌트 메소드 정의
  methods:{
  }
}
</script>

<!--컴포넌트 스타일 정의-->
<!--scoped를 생략하면 전역으로 사용-->
<style scoped>

</style>