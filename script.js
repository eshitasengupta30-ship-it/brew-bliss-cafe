
let cartCount = 0;
let totalAmount = 0;

function addToCart(name, price) {

    cartCount++;
    totalAmount += price;

    document.getElementById("cart-count").innerText = cartCount;

    document.getElementById("cart-total").innerText =
        "Total: ₹" + totalAmount;

    alert(name + " added to your cart!");
}
