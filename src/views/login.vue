<template>
  <div>
    <div class="card-body">
      <div v-if="$store.getters['userStore/getUserId'] === ''">
        <div class="form-group">
          <label class="form-label">User ID</label>
          <input type="text" class="form-control" id="userId" v-model="user.id"/>
        </div>
        <div class="form-group">
          <label for="userPassword" class="col-form-label">User Password</label>
          <input type="text" class="form-control" v-model="user.password"/>
        </div>
        <button class="btn btn-info btn-sm" v-on:click="handleLogin">로그인</button>
      </div>
      <div v-if="$store.getters['userStore/getUserId'] !== ''">
        <button class="btn btn-info btn-sm mr-2" v-on:click="handleLogout">로그아웃</button>
      </div>
      <button class="btn btn-info btn-sm ma-2 mt-2" v-on:click="goUrl()">회원 가입</button>
    </div>
      <alert-dialog
      :message="alertDialogMessage"
      :loading="loading"
      v-if="alertDialog"
      @close="alertDialog = false"/>
  </div>
</template>

<script>
import auth from "@/apis/auth";
import AlertDialog from "@/components/dialog/AlertDialog.vue";

export default {
  name: "Home",
  components:{
    AlertDialog,
  },
  data: () => ({
    user: {
      id: "",
      name: "사용자",
      password: "",
      role: "ROLE_USER",
      email: "user@mycompany.com"
    },
    loading:false,
    alertDialog: false,
    alertDialogMessage: ""
  }),
    // 컴포넌트 메서드 정의
  methods: {
    goUrl() {
      this.$router.push({path:"/join"}).catch(()=>{});
    },
    async handleLogin() {
      try {
        // console.log("데이터 바인딩 확인 id", this.user.id);
        // console.log("데이터 바인딩 확인 password", this.user.password);
        this.loading = true;
        this.alertDialog = true;

        const response = await auth.login(this.user);
        this.$store.dispatch("userStore/saveAuth", {
          userId: response.data.mid,
          authToken: response.data.jwt
        });
        console.log("userId", response.data.mid);
        console.log("authToken", response.data.jwt);
        this.loading = false;
        this.$router.go(-1);
      } catch(error) {
        try {
          if(error.response.status === 401 || error.response.status === 403) {
            this.loading = false;
            this.alertDialogMessage = "로그인 실패(아이디 또는 패스워드가 틀림)";
          }
        } catch (err){
          this.loading = false;
          this.alertDialogMessage = "로그인 실패(네트워크 에러)";          
        } finally{
          this.loading = false;
        }
      }
    },
    handleLogout() {
      this.$store.dispatch("userStore/deleteAuth");
    }
  },
};
</script>