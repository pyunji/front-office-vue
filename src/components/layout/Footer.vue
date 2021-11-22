<template>
  <div>
    <v-navigation-drawer app width="340" color="white" v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Application </v-list-item-title>
          <v-list-item-subtitle> with Vue + Vuetify </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-title class="">여성</v-list-item-title>
          </template>

          <v-list-item to="/menu01/exam01view" class="nav-link text-warning">
            <v-list-item-content> 선언적 방식 화면 이동 </v-list-item-content>
          </v-list-item>

          <v-list-item to="/menu01/exam02view" class="nav-link text-warning">
            <v-list-item-content> 프로그래밍 방식 화면 이동 </v-list-item-content>
          </v-list-item>

          <v-list-item to="/menu01/exam03view" class="nav-link text-warning">
            <v-list-item-content> 중첩된 라우트 </v-list-item-content>
          </v-list-item>

          <v-list-item to="/menu01/exam04view" class="nav-link text-warning">
            <v-list-item-content> 이름이 있는 뷰 </v-list-item-content>
          </v-list-item>

          <v-list-item to="/menu01/exam05view" class="nav-link text-warning">
            <v-list-item-content> URL 데이터 전달 </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <v-list-group>
          <template v-slot:activator>
            <v-list-item-title class="">남성</v-list-item-title>
          </template>

          <v-list-item to="/menu02/exam01expressions" class="nav-link text-warning">
            <v-list-item-content> 표현식 바인딩 </v-list-item-content>
          </v-list-item>

          <v-list-item to="/menu02/exam02directives" class="nav-link text-warning">
            <v-list-item-content> 디렉티브 바인딩 </v-list-item-content>
          </v-list-item>

          <v-list-item to="/menu02/exam03attrbinding" class="nav-link text-warning">
            <v-list-item-content> 속성 바인딩 </v-list-item-content>
          </v-list-item>

          <v-list-item to="/menu02/exam04formbinding" class="nav-link text-warning">
            <v-list-item-content> 양방향 바인딩 </v-list-item-content>
          </v-list-item>

          <v-list-item to="/menu02/exam05forrepeatbinding" class="nav-link text-warning">
            <v-list-item-content> 반복 바인딩 </v-list-item-content>
          </v-list-item>

          <v-list-item to="/menu02/exam06computedbinding" class="nav-link text-warning">
            <v-list-item-content> 계산된 바인딩 </v-list-item-content>
          </v-list-item>
          <v-list-item to="/menu02/exam07template" class="nav-link text-warning">
            <v-list-item-content> 템플릿 컴포넌트 </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <v-list-group>
          <template v-slot:activator>
            <v-list-item-title class="">키즈</v-list-item-title>
          </template>
          <v-list-item to="/menu03/exam01eventhandling" class="nav-link text-warning">
            <v-list-item-content> 이벤트 처리 </v-list-item-content>
          </v-list-item>
          <v-list-item to="/menu03/exam02watch" class="nav-link text-warning">
            <v-list-item-content> 데이터 변경 감시 </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group class="nav-item mt-2">
          <template v-slot:activator
            ><v-list-item-title class="">뷰티</v-list-item-title></template
          >
          <v-list-item to="/menu04/exam01props" class="nav-link text-warning">
            <v-list-item-content
              >부모에서 자식으로 전달(props 이용)</v-list-item-content
            ></v-list-item
          >
          <v-list-item to="/menu04/exam02eventemit" class="nav-link text-warning">
            <v-list-item-content>자식에서 부모로 전달(event 이용)</v-list-item-content></v-list-item
          >
          <v-list-item to="/menu04/exam03inject" class="nav-link text-warning">
            <v-list-item-content>의존 데이터 삽입(inject 이용)</v-list-item-content></v-list-item
          >
          <v-list-item to="/menu04/exam04ref" class="nav-link text-warning">
            <v-list-item-content>Ref를 이용한 접근</v-list-item-content></v-list-item
          >
        </v-list-group>
        <v-list-group class="nav-item mt-2">
          <template v-slot:activator
            ><v-list-item-title class="">라이프스타일</v-list-item-title></template
          >
          <v-list-item to="/menu05/exam01lifecyclehook" class="nav-link text-warning">
            <v-list-item-content>라이프사이클 훅</v-list-item-content></v-list-item
          >
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-footer app padless>
      <v-bottom-navigation class="black" absolute dark>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-btn to="/">
          <v-icon>mdi-home-outline</v-icon>
        </v-btn>
        <v-btn>
          <v-icon>mdi-heart-outline</v-icon>
        </v-btn>
        <v-btn>
          <v-icon>mdi-account-outline</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      drawer: false,
    };
  },
};
</script>