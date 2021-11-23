<!--컴포넌트 UI 정의-->
<template>
  <v-card>
    <v-toolbar color="transparent" flat>
      <v-spacer></v-spacer>
      <v-toolbar-title>| THE | HANDSOME |</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-cart-outline</v-icon>
      </v-btn>
    </v-toolbar>

    <v-slide-group class="mt-3">
      <v-slide-item v-for="n in list" :key="n" v-slot="{ active, toggle }">
        <v-btn
          class="mx-2"
          :input-value="active"
          active-class="black white--text"
          depressed
          rounded
          @click="toggle"
        >
          {{ n }}
        </v-btn>
      </v-slide-item>
    </v-slide-group>

    <v-container>
      <v-layout column>
        <v-flex>
          {{total}} 개
        </v-flex>
        <v-flex>
          <v-select
          :items="filters"
          label="신상품"
        ></v-select>
        </v-flex>
      </v-layout>
    </v-container>

    <router-link to="../product/productDetail">
    <div >
      <img src="@/assets/list_image/1.jpg" width="200" class="ml-2"/>
      <img src="@/assets/list_image/2.jpg" width="200" />
      <img src="@/assets/list_image/3.jpg" width="195" class="ml-2"/>
      <img src="@/assets/list_image/4.jpg" width="195" />
      <img src="@/assets/list_image/5.jpg" width="195" class="ml-2"/>
      <img src="@/assets/list_image/6.jpg" width="195" />
      <img src="@/assets/list_image/7.jpg" width="195" class="ml-2"/>
      <img src="@/assets/list_image/8.jpg" width="195" />
      </div>
    </router-link>
  </v-card>
</template>

<script>
export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name: "List",
  //추가하고 싶은 컴포넌트들 목록
  components: {},
  //컴포넌트 데이터 정의
  data: function () {
    return {
      list: ["전체", "아우터", "탑", "드레스", "팬츠", "스커트", "패션잡화"],
      total: 7806,
      filters: ['신상품', '판매순', '고가순', '저가순'],
      selected: "신상품",
    };
  },
  //컴포넌트 메소드 정의
  methods: {},
};
</script>

<!--컴포넌트 스타일 정의-->
<!--scoped를 생략하면 전역으로 사용-->
<style scoped></style>
