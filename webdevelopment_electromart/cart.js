let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderCart() {
    const cartItems = document.querySelector('.cart-items');
    cartItems.innerHTML = '';

    let total = 0;
    cart.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price.toFixed(2)}</p>
            <button class="remove" data-id="${product.id}">Remove</button>
        `;
        cartItems.appendChild(productElement);

        total += product.price;
    });

    document.getElementById('cart-total').textContent = total.toFixed(2);

    document.querySelectorAll('.remove').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id, 10);
            removeFromCart(productId);
        });
    });
}

function removeFromCart(productId) {
    cart = cart.filter(product => product.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    updateCartCount();
}

document.addEventListener('DOMContentLoaded', renderCart);

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderCart();
    updateCartCount();
});

function renderCart() {
    const cartItems = document.querySelector('.cart-items');
    cartItems.innerHTML = '';

    let total = 0;
    cart.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price.toFixed(2)}</p>
            <button class="remove" data-id="${product.id}">Remove</button>
        `;
        cartItems.appendChild(productElement);

        total += product.price;
    });

    document.getElementById('cart-total').textContent = total.toFixed(2);

    document.querySelectorAll('.remove').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.getAttribute('data-id'), 10);
            removeFromCart(productId);
        });
    });
}

function removeFromCart(productId) {
    cart = cart.filter(product => product.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    updateCartCount();
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderCart();
    updateCartCount();
});
