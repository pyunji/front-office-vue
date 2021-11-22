<template>
  <div>
    <v-col>
      <v-row rows="12">
      <event />
      </v-row>
      <v-row rows="12">
      <new />
      </v-row>
      <v-row rows="6">
      <best />
      </v-row>
    </v-col>
  </div>
  
</template>

<script>
import Event from "@/components/main/event";
import New from "@/components/main/new"
import Best from "@/components/main/best"

export default {
  name: "Home",

  components: {
    Event,
    New,
    Best
  },
};
</script>
