<template >
  <div style="background-color: #fdeeda;">
    <event />
    <new class="mt-6 ml-4 mr-0" />
    <best class="mt-6 mb-3 ml-4 mr-0" />
  </div>
  
</template>

<script>
import Event from "@/components/main/event";
import New from "@/components/main/new"
import Best from "@/components/main/best"
import main from "@/apis/product/main";

export default {
  name: "Home",

  components: {
    Event,
    New,
    Best
  },
  methods:{
    async getData() {
      const responseD1 = await main.getD1Names();
      this.$store.commit("homeStore/setD1Names",responseD1.data);

      const responseNew = await main.getNewItems();
      this.$store.commit("homeStore/setNewItems",responseNew.data);

      const responseBest = await main.getBestItems();
      this.$store.commit("homeStore/setBestItems",responseBest.data);
    }
  },
  created() {
    this.getData();
  }
};
</script>
