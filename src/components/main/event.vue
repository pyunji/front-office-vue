<template>
  <v-carousel
    cycle
    show-arrows-on-hover
    hide-delimiter-background
    delimiter-icon="mdi-minus">
    <v-carousel-item 
      v-for="(event, i) in events" 
      :key="i"
      :src="event.eimg"
      @click="showEventDetail(event.eno)">
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import eventApi from "@/apis/member/event";

  export default {
    name: 'Event',

    data: () => ({
      events:[],
    }),
    methods:{
      showEventDetail(eno) {
        this.$router.push(`/event?eno=${eno}`);
    },
    },
    created() {
      eventApi.selectForMain()
        .then((response)=>{
          this.events = response.data;
        }).catch((error)=>{
          console.log(error);
        });
    }
  }
</script>