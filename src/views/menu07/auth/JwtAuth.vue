<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      JwtAuth
    </div>
    <div class="card-body">

      <div class="card">
        <div class="card-header">
          JWT 인증
        </div>
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
      </div>

      <div class="card mt-5">
        <div class="card-header">
          회원 가입
        </div>
        <div class="card-body">
          <div class="form-group">
            <label class="form-label">User ID</label>
            <input type="text" class="form-control" v-model="user.id" />
          </div>
          <div class="form-group">
            <label class="form-label">User Name</label>
            <input type="text" class="form-control" v-model="user.name" />
          </div>
          <div class="form-group">
            <label class="col-form-label">User Password</label>
            <input type="text" class="form-control" v-model="user.password" />
          </div>
          <div class="form-group">
            <label class="col-form-label">User Role</label>
            <select class="form-control" name="mrole" v-model="user.role">
              <option value="ROLE_ADMIN">ROLE_ADMIN</option>
              <option value="ROLE_MANAGER">ROLE_MANAGER</option>
              <option value="ROLE_USER" selected>ROLE_USER</option>
            </select>
          </div>
          <div class="form-group">
            <label class="col-form-label">User Email</label>
            <input type="text" class="form-control" v-model="user.email" />
          </div>
          <button class="btn btn-info btn-sm" v-on:click="handleJoin">가입</button>
        </div>
      </div>
    </div>

    <alert-dialog :message="alertDialogMessage"
                  :loading="loading"
                   v-if="alertDialog"
                   @close="alertDialog=false"/>
  </div>
</template>

<script>
import auth from "@/apis/auth";
import AlertDialog from "@/components/menu07/AlertDialog";

export default {
  // 컴포넌트의 대표이름(devtools에 나오는 이름)
  name: "JwtAuth",
  // 추가하고 싶은 컴포넌트를 등록
  components: {
    AlertDialog
  },
  // 컴포넌트에서 이용하는 데이터 정의
  data: function() {
    return {
      user: {
        id: "user",
        name: "사용자",
        password: "12345",
        role: "ROLE_USER",
        email: "user@mycompany.com"
      },
      loading:false,
      alertDialog: false,
      alertDialogMessage: ""
    };
  },
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
        const response = await auth.login(this.user);
        this.$store.dispatch("saveAuth", {
          userId: response.data.mid,
          authToken: response.data.jwt
        });
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

<!-- 컴포넌트 스타일 정의 -->
<style scoped></style>
