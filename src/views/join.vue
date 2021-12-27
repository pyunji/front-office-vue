<!--컴포넌트 UI 정의-->
<template>
<div>
  <div>
      <div class="card-header" style="text-align:center; font-weight: bold; font-size:18px">
        간편 회원 가입
      </div>
      <div class="card-body">
        <div  style="text-align:center;">자세한 정보는 마이페이지에서 수정이 가능합니다</div>
        <div class="form-group mt-3">
          <label class="form-label">User ID</label>
          <input type="text" class="form-control" v-model="user.id" placeholder="회원 ID 입력"/>
        </div>
        <div class="form-group mt-3">
          <label class="form-label">User Name</label>
          <input type="text" class="form-control" v-model="user.name" placeholder="회원 이름 입력"/>
        </div>
        <div class="form-group mt-3">
          <label class="col-form-label">User Password</label>
          <input type="password" class="form-control" v-model="user.password" placeholder="회원 PW 입력"/>
        </div>
        <div class="form-group mt-3">
          <label class="col-form-label">User Email</label>
          <input type="email" class="form-control" required v-model="user.email" placeholder="회원 이메일 입력(user@team2.com)"/>
        </div>
        <div class="form-group mt-3">
          <label class="col-form-label">User Phone Number</label>
          <input type="tel" class="form-control" v-model="user.phone" placeholder="회원 핸드폰 번호 입력(01012345678)"/>
        </div>
        <div style="text-align:right"><b-button variant="primary" class="mt-3" v-on:click="handleJoin">가입</b-button></div>
      </div>
    <alert-dialog
      :message="alertDialogMessage"
      :loading="loading"
      v-if="alertDialog"
      @close="alertDialog = false"/>
  </div>
  <main-footer style="padding-bottom:50px"/>
  </div>
</template>

<script>
import auth from "@/apis/auth";
import AlertDialog from "@/components/dialog/AlertDialog.vue";
import MainFooter from "@/components/layout/Footer"

export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name:"join",
  //추가하고 싶은 컴포넌트들 목록
  components:{
    AlertDialog,
    MainFooter:MainFooter,
  },
  //컴포넌트 데이터 정의
  data: function() {
    return {
      user: {
        id: "",
        name: "",
        password: "",
        enabled: 1,
        role: "ROLE_USER",
        email: "",
        phone:""
      },
      alertDialog: false,
      alertDialogMessage: "",
      loading: false,
    };
  },
  //컴포넌트 메소드 정의
  methods:{
    async handleJoin() {
      try {
        // console.log("데이터 바인딩 확인 id", this.user.id);
        // console.log("데이터 바인딩 확인 password", this.user.password);
        this.loading = true;
        this.alertDialog = true;

        const response = await auth.join(this.user);
        console.log(response);
        this.loading = false;

        if (response.data.result === "success") {
          this.alertDialogMessage = "회원 가입 성공";
        } else if (response.data.result === "duplicated") {
          throw { message: "아이디가 중복됨" };
        } else if (response.data.result === "fail") {
          throw { message: "서버측 오류가 있음" };
        } else if(response.data.result === "duplicated_ip") {
          throw { message: "회원 가입은 하루에 두번 이상 불가능합니다"};
        }
      } catch (error) {
        console.log(error);
        this.loading = false;
        this.alertDialogMessage = `회원 가입 실패: ${error.message}`;
      } finally {
        this.loading = false;
        //메시지 띄운 후 로그인 페이지로 이동
          //this.$router.push({path:"/login"}).catch(()=>{});
      }
    },
  }
}
</script>

<!--컴포넌트 스타일 정의-->
<!--scoped를 생략하면 전역으로 사용-->
<style scoped>

</style>