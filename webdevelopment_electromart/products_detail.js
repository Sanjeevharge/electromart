const products = [
    { id: 1, name: 'Galaxy tab s8', price:  45000, category: 'tabs', popularity: 5, img: 'tab s8.png' ,description:'The Samsung Galaxy Tab S8 features an 11-inch 120Hz display, Snapdragon 8 Gen 1 chipset, and comes with an S Pen. It offers 8GB RAM, up to 256GB storage, 8000mAh battery, and runs on Android 12 with One UI 4.1'},
    { id: 2, name: 'Galaxy tab s8 ultra', price: 60000, category: 'tabs', popularity: 3, img: 'tab s8 ultra.png',description:'The Samsung Galaxy Tab S8 Ultra boasts a 14.6-inch 120Hz Super AMOLED display, Snapdragon 8 Gen 1 chipset, and includes an S Pen. It offers up to 16GB RAM, 512GB storage, 11200mAh battery, and runs on Android 12 with One UI 4.1' },
    { id: 3, name: 'Galaxy watch 6 classic', price: 35999, category: 'watches', popularity: 5, img: 'watch 1 a.png',description:'The Samsung Galaxy Watch 5 Classic has a rotating bezel, Super AMOLED display, advanced health monitoring, and runs on Wear OS 3 with One UI Watch 4.5' },
    { id: 4, name: 'Galaxy watch 6', price: 29999, category: 'watches', popularity: 4, img: 'watch 6.png',description:'The Samsung Galaxy Watch 5 features a sleek design, Super AMOLED display, advanced health tracking, and runs on Wear OS 3 with One UI Watch 4.5' },
    { id: 5, name: 'Galaxy watch 5', price: 27999, category: 'watches', popularity: 5, img: 'watch 2.png', description:'The Samsung Galaxy Watch 4 features a Super AMOLED display, body composition analysis, advanced health tracking, and runs on Wear OS 3 with One UI Watch 3.5' },
    { id: 6, name: 'Galaxy watch 5 classic', price:30999, category: 'watches', popularity: 4, img: 'watch 2 a.png',description:'The Samsung Galaxy Watch 4 Classic features a rotating bezel, Super AMOLED display, advanced health tracking, and runs on Wear OS 3 with One UI Watch 3.5' },
    { id: 7, name: 'Galaxy s23', price: 59999, category: 'phones', popularity: 4, img: 'phone s23.png',description:'The Galaxy S23 is Samsung newest flagship, boasting a fast processor, top-notch camera setup, and 5G support for a premium smartphone experience' },
    { id: 8, name: 'Galaxy s23 ultra', price: 89999, category: 'phones', popularity: 4, img: 'phone s23 ultra.png',description:'The Galaxy S23 Ultra has a 6.8-inch AMOLED display, top-tier chipset, 108MP camera, S Pen support, and a large battery with fast and wireless charging' },
    { id: 9, name: 'WindFree Inverter Split 1.5 ton', price: 50099, category: 'AC', popularity: 4, img: 'ac.png', description:'Stay comfortable cool with WindFree™ Cooling. It gently and quietly disperses air through 23,000 micro air holes, so there is no unpleasant feeling of cold wind on your skin.' },

];

function getProductById(id) {
    return products.find(product => product.id === id);
}

function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'), 10);

    const product = getProductById(productId);

    if (product) {
        document.getElementById('product-image').src = product.img;
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-price').textContent = `₹${product.price.toFixed(2)}`;
        document.getElementById('product-description').textContent = product.description;
    } else {
        document.querySelector('.product-detail').innerHTML = '<p>Product not found</p>';
    }
}

document.addEventListener('DOMContentLoaded', loadProductDetails);
function addToCart(product) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'), 10);

    const product = getProductById(productId);

    if (product) {
        document.getElementById('product-image').src = product.img;
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-price').textContent = `₹${product.price.toFixed(2)}`;
        document.getElementById('product-description').textContent = product.description;

        document.getElementById('add-to-cart').addEventListener('click', () => addToCart(product));
    } else {
        document.querySelector('.product-detail').innerHTML = '<p>Product not found</p>';
    }
}

document.addEventListener('DOMContentLoaded', loadProductDetails);
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

function addToCart(product) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'), 10);

    const product = getProductById(productId);

    if (product) {
        document.getElementById('product-image').src = product.img;
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-price').textContent = `₹${product.price.toFixed(2)}`;
        document.getElementById('product-description').textContent = product.description;

        document.getElementById('add-to-cart').addEventListener('click', () => addToCart(product));
    } else {
        document.querySelector('.product-detail').innerHTML = '<p>Product not found</p>';
    }
}

document.addEventListener('DOMContentLoaded', loadProductDetails);

