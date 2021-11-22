<!--컴포넌트 UI 정의-->
<template>
  <v-sheet
  >
    <v-slide-group>
      <v-slide-item
        v-for="n in list"
        :key="n"
        v-slot="{ active, toggle }"
      >
        <v-btn
          class="mx-2"
          :input-value="active"
          active-class="black white--text"
          depressed
          rounded
          @click="toggle"
        >
          {{n}}
        </v-btn>
      </v-slide-item>
    </v-slide-group>
    
    <v-container fluid>
      <v-row align="center">
        <v-col cols="6" class="d-flex" sm=6>
          {{total}} 개
        </v-col>
        <v-col cols="6" class="d-flex" sm=6>
          <v-select v-model="selected" :items="filter"></v-select>
        </v-col>
      </v-row>
    </v-container>

    <router-link to="/" >
      <img src="@/assets/list_image/1.jpg" width="195" >
      <img src="@/assets/list_image/2.jpg" width="195"/>
      <img src="@/assets/list_image/3.jpg" width="195"/>
      <img src="@/assets/list_image/4.jpg" width="195"/>
      <img src="@/assets/list_image/5.jpg" width="195"/>
      <img src="@/assets/list_image/6.jpg" width="195"/>
      <img src="@/assets/list_image/7.jpg" width="195"/>
      <img src="@/assets/list_image/8.jpg" width="195"/>
    </router-link>

  </v-sheet>
  
</template>

<script>

export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name:"List",
  //추가하고 싶은 컴포넌트들 목록
  components:{
  },
  //컴포넌트 데이터 정의
  data: function() {
    return {
      list:['전체','아우터','탑','드레스','팬츠','스커트','패션잡화'],
      total:7806,
      filter:['신상품','판매순','고가순','저가순','평점순'],
      selected:'신상품',
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