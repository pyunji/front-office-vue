<!--컴포넌트 UI 정의-->
<template>
  <v-carousel
    cycle
    show-arrows-on-hover
    hide-delimiter-background
    delimiter-icon="mdi-minus"
    vertical
    height=570
    vertical-delimiters>
    <router-link to="../product/productDetail">
    <v-carousel-item 
      v-for="(item, i) in items" 
      :key="i"
      :src="item.src">
    </v-carousel-item>
    </router-link>
  </v-carousel>
</template>

<script>
export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name:"New",
  //추가하고 싶은 컴포넌트들 목록
  components:{
  },
  //컴포넌트 데이터 정의
  data: () => ({
    items: [
        {
          src: require('@/assets/photos/new/1.png')
        },
        {
          src: require('@/assets/photos/new/2.png')
        },
        {
          src: require('@/assets/photos/new/3.png')
        },
        {
          src: require('@/assets/photos/new/4.png')
        },
        {
          src: require('@/assets/photos/new/5.png')
        },
      ]
    }),
  //컴포넌트 메소드 정의
  methods:{
  }
}
</script>

<!--컴포넌트 스타일 정의-->
<!--scoped를 생략하면 전역으로 사용-->
<style scoped>

</style>