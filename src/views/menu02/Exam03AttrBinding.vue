<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      Exam03AttrBinding
    </div>
    <div class="card-body">
      <p>
        <img v-bind:src="require(`@/assets/photos/${imgName1}`)" height="150" class="mr-2"/>
        <img v-bind:src="require(`@/assets/photos/${imgName2}`)" height="150" class="mr-2"/>
      </p>

      <div>
        <p :class="className">아름다운 풍경</p>
        <p :style="css">가을에는 vue를 공부하고 싶어요.</p>
      </div>
      <hr/>
      <button class="btn btn-info btn-sm" @click="changeData">변경</button>

    </div>
  </div>
</template>

<script>
export default {
  // 컴포넌트의 대표이름(devtools에 나오는 이름)
  name:"Exam03AttrBinding",
  // 추가하고 싶은 컴포넌트를 등록
  components: {

  },
  // 컴포넌트에서 이용하는 데이터 정의
  data: function() {
    return {
      imgName1: "photo1.jpg",
      imgName2: "photo2.jpg",
      className: "class1",
      css: "color:blue;",
      toggle: true
    };
  },
  // 컴포넌트 메서드 정의
  methods: {
    changeData(){
      this.toggle = !this.toggle;
      if(this.toggle) {
        this.imgName1 = "photo1.jpg";
        this.imgName2 = "photo2.jpg";
        this.className = "class1";
        this.css = "color: blue";
      } else {
        this.imgName1 = "photo3.jpg";
        this.imgName2 = "photo4.jpg";
        this.className = "class2";
        this.css = "color: red;";
      }

    }
  },
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>
  .class1 {
    color:red;
  }
  .class2 {
    color:green;
  }
</style>