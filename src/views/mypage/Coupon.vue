<!--컴포넌트 UI 정의-->
<template>
  <div class="mt-2">
    <div v-for="(coupon,index) in coupons" :key="index">
      <v-card v-if="coupon.cuseDate===null" class="mt-2">
        <div class="row no-gutters">
          <div class="col-3">
            <v-img  :src="coupon.ethumbnail" width="95%" height="95"></v-img>
          </div>
          <div class="col-9">
            <v-card-title class="ma-2 pa-0" style="font-weight: bold; font-size:18px;">{{coupon.etitle}} 쿠폰</v-card-title>
            <v-card-text class="ma-2 pa-0">
            사용기한 : {{coupon.cissueDate}} ~ {{coupon.cexpireDate}}
          </v-card-text>
          </div>
        </div>
      </v-card>
      <v-card v-else class="mt-2" disabled>
        <div class="row no-gutters">
          <div class="col-3">
            <v-img  :src="coupon.ethumbnail" width="95%" height="95"></v-img>
          </div>
          <div class="col-9">
            <v-card-title class="ma-2 pa-0" style="font-weight: bold; font-size:18px;">{{coupon.etitle}} 쿠폰</v-card-title>
            <v-card-text class="ma-2 pa-0">
              사용완료
          </v-card-text>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import userApi from "@/apis/member/user";

export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name:"Coupon",
  //추가하고 싶은 컴포넌트들 목록
  components:{
  },
  //컴포넌트 데이터 정의
  data: function() {
    return {
      coupons:[],
    };
  },
  //컴포넌트 메소드 정의
  methods:{
  },
  async created() {
    await userApi.getUserCoupon()
      .then((response)=> {
        this.coupons = response.data;
        console.log(this.coupons);
      }).catch((error)=>{
        console.log(error);
      });
  }
}
</script>

<!--컴포넌트 스타일 정의-->
<!--scoped를 생략하면 전역으로 사용-->
<style scoped>

</style>