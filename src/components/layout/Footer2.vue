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

      <v-list v-for="value in Categories" :key="value">>
        <v-list-item-group v-for="value2 in value" :key="value2">
          <template v-slot:activator>
            
            <v-list-item-title v-for="(value3, name ) in value2" :key="name">{{name}}</v-list-item-title>
          </template>

          <v-list-group  no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>아우터</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryWoman1" :key="i" link to="/list/list">
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>탑</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryWoman2" :key="i" link to="/list/list">
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>드레스</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryWoman3" :key="i" link to="/list/list">
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>팬츠</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryWoman4" :key="i" link to="/list/list">
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>스커트</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryWoman5" :key="i" link to="/list/list">
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon  ></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>패션잡화</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryWoman6" :key="i" link to="/list/list">
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon   ></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>

        </v-list-group>

        <v-list-group >
          <template v-slot:activator>
            <v-list-item-title>남성</v-list-item-title>
          </template>

          <v-list-group  no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>아우터</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryMan1" :key="i" link to="/list/list">
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon   ></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>탑</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryMan2" :key="i" link to="/list/list">
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon   ></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>팬츠</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryMan3" :key="i" link to="/list/list">
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon   ></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>수트</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryMan4" :key="i" link to="/list/list">
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon   ></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>패션잡화</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryMan5" :key="i" link to="/list/list">
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon   ></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
        </v-list-group>
        <v-list-group >
          <template v-slot:activator>
            <v-list-item-title>키즈</v-list-item-title>
          </template>

          <v-list-group  no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>전체보기</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryKid1" :key="i" link to="/list/list">
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon   ></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>의류</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryKid1" :key="i" link to="/list/list">
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon   ></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>잡화</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryKid2" :key="i" link to="/list/list">
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon   ></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
        </v-list-group>
        <v-list-group >
          <template v-slot:activator>
            <v-list-item-title>뷰티</v-list-item-title>
          </template>

          <v-list-group  no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>스킨케어</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryBeauty1" :key="i" link to="/list/list">
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon   ></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>바디/헤어케어</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryBeauty2" :key="i" link to="/list/list">
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon   ></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>향수</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryBeauty3" :key="i" link to="/list/list">
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon   ></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
        </v-list-group>
        <v-list-group >
          <template v-slot:activator>
            <v-list-item-title>라이프스타일</v-list-item-title>
          </template>

          <v-list-group  no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>전체보기</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryLife1" :key="i" link to="/list/list">
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon   ></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>홈</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryLife1" :key="i" link to="/list/list">
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon   ></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>배스</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryLife2" :key="i" link to="/list/list">
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon   ></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>키친</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryLife3" :key="i" link to="/list/list">
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon   ></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>데스크</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryLife4" :key="i" link to="/list/list">
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon   ></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>펫</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryLife5" :key="i" link to="/list/list">
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon   ></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-footer app>
      <v-bottom-navigation class="black" absolute dark>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-btn to="/">
          <v-icon>mdi-home-outline</v-icon>
        </v-btn>
        <v-btn to="/product/categoryList">
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
import main from "@/apis/product/main";
export default {
  name: "Footer",

  data: () => ({
    drawer: false,
    Categories: null,
    
  }),

  methods: {},
  beforeCreate() {
    main.getCategories().then((response) => {
      this.Categories = response.data;
      //console.log(this.Categories);
      //this.lcategory = Object.keys(this.Categories);
      //this.mcategory = Object.keys(this.lcategory);
    });
  },
};
</script>
