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
    <alert-dialog
    :message="alertDialogMessage"
    v-if="alertDialog"
    @close="alertDialog = false"/>
  </div>
</template>

<script>
import eventApi from "@/apis/member/event";
import AlertDialog from "@/components/dialog/AlertDialog.vue";

export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name:"EventDetail",
  //추가하고 싶은 컴포넌트들 목록
  components:{
    AlertDialog
  },
  //컴포넌트 데이터 정의
  data: function() {
    return {
      event:null,
      alertDialog: false,
      alertDialogMessage: ""
    };
  },
  //컴포넌트 메소드 정의
  methods:{
    handleLogin() {
      console.log("handleLogin()실행");
      this.alertDialogMessage = "로그인이 필요합니다";
      this.$router.push({ path: "/login" }).catch(() => {});
    },
    async getCoupon(eno) {
      this.alertDialog = true;
      if(this.event.estatus==0) {
        this.alertDialogMessage = "진행 예정 이벤트입니다";
      }else{
        await eventApi.getCoupon(eno)
          .then(response=>{
            let result = response.data;
            console.log(result);
            if(result==='fail') {
              this.alertDialogMessage = "쿠폰 발급 실패 : 선착순이 마감되었습니다";
            }else if(result=='fail_double') {
              this.alertDialogMessage = "쿠폰은 중복해서 받을 수 없습니다";
            }else {
              let count = this.event.ecount+1;
              this.alertDialogMessage = "쿠폰이 발급되었습니다! (" + this.event.elimitCount + "명 중 "+ count + "등)";
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