<template>
  <v-app>
    <event-bar/>

      <v-main>
        <v-container class="pa-0" fluid >
          <router-view />
        </v-container>
      </v-main>

    <main-footer style="padding-bottom:45px"/>
  </v-app>
</template>

<script>
import EventBar from "@/components/layout/EventBar";
import MainFooter from "@/components/layout/Footer"
export default {
  name: "EventIndex",
  components: {
    EventBar: EventBar,
    MainFooter: MainFooter,
  },
  data() {
    return {
    }
  },
  methods: {
  },
};
</script>
<style>
</style>
