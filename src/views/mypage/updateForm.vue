<!--컴포넌트 UI 정의-->
<template>
  <div>
    <div>
      <div class="card-header" style="text-align:center; font-weight: bold; font-size:18px">
        회원 정보 수정 및 탈퇴
      </div>
      <div class="card-body">
        <div class="form-group mt-3">
          <label class="col-form-label">이메일 *</label>
          <input type="text" class="form-control" v-model="user.memail"/>
        </div>
        <div class="form-group mt-3">
          <label class="col-form-label">휴대폰 번호 *</label>
          <input type="text" class="form-control" v-model="user.mphone"/>
        </div>
        <div class="form-group mt-3">
          <label class="col-form-label">집 전화 번호</label>
          <input type="text" class="form-control" v-model="user.mtel" placeholder="추가 번호를 입력하세요"/>
        </div>
        <div class="form-group mt-3">
          <label class="col-form-label">주소</label>
          <input type="text" class="form-control" v-model="user.mzipcode" placeholder="우편변호를 입력하세요"/>
          <input type="text" class="form-control" v-model="user.maddress1" placeholder="주소를 입력하세요"/>
          <input type="text" class="form-control" v-model="user.maddress2" placeholder="상세주소를 입력하세요"/>
        </div>
        <div class="form-group mt-3">
          <label class="col-form-label">생년월일</label>
          <input type="date" class="form-control" v-model="user.birth"/>
        </div>
        <div class="form-group mt-3">
          <label class="col-form-label">성별</label>
          <select v-model="user.gender" class="form-control">
            <option value=1>여성</option>
            <option value=2>남성</option>
        </select>
        </div>
        <div class="form-group mt-3">
          <label class="col-form-label">추천인 아이디</label>
          <input type="text" class="form-control" v-model="user.ref_id"/>
        </div>
        <v-row>
        <v-col>
          <v-btn-toggle v-model="text" tile color="deep-purple accent-3" group>
            <v-btn @click="goMypage()">
              취소
            </v-btn>
            <v-btn @click="updateHandler()">
              수정
            </v-btn>
            <v-btn @click="wthdHandler()">
              회원 탈퇴
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
  </div>
    <main-footer style="padding-bottom:60px"/>
  </div>
</template>

<script>
import MainFooter from "@/components/layout/Footer";
import AlertDialog from "@/components/dialog/AlertDialog.vue";
import userApi from "@/apis/member/user";

export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name:"updateForm",
  //추가하고 싶은 컴포넌트들 목록
  components:{
    MainFooter:MainFooter,
    AlertDialog,
  },
  //컴포넌트 데이터 정의
  data: function() {
    return {
      user: null,
      alertDialog: false,
      alertDialogMessage: "",
      loading: false,
    };
  },
  //컴포넌트 메소드 정의
  methods:{
    goMypage() {
      this.$router.push("/mypage");
    },
    updateHandler() {
      console.log(this.user);
      try {
        // this.loading = true;
         this.alertDialog = true;
        
        userApi.updateUserInfo(this.user);

         this.alertDialogMessage = "회원 정보가 수정되었습니다.";
        // this.loading = false;
        //alert("회원 정보가 수정되었습니다");
        //this.$router.push("/mypage");
      }catch(error) {
        this.alertDialogMessage = "회원 정보가 수정 실패";
        this.loading = false;
        this.$router.push("/checkPW");
      }
    },
    wthdHandler() {
      userApi.wthdMember(this.user.mid);
       this.alertDialogMessage = "회원 탈퇴 처리 되었습니다.";
      // this.loading = false;
      //alert("탈퇴처리 되었습니다");
      this.$store.dispatch("userStore/deleteAuth");
      //this.$router.push("/");
    }
  },
  async created() {
    await userApi.getUserInfo()
      .then((response)=> {
        this.user = response.data;
        if(this.user.birth != null){
          this.user.birth = response.data.birth.slice(0,10);
        }
      }) .catch((error)=> {
        console.log(error);
      });
  },
}
</script>

<!--컴포넌트 스타일 정의-->
<!--scoped를 생략하면 전역으로 사용-->
<style scoped>

</style>