<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      Exam02Watch
    </div>
    <div class="card-body">
      <div class="form-group row">
          <label class="col-sm-2 col-form-label">UserId</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="userId">
          </div>
      </div>
      <hr/>
      <form>      
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="product.name">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Company</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="product.company">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Price</label>
          <div class="col-sm-10">
            <input type="number" :class="`form-control ${bgColor}`" v-model.number="product.price">
          </div>
        </div>
      </form> 
      <hr/>
      <button @click="handleButton" class="btn btn-info btn-sm">product 객체 변경</button>    
    </div>
  </div>
</template>

<script>
export default {
  // 컴포넌트의 대표이름(devtools에 나오는 이름)
  name:"Exam02Watch",
  // 추가하고 싶은 컴포넌트를 등록
  components: {

  },
  // 컴포넌트에서 이용하는 데이터 정의
  data: function() {
    return {
      userId: "user1",
      product: {
        name: "정장",
        company: "톰브라운",
        price: 2530000
      },
      bgColor: ""
    };
  },
  // 컴포넌트 메서드 정의
  methods: {
    handleButton() {
      this.product = {
        name: "정장",
        company: "구찌",
        price: 2530000
      }
    }
  },

  watch: {
    userId(newValue, oldValue) {
      console.log("newValue: ", newValue);
      console.log("oldValue: ", oldValue);
      console.log("this.userId: ", this.userId);
    },
    // product(newValue, oldValue) {
    //   console.log("newValue: ", newValue);
    //   console.log("oldValue: ", oldValue);
    //   console.log("this.userId: ", this.userId);
    // }, // 객체의 값이 변하는 것이지 객체 자체가 변하는 것이 아니기 때문에 찍히지 않음
    product: {
      deep: true,
      handler(newValue, oldValue) {
        console.log("newValue: ", newValue);
        console.log("oldValue: ", oldValue);        
      } // 출력은 되는데 new와 old가 똑같은 product를 참조함
    },
    "product.name"(newValue, oldValue) {
      console.log("newValue: ", newValue);
      console.log("oldValue: ", oldValue);   
      console.log("this.product.name: ", this.product.name);
    }, // product에서 oldValue를 얻을 수 있는 유일한? 방법
    "product.price"(newValue, oldValue) {
      if(newValue < 0) {
        this.bgColor = "bg-danger";
      } else if(newValue>=0 && newValue<=100000) {
        this.bgColor = "bg-success";
      } else {
        this.bgColor = "bg-primary";
      }
    }
  }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>