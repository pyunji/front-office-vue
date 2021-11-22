<!-- 컴포넌트 UI 정의 -->
<template>
  <v-card>
    <v-card-title>
      Exam05View
    </v-card-title>
    <v-card-text>
      <v-card-subtitle>params(path variable)로 전달</v-card-subtitle>
      <ul>
        <li><router-link to="/menu01/exam06view/1">exam06view/1</router-link></li>
        <li><router-link v-bind:to="`/menu01/exam06view/${bno1}`">exam06view/3</router-link></li>
        <li><router-link :to="{path:`/menu01/exam06view/${bno2}`}">exam06view/5</router-link></li>
        <li><router-link :to="{name:'menu01_exam06view', params:{bno:bno3}}">exam06view/7</router-link></li>
      </ul>

      <v-card-subtitle>정적 프롭 객체 전달</v-card-subtitle>
      <ul>
        <li><router-link to="/menu01/exam07view">exam07view</router-link></li>
      </ul>

      <v-card-subtitle>쿼리 스트링으로 전달</v-card-subtitle>
      <ul>
        <li><router-link to="/menu01/exam08view?kind=freeboard&color=blue">exam08view?kind=freeboard&color=blue</router-link></li>
        <li><router-link :to="`/menu01/exam08view?kind=${kind1}&color=${color1}`">exam08view?kind=freeboard&color=blue</router-link></li>
        <li><router-link :to="{path:`/menu01/exam08view?kind=${kind2}&color=${color2}`}">exam08view?kind=album&color=red</router-link></li>
        <li><router-link :to="{name:'menu01_exam08view', query:{kind:kind3, color:color3}}">exam08view</router-link></li>
      </ul>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  // 컴포넌트의 대표이름(devtools에 나오는 이름)
  name:"Exam05View",
  // 추가하고 싶은 컴포넌트를 등록
  components: {

  },
  // 컴포넌트에서 이용하는 데이터 정의
  // 함수 형태로 작성해야하고, 리턴 값이 컴포넌트의 데이터가 된다
  data: function() {
    return {
      bno1:3,
      bno2:5,
      bno3:7,
      kind1:"freeboard",
      color1:"blue",
      kind2:"album",
      color2:"red",
      kind3:"qa",
      color3:"yellow",
    };
  },
  // 컴포넌트 메서드 정의
  methods: {
    
  },
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>