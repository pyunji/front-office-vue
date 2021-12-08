<!-- 컴포넌트 UI 정의 -->
<template>
  <v-card outlined>

    
     <div class="position-relative position-relative-example"> 

      <v-carousel hide-delimiters show-arrows-on-hover>
        <v-carousel-item v-if="detail != null" :src="`${detail.product.img1}`">
        </v-carousel-item>
                <v-carousel-item  v-if="detail != null" :src="`${detail.product.img2}`">
 
    </v-carousel-item>
            <v-carousel-item v-if="detail != null" :src="`${detail.product.img3}`">
 
    </v-carousel-item>
  </v-carousel>

      <span class="ma-3"  v-for="(color, index) in colorList" v-bind:key="'c' + index">
        <span>
          <button @click="changeColor(index)">
            <img v-bind:src="`${color.color_img}`" width="30px" height="30px" /></button
        ></span>
      </span>

      <p  v-if="detail != null" class="ml-2 mt-3">{{ detail.product.bname }}</p>
      <h5 v-if="detail != null" class="ml-2">{{ detail.product.pname }}</h5>
      <p v-if="detail != null" class="ml-2 mt-1">₩ {{ detail.product.pprice }}</p>
      <p class="ml-2">품번 {{ pstockid }}</p>
      <p  class="ml-2">사이즈</p>
      <span align="center" class="ml-2" v-for="(size, index) in detail.sizes" v-bind:key="'s' + index">
        <span v-if="size_idx === index"
          ><v-btn depressed disabled @click="changeSize(index)"> {{ size.scode }} </v-btn></span
        >
        <span v-else
          ><v-btn depressed @click="changeSize(index)"> {{ size.scode }} </v-btn></span
        >
      </span>
      <div class="mt-2 ml-2">
        <p>수량</p>
        <span>
          <button @click="minus(quantity)" class="mr-2">-</button>
          <input :value="quantity" size="1" maxlength="2" />
          <button @click="plus(quantity)" style="margin: 0px">+</button>
        </span>
      </div>
      <v-divider />
      <p v-if="detail != null">{{ detail.product.pnote }}</p>

      <v-divider />

      <img v-if="detail != null" v-bind:src="`${detail.colors[this.color_idx].img1}`" width="100%" class="mb-3" />
      <img v-if="detail != null" v-bind:src="`${detail.colors[this.color_idx].img2}`" width="100%" class="mb-3" />
      <img v-if="detail != null" v-bind:src="`${detail.colors[this.color_idx].img3}`" width="100%" class="mb-3" /> 

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
        <v-list-group class="nav-item mt-2">
          <template v-slot:activator><v-list-item-title class="">Q&A</v-list-item-title></template>
        </v-list-group>
      </v-list>
    </div>
    <v-divider />
    <div>
      함께 코디한 상품
      <v-container >
        <v-row>
          <v-col cols="3"> 

             <v-img :src="`${withitems[0].img1}`"  v-if="withItems != null"></v-img>

          </v-col>
          <v-col cols="8"> 

          </v-col >
          <v-col cols="1"> </v-col>
        </v-row>
        <v-row>
          <v-col>

          <div ml-2 style="font-weight:bold; font-size: 15px;"  v-if="withItems != null">{{withitems[0].bname}}</div> 

          </v-col>
        </v-row>
        <v-row>
          <v-col>

          <div ml-2  v-if="withItems != null">{{withitems[0].pprice}}</div>

          </v-col>
        </v-row>
      </v-container>
    </div> -->
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
      detail: null,
      color_idx: 0,
      size_idx: 0,
      pstockid: null,
      quantity: 1,
      withitems: [],

      withProduct: null,



    };
  },
  // 컴포넌트 메서드 정의
  methods: {
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
        .setCategory(this.detail.product.pcommonid + "_" + this.detail.colors[idx].ccode)
        .then((response) => {
          console.log("setCategory 실행");
          this.detail = response.data;
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
    async changeSize(idx) {
      console.log("changeSize 실행");
      this.size_idx = idx;
      await apiProduct
        .setCategory(this.detail.product.pcommonid + "_" + this.detail.colors[this.color_idx].ccode)
        .then((response) => {
          console.log("setCategory 실행");
          this.detail = response.data;
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

  
  async created() {
    console.log("create 실행1");
      await apiProduct
      .setCategory(this.$route.query.pcolorId)
      .then((response) => {
        console.log(response.data);
        this.detail = response.data;
        this.withitems = this.detail.withItems;
        this.withProduct = this.withitems[0].bname;
        console.log(this.withProduct);

        this.pstockid =
          this.detail.product.pcommonid +
          "_" +
          this.detail.colors[this.color_idx].ccode +
          "_" +
          this.detail.sizes[this.size_idx].scode;
      })
      .catch((error) => {
        console.log(error);
      });
    //장바구니에 담기 위한 데이터 불러오기
  },
  updated() {
    console.log("updated 실행");
    this.$emit("productForCart", this.pstockid, this.quantity);
  },
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped></style>
