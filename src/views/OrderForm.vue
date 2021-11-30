<template>
  <validation-observer ref="observer" v-slot="{ invalid }">
    <!-- cart에서 여기로 넘어오는 데이터를 확인하고, 상품 정보를 보여주세요 -->
    <!--<p>cartItems:{{ cartItems }}</p>-->
    <!-- //cart에서 여기로 넘어오는 데이터를 확인하고, 상품 정보를 보여주세요 -->
    <form @submit.prevent="submit">
      <v-card class="p-3" outlined>
        <div>
          <h5>
            주문 상품
            <span> {{ cartLength }} 개 </span>
          </h5>
        </div>
        <div>
          <div v-for="productInCart in cartItems" :key="productInCart">
                  
                  <v-img :src="productInCart.img1" max-width="100" max-height="100" align="left" />
                  <p>
                    {{ productInCart.bname }}
                  </p>

                  <p>
                    {{ productInCart.pname }}
                  </p>
                  <p>
                    {{ productInCart.ccode }} / {{ productInCart.scode }} /
                    {{ productInCart.quantity }} 개
                  </p>
                  <p>
                    {{ productInCart.pprice }} 원
                  </p>

          </div>
        </div>
      </v-card>
      <v-card class="p-3 mt-3"  outlined>
        <div style="font-weight: bold">주문자 정보</div>
        <hr />
        <validation-provider v-slot="{ errors }" name="Name" rules="required|max:10">
          <v-text-field
            filled
            outlined
            v-model="orderDetail.mname"
            :counter="10"
            :error-messages="errors"
            label="주문자"
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider v-slot="{ errors }" name="phoneNumber" rules="required|max:11">
          <v-text-field
            filled
            outlined
            v-model="orderDetail.mtel"
            :error-messages="errors"
            label="휴대폰"
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider v-slot="{ errors }" name="email" rules="required|email">
          <v-text-field
            filled
            outlined
            v-model="orderDetail.memail"
            :error-messages="errors"
            label="E-mail"
            required
          ></v-text-field>
        </validation-provider>
      </v-card>
      <v-card class="p-3 mt-3" outlined>
        <div style="font-weight: bold">배송지 정보</div>
        <hr />
        <validation-provider v-slot="{ errors }" name="Name" rules="required|max:10">
          <v-text-field
            filled
            outlined
            v-model="orderDetail.oname"
            :counter="10"
            :error-messages="errors"
            label="이름"
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider v-slot="{ errors }" name="phoneNumber" rules="required|max:11">
          <v-text-field
            filled
            outlined
            v-model="orderDetail.otel"
            :error-messages="errors"
            label="휴대폰"
            required
          ></v-text-field>
        </validation-provider>
        <v-text-field filled outlined v-model="orderDetail.oaddress" label="전화번호"></v-text-field>
        <validation-provider v-slot="{ errors }" name="email">
          <v-text-field
            filled
            outlined
            v-model="orderDetail.oemail"
            :error-messages="errors"
            label="E-mail"
            required
          ></v-text-field>
        </validation-provider>
        <v-text-field filled outlined v-model="orderDetail.oaddress" label="우편번호" required></v-text-field>
        <v-text-field filled outlined v-model="orderDetail.oaddress" label="주소" required></v-text-field>
        <v-text-field filled outlined v-model="orderDetail.oaddress" label="메모" required></v-text-field>
      </v-card>
      <v-card class="p-3 mt-3" outlined>
        <div style="font-weight: bold">카드 및 결제 방법</div>
        <v-radio-group row>
          <v-radio label="카드" value="card" v-model="orderDetail.paymentMethod"></v-radio>
          <v-radio label="마일리지" value="mileage" v-model="orderDetail.paymentMethod"></v-radio>
          <v-radio label="계좌이체" value="cash" v-model="orderDetail.paymentMethod"></v-radio>
        </v-radio-group>
      </v-card>
      <v-card class="p-3 mt-3" outlined>
        <div style="font-weight: bold">최종 결제 금액
          <div style="float: right">{{ totalPrice }}원</div>
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
            <v-btn width="100%" @click="toOrderComplete" outlined type="submit" :disabled="invalid"> 주문하기 </v-btn>
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
  data: () => ({
    name: "",
    phoneNumber: "",
    email: "",
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    address: "",
    checkbox: null,
    cartItems: [],
    cartLength: "",
    pname: "",
    bname: "",
    productAllShow: true,
    totalPrice: 0,

    orderDetail: {
        mname: "",
        mtel:"",
        memail:"",
        oname: "",
        otel: "",
        oemail: "",
        oaddress:"",
        paymentMethod:"",
      },
  }),
  props: {
    initCartItems: Array,
  },
  methods: {
    submit() {
      this.$refs.observer.validate();
      this.$router.push("/order/ordercomplete");
    },
    clear() {
      this.name = "";
      this.phoneNumber = "";
      this.email = "";
      this.select = null;
      this.checkbox = null;
      this.$refs.observer.reset();
    },
    productDetail() {
      this.productAllShow = false;
    },
  },
  /* props는 created 주기에서 data에 설정할 수 있다.*/
  created() {
    this.cartItems = this.initCartItems;
    this.cartLength = this.cartItems.length;
    var step;
    for (step = 0; step < this.cartLength; step++) {
      this.totalPrice += this.cartItems[step].quantity * this.cartItems[step].appliedPrice;
    }
    console.log("데이터 바인딩 확인 =", this.cartItems);
  },
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped></style>
