<!--컴포넌트 UI 정의-->
<template>
  <div>
    <div v-for="(event,index) in events" :key="index">
      <v-card v-if="event.estatus!==2" class="mt-3" elevation="3" outlined shaped @click="showEventDetail(event.eno)">
        <div>
          <v-img class="mb-2" height="200" :src="event.ethumbnail"></v-img>
          <v-card-title class="ml-2 pa-0">{{event.etitle}}</v-card-title>
          <v-card-text>
            <div>{{event.eissueDate}} ~ {{event.eexpireDate}}</div>
          </v-card-text>
        </div>
      </v-card>
      <v-card v-else class="mt-3" elevation="3" outlined shaped disabled @click="showAlert()">
        <div>
          <v-img class="mb-2" height="200" :src="event.ethumbnail"></v-img>
          <v-card-title class="ml-2 pa-0">{{event.etitle}}</v-card-title>
          <v-card-text>
            <div>{{event.eissueDate}} ~ {{event.eexpireDate}}</div>
          </v-card-text>
        </div>
      </v-card>
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
  name:"Event",
  //추가하고 싶은 컴포넌트들 목록
  components:{
  },
  //컴포넌트 데이터 정의
  data: function() {
    return {
      events:[],
      alertDialog: false,
      alertDialogMessage: ""
    };
  },
  //컴포넌트 메소드 정의
  methods:{
    showEventDetail(eno) {
      this.$router.push(`/event?eno=${eno}`);
    },
    showAlert(){
      console.log("종료");
      this.alertDialog = true;
      this.alertDialogMessage = "종료된 이벤트 입니다";
    }
  },
  async created() {
    await eventApi.selectAllEvent()
      .then(response=>{
        this.events = response.data;
        console.log(response.data);
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