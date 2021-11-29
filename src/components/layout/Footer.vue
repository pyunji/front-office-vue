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
        <div v-for="value in Categories" :key="value">
          <div v-for="value2 in value" :key="value2"> 
      <v-list-group v-for="(value3, d1name ) in value2" :key="d1name">
        <template v-slot:activator>
          <v-list-item-content>
          <v-list-item-title>{{d1name}}</v-list-item-title>
          </v-list-item-content>
        </template>
        <div v-for="(value4, index) in value3" :key="index">
        <v-list-group 
          no-action
          sub-group v-for="(value5, d2name) in value4" :key="d2name">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title >{{d2name}}</v-list-item-title>
            </v-list-item-content>
          </template>  
          <v-list-item
            v-for="(d3name, index2) in value5" :key="index2"  v-bind:to="`/product/list?d1name=${d1name}&d2name=${d2name}&d3name=${d3name}&pageNo=1`">
            <v-list-item-title >{{d3name}}</v-list-item-title>
          
            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
        </div>
      </v-list-group>
          </div>
        </div>
    </v-list>
    </v-navigation-drawer>
    <v-footer app padless>
      <v-bottom-navigation class="black" absolute dark>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-btn to="/">
          <v-icon>mdi-home-outline</v-icon>
        </v-btn>
        <v-btn to="/product/categoryList">
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
import main from "@/apis/product/main";
export default {
  name: "Footer",

  data: () => ({
    drawer: false,
    Categories: null,
    name:"",
    
  }),

  methods: {},
  beforeCreate() {
    main.getCategories().then((response) => {
      this.Categories = response.data;
    });
  },
};
</script>