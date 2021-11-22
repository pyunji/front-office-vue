<!-- 컴포넌트 UI 정의 -->
<template>
  <modal-dialog-template>
    <template v-slot:header>
      로그인
    </template>

    <template v-slot:body>
      <form>
        <div class="form-group">
          <label>Email address</label>
          <input type="email" class="form-control" aria-describedby="emailHelp" autocomplete="email">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label >Password</label>
          <input type="password" class="form-control" autocomplete="new-password">
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" >
          <label class="form-check-label" >Check me out</label>
        </div>
      </form>
    </template>

    <template v-slot:footer>
      <button class="btn btn-info btn-sm" @click="$emit('close')">로그인</button>
      <button class="btn btn-info btn-sm" @click="$emit('close')">취소</button>
    </template>
  </modal-dialog-template>
</template>

<script>
import ModalDialogTemplate from "@/components/menu02/ModalDialogTemplate.vue";
export default {
  // 컴포넌트의 대표이름(devtools에 나오는 이름)
  name:"DialogB",
  // 추가하고 싶은 컴포넌트를 등록
  components: {
    ModalDialogTemplate
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