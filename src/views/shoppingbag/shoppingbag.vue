<!-- 컴포넌트 UI 정의 -->
<template>
  <v-card outlined>
    <ul>
      <li>
        <span>택배</span>
      </li>
      <li>
        <span>매장수령</span>
      </li>
      <li>
        <span>퀵배송</span>
      </li>
    </ul>
  </v-card>
</template>

<script>
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
    };
  },
  // 컴포넌트 메서드 정의
  methods: {
    goUrl() {
      
      this.$router.push("/");
      
    }
  },
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>
  ul{
    list-style:none;
  }
  li {
    float: left;
  }
</style>
