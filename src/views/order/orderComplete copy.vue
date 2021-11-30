<!--컴포넌트 UI 정의-->
<template>
  <v-card :loading="loading" class="mx-auto my-12">
    <template slot="progress">
      <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
    </template>

    <v-card-title text-align:center>주문이 완료되었습니다.</v-card-title>
    <div class="btn btn-sm btn-danger">부트스트랩 체크</div>
     <b-card img-src="@/assets/photos/best.png" img-alt="Card image" img-left class="mb-3">
      <b-card-text>
        Some quick example text to build on the card and make up the bulk of the card's content.
      </b-card-text>
    </b-card>
    <div>
    </div>
    <div>
      <div v-for="productInCart in cartItems" :key="productInCart">
        <v-img :src="productInCart.img1" max-width="100" max-height="100" align="left" />
        <p>
          {{ productInCart.bname }}
        </p>

        <p>
          {{ productInCart.pname }}
        </p>
        <p>
          {{ productInCart.ccode }} / {{ productInCart.scode }} / {{ productInCart.quantity }} 개
        </p>
        <p>{{ productInCart.pprice }} 원</p>
      </div>
    </div>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn width="100%" color="deep-purple lighten-2" text @click="orderLookUp">
        주문 조회 버튼
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name: "",
  //추가하고 싶은 컴포넌트들 목록
  components: {},
  //컴포넌트 데이터 정의
  data: function () {
    return {
      photoFileName: "orderComplete.jpg",
    };
  },
  //컴포넌트 메소드 정의
  methods: {},
};
</script>

<!--컴포넌트 스타일 정의-->
<!--scoped를 생략하면 전역으로 사용-->
<style scoped></style>
