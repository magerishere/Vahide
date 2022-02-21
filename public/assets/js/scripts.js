//hooks
import useRoutesGuard from "./hooks/useRoutesGuard.js";
//helpers
import removeUnusedElement from "./helper/removeUnusedElement.js";
useRoutesGuard();
removeUnusedElement();


export const refreshCart = () => {
    const cartItems = localStorage.getItem("cartItems") ?
        JSON.parse(localStorage.getItem("cartItems")) :
        [];
    let cartItemsQty = 0;
    cartItems.forEach(cartItem => cartItemsQty += cartItem.qty);

    // document.getElementById("cart").innerHTML = `(${cartItemsQty})`; //ES6
    document.getElementById("cart").innerHTML = "(" + cartItemsQty + ")"; //ES5
    return {
        cartItems
    };
}
refreshCart();