<!--컴포넌트 UI 정의-->
<template>
  <v-card style="background-color: #fdeeda;">
    <v-card-text>
      <div>
        <mileage/>
      </div>
      <div>
        <user-grade/>
      </div>
      <div>
        <grade-info/>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import Mileage from '../../components/myPage/mileage.vue';
import GradeInfo from '../../components/myPage/gradeInfo.vue';
import UserGrade from '../../components/myPage/userGrade.vue';
export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name:"GradeMileage",
  //추가하고 싶은 컴포넌트들 목록
  components:{
    Mileage,
    UserGrade,
    GradeInfo,
  },
  //컴포넌트 데이터 정의
  data: function() {
    return {
    };
  },
  //컴포넌트 메소드 정의
  methods:{
  }
}
</script>

<!--컴포넌트 스타일 정의-->
<!--scoped를 생략하면 전역으로 사용-->
<style scoped>

</style>