<!--컴포넌트 UI 정의-->
<template>
<div>
  <div v-if="page!=null">
    <div>
      <section >
        <div class="mt-5 ml-5 mb-2">{{$store.getters["productStore/getDepth"].d1Name}} > {{$store.getters["productStore/getDepth"].d2Name}} > {{$store.getters["productStore/getDepth"].d3Name}}</div>
        <div class="container">
          <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div v-for="product in page.products" :key="product.pcommonid" class="mb-4">
              <v-card class="h-100 mx-auto" width="200" @click="showDetail(product.colorList[0].pcolorId)" >
                <!-- Product image-->
                <div class="text-center">
                <div class="mb-3" >
                      <img :src="`${product.colorList[0].img1}`" width="100%" />
                </div>

                <!-- Product colorchip-->
                <span class="ma-2" v-for="(clist,index) in product.colorList" :key="index">
                  <span> <button> <v-img :src="`${clist.color_img}`" width="20" height="20"/></button></span>
                </span>
                </div>

                <!-- Product details-->
                <v-card-text class="card-body p-2">
                  <div class="text-center">
                    <!-- 브랜드 명-->
                    <div class="fw-bolder mb-1 brand_name" style="font-weight: bold">{{product.bname}}</div>
                    <!-- 상품명-->
                    <div class="fw-bolder mb-1 name">{{product.pname}}</div>
                    <!-- 가격-->
                    <div class="fw-bolder mb-1 price">
                      <span>₩{{product.colorList[0].pprice | comma}}</span>
                    </div>
                  </div>
                </v-card-text>
                
              </v-card>
            </div>
          </div>
        </div>
        <v-container>
                <div style="text-align: center;">
                <v-btn small class="mt-2 ml-1 p-0" outlined color="indigo" @click="changePageNo(1)">처음</v-btn>

                <v-btn small class="mt-2 ml-1 p-0" outlined color="blue-grey" 
                        v-if="page.pager.groupNo > 1" 
                        @click="changePageNo(page.pager.startPageNo-1)">PREV</v-btn>

                <v-btn small :color="`${(pageNo != page.pager.pageNo)?'':'error'}` "
                        class="mt-2 ml-1 p-0"
                        v-for="pageNo in range(page.pager.startPageNo, page.pager.endPageNo)" :key="pageNo"
                        @click="changePageNo(pageNo)">{{pageNo}}</v-btn>

                <v-btn small class="mt-2 ml-1 p-0" outlined color="blue-grey" 
                        v-if="page.pager.groupNo < page.pager.totalGroupNo"
                        @click="changePageNo(page.pager.endPageNo+1)">NEXT</v-btn>
                
                <v-btn small class="mt-2 ml-1 p-0" outlined color="indigo" @click="changePageNo(page.pager.totalPageNo)">맨끝</v-btn>
              </div>
        </v-container>
      </section>
    </div>
  </div>
</div>
</template>

<script>
//import ProductList from '../../components/product/ProductList.vue'
import list from "@/apis/product/list";

export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name:"List",
  //추가하고 싶은 컴포넌트들 목록
  components:{
    //ProductList
  },
  filters: {
    comma(val) {
      return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  //컴포넌트 데이터 정의
  data: function() {
    return {
      page:null,      
    };
  },
  //컴포넌트 메소드 정의
  methods:{
    showDetail(pcolorId) {
      this.$router.push(`/product/productDetail?pcolorId=${pcolorId}`);
    },
    async changePageNo(pageNo) {
      // console.log(this.d1name);
      // console.log(this.d2name);
      await list.getProductList(
        this.$store.getters["productStore/getDepth"].d1Name,
        this.$store.getters["productStore/getDepth"].d2Name,
        this.$store.getters["productStore/getDepth"].d3Name,
        pageNo)
        .then(response => {
          this.$store.commit('productStore/setPageItems', response.data);
        })
        .catch(error=>{
          console.log(error);
        })
    },
    range(start, end) {
      const arr = [];
      for(var i = start; i <= end; i++) {
        arr.push(i);
      }
      return arr;
    }
  },
  beforeMount() {
    this.page = this.$store.getters["productStore/getPageItems"];
  },
  computed:{
    pageItems(){
      // store의 pageItem이 변경되었는지 감시
      return this.$store.getters["productStore/getPageItems"];
    },
  },
  // computed 메서드와 watch 메서드의 이름이 일치하면 store의 데이터를 감시할 수 있다.
  watch:{
    // computed의 메서드와 watch의 메서드 명이 일치해야한다.
    pageItems(to,from){
      this.page = to;
    },
  }
  
}
</script>

<!--컴포넌트 스타일 정의-->
<!--scoped를 생략하면 전역으로 사용-->
<style scoped>

</style>