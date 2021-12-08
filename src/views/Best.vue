<!--컴포넌트 UI 정의-->
<template>
  <div class="red lighten-3 pa-8">
    <v-carousel
      style="height:100%"
      cycle
      show-arrows-on-hover
      hide-delimiters
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      vertical
      vertical-delimiters>
      <v-carousel-item 
        v-for="(item, i) in items" 
        :key="i"
        :src="item.img1"
        @click="showDetail(item.pcolorid)">
        <h2 class="ma-3" style="font-weight: bold">베스트</h2>
        <div class="mt-4 ml-4" style="font-weight: bold">{{item.bname}}</div>
        <div class="ml-4">{{item.pname}}</div>
        <div class="ml-4">{{item.pprice}}</div>
      </v-carousel-item>
    </v-carousel>
    <v-select
    :items="d1names"
    v-model="d1name"
    @change="change()">
    </v-select>
  </div>
</template>

<script>
import main from "@/apis/product/main";

export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name:"Best",
  //추가하고 싶은 컴포넌트들 목록
  components:{
  },
  //컴포넌트 데이터 정의
  data: () => ({
    items: null,
    d1names:null,
    d1name:"WOMEN",
    }),
  //컴포넌트 메소드 정의
  methods:{
    showDetail(pcolorId) {
      this.$router.push(`/product/productDetail?pcolorId=${pcolorId}`);
    },
    change() {
      main.getBestItems(this.d1name).then(response => {
      this.items = response.data;
    });
    }
  },
  beforeCreate() {
    main.getD1Names()
    .then(response => {
      this.d1names = response.data;
    });
    main.getBestItems().then(response => {
      this.items = response.data;
    });
  },
}
</script>

<!--컴포넌트 스타일 정의-->
<!--scoped를 생략하면 전역으로 사용-->
<style scoped>

</style>