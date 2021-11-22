<!-- 컴포넌트 UI 정의 -->
<template>
  <v-card outlined>
    <v-card-title>
      Exam04View - 이름이 있는 뷰
    </v-card-title>
    <v-card-text>
      <router-view class="mb-2"></router-view>
      <router-view name="rv1" class="mb-2"></router-view>
      <router-view name="rv2" class="mb-2"></router-view>

      <v-divider/>
      <sub-a-component class="mb-2"/>
      <sub-b-component class="mb-2"/>
      <sub-c-component class="mb-2"/>
    </v-card-text>
  </v-card>
</template>

<script>
import SubAComponent from "@/components/menu01/SubAComponent.vue";
import SubBComponent from "@/components/menu01/SubBComponent.vue";
import SubCComponent from "@/components/menu01/SubCComponent.vue";


export default {
  // 컴포넌트의 대표이름(devtools에 나오는 이름)
  name:"Exam04View",
  // 추가하고 싶은 컴포넌트를 등록
  components: {
    SubAComponent,
    SubBComponent,
    SubCComponent,
    
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