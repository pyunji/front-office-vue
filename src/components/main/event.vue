<template>
  <v-carousel
    cycle
    show-arrows-on-hover
    hide-delimiter-background
    delimiter-icon="mdi-minus">
    <v-carousel-item 
      v-for="(item, i) in items" 
      :key="i"
      :src="item.src">
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    name: 'Event',

    data: () => ({
    items: [
        {
          src: require('@/assets/photos/event.png')
        },
        {
          src: require('@/assets/photos/event1.png')
        },
        {
          src: require('@/assets/photos/event2.png')
        },
      ]
    }),
  }
</script>