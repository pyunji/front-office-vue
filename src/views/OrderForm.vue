<template>
  <validation-observer
    ref="observer"
    v-slot="{ invalid }"
  >
    <form @submit.prevent="submit">
      <v-card class="p-3" outlined>
        <v-card-title style="font-weight: bold float: left;">주문자 정보</v-card-title>
            <validation-provider
              v-slot="{ errors }"
              name="Name"
              rules="required|max:10"
            >
              <v-text-field
              filled
              outlined
                v-model="name"
                :counter="10"
                :error-messages="errors"
                label="주문자"
                required
              ></v-text-field>
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="phoneNumber"
              rules="required|max:11"
            >
              <v-text-field
                filled
                outlined
                v-model="phoneNumber"
                :error-messages="errors"
                label="휴대폰"
                required
              ></v-text-field>
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="email"
              rules="required|email"
            >
              <v-text-field
              filled
              outlined
                v-model="email"
                :error-messages="errors"
                label="E-mail"
                required
              ></v-text-field>
            </validation-provider>
          </v-card >
          <v-card class="p-3 mt-3" outlined>
            <v-card-title>배송지 정보</v-card-title>
            <validation-provider
              v-slot="{ errors }"
              name="Name"
              rules="required|max:10"
            >
              <v-text-field
               filled
              outlined
                v-model="name"
                :counter="10"
                :error-messages="errors"
                label="이름"
                required
              ></v-text-field>
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="phoneNumber"
              rules="required|max:11"
            >
              <v-text-field
               filled
              outlined
                v-model="phoneNumber"
                :error-messages="errors"
                label="휴대폰"
                required
              ></v-text-field>
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="email"
              rules="required|email"
            >
              <v-text-field
               filled
              outlined
                v-model="email"
                :error-messages="errors"
                label="E-mail"
                required
              ></v-text-field>
            </validation-provider>
              <v-text-field
               filled
              outlined
                v-model="address"
                label="주소"
                required
              ></v-text-field>
          </v-card>
          <v-card class="p-3 mt-3" outlined>
            <v-card-title>카드 및 결제 방법</v-card-title>
            <v-radio-group
              row
            >
              <v-radio
                label="카드"
                value="card"
              ></v-radio>
              <v-radio
                label="마일리지"
                value="mileage"
              ></v-radio>
              <v-radio
                label="계좌이체"
                value="cash"
              ></v-radio>
            </v-radio-group>
          </v-card>
          <v-card class="p-3 mt-3" outlined>
              <v-card-title>최종 결제 금액</v-card-title>
              <v-card-subtitle style="float:right;">375,000</v-card-subtitle>
          </v-card>
   <v-container fluid>
    <v-row>
      <v-col>
        <v-btn width="100%" v-on:click="deleteSelected"  outlined> 품절 상품 삭제 </v-btn>
      </v-col>
      <v-col>
        <v-btn width="100%" v-on:click="deleteSelected"  outlined> 선택 상품 삭제 </v-btn>
      </v-col>
    </v-row>
    </v-container>
          <validation-provider
            v-slot="{ errors }"
            rules="required"
            name="checkbox"
          >
            <v-checkbox
              v-model="checkbox"
              :error-messages="errors"
              value="1"
              label="구매자 동의"
              type="checkbox"
              required
            ></v-checkbox>
          </validation-provider>

          <v-btn
            class="mr-4"
            type="submit"
            :disabled="invalid"
          >
            submit
          </v-btn>
          <v-btn @click="clear">
            clear
          </v-btn>
    </form>
  </validation-observer>
</template>
<script>
  import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

  setInteractionMode('eager')

  extend('digits', {
    ...digits,
    message: '{_field_} needs to be {length} digits. ({_value_})',
  })

  extend('required', {
    ...required,
    message: '{_field_} 필수 입력 항목입니다.',
  })

  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  })

  extend('regex', {
    ...regex,
    message: '유효하지 않은 입력입니다.',
  })

  extend('email', {
    ...email,
    message: '유효하지 않은 이메일입니다.',
  })

  export default {
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      name: '',
      phoneNumber: '',
      email: '',
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      address: '',
      checkbox: null,
      cartItems: this.initCartItems
    }),
    props: {
      initCartItems : Object,
    },
    methods: {
      submit () {
        this.$refs.observer.validate();
        this.$router.push("/order/ordercomplete");
      },
      clear () {
        this.name = ''
        this.phoneNumber = ''
        this.email = ''
        this.select = null
        this.checkbox = null
        this.$refs.observer.reset()
      },
    },

    mounted() {
      console.log("데이터 바인딩 확인 =", this.cartItems);
    }
  }
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped></style>
