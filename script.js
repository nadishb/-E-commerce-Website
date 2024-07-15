const products = [
    { id: 1, name: "Product 1", price: 10, img: "8-white-leaf-8-urbanbox-white-black-original-imagvgf4cuzs2hrw.webp" },
    { id: 2, name: "Product 2", price: 20, img: "images.jpg" },
    { id: 3, name: "Product 3", price: 30, img: "images (2).jpg" },
];

const cart = [];

function displayProducts() {
    const productList = document.getElementById('productList');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

function displayCart() {
    const cartList = document.getElementById('cartList');
    cartList.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p>$${item.price}</p>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartList.appendChild(cartItemDiv);
        total += item.price;
    });
    document.getElementById('cartTotal').textContent = `Total: $${total}`;
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    displayCart();
}

function removeFromCart(productId) {
    const productIndex = cart.findIndex(p => p.id === productId);
    if (productIndex > -1) {
        cart.splice(productIndex, 1);
    }
    displayCart();
}

document.getElementById('checkoutButton').addEventListener('click', () => {
    alert('Checkout functionality is not implemented yet.');
});

window.onload = () => {
    displayProducts();
    displayCart();
};
