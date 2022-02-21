import {refreshCart} from "../scripts.js";
const {cartItems} = refreshCart();
const cartListElm = document.getElementById("cart-list");

cartItems.map((cartItem) => {
    const cartItemElm = document.createElement("li");
    cartItemElm.innerHTML = cartItem.title;

    const addToCartElm = document.createElement("button");
    addToCartElm.addEventListener("click", () => addToCart(cartItem));
    addToCartElm.innerHTML = "Add To Cart";

    const removeFromCartElm = document.createElement("button");
    removeFromCartElm.addEventListener("click" , () => removeFromCart(cartItem));
    removeFromCartElm.innerHTML = "remove from cart";

    cartItemElm.appendChild(addToCartElm);
    cartItemElm.appendChild(removeFromCartElm);

    cartListElm.appendChild(cartItemElm);
});

export const addToCart = (item) => {
    const cartItems = localStorage.getItem("cartItems")
     ? JSON.parse(localStorage.getItem("cartItems"))
     : [];
    const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (itemIndex >= 0) {
        // if item exist
        cartItems[itemIndex].qty = cartItems[itemIndex].qty + 1;
        // cartItems[itemIndex].qty ++;
    } else {
        // if item does not exist
        item.qty = 1;
        cartItems.push(item);
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    refreshCart();
};

const removeFromCart = (item) => {
    const cartItems = localStorage.getItem("cartItems")
     ? JSON.parse(localStorage.getItem("cartItems"))
     : [];
    const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    const itemQty = cartItems[itemIndex].qty;
    if (itemQty > 1) {
        // if item exist
        // cartItems[itemIndex].qty -= cartItems[itemIndex].qty - 1;
        // cartItems[itemIndex].qty --;
        cartItems[itemIndex].qty -= 1;
    } else {
        // if item does not exist
        cartItems.splice(itemIndex, 1);
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    refreshCart();
};