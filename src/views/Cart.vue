<!--컴포넌트 UI 정의-->
<template>
  <v-container fluid class="p-0">
    <v-card outlined>
      <v-row> 
        <v-col cols="4" class="pb-0 pt-0">
          <!-- <p>selectedItems:{{ selectedItems }}</p> -->
          <v-checkbox id="masterCheckbox" @click="[updateTotalPrice(),updateSelectedItems()]" v-model="selectAll" label="전체 선택"></v-checkbox>
          
        </v-col>
      </v-row>
   </v-card> 
      <div class="mt-7">
        <v-card v-for="(cartItem, i) in cartItems" :key="i" outlined tile>

          <v-row>
            <v-col cols="6" class="pb-0">
              <v-checkbox class="m-0" @click="[updateTotalPrice(),updateSelectedItems()]" v-model="selectedItems" :value="cartItems[i]" :disabled="cartItem.stock==0" :readonly="cartItem.stock==0"> </v-checkbox>
            </v-col>
            <v-col cols="6">
              <btn style="float: right" @click="deleteOneItem(cartItem.pstockid)"><v-icon>mdi-close</v-icon></btn>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="3" class="pt-0">
              <v-img class="ml-2" :src="cartItem.img1" width="80" height="90" />
            </v-col>
            <v-col cols="5" class="pt-0">
              <div style="font-weight: bold">{{ cartItem.bname }}</div>
              <div>{{ cartItem.pname }}</div>
              <div>{{ cartItem.occode }} | {{ cartItem.oscode }}</div>
              <button
                @click="quantity_control(cartItem.pstockid, cartItem.quantity, 'minus')"
                style="margin: 0px;"
                type="button"
                class="btn btn-light left1"
              >
              -
              </button>
          <input
            id="quantity"
            name="quantity"
            type="text"
            class="mr0 text-center"
            :value="cartItem.quantity"
            size="1"
            maxlength="2"
            readonly="readonly"
          />
          <button
            @click="quantity_control(cartItem.pstockid, cartItem.quantity, 'plus')"
            style="margin: 0px"
            type="button"
            class="btn btn-light right1"
          >
            +
          </button>
            </v-col>
            <v-col cols="4">
              <div v-if="cartItem.stock < 5 && cartItem.stock > 0">재고 {{cartItem.stock}}개 남음</div>
              <div v-if="cartItem.stock >= 5">재고 5개 이상</div>
              <div v-if="cartItem.stock <= 0 ">품절</div>
              <div style="font-weight: bold; font-size: large">{{ cartItem.pprice }}원</div>
              
            </v-col>
          </v-row>
        <!-- <v-row>
          <v-col cols ="12">
          </v-col>
        </v-row> -->
        </v-card>
      </div>
    
    <v-row class="mt-3">
      <v-col>
        <v-btn v-on:click="deleteOutOfStock" width="100%" outlined  style="background-color: white;"> 품절 상품 삭제 </v-btn>
      </v-col>
      <v-col>
        <v-btn v-on:click="deleteSelected" width="100%" outlined style="background-color: white;"> 선택 상품 삭제 </v-btn>
      </v-col>
    </v-row>
    <v-row>
    </v-row>
  </v-container>
</template>

<script>
import cart from "@/apis/member/cart";
import orderform from "@/apis/member/orderform";
import { eventBus } from '../main'
export default {
  //컴포넌트의 대표 이름(devtools에 나오는 이름)
  name: "Cart",
  //추가하고 싶은 컴포넌트들 목록
  // components: {},
  //컴포넌트 데이터 정의
  data: function () {
    return {
      checkbox: true,
      cartItems: [],
      cartSize: 0,
      selectedItems: [],
      selectedOneItem: null,
      ableToCheckCount: 0
    };
  },

  methods: {
    // 체크박스 누를 때 마다 실행
    updateTotalPrice() {
      let totalPrice = 0;
      this.selectedItems.forEach((item) => {
        totalPrice += item.pprice * item.quantity;
      });
      // 이벤트 버스로 데이터 전달
      eventBus.setTotalPrice(totalPrice);
    },
    updateSelectedItems() {
      eventBus.setToOrderItems(this.selectedItems);
    },
    async quantity_control(pstockid, quantity, operator) {
      let value = quantity;
      // 마이너스 버튼을 눌렀을 경우
      if (operator === "minus") {
        // 현재 값이 1보다 큰 경우만 값을 빼준다
        if (value > 1) {
          // 뺀 값을 value에 다시 넣어준다
          value = value - 1;
        }
        // 플러스 버튼을 눌렀을 경우
      } else if (operator === "plus") {
        // 값을 더해준다
        value = value + 1;
      }
      // 기존 수량과 바뀐 수량이 다를 경우에만 DB에 접근한다.
      if (value !== quantity) {
        let map = {
          pstockid: pstockid,
          quantity: value,
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
    // 품절 상품 삭제 메서드
    async deleteOutOfStock() {
      let delItems = [];
      this.cartItems.forEach((item) => {
        if (item.stock <= 0) delItems.push(item.pstockid);
      });
      // 품절 상품이 하나도 없으면 아무 일도 안일어남
      if (delItems.length == 0) return;
      else {
        await cart.deleteSelected(delItems);
        this.$router.go();
      }
    },

    // 체크박스 선택 상품 삭제 메서드
    async deleteSelected() {
      let delItems = [];
      this.selectedItems.forEach((item) => {
        delItems.push(item.pstockid);
      });
      const response = await cart.deleteSelected(delItems);
      // 새로고침
      this.$router.go();
    },
    async deleteOneItem(pstockid) {
      console.log("pstockid =", pstockid);
      await cart.deleteOneItem(pstockid);
      this.$router.go();
    },
  },
  beforeCreate() {
    cart.cartItems().then((response) => {
      let cartItems = response.data;
      this.cartItems = cartItems;
      let ableToCheckCount = 0;
      cartItems.forEach((item) => {
        if(item.stock > 0) {
          ableToCheckCount++;
        }
      });
      // 품절되지 않은 상품의 개수
      this.ableToCheckCount = ableToCheckCount;
      this.cartSize = response.data.length;
      console.log("response.data =", response.data);
      console.log("response.data.length =", this.cartSize);
    });
  },
  computed: {
    selectAll: {
      // 품절상품 제외 체크박스들이 전체 선택되면 true를 반환 아니면 false를 반환
      get: function () {
        // if(this.selectedItems.length == this.ableToCheckCount) return true;
        // else return false;
        return this.selectedItems ? this.selectedItems.length == this.ableToCheckCount : false;
      },

      set: function (value) {
        // tmp
        var selectedItems = [];

        // 마스터 체크박스가 체크된 경우
        if (value) {
          this.cartItems.forEach(function (cartItem) {
            if(cartItem.stock>0) {
              selectedItems.push(cartItem);
            }
          });
        }
        // 마스터 체크박스가 체크되었으면 모든 아이템이 들어갈 것이고, 체크 해제되었으면 빈 리스트가 할당될 것이다.
        this.selectedItems = selectedItems;
      },
    },
    // selectCount: {
    //   get: function () {
    //     return this.selectedItems.length;
    //   },
    // },
  },
};
</script>

<!--컴포넌트 스타일 정의-->
<!--scoped를 생략하면 전역으로 사용-->
<style scoped>

</style>
