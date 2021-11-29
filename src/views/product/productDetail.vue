<!-- 컴포넌트 UI 정의 -->
<template>
  <v-card outlined>
    <div class="position-relative position-relative-example">
      <img v-bind:src="require(`@/assets/photos/${photoFileName}`)" width="100%" />
      <p class="ml-2">{{ brand }}</p>
      <h5 class="ml-2">{{ pname }}</h5>
      <p class="ml-2">{{ pprice }}</p>
      <p class="ml-2">{{ pcode }}</p>
      <p class="ml-2">사이즈</p>
      <v-row align="center" class="ml-2">
        <v-btn depressed class="mr-2"> {{ psize }} </v-btn>
        <v-btn depressed class="mr-2"> {{ psize }} </v-btn>
        <v-btn depressed class="mr-2"> {{ psize }} </v-btn>
        <v-btn depressed class="mr-2"> {{ psize }} </v-btn>
      </v-row>
      <v-divider />
      <p>{{ProductDetail}}</p>
      <p>{{ pcontent }}</p>

      <v-divider />
      
      <p>한섬마일리지 {{ mileage }}</p>
      <p>H.Point {{ point }}</p>
      <p>배송비 30,000원 이상 무료배송( 실결제 기준)</p>
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
import main from "@/apis/product/detail";
export default {
  // 컴포넌트의 대표이름(devtools에 나오는 이름)
  name: "productDetail",
  // 추가하고 싶은 컴포넌트를 등록
  components: {},
  // 컴포넌트에서 이용하는 데이터 정의
  data: function () {
    return {
      photoFileName: "productDetail1.jpg",
      brand: "SYSTEM",
      pname: "오버사이즈 구스 다운 점퍼",
      pprice: "799,000",
      pcode: "SY2BBQOT026W_OT",
      psize: "90",
      pcontent: "상품 상세 내용입니다.",
      mileage: "39,950 P (5%)",
      point: "799 P (0.1%)",
      ProductDetail: null,
    };
  },
  // 컴포넌트 메서드 정의
  methods: {
    goUrl() {
      
      this.$router.push("/");
      
    }
  },
  beforeCreate() {
    main.getProductDetail().then((response) => {
      this.ProductDetail = response.data;
    });
  },
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>
