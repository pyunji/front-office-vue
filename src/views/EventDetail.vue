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