<!-- 컴포넌트 UI 정의 -->
<template>
  <v-card>
    <v-card-title>
      Exam07View
    </v-card-title>
    <v-card-text>
      <div>kind: {{ kind }}</div>
      <div>color: {{ color }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  // 컴포넌트의 대표이름(devtools에 나오는 이름)
  name:"Exam07View",
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
  // 프로퍼티 정의
  props: [
    "kind",
    "color"
  ]
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>