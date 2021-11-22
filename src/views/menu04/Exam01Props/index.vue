<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      Exam01Props
    </div>
    <div class="card-body">
      <child-a :prop1="data1" 
               :prop2="data2"
               :product-no="pno"
               :product-kind="pkind"
               :product-price="pprice"/> 
               <!--:productPrice="1000" -->
               <!-- 자바 스크립트 코드로 해석하고, 백틱이 있어야 문자열로 인식되니까 지금은 숫자로 인식된다.-->

      <hr/>
      <child-b :product="product" v-bind="product"/>
      <hr/>
      <child-c propD="string-data"
               :propA="3"
               :propB="5"
               :propC="7"
               :propE="9"
               :propF="{message: 'hello, vue'}"
               :propG="['red', 'green', 'blue']"
               :propI="5"
               />
    </div>
  </div>
</template>

<script>
import ChildA from "./ChildA.vue";
import ChildB from "./ChildB.vue";
import ChildC from "./ChildC.vue";

export default {
  // 컴포넌트의 대표이름(devtools에 나오는 이름)
  name:"Exam01Props",
  // 추가하고 싶은 컴포넌트를 등록
  components: {
    ChildA,
    ChildB,
    ChildC,
  },
  // 컴포넌트에서 이용하는 데이터 정의
  data: function() {
    return {
      data1:"value1",
      data2:"value2",
      pno:"1",
      pkind:"bag",
      pprice: 2000,
      product: {
        no: 2,
        kind: "정장",
      }
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