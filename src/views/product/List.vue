<!--컴포넌트 UI 정의-->
<template>

<div>
  <div>
    <!--
    <v-row class="row grey lighten-2 mt-3">
      <v-col class="col" >
          {{page.totalProduct}} 개
      </v-col>
      
      <v-col>
         <v-select
          :items="filters"
          label="신상품"
       ></v-select>
      </v-col>
    
    </v-row>
    -->
    <!-- 컴포넌트 삽입 위치
    <div id="content" class="content">
      <product-list></product-list>
    </div>
    -->
  </div>
  <div v-if="page!=null">
    <div>
      <section class="py-5">
        <v-container>
          <div class="row gx-4 gx-lg-5 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div v-for="product in page.products" :key="product.pcommonid">
              <v-col md-6 >
									<!-- Product image-->
                  <div class="align-center" v-for="(clist,index) in product.colorList" v-bind:key="index">
                        <img v-if="index<=0" :src="`${clist.img1}`" width="100%"/>
									</div>

     <!--             <div>
										<v-row v-for="(clist,index) in product.colorList" :key="index">
                      <v-col cols="1"><img :src="`${clist.color_img}`" width="20" height="20"/></v-col>
										</v-row>
									</div>-->
                  <div  class="grid ma-2" style="display: inline-block; " v-for="(clist,index) in product.colorList" :key="index" width="21px" height="21px" >
                    <v-img :src="`${clist.color_img}`" width="21px" height="21px" display: inline-block />
                  </div>
									<!-- Product details-->
									<v-card-text class="card-body p-4">
										<div class="text-center">
											<!-- 브랜드 명-->
											<div class="fw-bolder mb-1 brand_name" style="font-weight: bold">{{product.bname}}</div>
											<!-- 상품명-->
											<div class="fw-bolder mb-1 name">{{product.pname}}</div>
											<!-- 가격-->
											<div class="fw-bolder mb-1 price" v-for="(clist,index) in product.colorList" v-bind:key="index">
                        <span v-if="index<=0">₩{{clist.pprice}}</span>
											</div>

										</div>
									</v-card-text>
              </v-col>
            </div>
          </div>
        </v-container>
        <v-container>
                <div colspan="5" style="text-align: center;">
                <v-btn class="ma-2" outlined color="indigo" @click="changePageNo(d1name,d2name,d3name,1)">처음</v-btn>

                <v-btn class="ma-2" outlined color="blue-grey" 
                        v-if="page.pager.groupNo > 1" 
                        @click="changePageNo(d1name,d2name,d3name,page.pager.startPageNo-1)">PREV</v-btn>

                <v-btn :color="`${(pageNo != page.pager.pageNo)?'':'error'}` "
                        class="ma-2"
                        v-for="pageNo in range(page.pager.startPageNo, page.pager.endPageNo)" :key="pageNo"
                        @click="changePageNo(d1name,d2name,d3name,pageNo)">{{pageNo}}</v-btn>

                <v-btn class="ma-2" outlined color="blue-grey" 
                        v-if="page.pager.groupNo < page.pager.totalGroupNo"
                        @click="changePageNo(d1name,d2name,d3name,page.pager.endPageNo+1)">NEXT</v-btn>
                
                <v-btn class="ma-2" outlined color="indigo" @click="changePageNo(d1name,d2name,d3name,page.pager.totalPageNo)">맨끝</v-btn>
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
  //컴포넌트 데이터 정의
  data: function() {
    return {
      d1name:"",
      d2name:"",
      d3name:"",
      page:null,      
    };
  },
  //컴포넌트 메소드 정의
  methods:{
    changePageNo(d1name,d2name,d3name,pageNo) {
      console.log(this.d1name);
      console.log(this.d2name);
      list.getProductList(d1name,d2name,d3name,pageNo)
        .then(response => {
          this.page = response.data;
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
  created() {
    var pageNo = this.$route.query.pageNo;
    this.d1name = this.$route.query.d1name;
    this.d2name = this.$route.query.d2name;
    this.d3name = this.$route.query.d3name;
    if(pageNo === "undefined") {
      pageNo = 1;
    }
    this.changePageNo(this.d1name,this.d2name,this.d3name,pageNo);
    console.log(this.d1name);
    console.log(this.d2name);
  },
  
}
</script>

<!--컴포넌트 스타일 정의-->
<!--scoped를 생략하면 전역으로 사용-->
<style scoped>

</style>