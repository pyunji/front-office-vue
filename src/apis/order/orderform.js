import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:82'
});

function orderForm(cartItems) {
  console.log(cartItems);
  return instance.post("/order/orderform", cartItems)
}