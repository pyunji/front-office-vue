<template>
  <v-card tile>
    <v-row>
      <v-col cols="3">
        <!-- <v-card height="200" width="100" flat> -->
          <v-navigation-drawer permanent class="p-0">
            <v-list-item>
              <v-list-item-content>
               <v-list-item-title style="font-size: 0.5em; font-weight: bold;">베스트</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list>
            <v-list-item class="m-0 nav-link">
              <v-list-item-content style="font-size: 0.2em;">
                여성
              </v-list-item-content>
            </v-list-item>
            <v-list-item class="m-0 nav-link">
              <v-list-item-content style="font-size: 0.2em;">
                남성
              </v-list-item-content>
            </v-list-item>
            </v-list>
          </v-navigation-drawer>
        <!-- </v-card> -->
      </v-col>
      <v-col cols="9">
        <v-slide-group>
          <v-slide-item class="mr-3" v-for="(item, i) in items" :key="i">
            <v-card height="200" width="100" tile>
              <v-img :src="item.src" height="140"/>
                <div class="text-center" style="font-size: 0.8em;">{{item.title}}</div>
                <div class="text-center" style="font-size: 0.8em;">{{item.price}}</div>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-col>
    </v-row>

  </v-card>
</template>

<script>
  export default {
    name: 'Best',

    data: () => ({
     items: [
       {src: require('@/assets/photos/best1.jpg'), title: "니트셔츠", price: "1,700,000"},
       {src: require('@/assets/photos/best2.jpg'), title: "플레어 스커트", price: "500,000"},
       {src: require('@/assets/photos/best3.jpg'), title: "세일러 니트", price: "700,000"},
       {src: require('@/assets/photos/best4.jpg'), title: "세일러 코트", price: "3,900,800"},
     ]
    }),
  }
</script>