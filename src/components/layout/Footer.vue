<template>
  <div>
    <v-navigation-drawer app width="340" color="white" v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> HANDSOME </v-list-item-title>

          <v-list-item-subtitle> 카테고리 </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-group
          v-for="category in Categories"
          :key="category.cLarge"
          v-model="category.active"
          :prepend-icon="category.action"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="category.cLarge"></v-list-item-title>
            </v-list-item-content>
          </template>
        
          <v-list-group>
          <template v-slot:activator>
          <v-list-item v-for="child in category.items" :key="child.cMedium">
            <v-list-item-content>
              
              <v-list-item-title v-text="child.cMedium"></v-list-item-title>
              
            </v-list-item-content>
          </v-list-item>
          </template>
        </v-list-group>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
    <v-footer app>
      <v-bottom-navigation class="black" absolute dark>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-btn>
          <v-icon>mdi-home-outline</v-icon>
        </v-btn>
        <v-btn to="/product/productdetail" >
          <v-icon>mdi-heart-outline</v-icon>
        </v-btn>
        <v-btn>
          <v-icon>mdi-account-outline</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "Footer",

  data: () => ({
    drawer: false,
    Categories: [
      {
        action: "mdi-face-woman",
        items: [
          { items: [{ cSmall: "None" }], cMedium: "전체 보기" },
          {
            items: [
              { cSmall: "재킷" },
              { cSmall: "점퍼" },
              { cSmall: "가디건/베스트" },
              { cSmall: "재킷" },
              { cSmall: "트랜치 코트" },
              { cSmall: "코트" },
              { cSmall: "다운/패딩" },
            ],
            cMedium: "아우터",
          },
          { items: [], cMedium: "탑" },
          { items: [], cMedium: "드레스" },
          { items: [], cMedium: "팬츠" },
          { items: [], cMedium: "스커트" },
          { items: [], cMedium: "패션 잡화" },
        ],
        cLarge: "여성",
      },
      {
        action: "mdi-face-man",
        active: true,
        items: [
          { cMedium: "전체 보기" },
          { cMedium: "아우터" },
          { cMedium: "탑" },
          { cMedium: "팬츠" },
          { cMedium: "수트" },
          { cMedium: "패션 잡화" },
        ],
        cLarge: "남성",
      },
      {
        action: "mdi-baby-face-outline",
        items: [
          { cMedium: "전체 보기" },
          { cMedium: "의류" },
          { cMedium: "잡화" },
          { cMedium: "팬츠" },
          { cMedium: "수트" },
          { cMedium: "패션 잡화" },
        ],
        cLarge: "키즈",
      },
      {
        action: "mdi-emoticon-cool-outline",
        items: [
          { cMedium: "전체 보기" },
          { cMedium: "스킨 케어" },
          { cMedium: "바디/헤어 케어" },
          { cMedium: "향수" },
          { cMedium: "수트" },
          { cMedium: "패션 잡화" },
        ],
        cLarge: "뷰티",
      },
      {
        action: "mdi-home",
        items: [
          { cMedium: "전체 보기" },
          { cMedium: "홈" },
          { cMedium: "배스" },
          { cMedium: "키친" },
          { cMedium: "데스크" },
          { cMedium: "펫" },
        ],
        cLarge: "라이프스타일",
      },
    ],
  }),
};
</script>
