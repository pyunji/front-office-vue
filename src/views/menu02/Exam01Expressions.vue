<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      Exam01Expressions
    </div>
    <div class="card-body">
      <h5>상품정보</h5>
      <p>번호: {{no}}</p>
      <p>이름: {{name}}</p>
      <p>회사: {{company}}</p>
      <p>가격: {{price}}</p>
      <p>가격: {{getPrice()}}</p>
      <p>판매여부: {{sale?"판매":"품절"}}</p>
      <button class="btn btn-info btn-sm mt-2" @click="changeData">변경</button>
    </div>
  </div>
</template>

<script>
export default {
  // 컴포넌트의 대표이름(devtools에 나오는 이름)
  name:"Exam01Expressions",
  // 추가하고 싶은 컴포넌트를 등록
  components: {

  },
  // 컴포넌트에서 이용하는 데이터 정의
  data: function() {
    return {
      no: 1,
      name: "미니백",
      company: "구찌",
      price: 3950000,
      sale:true
    };
  },
  // 컴포넌트 메서드 정의
  methods: {
    getPrice() {
      return this.price;
    },
    changeData() {
      this.price += 1000;
      this.sale = !this.sale;
    }
  },
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>