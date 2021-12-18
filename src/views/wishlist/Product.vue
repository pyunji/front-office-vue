<!--컴포넌트 UI 정의-->
<template>
  <div>
    <section>
      <div class="container mt-2">
        <div class="row row-cols-md-3 row-cols-xl-4 justify-content-center">
          <div v-for="(item, i) in wishItems" :key="i" class="mb-4">
            <v-card class="h-100 mx-auto" width="180" @click="showDetail(item.pcolorid)">
              <!-- Product image-->
              <div class="text-center">
                <div class="mb-1" >
                  <div class="wish-icon-div">
                      <v-btn icon @click="gohome()">
                        <v-icon color="red">mdi-heart</v-icon>
                      </v-btn>
                  </div>
                      <img :src="`${item.img1}`" width="100%"/>
                </div>

                <!-- Product details-->
                <v-card-text class="card-body p-2">
                  <div class="text-center">
                    <!-- 브랜드 명-->
                    <div class="fw-bolder mb-1 brand_name" style="font-weight: bold">{{item.bname}}</div>
                    <!-- 상품명-->
                    <div class="fw-bolder mb-1 name">{{item.pname}}</div>
                    <!-- 가격-->
                    <div class="fw-bolder mb-1 price">
                      <span>₩{{item.pprice}}</span>
                    </div>
                  </div>
                </v-card-text>
              </div>
            </v-card>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import wishlist from "@/apis/member/wishlist";

export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name:"Product",
  //추가하고 싶은 컴포넌트들 목록
  components:{
  },
  //컴포넌트 데이터 정의
  data: function() {
    return {
      wishItems:[],
    };
  },
  //컴포넌트 메소드 정의
  methods:{
    gohome() {
      this.$router.push("/");
    },
    showDetail(pcolorid) {
      this.$router.push(`/product/productDetail?pcolorId=${pcolorid}`);
    },
  },
  beforeCreate() {
    wishlist.wishItems()
      .then((response)=>{
        console.log(response.data)
        this.wishItems = response.data;
      });
  }
}
</script>

<!--컴포넌트 스타일 정의-->
<!--scoped를 생략하면 전역으로 사용-->
<style scoped>
    .wish-icon-div {
      position: absolute;
      z-index: 2;
      color: whitesmoke;
      font-size: 20px;
      text-align: right;
      cursor: pointer;
      border-radius: 10rem;
      background-color: transparent;
      border: transparent;
      width: 99%;
      padding-top: 4px;
      padding-right: 4px;
  }

  .wish-icon-div :hover {
      color: red;
  }
</style>