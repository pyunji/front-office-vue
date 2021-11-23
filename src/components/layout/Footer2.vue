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
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-group :value="true">
          <template v-slot:activator>
            <v-list-item-title>여성</v-list-item-title>
          </template>

          <v-list-group :value="true" no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>아우터</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryWoman1" :key="i" link to="/list/list">
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>탑</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryWoman2" :key="i" link>
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>드레스</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryWoman3" :key="i" link>
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>팬츠</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryWoman4" :key="i" link>
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>스커트</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryWoman5" :key="i" link>
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>패션잡화</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryWoman6" :key="i" link>
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
          <v-list-group no-action sub-group>
            <v-list-item v-for="([title], i) in category2" :key="i" link>
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
        </v-list-group>
        <v-list-group :value="true">
          <template v-slot:activator>
            <v-list-item-title>남성</v-list-item-title>
          </template>

          <v-list-group :value="true" no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>아우터</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryMan1" :key="i" link>
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>탑</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryMan2" :key="i" link>
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>팬츠</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryMan3" :key="i" link>
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>수트</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryMan4" :key="i" link>
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>패션잡화</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryMan5" :key="i" link>
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
        </v-list-group>
        <v-list-group :value="true">
          <template v-slot:activator>
            <v-list-item-title>키즈</v-list-item-title>
          </template>

          <v-list-group :value="true" no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>전체보기</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryKid1" :key="i" link>
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>의류</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryKid1" :key="i" link>
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>잡화</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryKid2" :key="i" link>
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
        </v-list-group>
        <v-list-group :value="true">
          <template v-slot:activator>
            <v-list-item-title>뷰티</v-list-item-title>
          </template>

          <v-list-group :value="true" no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>스킨케어</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryBeauty1" :key="i" link>
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>바디/헤어케어</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryBeauty2" :key="i" link>
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>향수</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryBeauty3" :key="i" link>
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
        </v-list-group>
        <v-list-group :value="true">
          <template v-slot:activator>
            <v-list-item-title>라이프스타일</v-list-item-title>
          </template>

          <v-list-group :value="true" no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>전체보기</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryLife1" :key="i" link>
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>홈</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryLife1" :key="i" link>
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>배스</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryLife2" :key="i" link>
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>키친</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryLife3" :key="i" link>
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>데스크</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryLife4" :key="i" link>
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>펫</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title], i) in categoryLife5" :key="i" link>
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
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
        <v-btn to="/product/productdetail">
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
    categoryWoman1: [["전체"],["재킷"],["점퍼"],["가디건/베스트"],["트렌치 코트"],["코트"],["다운/패딩"]],
    categoryWoman2: [["전체"], ["티셔츠"], ["블라우스"], ["셔츠"]],
    categoryWoman3: [["전체"], ["미니 드레스"], ["미디 드레스"], ["롱/맥시 드레스"]],
    categoryWoman4: [["전체"], ["캐주얼"], ["포멀"], ["데님"], ["쇼츠"]],
    categoryWoman5: [["전체"],["재킷"],["점퍼"],["가디건/베스트"],["트렌치 코트"],["코트"],["다운/패딩"]],
    categoryWoman6: [["전체"], ["미니 스커트"], ["팬슬 스커트"], ["플레어 스커트"], ["롱/맥시 스커트"]],
    categoryMan2: [["전체"], ["티셔츠"], ["셔츠"], ["니트"]],
    categoryman1: [["전체"],["재킷"],["점퍼"],["가디건/베스트"],["트렌치 코트"],["코트"],["다운/패딩"]],
    categoryMan3: [["전체"], ["루즈/테이퍼드"], ["슬림/스트레이트"], ["조거/트랙"],["데님"],["쇼츠"]],
    categoryMan4: [["전체"], ["드레스셔츠"], ["수트재킷"], ["수트팬츠"] ],
    categoryMan5: [["전체"], ["가방"], ["슈즈"], ["모자"],["타이"],["양말"] ],
    categoryKid1: [["전체"], ["상의"], ["하의"]],
    categoryKid2: [["전체"], ["슈즈"], ["스카프/머플러"], ["기타 소품"] ],
    categoryBeauty1: [["전체"], ["토너/에멀전/크림"], ["세런/앰플/오일/밤"], ["클렌징/스크럽/마스크"], ["기타 스킨케어"]],
    categoryBeauty2: [["전체"], ["핸드,바디로션/크림/오일"], ["핸드,바디워시/스크럽"], ["샴푸/컨디셔너"], ["기타 바디/헤어케어"]],
    categoryBeauty3: [["전체"], ["향수"]],
    categoryLife1: [["전체"], ["패브릭"], ["프래그런스"], ["기타소품"]],
    categoryLife2: [["전체"], ["기타소품"]],
    categoryLife3: [["전체"], ["그릇"], ["보드/트레이"], ["커트러리"],["커피/티"],["패브릭/냅킨"],["기타소품"]],
    categoryLife4: [["전체"], ["문구"], ["책"], ["기타소품"]],
    categoryLife5: [["전체"], ["패션"], ["기타소품"]],
    
  }),
};
</script>
