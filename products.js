// products.js

const products = [
  {
    id: 1,
    name: 'Màn hình HKC MB27V9 27" IPS 75Hz',
    price: '2.050.000đ',
    image: '/img/MH1.png',
    detail: '/chitiet/product-detail2.html?id=0',
    description: "Màn hình 27 inch IPS độ phân giải Full HD, tần số quét 75Hz, phù hợp cho làm việc và giải trí nhẹ."
  },
  {
    id: 2,
    name: 'Bàn phím AULA S98 PRO TM',
    price: '1.500.000đ',
    image: '/img/BP1.png',
    detail: '/chitiet/product-detail2.html?id=0',
    description: "Bàn phím cơ với switch Wood V4, thiết kế hiện đại, gõ êm tay, có đèn LED RGB nổi bật."
  },
  {
    id: 3,
    name: 'Tai nghe HP HYPERX Cloud Earbuds II Red',
    price: '850.000đ',
    image: '/img/TN1.png',
    detail: '/chitiet/product-detail2.html?id=0',
    description: "Tai nghe nhét tai chuyên game, âm thanh sống động, tích hợp mic chống ồn."
  },
  {
    id: 4,
    name: 'Chuột Razer Cobra',
    price: '900.000đ',
    image: '/img/C.png',
    detail: 'product-detail2.html?id=0',
    description: "Chuột gaming thiết kế ergonomic, độ nhạy cao, switch bền bỉ, đèn RGB cực chất."
  },
  {
    id: 5,
    name: 'Bàn Gaming E-DRA EGT1460A',
    price: '2.690.000đ',
    image: '/img/B.png',
    detail: 'product-detail2.html?id=0',
    description: "Bàn gaming rộng rãi, mặt vân carbon, tích hợp khe cắm điện thoại và giá treo tai nghe."
  },
  {
    id: 6,
    name: 'Chuột không dây',
    price: '1.690.000đ',
    image: '/img/mouse.webp',
    detail: 'product-detail2.html?id=0',
    description: "Chuột không dây kết nối nhanh, thời lượng pin dài, thiết kế gọn nhẹ."
  },
  {
    id: 7,
    name: 'Bàn phím cơ cao cấp',
    price: '2.590.000đ',
    image: '/img/bp2.webp',
    detail: 'product-detail2.html?id=0',
    description: "Bàn phím cơ custom với keycap chất lượng cao, cảm giác gõ tuyệt vời, hỗ trợ macro."
  },
  {
    id: 8,
    name: 'Ghế công thái học E-Dra EEC22',
    price: '1.790.000đ',
    image: '/img/G.png',
    detail: 'product-detail2.html?id=0',
    description: "Ghế công thái học nâng đỡ lưng tốt, chống mỏi, thích hợp làm việc lâu dài."
  }
];


function displayProducts() {
  const grid = document.querySelector('.grid');
  products.forEach((product, index) => {
    const box = document.createElement('div');
    box.className = 'box';
    box.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Giá: ${product.price}</p>
      <a href="/chitiet/product-detail2.html?id=${product.id}">Xem chi tiết</a>
    `;
    grid.appendChild(box);
  });
}

document.addEventListener('DOMContentLoaded', displayProducts);

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

function displayProducts() {
  const grid = document.querySelector('.grid');
  if (!grid) {
    console.error('Không tìm thấy phần tử .grid trong DOM!');
    return;
  }

  grid.innerHTML = ''; // tránh trùng lặp

  products.forEach(product => {
    const box = document.createElement('div');
    box.className = 'box';
    box.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Giá: ${product.price}</p>
      <button onclick="addToCart(${product.id})">Thêm vào giỏ hàng</button>
      <a href="${product.detail}">Xem chi tiết</a>
    `;
    grid.appendChild(box);
  });
}


document.addEventListener('DOMContentLoaded', displayProducts);
