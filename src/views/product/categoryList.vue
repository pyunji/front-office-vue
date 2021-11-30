<template>
<v-card>
  안녕하세요
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
