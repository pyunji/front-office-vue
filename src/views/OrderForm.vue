<template>
  <validation-observer ref="observer" v-slot="{ invalid }">
    <!-- cart에서 여기로 넘어오는 데이터를 확인하고, 상품 정보를 보여주세요 -->
    <!--<p>cartItems:{{ cartItems }}</p>-->
    <!-- //cart에서 여기로 넘어오는 데이터를 확인하고, 상품 정보를 보여주세요 -->
    <form @submit.prevent="submit">
       
      <v-card class="p-3" outlined style="background-color: #f7f1e9;">
        <div>
          <div style="font-weight: bold" class="mb-2">
            주문 상품
             {{ cartLength }} 개 
             <btn style="float: right;" @click="toggleShow"><v-icon>mdi-card-text-outline</v-icon></btn>
          </div>
          
        </div>
        <div v-if="show">
          <div v-for="(productInCart, i) in cartItems" :key="i">
                <v-row>
                  <v-col cols="4">
                  <v-img :src="productInCart.img1" max-width="100" max-height="100" align="left" />
                  </v-col>
                  <v-col cols="7">
                  <div>
                    {{ productInCart.bname }}
                  </div>

                  <div>
                    {{ productInCart.pname }}
                  </div>
                  <div>
                    {{ productInCart.ccode }} / {{ productInCart.scode }} /
                    {{ productInCart.quantity }} 개
                  </div>
                  <div>
                    {{ productInCart.pprice | comma }} 원
                  </div>
                  </v-col>
                  <v-col cols="1">
                  </v-col>
                </v-row>
          </div>
        </div>
      </v-card>
      <v-card class="p-3 mt-3"  outlined style="background-color: #f7f1e9;">
        <div style="font-weight: bold">주문자 정보</div>
        <hr />
          <v-text-field
            filled
            outlined
            :counter="10"
            v-model="memberInfo.mname"
            label="주문자"
            disabled
          ></v-text-field>
          <v-text-field
            filled
            outlined
            v-model="memberInfo.mphone"
            label="휴대폰"
            disabled
          ></v-text-field>
          <v-text-field
            filled
            outlined
            v-model="memberInfo.memail"
            label="E-mail"
            disabled
          ></v-text-field>
      </v-card>
      <v-card class="p-3 mt-3" outlined style="background-color: #f7f1e9;">
        <div style="font-weight: bold">배송지 정보</div>
        <hr />
        <validation-provider v-slot="{ errors }" name="Name" rules="required|max:10">
          <v-text-field
            v-model="orders.oreceiver"
            :counter="10"
            :error-messages="errors"
            label="이름"
            required
            
          ></v-text-field>
        </validation-provider>
        <validation-provider v-slot="{ errors }" name="phoneNumber" rules="required|max:11">
          <v-text-field
            v-model="orders.ophone"
            :error-messages="errors"
            label="휴대폰"
            required
          ></v-text-field>
        </validation-provider>
        <v-text-field v-model="orders.otel" label="전화번호"></v-text-field>
        <validation-provider v-slot="{ errors }" name="email">
          <v-text-field
            v-model="orders.oemail"
            :error-messages="errors"
            label="E-mail"
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider v-slot="{ errors }" name="우편번호" rules="required">
          <v-text-field v-model="orders.ozipcode" label="우편번호" :error-messages="errors" required></v-text-field>
        </validation-provider>
        <validation-provider v-slot="{ errors }" name="주소" rules="required">
          <v-text-field v-model="orders.oaddress" label="주소" :error-messages="errors" required></v-text-field>
        </validation-provider>
        <v-text-field v-model="orders.memo" label="메모"></v-text-field>
      </v-card>
      <v-card class="p-3 mt-3" outlined style="background-color: #f7f1e9;">
        <div style="font-weight: bold">카드 및 결제 방법</div>
        <v-radio-group row v-model="orders.paymentMethodCode">
          <v-radio label="카드" value="card"></v-radio>
          <v-radio label="마일리지" value="mileage"></v-radio>
          <v-radio label="계좌이체" value="cash"></v-radio>
        </v-radio-group>
      </v-card>
            <v-card class="p-3 mt-3" outlined style="background-color: #f7f1e9;">
        <div style="font-weight: bold">마일리지 사용 여부</div>
      <v-container fluid>
      <v-row>
      <v-col cols="4">
      </v-col>
      <v-col cols="8">
        <v-text-field
          v-model="orders.usedMileage" type="number"
          suffix="M" :max="10000" :min="0"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
      </v-card>
      <v-card class="p-3 mt-3" outlined style="background-color: #f7f1e9;">
        <div style="font-weight: bold">할인 전 금액
          <div style="float: right">{{ totalPrice | comma }}원</div>
        </div>
        <div style="font-weight: bold">최종 결제 금액
          <div style="float: right">{{ totalPrice - orders.usedMileage | comma}}원</div>
        </div>       
      </v-card>

      <v-card class="p-3 mt-3" style="background-color: #f7f1e9;">
        <div style="font-weight: bold">적립마일리지
          <div style="float: right">{{ totalPrice * memberInfo.grate / 100 }} M</div>
        </div>
      </v-card>
      <validation-provider v-slot="{ errors }" rules="required" name="checkbox">
        <v-checkbox
          v-model="checkbox"
          :error-messages="errors"
          value="1"
          label="구매자 동의"
          type="checkbox"
          required
        ></v-checkbox>
      </validation-provider>
      <v-container fluid>
        <v-row>
          <v-col>
            <v-btn width="100%" @click="toOrderComplete" outlined :disabled="invalid" style="background-color: #f7f1e9; color: #000051;"> 주문하기 </v-btn>
          </v-col>
        </v-row>
      </v-container>


      <!--<v-btn @click="clear"> clear </v-btn>-->
    </form>
  </validation-observer>
</template>
<script>
import { required, digits, email, max, regex } from "vee-validate/dist/rules";
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from "vee-validate";
import orderform from "@/apis/order/orderform";
import cart from "@/apis/member/cart";
import product from "@/apis/product/main";
setInteractionMode("eager");

extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})",
});

extend("required", {
  ...required,
  message: "{_field_} 필수 입력 항목입니다.",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

extend("regex", {
  ...regex,
  message: "유효하지 않은 입력입니다.",
});

extend("email", {
  ...email,
  message: "유효하지 않은 이메일입니다.",
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  filters: {
    comma(val) {
      return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  data: () => ({
    orders: {
      // mname:this.initMemberInfo.mname,
      mname:"",
      memail:"",
      oreceiver: "서회형",
      ophone: "01012345678",
      otel: "021234567",
      oemail: "shh@hansome.com",
      ozipcode: "12345",
      oaddress: "서울시 강남구 테헤란로98길 12",
      memo: "주문 테스트 기본값",
      paymentMethodCode: "card",
      usedMileage: 0,
      beforeDcPrice: 0,
      afterDcPrice: 0,
      addMileage: 0,

      // cartItems: []
    },
    checkbox: null,
    cartItems: [],
    cartLength: "",
    productAllShow: true,
    totalPrice: 0,
    memberInfo: {},
    show: false,
    
  }),
  props: {
    initCartItems: Array,
    initMemberInfo: Object
  },
  methods: {
    // submit() {
    //   this.$refs.observer.validate();
    //   this.$router.push("/order/ordercomplete");
    // },
    // clear() {
    //   this.name = "";
    //   this.phoneNumber = "";
    //   this.email = "";
    //   this.select = null;
    //   this.checkbox = null;
    //   this.$refs.observer.reset();
    // },
    toggleShow(){
                    this.show = !this.show;
                },
    async toOrderComplete(){
      this.orders.beforeDcPrice = this.totalPrice;
      this.orders.afterDcPrice = this.totalPrice - this.orders.usedMileage;
      this.orders.addMileage = (this.totalPrice * this.memberInfo.grate) / 100;

      let orderAllInfo = {
        "orders": this.orders,
        "cartItems": this.cartItems
      };
      let oid="";
      console.log(this.orders.beforeDcPrice);
      console.log(this.orders.afterDcPrice);

      await orderform.makeOrder(orderAllInfo)
        .then((response) => {
          oid = response.data;
        });
      let orderCompleteItems = {};
      await orderform.orderComplete(oid)
        .then((response) => {
          orderCompleteItems = response.data;
        });
      console.log("orderCompleteItems", orderCompleteItems);
      this.$router.push({
        name:'ordercomplete',
        params: {
          initOrderItems: orderCompleteItems
        }
      })
    },
    productDetail() {
      this.productAllShow = false;
    },
  },
  /* props는 created 주기에서 data에 설정할 수 있다.*/
  created() {
    this.cartItems = this.initCartItems;
    // this.orders.cartItems = this.initCartItems;
    this.cartLength = this.initCartItems.length;
    this.memberInfo = this.initMemberInfo;
    this.orders.mname = this.initMemberInfo.mname;
    this.orders.memail = this.initMemberInfo.memail;


    var step;
    for (step = 0; step < this.cartLength; step++) {
      this.totalPrice += this.cartItems[step].appliedPrice;
    }
    console.log(this.totalPrice);
    console.log("데이터 바인딩 확인 =", this.cartItems);
    console.log("Member 데이터 바인딩 확인 =", this.memberInfo);
  },

  computed:{
    'orders.usedMileage' : function(){
      console.log(this.orders.afterDcprice);
      return  this.orders.afterDcprice - this.orders.usedMileage;
    }
  }
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped></style>
