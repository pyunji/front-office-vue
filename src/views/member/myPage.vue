<!--컴포넌트 UI 정의-->
<template>
  
  <div>
    <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">주문</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">혜택</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">정보</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">활동</a>
  </li>
</ul>
    <v-card class="mt-2 mb-8" outlined height="600">
      <v-card-text>
        <btn style="float: right;">주문 조회</btn>
        <v-container>
          
          <v-row>
            <v-col cols="12" align="center">
                        <v-row>
            <v-col cols="4">
              
                <v-img class="mr-2" :src="require(`@/assets/photos/photo1.jpg`)" width="100" height="100"/>
              
            </v-col>
            <v-col cols="6">
              <v-card
                class="pa-2"
                outlined
                tile
              >
                <div>pname</div>
                <div>조건</div>
                <div>수량</div>
                
              </v-card>
            </v-col>
            <v-col cols="2">
            </v-col>
          </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped>
/* .container {
    border: 1px solid green;
  }
  .row {
    border: 1px solid red;
  }
  .col {
    border: 1px solid blue;
  } */
</style>

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
