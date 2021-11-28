<template>
  <div class="card-body">
    <div v-if="$store.state.userId === ''">
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
    <div v-if="$store.state.userId !== ''">
      <button class="btn btn-info btn-sm mr-2" v-on:click="handleLogout">로그아웃</button>
    </div>
  </div>
</template>

<script>
import auth from "@/apis/auth";
export default {
  name: "Home",

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
    async handleJoin() {
      try {
        this.loading = true;
        this.alertDialog = true;

        const response = await auth.join(this.user);
        this.loading = false;
        if(response.data.result === "success") {
          this.alertDialogMessage = "회원 가입 성공";
        } else if(response.data.result === "duplicated") {
          throw {message: "아이디가 중복됨"};
        } else if(response.data.result === "fail") {
          throw {message: "서버측 오류가 있음"};
        }
      } catch(error) {
        this.loading = false;
        this.alertDialogMessage = `회원 가입 실패: ${error.message}`;
      } finally {
        //
      }
    },

    async handleLogin() {
      try {
        // console.log("데이터 바인딩 확인 id", this.user.id);
        // console.log("데이터 바인딩 확인 password", this.user.password);
        const response = await auth.login(this.user);
        this.$store.dispatch("saveAuth", {
          userId: response.data.mid,
          authToken: response.data.jwt
        });
        console.log("userId", response.data.mid);
        console.log("authToken", response.data.jwt);
      } catch(error) {
        try {
          if(error.response.status === 401) {
            this.alertDialog = true;
            this.alertDialogMessage = "로그인 실패(아이디 또는 패스워드가 틀림)";
          }
        } catch (err){
          this.alertDialog = true;
          this.alertDialogMessage = "로그인 실패(네트워크 에러)";          
        } 
      }
    },
    handleLogout() {
      this.$store.dispatch("deleteAuth");
    }
  },
};
</script>
