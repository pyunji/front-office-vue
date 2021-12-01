<!--컴포넌트 UI 정의-->
<template>
  <v-container fluid>
    <v-row>
      <div width="100%" outlined>
        <v-checkbox id="masterCheckbox" v-model="selectAll" label="전체 선택"></v-checkbox>
        <p>selectedItems:{{ selectedItems }}</p>
      </div>
    </v-row>

    <v-row class="m-3" v-for="(cartItem, i) in cartItems" :key="i">
      <div>
        <v-card width="100%">
          <v-card class="d-flex align">
            <v-checkbox v-model="selectedItems" :value="cartItems[i]"> </v-checkbox>

            <v-btn>
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-img :src="cartItem.img1" />
          </v-card>
          <v-card class="d-flex align-end flex-column" flat>
            <p>{{ cartItem.bname }}</p>
            <p>{{ cartItem.pname }}</p>
            <p>{{ cartItem.pprice }}</p>
          </v-card>
          <div>
            <v-card class="m-3">
              <div>
                <v-radio-group>
                  <v-radio v-for="(option1) in cartItem.optionList" :key="option1.ccode" :label="option1.ccode"></v-radio>
                </v-radio-group>
<!-- 
                <button
                  type="radio"
                  :value="option.occode"
                  v-for="(option, i) in cartItem.optionList"
                  :key="i"
                >
                  {{ option.ccode }}
                  <v-img :src="option.colorImg" width="40" height="40"></v-img>
                </button> -->
              </div>
              <div v-for="(option2) in cartItem.optionList" :key="option2.ccode">
                <div v-if="option1.ccode === option2.ccode">
                <v-btn v-for="(scodeObj, j) in option2.scodeList" :key="j">
                  {{ scodeObj.scode }}
                </v-btn>
                </div>
              </div>
            </v-card>
          </div>
        </v-card>
      </div>
    </v-row>
    <v-row>
      <v-col>
        <v-btn v-on:click="deleteSelected" width="100%" outlined> 품절 상품 삭제 </v-btn>
      </v-col>
      <v-col>
        <v-btn v-on:click="deleteSelected" width="100%" outlined> 선택 상품 삭제 </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn width="100%" outlined> 쇼핑 계속 하기 </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import cart from "@/apis/member/cart";
import orderform from "@/apis/member/orderform";
export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name: "Cart",
  //추가하고 싶은 컴포넌트들 목록
  components: {},
  //컴포넌트 데이터 정의
  data: function () {
    return {
      checkbox: true,
      cartItems: [],
      cartSize: 0,
      selectedItems: [],
      selectedOneItem: null,
    };
  },

  methods: {
    async toOrderForm() {
      let response = await orderform.getMemberInfo();
      let initMemberInfo = response.data;
      let toOrderItemList = [];
      this.selectedItems.forEach((item) => {
        let toOrderItem = {
          pstockid: item.pstockid,
          img1: item.img1,
          pprice: Number(item.pprice),
          scode: item.oscode,
          ccode: item.occode,
          bname: item.bname,
          pname: item.pname,
          quantity: Number(item.quantity),
          appliedPrice: Number(item.pprice) * Number(item.quantity),
        };
        toOrderItemList.push(toOrderItem);
      });
      this.$router.push({
        name: "orderform",
        params: {
          initCartItems: toOrderItemList,
          initMemberInfo: initMemberInfo,
        },
      });
    },
    // 체크박스 선택 상품 삭제 메서드
    async deleteSelected() {
      let delItems = [];
      this.selectedItems.forEach((item) => {
        delItems.push(item.productStock.pstockid);
      });
      const response = await cart.deleteSelected(delItems);
      // 새로고침
      this.$router.go();
    },
    async deleteOneItem(pstockid) {
      console.log("pstockid =", pstockid);
      const response = await cart.deleteOneItem(pstockid);
      this.$router.go();
    },
  },
  beforeCreate() {
    cart.cartItems().then((response) => {
      this.cartItems = response.data;
      this.cartSize = response.data.length;
      console.log("response.data =", response.data);
      console.log("response.data.length =", this.cartSize);
    });
  },
  computed: {
    selectAll: {
      // 체크박스들이 전체 선택되면 true를 반환 아니면 false를 반환
      get: function () {
        return this.cartItems ? this.selectedItems.length == this.cartItems.length : false;
      },

      set: function (value) {
        // tmp
        var selectedItems = [];

        // 마스터 체크박스가 체크된 경우
        if (value) {
          this.cartItems.forEach(function (cartItem) {
            selectedItems.push(cartItem);
          });
        }
        // 마스터 체크박스가 체크되었으면 모든 아이템이 들어갈 것이고, 체크 해제되었으면 빈 리스트가 할당될 것이다.
        this.selectedItems = selectedItems;
      },
    },
    selectCount: {
      get: function () {
        return this.selectedItems.length;
      },
    },
  },
};
</script>

<!--컴포넌트 스타일 정의-->
<!--scoped를 생략하면 전역으로 사용-->
<style scoped></style>