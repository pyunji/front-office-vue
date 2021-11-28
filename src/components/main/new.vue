<template>
  <v-card tile elevation="0">
    <v-row>
      <v-col cols="2" class="p-0">
        <!-- 카테고리 보여주기 시작 -->
        <v-navigation-drawer permanent class="mx-auto">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title style="font-size: 0.7em; font-weight: bold"
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
                <v-list-item-title style="font-size: 0.2em">{{d1name}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

          </v-list>
        </v-navigation-drawer>
        <!--// 카테고리 보여주기 끝 -->
      </v-col>
      <v-col class="p-1" cols="10" align-self="center">
        <v-slide-group>
          <v-slide-item class="mr-3" v-for="(item, i) in items" :key="i">
            <v-card height="200" width="100" tile>
              <v-img :src="item.img1"/>
              <div class="text-center" style="font-size: 0.8em">{{ item.bname }}</div>
              <div class="text-center" style="font-size: 0.8em">{{ item.pprice }}</div>
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

  methods: {
    changeItems(d1name) {
      main.getNewItems(d1name).then(response => {
      this.items = response.data;
    });
    }
  },

  beforeCreate() {
    main.getD1Names()
    .then(response => {
      this.d1names = response.data;
    });
    main.getNewItems().then(response => {
      this.items = response.data;
    });
  
  },


};
</script>
