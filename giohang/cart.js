

const products = [
  // Giữ nguyên danh sách sản phẩm từ products.js của bạn, cần có id thêm:
  { id: 1, name: 'Màn hình HKC MB27V9 27" IPS 75Hz', price: 2050000, image: '/img/MH1.png' },
  { id: 2, name: 'Bàn phím AULA S98 PRO TM', price: 1500000, image: '/img/BP1.png' },
  { id: 3, name: 'Tai nghe HP HYPERX Cloud Earbuds II Red', price: 850000, image: '/img/TN1.png' },
  { id: 4, name: 'Chuột Razer Cobra', price: 900000, image: '/img/C.png' },
  { id: 5, name: 'Bàn Gaming E-DRA EGT1460A', price: 2690000, image: '/img/B.png' },
  { id: 6, name: 'Chuột không dây', price: 1690000, image: '/img/mouse.webp' },
  { id: 7, name: 'Bàn phím cơ cao cấp', price: 2590000, image: '/img/bp2.webp' },
  { id: 8, name: 'Ghế công thái học E-Dra EEC22', price: 1790000, image: '/img/G.png' }
];

// Lấy cart từ localStorage
function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

// Lưu cart vào localStorage
function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Tìm sản phẩm theo id
function findProductById(id) {
  return products.find(p => p.id === id);
}

// Format tiền (đơn giản, thêm dấu chấm phân cách hàng nghìn)
function formatPrice(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + 'đ';
}

// Tính tổng tiền toàn giỏ
function calculateTotal(cart) {
  return cart.reduce((sum, item) => {
    const product = findProductById(item.id);
    if (!product) return sum;
    return sum + product.price * item.quantity;
  }, 0);
}

// Hiển thị giỏ hàng
function renderCart() {
  const cart = getCart();
  const tbody = document.getElementById('cart-body');
  tbody.innerHTML = '';

  if (cart.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6">Giỏ hàng trống</td></tr>';
    document.getElementById('total-price').textContent = '0đ';
    document.getElementById('checkout-btn').disabled = true;
    return;
  }

  cart.forEach(item => {
    const product = findProductById(item.id);
    if (!product) return;

    const tr = document.createElement('tr');

    tr.innerHTML = `
      <td><img src="${product.image}" alt="${product.name}" /></td>
      <td>${product.name}</td>
      <td>${formatPrice(product.price)}</td>
      <td><input type="number" class="qty-input" min="1" value="${item.quantity}" data-id="${item.id}" /></td>
      <td>${formatPrice(product.price * item.quantity)}</td>
      <td><button class="btn-delete" data-id="${item.id}"><i class="fa-solid fa-trash"></i></button></td>
    `;

    tbody.appendChild(tr);
  });

  document.getElementById('total-price').textContent = formatPrice(calculateTotal(cart));
  document.getElementById('checkout-btn').disabled = false;

  // Gắn sự kiện cho input số lượng
  document.querySelectorAll('.qty-input').forEach(input => {
    input.addEventListener('change', e => {
      let id = Number(e.target.getAttribute('data-id'));
      let qty = parseInt(e.target.value);
      if (isNaN(qty) || qty < 1) qty = 1;
      e.target.value = qty;

      updateQuantity(id, qty);
    });
  });

  // Gắn sự kiện cho nút xóa
  document.querySelectorAll('.btn-delete').forEach(btn => {
    btn.addEventListener('click', e => {
      let id = Number(e.currentTarget.getAttribute('data-id'));
      removeFromCart(id);
    });
  });
}

// Cập nhật số lượng
function updateQuantity(id, qty) {
  let cart = getCart();
  let item = cart.find(i => i.id === id);
  if (item) {
    item.quantity = qty;
    saveCart(cart);
    renderCart();
  }
}

// Xóa sản phẩm khỏi giỏ
function removeFromCart(id) {
  let cart = getCart();
  cart = cart.filter(i => i.id !== id);
  saveCart(cart);
  renderCart();
}

document.addEventListener('DOMContentLoaded', () => {
  renderCart();
});
