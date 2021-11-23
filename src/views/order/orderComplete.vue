<!--컴포넌트 UI 정의-->
<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    
    <v-card-title text-align:center>주문이 완료되었습니다.</v-card-title>
    
    
    <img v-bind:src="require(`@/assets/photos/${photoFileName}`)" width="100%" />

    <v-divider class="mx-4"></v-divider>

    

    

    <v-card-actions>
      <v-btn width="100%"
        color="deep-purple lighten-2"
        text
        @click="orderLookUp"
      >
        주문 조회 버튼
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name:"",
  //추가하고 싶은 컴포넌트들 목록
  components:{
  },
  //컴포넌트 데이터 정의
  data: function() {
    return {
      photoFileName: "orderComplete.jpg",
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