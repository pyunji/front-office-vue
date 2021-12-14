<!--컴포넌트 UI 정의-->
<template>
  <div>
    <div class="card-header" style="text-align:center; font-weight: bold; font-size:18px">
      비밀번호 재확인
    </div>
    <div class="card-body mt-4">
      <div class="text-center mt-4">
        <div class="fw-bolder mb-1">
          고객님의 정보보호를 위하여 비밀번호를 다시 한 번 확인합니다.
        </div>
      </div>
      <div class="mt-3">
        <input type="text" class="form-control" id="userPW" v-model="password"/>
      </div>
      <v-row>
        <v-col>
          <v-btn-toggle v-model="text" tile color="deep-purple accent-3" group>
            <v-btn @click="goBack()">
              취소
            </v-btn>
            <v-btn @click="goForm()">
              확인
            </v-btn>
          </v-btn-toggle>
        </v-col>
      </v-row>
    </div>
    <alert-dialog
      :message="alertDialogMessage"
      :loading="loading"
      v-if="alertDialog"
      @close="alertDialog = false"/>
    <main-footer style="padding-bottom:60px"/>
  </div>
</template>

<script>
import auth from "@/apis/auth";
import MainFooter from "@/components/layout/Footer";
import AlertDialog from "@/components/dialog/AlertDialog.vue";

export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name:"CheckPW",
  //추가하고 싶은 컴포넌트들 목록
  components:{
      MainFooter:MainFooter,
      AlertDialog,
  },
  //컴포넌트 데이터 정의
  data: function() {
    return {
      password:"",
      loading:false,
      alertDialog: false,
      alertDialogMessage: ""
    };
  },
  //컴포넌트 메소드 정의
  methods:{
    goBack() {
      this.$router.go(-1);
    },
    async goForm(){
      try{
        this.loading = true;
        this.alertDialog = true;
        
        const response = await auth.checkPW(this.$store.getters["userStore/getUserId"],this.password);

        if(response.status === 403) {
          this.loading = false;
          this.alertDialogMessage = "인증 실패(패스워드가 틀림)";
        }else {
          this.loading = false;
          this.$router.push("/updateForm");
        }

      } catch(error) {
        try {
          if(error.response.status === 401 || error.response.status === 403) {
            this.loading = false;
            this.alertDialogMessage = "인증 실패(패스워드가 틀림)";
          }
        } catch (err){
          this.loading = false;
          this.alertDialogMessage = "인증 실패(네트워크 에러)";          
        } finally{
          this.loading = false;
        }
      }
    }
  }
}
</script>

<!--컴포넌트 스타일 정의-->
<!--scoped를 생략하면 전역으로 사용-->
<style scoped>

</style>