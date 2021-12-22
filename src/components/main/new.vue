<template>
  <v-card tile elevation="0" style="background-color: #f7f1e9;">
    <v-row>
      <v-col cols="2" class="p-0">
        <!-- 카테고리 보여주기 시작 -->
        <v-navigation-drawer permanent class="mx-auto" style="background-color: #f7f1e9;">
          <v-list-item class="p-0">
            <v-list-item-content>
              <v-list-item-title class="text-center" style="font-size: 0.8em; font-weight: bold"
                >신상품</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-divider class="m-0"></v-divider>

          <v-list dense nav>

            <v-list-item  
            v-for="d1name in d1names"
            :key="d1name"
            @click="changeItems(d1name)"
            class="m-0 p-0" link>
              <v-list-item-content> 
                <v-list-item-title class="font-weight-bold" style="font-size: 0.2em">{{d1name}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

          </v-list>
        </v-navigation-drawer>
        <!--// 카테고리 보여주기 끝 -->
      </v-col>
      <v-col class="p-1" cols="10" align-self="center">
        <v-slide-group>
          <v-slide-item class="mr-3" v-for="(item, i) in items" :key="i">
            <v-card height="200" width="100" tile @click="showDetail(item.pcolorid)" style="background-color: lightgray;">
              <v-img :src="item.img1"/>
              <div>
                <div class="text-center font-weight-bold" style="font-size: 0.75em">{{ item.bname }}</div>
                <div class="text-center" style="font-size: 0.75em">{{ item.pprice | comma }}</div>
              </div>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import main from "@/apis/product/main";

export default {
  name: "New",

  data: () => ({

    items: null,
    d1names: null,
  }),
  filters: {
    comma(val) {
      return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  methods: {
    showDetail(pcolorId) {
      this.$router.push({
        name: "productdetail",
        params: {
          initPcolorid: pcolorId
        }
      });
    },
    async changeItems(d1name) {
      await main.getNewItems(d1name)
        .then(response=>{
          this.$store.commit('homeStore/setNewItems',response.data);
        })
        .catch(error=>{
          console.log(error);
        })
    },
  },

  beforeMount() {
    // main.getD1Names()
    // .then(response => {
    //   this.d1names = response.data;
    // });
    this.d1names = this.$store.getters["homeStore/getD1Names"];
    // main.getNewItems().then(response => {
    //   this.items = response.data;
    // });
    this.items = this.$store.getters["homeStore/getNewItems"];  
  },
  computed:{
    d1Names(){
      // store의 d1Names이 변경되었는지 감시
      return this.$store.getters["homeStore/getD1Names"];
    },
    newItems(){
      // store의 newItems 변경되었는지 감시
      return this.$store.getters["homeStore/getNewItems"];
    },
  },
  // computed 메서드와 watch 메서드의 이름이 일치하면 store의 데이터를 감시할 수 있다.
  watch:{
    // computed의 메서드와 watch의 메서드 명이 일치해야한다.
    d1Names(to,from){
      this.d1names = to;
    },
    newItems(to,from){
      this.items = to;
    },
  }
};
</script>
