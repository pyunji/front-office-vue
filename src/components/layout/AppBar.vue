<template>
  <v-card>
    <v-toolbar color="transparent" flat>
      <v-spacer></v-spacer>
      <v-toolbar-title>| THE | HANDSOME |</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-cart-outline</v-icon>
      </v-btn>
      <template v-slot:extension>
        <v-tabs v-model="tab" align-with-title>
          <v-tabs-slider color="primary"></v-tabs-slider>

          <v-tab v-for="item in items" :key="item.tab">
            <router-link :to="item.path">
            {{ item.tab }}
            </router-link>
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item.tab">
        <v-card flat>
          <!-- <v-card-text v-text="text"></v-card-text> -->
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  name: "AppBar",
  data() {
    return {
      tab: null,
      items: [
        {tab: '홈', path: '/'},
        {tab: '신상품', path: '/main-new'},
        {tab: '베스트', path: '/main-best'},
      ],
    };
  },
};
</script>
