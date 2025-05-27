function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
} 

const currentProductId = parseInt(getQueryParam("id"));

// Kiểm tra xem currentProductId có hợp lệ (là số và trong phạm vi mảng products)
if (Number.isNaN(currentProductId) || currentProductId < 0 || currentProductId >= products.length) {
  document.body.innerHTML = "<h2>Không tìm thấy sản phẩm.</h2>";
} else {
  const product = products[currentProductId];

  document.getElementById("product-image").src = product.image;
  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-price").textContent = `Giá: ${product.price}`;
  document.getElementById("product-description").textContent = product.description;
  document.getElementById("add-to-cart").addEventListener("click", () => {
  addToCart(product.id);
  window.location.href = "/giohang/cart.html";  // <-- chuyển sang trang giỏ hàng
  });
}

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let item = cart.find(i => i.id === id);
  if (item) {
    item.quantity++;
  } else {
    cart.push({ id: id, quantity: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Đã thêm sản phẩm vào giỏ hàng!');
}
