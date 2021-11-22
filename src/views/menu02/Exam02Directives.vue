<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      Exam02Directives
    </div>
    <div class="card-body">
      <img class="mr-2" :src="require(`@/assets/photos/photo1.jpg`)" width="300" height="200"/>
      <img v-bind:src="require(`@/assets/photos/${photoFileName}`)" width="300" height="200"/>
      <!-- 이미지 소스에 백틱 사용시 아래와 같이 사용하면 안됨 -->
      <!-- <img v-bind:src="`@/assets/photos/${photoFileName}`" width="300"/> -->
    </div>
    <hr/>

    <!-- false일 경우 돔에서 아예 사라져버린다 -->
    <span v-if="sale">
      span1
    </span>
    <!-- false일 경우 display:none이 된다. -->
    <span v-show="sale">
      span2
    </span>
    <p>정보: {{info}}</p>
    <p>정보: <span v-html="info"></span></p>
    <hr/>
    <button class="btn btn-info btn-sm" @click="changeData">변경</button>
  </div>
</template>

<script>
export default {
  // 컴포넌트의 대표이름(devtools에 나오는 이름)
  name: "Exam02Directives",
  // 추가하고 싶은 컴포넌트를 등록
  components: {

  },
  // 컴포넌트에서 이용하는 데이터 정의
  data: function() {
    return {
      photoFileName: "photo2.jpg",
      sale: true,
      info: `<div style="background-color: #eeeeee">스타일 적용 확인</div>`
    };
  },
  // 컴포넌트 메서드 정의
  methods: {
    changeData() {
      if(this.photoFileName === "photo2.jpg") {
        this.photoFileName = "photo3.jpg";
      } else {
        this.photoFileName = "photo2.jpg";
      }
      this.sale = !this.sale;
    }
  },
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>