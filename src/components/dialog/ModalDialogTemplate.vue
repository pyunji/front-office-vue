<!-- 컴포넌트 UI 정의 -->
<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              제목
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              내용
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <b-button variant="primary" class="mt-2" @click="$emit('close')">닫기</b-button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  // 컴포넌트의 대표이름(devtools에 나오는 이름)
  name: "ModalDialogTemplate",
  // 추가하고 싶은 컴포넌트를 등록
  components: {},
  // 컴포넌트에서 이용하는 데이터 정의
  data: function() {
    return {};
  },
  // 컴포넌트 메서드 정의
  methods: {
  },
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 280px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
