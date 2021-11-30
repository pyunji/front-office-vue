<!-- 컴포넌트 UI 정의 -->
<template>
  <v-card outlined>
    <div class="position-relative position-relative-example">


      <img v-bind:src="`${detail.product.img1}`" width="100%" />

      
      <p class="ml-2">{{ detail.product.bname }}</p>
      <h5 class="ml-2">{{ detail.product.pname }}</h5>
      <p class="ml-2">₩ {{ detail.product.pprice }}</p>
      <p class="ml-2">품번 {{ detail.product.pcolorid }}</p>
      <p class="ml-2">사이즈</p>
      <v-row align="center" class="ml-2" v-for="(color,index) in detail.sizes" v-bind:key="index">
        <v-btn depressed class="ma-2"> {{ color.scode }} </v-btn>
      </v-row>
      <v-divider />
      <p>{{ detail.product.pnote }}</p>

      <v-divider />
      
      <!--<p>한섬마일리지 {{ mileage }}</p>
      <p>H.Point {{ point }}</p>-->
      <p>한섬마일리지 (5%)</p>
      <p>H.Point (0.1%)</p>
      <p>배송비 30,000원 이상 무료배송 (실결제 기준)</p>
      <p>카드사 혜택</p>
      <v-divider/>
      <v-list>
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-title class="">상품상세정보</v-list-item-title>
          </template>
        </v-list-group>

        <v-list-group>
          <template v-slot:activator>
            <v-list-item-title class="">사이즈 가이드</v-list-item-title>
          </template>
        </v-list-group>

        <v-list-group>
          <template v-slot:activator>
            <v-list-item-title class="">배송 및 교환/반품</v-list-item-title>
          </template>
        </v-list-group>
        <v-list-group class="nav-item mt-2">
          <template v-slot:activator><v-list-item-title class="">Q&A</v-list-item-title></template>
        </v-list-group>
      </v-list>
    </div>
  </v-card>

</template>

<script>
import apiProduct from "@/apis/product/detail";

export default {
  // 컴포넌트의 대표이름(devtools에 나오는 이름)
  name: "productDetail",
  // 추가하고 싶은 컴포넌트를 등록
  components: {},
  // 컴포넌트에서 이용하는 데이터 정의
  data: function () {
    return {
      detail:null,
    };
  },
  // 컴포넌트 메서드 정의
  methods: {
  },
  created() {
    console.log("create 실행1");
    apiProduct.setCategory(this.$route.query.pcolorId)
      .then(response => {
        this.detail = response.data;
        console.log(response.data);
      })
      .catch(error=> {
        console.log(error);
      });
  },
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>
