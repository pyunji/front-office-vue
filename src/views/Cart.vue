<!--컴포넌트 UI 정의-->
<template>
  <v-container fluid>
    <v-row>
      <div width="100%" outlined>
        <v-checkbox id="masterCheckbox" v-model="selectAll" label="전체 선택"></v-checkbox>
        <p>selectedItems:{{ selectedItems }}</p>
      </div>
    </v-row>

    <v-row>
      <v-card width="100%" v-for="(cartItem, i) in cartItems" :key="i">
        <v-card class="d-flex align">
          <v-checkbox> </v-checkbox>

          <v-btn>
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card>
        <v-card class="d-flex align-end flex-column">
          <p>{{ cartItem.bname }}</p>
          <p>{{ cartItem.pname }}</p>
          <p>{{ cartItem.pprice }}</p>
        </v-card>
        <div>
          <button v-for="(option, i) in cartItem.optionList" :key="i">
            <v-img :src="option.colorImg" width="20" height="20"></v-img>
          </button>
        </div>
        <div v-for="(option, i) in cartItem.optionList" :key="i">
          <v-btn v-for="(scodeObj, i) in option.scodeList" :key="i">
            {{ scodeObj.scode }}
          </v-btn>
        </div>
      </v-card>
    </v-row>
    <v-row>
      <v-col>
        <v-btn  v-on:click="deleteSelected" width="100%" outlined> 품절 상품 삭제 </v-btn>
      </v-col>
      <v-col>
        <v-btn  v-on:click="deleteSelected" width="100%" outlined> 선택 상품 삭제 </v-btn>
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
    // orderform으로 가는 메서드
    toOrderForm() {
      let cartItems = [];
      this.selectedItems.forEach((item) => {
        let cartItem = {
          "pstockid": item.pstockid,
          "quantity": Number(item.quantity),
          "pprice": Number(item.pprice),
          "appliedPrice":Number(item.quantity) * Number(item.pprice),
          "img1": item.img1,
          "scode": item.oscode,
          "ccode": item.occode,
        };
        cartItems.push(cartItem);
      });
      console.log("cartItems =", cartItems);
      this.$router.push({
        name: 'orderform',
        params: {initCartItems: cartItems}
      })
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
