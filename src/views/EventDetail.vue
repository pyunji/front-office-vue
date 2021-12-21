<!--컴포넌트 UI 정의-->
<template>
  <div>
    <div class="ma-3" style="font-weight: bold; font-size:18px;">
      {{event.etitle}}
    </div>
    <div class="ma-3" style="font-size:16px;">
      {{event.eissueDate}} ~ {{event.eexpireDate}}
    </div>
    <div class="text-center">
      <div class="mb-3" >
        <img :src="`${event.eimg}`" width="100%" />
      </div>
    </div>
    <div class="ma-3" style="font-size:16px;">
      {{event.econtent}}
    </div>
    <div class="text-center">
      <div class="mb-3" >
        <button v-if="$store.getters['userStore/getUserId'] === ''"
                @click="handleLogin()">쿠폰 발급</button>
        <button v-else @click="getCoupon(event.eno)">쿠폰 발급</button>
      </div>
    </div>
    <div class="text-center">
      <div class="mb-3" >
        <img src="../assets/photos/eventDetail.png" width="100%" />
      </div>
    </div>
  </div>
</template>

<script>
import eventApi from "@/apis/member/event";

export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name:"EventDetail",
  //추가하고 싶은 컴포넌트들 목록
  components:{
  },
  //컴포넌트 데이터 정의
  data: function() {
    return {
      event:null,
    };
  },
  //컴포넌트 메소드 정의
  methods:{
    handleLogin() {
      console.log("handleLogin()실행");
      alert("로그인이 필요합니다");
      this.$router.push({ path: "/login" }).catch(() => {});
    },
    async getCoupon(eno) {
      if(this.event.estatus==0) {
        alert("진행 예정 이벤트 입니다.");
      }else{
        await eventApi.getCoupon(eno)
          .then(response=>{
            let result = response.data;
            console.log(result);
            if(result==='fail') {
              alert("쿠폰 발급 실패 : 선착순이 마감되었습니다");
            }else if(result=='fail_double') {
              alert("쿠폰은 중복해서 받을 수 없습니다.");
            }else {
              alert("쿠폰이 발급되었습니다!");
            }
          }).catch((error)=>{
            console.log(error);
          });
      }
    }
  },
  created() {
    eventApi.selectEvent(this.$route.query.eno)
      .then((response)=>{
        this.event = response.data;
      }).catch((error)=>{
        console.log(error);
      });
  }
}
</script>

<!--컴포넌트 스타일 정의-->
<!--scoped를 생략하면 전역으로 사용-->
<style scoped>

</style>