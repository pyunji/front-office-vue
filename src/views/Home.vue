<template>
  <div>
    <event />
    <new class="mt-6" />
    <best class="mt-6 mb-15" />
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
