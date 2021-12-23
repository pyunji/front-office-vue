<template>
  <v-app>
    <wish-bar />

    <main-footer style="padding-bottom:60px"/>
  </v-app>
</template>

<script>
import WishBar from "@/components/layout/WishBar";
import MainFooter from "@/components/layout/Footer"
export default {
  name: "wishListIndex",
  components: {
    WishBar: WishBar,
    MainFooter: MainFooter,
  },
  data() {
    return {
      drawer: false,
    }
  },
  methods: {
  },
  created() {
    this.$store.dispatch("userStore/loadAuth");
  },
};
</script>
<style>
.title {
  color: red;
}
</style>
