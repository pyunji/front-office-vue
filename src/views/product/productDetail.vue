<!-- 컴포넌트 UI 정의 -->
<template>
  <v-card outlined>
    <div class="position-relative position-relative-example">

      <!-- Product images-->
      <v-carousel class="mb-3" hide-delimiters show-arrows-on-hover>
        <v-carousel-item v-if="detail != null" :src="`${product.img1}`"></v-carousel-item>
        <v-carousel-item  v-if="detail != null" :src="`${product.img2}`"></v-carousel-item>
        <v-carousel-item v-if="detail != null" :src="`${product.img3}`"></v-carousel-item>
      </v-carousel>

      <!-- Product colorchip-->
      <span class="ma-3"  v-for="(color, index) in colorList" v-bind:key="'c' + index">
        <span>
          <button @click="changeColor(index)">
            <img v-bind:src="`${color.color_img}`" width="30px" height="30px" /></button
        ></span>
      </span>

      <!-- Product brand-->
      <p  v-if="detail != null" class="ml-2 mt-3" style="font-weight: bold">{{ product.bname }}</p>
      
      <!-- Product name-->
      <h5 v-if="detail != null" class="ml-2">{{ product.pname }}</h5>

      <!-- Product price-->
      <p v-if="detail != null" class="ml-2 mt-2">₩ {{ product.pprice | comma }}</p>

      <!-- Product pstockid-->
      <p class="ml-2 mb-5">품번 {{ pstockid }}</p>

      <!-- Product size-->
      <div class="ma-2">
        <p>사이즈</p>
        <span v-for="(size, index) in sizes" v-bind:key="'s' + index">
          <span v-if="size_idx === index">
            <v-btn class="mr-1 mb-1" depressed disabled @click="changeSize(index)"> {{ size.scode }} </v-btn>
          </span>
          <span v-else>
            <v-btn class="mr-1 mb-1" depressed @click="changeSize(index)"> {{ size.scode }} </v-btn>
          </span>
        </span>
      </div>

      <!-- Product quantity -->
      <div class="ma-2 mt-5">
        <p>수량</p>
        <span>
          <button @click="minus(quantity)" class="mr-3">-</button>
          <input :value="quantity" size="1" maxlength="2" />
          <button @click="plus(quantity)" style="margin: 0px">+</button>
        </span>
      </div>

      <v-divider />

      <!-- Product note -->
      <p v-if="detail != null" class="ma-2 mb-4">{{ product.pnote }}</p>

      <!-- Product image -->
      <img v-if="detail != null" :src="`${product.img1}`" width="100%" class="mb-3" />
      <img v-if="detail != null" :src="`${product.img2}`" width="100%" class="mb-3" />
      <img v-if="detail != null" :src="`${product.img3}`" width="100%" class="mb-3" /> 

      <!--<p>한섬마일리지 {{ mileage }}</p>
      <p>H.Point {{ point }}</p>-->
     <p class="ml-2">한섬마일리지 (5%)</p>
      <p class="ml-2">H.Point (0.1%)</p>
      <p class="ml-2">배송비 30,000원 이상 무료배송 (실결제 기준)</p>
      <p class="ml-2">카드사 혜택</p>

      <v-divider />

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
        <v-list-group>
          <template v-slot:activator><v-list-item-title class="">Q&A</v-list-item-title></template>
        </v-list-group>
      </v-list>
    </div>
    <v-divider />
    <div>
      <div style="fonst-weight: bold;">함께 코디한 상품</div>
      <!-- <v-container >
        <v-row>
          <v-col cols="3"> 
            
             <v-img v-if="smryWithItems != null" :src="`${smryWithItems.smryWithItems[0].img1}`" @click="showDetail(smryWithItems.smryWithItems[0].pcolorid)"></v-img>
          </v-col>
          <v-col cols="8"> 

          </v-col >
          <v-col cols="1"> </v-col>
        </v-row>
        <v-row>
          <v-col>

          <div v-if="smryWithItems != null" ml-2 style="font-weight:bold; font-size: 15px;">{{smryWithItems.smryWithItems[0].bname}}</div> 

          </v-col>
        </v-row>
        <v-row>
          <v-col>

          <div v-if="smryWithItems != null" ml-2>{{smryWithItems.smryWithItems[0].pprice | comma}}</div>

          </v-col>
        </v-row>
      </v-container> -->
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
  filters: {
    comma(val) {
      return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  // 컴포넌트에서 이용하는 데이터 정의
  data: function () {
    return {
      detail: Object,
      product: Object,
      sizes: Array,
      withItems: Array,
      colors: Array,
      stocks: Array,
      color_idx: 0,
      size_idx: 0,
      pstockid: "",
      quantity: 1,
      // smryWithItems: {},
      pcolorid: "",
      pcommonid:"",
      withProduct: "",



    };
  },
  // 컴포넌트 메서드 정의
  methods: {
    // showDetail(pcolorId){
    //   const currentQuery = this.$route.query;

    //   if(currentQuery.pcolorId == pcolorId){
    //     console.log("pcolorId값이 동일하여 페이지를 이동하지 않습니다.");
    //   }
    //   else{
    //   return this.$router.replace({
    //     path: this.$route.path,
    //     query: {
    //       pcolorId : pcolorId,
    //     }
    //   })
    // }
    // },
    showDetail(pcolorId) {
      this.$router.push({
        name: "productdetail",
        params: {
          initPcolorid: pcolorId
        }
      });
    },
    minus(arg) {
      if (arg > 1) this.quantity = arg - 1;
    },
    plus(arg) {
      if (arg < 99) this.quantity = arg + 1;
    },
    async changeColor(idx) {
      console.log("changeColor 실행");
      this.color_idx = idx;
      await apiProduct
        .setCategory(this.pcommonid + "_" + this.detail.colors[idx].ccode)
        .then((response) => {
        console.log(response.data);
        this.detail = response.data;
        this.product = this.detail.product;
        this.sizes = this.detail.sizes;
        // this.withItems = this.detail.withItems;
        this.colors = this.detail.colors;
        this.stocks = this.detail.stocks;
          this.pstockid =
            this.pcommonid +
            "_" +
            this.colors[this.color_idx].ccode +
            "_" +
            this.sizes[this.size_idx].scode;
          console.log(this.pstockid);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async changeSize(idx) {
      console.log("changeSize 실행");
      this.size_idx = idx;
      await apiProduct
        .setCategory(this.detail.product.pcommonid + "_" + this.detail.colors[this.color_idx].ccode)
        .then((response) => {
        console.log(response.data);
        this.detail = response.data;
        this.product = this.detail.product;
        this.sizes = this.detail.sizes;
        // this.withItems = this.detail.withItems;
        this.colors = this.detail.colors;
        this.stocks = this.detail.stocks;
        console.log("detail = ", this.detail);
          this.pstockid =
            this.detail.product.pcommonid +
            "_" +
            this.detail.colors[this.color_idx].ccode +
            "_" +
            this.detail.sizes[this.size_idx].scode;
          console.log(this.pstockid);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
    computed:{
    colorList(){
      return this.detail.colors;
    },
  },

  props: {
    initPcolorid: String
  },
  
  async created() {
    this.pcolorid = this.initPcolorid;
    console.log("create 실행1");
    console.log("this.pcolorid = ", this.pcolorid);
      await apiProduct
      .setCategory(this.initPcolorid)
      .then((response) => {
        console.log(response.data);
        this.detail = response.data;
        this.product = this.detail.product;
        this.sizes = this.detail.sizes;
        // this.withItems = this.detail.withItems;
        this.colors = this.detail.colors;
        this.stocks = this.detail.stocks;
        console.log("detail = ", this.detail);
        // this.withitems = this.detail.withItems;
        // this.withProduct = this.withitems[0].bname;
        // console.log(this.withProduct);
        this.pcommonid = this.initPcolorid.split("_")[0];
        
        this.pstockid =
          this.pcommonid +
          "_" +
          this.detail.colors[this.color_idx].ccode +
          "_" +
          this.detail.sizes[this.size_idx].scode;
        console.log("this.pstockid = ", this.pstockid);
      })
      .catch((error) => {
        console.log(error);
      });
      
      await apiProduct.getWithItems(this.initPcolorid)
      .then((response)=> {
        console.log(response.data);
        this.smryWithItems = response.data;
        console.log(this.smryWithItems);
      }) 
    //장바구니에 담기 위한 데이터 불러오기
  },
  updated() {
    this.$emit("productForCart", this.pstockid, this.quantity);
  },
  // watch:{
  //   $route(to,form){
  //     console.log("params만 바뀜: " + this.pcolorid);
     
  //   }
  // }
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped></style>
