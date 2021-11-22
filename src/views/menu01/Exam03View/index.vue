<!-- 컴포넌트 UI 정의 -->
<template>
  <v-card outlined>
    <v-card-title>
      Exam03View
    </v-card-title>
    <v-card-text>
      <div>
        <v-card-subtitle>선언적 방식 컴포넌트 전환</v-card-subtitle>
        <v-btn to="/menu01/exam03view/subacomponent" color="amber" small class="mr-2">SubAComponent</v-btn>
        <v-btn to="/menu01/exam03view/subbcomponent" color="amber" small class="mr-2">SubBComponent</v-btn>

        <v-card-subtitle>프로그래밍 방식 컴포넌트 전환</v-card-subtitle>
        <v-btn @click="goUrl('a')" color="amber" small class="mr-2">SubAComponent</v-btn>
        <v-btn @click="goUrl('b')" color="amber" small class="mr-2">SubBComponent</v-btn>
      </div>

      <div class="mt-2">
        <router-view></router-view>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  // 컴포넌트의 대표이름(devtools에 나오는 이름)
  name:"",
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
    goUrl(kind) {
      this.$router.push(`/menu01/exam03view/sub${kind}component`).catch(()=>{});
    }
  },
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>