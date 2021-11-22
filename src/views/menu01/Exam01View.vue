<!-- 컴포넌트 UI 정의 -->
<template>
  <v-card outlined>
    <v-card-title>
      Exam01View
    </v-card-title>
    <v-card-text>
      <div class="subtitle-1">선언적 방식 화면 이동</div>
      <router-link to="/menu01/exam02view">
        <v-btn class="mr-2" color="primary" outlined>/menu01/exam02view</v-btn>
      </router-link>
      <router-link v-bind:to="`/menu01/exam02view`">
        <v-btn class="mr-2" color="primary" outlined>/menu01/exam02view</v-btn>
      </router-link>
      <router-link :to="{path:'/menu01/exam02view'}">
        <v-btn class="mr-2" color="primary" outlined>/menu01/exam02view</v-btn>
      </router-link>
      <router-link :to="{name:'menu01_exam02view'}">
        <v-btn class="" color="primary" outlined>/menu01/exam02view</v-btn>
      </router-link>
      
    </v-card-text>
  </v-card>
</template>

<script>

export default {
  // 컴포넌트의 대표이름(devtools에 나오는 이름)
  name:"Exam01View",
  // 추가하고 싶은 컴포넌트를 등록
  components: {
  },
  // 컴포넌트에서 이용하는 데이터 정의
  data: function() {
    return {
    };
  },
  // 컴포넌트 메서드 정의
  methods: {
    
  },
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>
</style>