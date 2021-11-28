import axios from "axios";

function cartItems() {
  return axios.get("/cart");
}

export default {
  cartItems,
}