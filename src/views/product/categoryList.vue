<template>
  <v-card>

    <div> {{$route.params}} </div>
    <div> {{$route.params.d1name}} </div>
    <div> {{$route.params.d2name}} </div>
    <div> {{$route.params.d3name}} </div>
    <v-divider /><v-divider /><v-divider />
   
  </v-card>
</template>

<script>
import main from "@/apis/product/main";
export default {
  name: "Footer",

  data: () => ({
    drawer: false,
    Categories: null,
    categoryWoman1: [
      ["전체"],
      ["재킷"],
      ["점퍼"],
      ["가디건/베스트"],
      ["트렌치 코트"],
      ["코트"],
      ["다운/패딩"],
    ],
    lcategory: [],
    mcategory: [],
  }),

  methods: {},
  beforeCreate() {
    main.getCategories().then((response) => {
      this.Categories = response.data;
      console.log(this.Categories);
      this.lcategory = Object.keys(this.Categories);
      this.mcategory = Object.keys(this.lcategory);
    });
  },
};
</script>
