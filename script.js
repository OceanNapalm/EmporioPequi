let cart = {};

function addToCart(product, price) {
  if (!cart[product]) {
    cart[product] = { qty: 0, price };
  }
  cart[product].qty++;
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  cartItems.innerHTML = "";
  let total = 0;
  let count = 0;

  for (let product in cart) {
    const item = cart[product];
    total += item.qty * item.price;
    count += item.qty;
    const li = document.createElement("li");
    li.innerText = `${product} x${item.qty} - R$ ${(item.qty * item.price).toFixed(2)}`;
    cartItems.appendChild(li);
  }
  cartCount.innerText = count;
}

function toggleCart() {
  document.getElementById("cart").classList.toggle("hidden");
}

function sendWhatsApp() {
  let message = "Olá, gostaria de comprar:%0A";
  for (let product in cart) {
    const item = cart[product];
    message += `- ${product} x${item.qty} (R$ ${(item.qty * item.price).toFixed(2)})%0A`;
  }
  window.open(`https://wa.me/5511970494975?text=${message}`, "_blank");
}
