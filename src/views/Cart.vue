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
            <v-col cols="4">
            <v-img :src="cartItem.img1" width="100" height="100"/>
            </v-col>
          </v-card>
          <v-card class="d-flex align-end flex-column" flat>
            <p>{{ cartItem.bname }}</p>
            <p>{{ cartItem.pname }}</p>
            <p>{{ cartItem.pprice }}</p>
          </v-card>
          <div>
            <v-card class="m-3">
              <!-- 장바구니 수량 변경 시작 -->
              <button @click="quantity_control(cartItem.pstockid, cartItem.quantity, 'minus')" style="margin: 0px;" type="button" class="btn btn-light left1">-</button>
              <input id="quantity" name="quantity" type="text"  class="mr0" :value="cartItem.quantity" size="1" maxlength="2" readonly="readonly"/>
              <button @click="quantity_control(cartItem.pstockid, cartItem.quantity, 'plus')" style="margin: 0px;" type="button" class="btn btn-light right1">+</button>
              <!-- //장바구니 수량 변경 끝 -->
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
        <button type="button" class="btn btn-secondary" style="color:white; font-weight: bold;"> 주문 배송 조회 </button>
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
    async quantity_control(pstockid, quantity, operator) {
      let value = quantity;
      // 마이너스 버튼을 눌렀을 경우
      if (operator === 'minus') {
        // 현재 값이 1보다 큰 경우만 값을 빼준다
        if (value > 1) {
          // 뺀 값을 value에 다시 넣어준다
          value = value - 1;
        }
      // 플러스 버튼을 눌렀을 경우
      } else if (operator === 'plus') {
        // 값을 더해준다
        value = value + 1;
      }
      // 기존 수량과 바뀐 수량이 다를 경우에만 DB에 접근한다.
      if (value !==quantity) {
        let map = {
          "pstockid": pstockid,
          "quantity": value
        };

        await cart.updateQuantity(map);
        // 새로고침
        this.$router.go();
      }
    },
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
