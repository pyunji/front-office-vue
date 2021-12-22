<template >

  <div>
    <component  class="mt-6 mb-15  mr-4" v-bind:is="compName0"></component>
    <component  class="mt-6 mb-15 ml-4 mr-4" v-bind:is="compName1"></component>
    <component  class="mt-6 mb-15 ml-4 mr-4" v-bind:is="compName2"></component>

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
import displayApi from "@/apis/member/display";
export default {
  name: "Home",

  components: {
    Event,
    New,
    Best
  },
  data(){
    return {    
      menuStatus: 1,
      compName0: null,
      compName1: null,
      compName2: null,
    
      compStat0: 0,
      compStat1: 1,
      compStat2: 2,      
      test: null,
    }
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
    displayApi.getDisplayContext()
    .then((response) =>{
      this.test = response.data;
      console.log(this.test);
      console.log(this.test[0].index0);
      if(this.test[0].index0 == this.compStat0){
        this.compName0 = this.test[0].context0;
      }else if(this.test[0].index0 == this.compStat1){
        this.compName1 = this.test[0].context0;
      }else{
        this.compName2 = this.test[0].context0;
      }

      if(this.test[0].index1 == this.compStat0){
        this.compName0 = this.test[0].context1;
      }else if(this.test[0].index1 == this.compStat1){
        this.compName1 = this.test[0].context1;
      }else{
        this.compName2 = this.test[0].context1;
      }

      if(this.test[0].index2 == this.compStat0){
        this.compName0 = this.test[0].context2;
      }else if(this.test[0].index2 == this.compStat1){
        this.compName1 = this.test[0].context2;
      }else{
        this.compName2 = this.test[0].context2;
      }
    }).catch((error)=>{
      console.log(error);
    })
  }
};
</script>
