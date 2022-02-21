import useForm from "../hooks/useForm.js";
import {
  addToCart
} from "../user/cart.js";

const afterSuccessFullSubmit = (response) => {
  const products = JSON.parse(response);
  const productsListElm = document.getElementById("products-list");
  console.log(products);
  for (const product of products) {
    console.log(product);
    const productElm = document.createElement("li");
    const productButtonElm = document.createElement("button");
    productButtonElm.addEventListener("click", () => addToCart(product));
    productButtonElm.innerHTML = "Add to Cart";
    productElm.innerHTML = "<li>" + product.title + "<li>";
    productElm.appendChild(productButtonElm);
    productsListElm.appendChild(productElm);
  }
};

const afterFailedSubmit = () => {  
  alert("I'm nothing");
};

useForm(
  "form-all-product", {
    initialData: {
      userId: parseInt(localStorage.getItem("userId"))
    }
  }, {
    successful: afterSuccessFullSubmit,
    failed: afterFailedSubmit,
  }
);