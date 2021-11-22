<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      게시물 내용
    </div>
    <div class="card-body">
      <div v-if="board != null">
        <div class="d-flex">
          <div>
            <p>bno: {{board.bno}}</p>
            <p>btitle: {{board.btitle}}</p>
            <p>bcontent: {{board.bcontent}}</p>
            <p>mid: {{board.mid}}</p>
            <p>bdate: {{new Date(board.bdate).toLocaleDateString()}}</p>
            <p>bhitcount: {{board.bhitcount}}</p>
            <p v-if="board.battachoname">
                battachoname: 
                <!-- 서버쪽으로 그림 다운로드 요청을 해야하기 때문에 href를 사용함 -->
                <!-- axios를 사용하지 않고 별도의 요청을 할 때 요청 헤더에 jwt가 포함되지 않으므로 쿼리스트링 방식으로 jwt를 보내야한다. -->
                <a :href="`${baseURL}/board/battach/${board.bno}?jwt=${$store.state.authToken}`">
                  {{board.battachoname}}
                </a>
            </p>
          </div>
          <div class="d-flex align-items-center ml-5">
            <img :src="`${baseURL}/board/battach/${board.bno}?jwt=${$store.state.authToken}`" alt="" width="300"/>
          </div>
        </div>

        <div>
          <router-link :to="`/menu07/board/list?pageNo=${$route.query.pageNo}`" 
            class="btn btn-info btn-sm mr-2">목록</router-link>
          <router-link :to="`/menu07/board/updateform?bno=${$route.query.bno}&pageNo=${$route.query.pageNo}`" 
            class="btn btn-info btn-sm mr-2">수정</router-link>
          <button class="btn btn-info btn-sm mr-2" @click="handleRemove">삭제</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"; // 지금은 baseURL 가져올때만 씀
import apiBoard from "@/apis/board";
export default {
  // 컴포넌트의 대표이름(devtools에 나오는 이름)
  name:"",
  // 추가하고 싶은 컴포넌트를 등록
  components: {

  },
  // 컴포넌트에서 이용하는 데이터 정의
  data: function() {
    return {
      board: null,
      baseURL: axios.defaults.baseURL,
    };
  },
  // 컴포넌트 메서드 정의
  methods: {
    async handleRemove() {
      try {
        const response = await apiBoard.deleteBoard(this.board.bno);
        console.log(response);
        this.$router.push(`/menu07/board/list?pageNo=${this.$route.query.pageNo}`);
      } catch(error) {
        console.log(error);
      }
    }
  },
  /* 컴포넌트가 생성될 때 실행되는 훅 */
  created() {
    apiBoard.readBoard(this.$route.query.bno, this.$route.query.hit)
            .then(response => {
              this.board = response.data;
            })
            .catch(error => {
              console.log(error);
            });
  }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>