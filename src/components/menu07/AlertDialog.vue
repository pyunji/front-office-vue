<!-- 컴포넌트 UI 정의 -->
<template>
  <modal-dialog-template>
    <template v-slot:header> 
      알림
    </template>

    <template v-slot:body>
      <div v-if="loading" class="mt-3">
        <div class="spinner-border text-dark" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div> 
      <div v-if="!loading">{{message}}</div>
    </template>

    <template v-slot:footer> 
      <button class="btn btn-info btn-sm" @click="$emit('close')">닫기</button>
    </template>
  </modal-dialog-template>
</template>

<script>
import ModalDialogTemplate from "@/components/menu02/ModalDialogTemplate.vue";

export default {
  // 컴포넌트의 대표이름(devtools에 나오는 이름)
  name:"AlertDialog",
  // 추가하고 싶은 컴포넌트를 등록
  components: {
    ModalDialogTemplate,
  },
  // 컴포넌트에서 이용하는 데이터 정의
  data: function() {
    return {
      // ModalDialogTemplate
    };
  },
  // 컴포넌트 메서드 정의
  methods: {
    
  },
  props: [ "message", "loading" ]
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>