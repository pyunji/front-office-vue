<!--컴포넌트 UI 정의-->
<template>
<v-container id="myPage" style="margin : 0 ; padding : 0px;">
  <div id="member_content">
    <span>
    사용자님 환영합니다.
    </span>
    <img v-bind:src="require(`@/assets/photos/photo1.jpg`)" width="80px" height="80px" />
  </div>
  <div id="line">
  </div>
  <div class="d-flex justify-content-center mt-2">
  <h3 class="me-2" @click="selectOrder">주문</h3>
  <h3 class="me-2" @click="selectBenefit">혜택</h3>
  <h3 class="me-2" @click="selectInfo">정보</h3>
  <h3  @click="selectActivity">활동</h3>
  </div>
  <order v-if="menuStatus === 1"/>
  <benefit v-if="menuStatus === 2"/>
  <info v-if="menuStatus === 3"/>
  <activity v-if="menuStatus === 4"/>


</v-container>

</template>

<style scoped>
/* .container {
    border: 1px solid green;
  }
  .row {
    border: 1px solid red;
  }
  .col {
    border: 1px solid blue;
  } */
</style>

<script>
import order from "@/components/myPage/order.vue"
import benefit from "@/components/myPage/benefit.vue"
import info from "@/components/myPage/info.vue"
import activity from "@/components/myPage/activity.vue"



export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name: "myPage",
  //추가하고 싶은 컴포넌트들 목록
  components: {
    order,
    benefit,
    info,
    activity,

  },
  //컴포넌트 데이터 정의
  data() {
    return {
      menuStatus: 1,
    }
  },
  //컴포넌트 메소드 정의
  methods: {
    selectOrder(){
      this.menuStatus = 1;
    },
    selectBenefit(){
      this.menuStatus = 2;

    },
    selectInfo(){
      this.menuStatus = 3;
      
    },
    selectActivity(){
      this.menuStatus = 4;
      
    },
  },
};
</script>

<!--컴포넌트 스타일 정의-->
<!--scoped를 생략하면 전역으로 사용-->
<style>

#myPage{
  padding: 0px;
  margin: 0px;
}
#member_content{
    padding: 0px;
  margin: 0px;
  text-align: center;
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 42px;
}
#line{
  background-color: #f1f1f1;
  height: 10px;
}

</style>