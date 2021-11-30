<!--컴포넌트 UI 정의-->
<template>
  <div>
    <v-card class="mt-5 mb-8" outlined>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" align="center" justify="center">
              <v-card
                class="pa-2  "
                outlined
                tile height = "100"  
              ><div  style="  font-size: 25px; font-weight: bold ;">주문이 완료 되었습니다.</div>
              </v-card>
            </v-col>
          </v-row>
          
          <v-row>
            <v-col cols="12">
              <v-card
                class="pa-2 justify-center"
                outlined
                tile 
              ><div> 주문 번호</div>
              </v-card>
            </v-col>
          </v-row>
          <div v-for="i in 3" :key="i">
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
          </div>
          
        </v-container>
      </v-card-text>
      <v-btn width="100%" depressed  > 주문 배송 조회 </v-btn>
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
