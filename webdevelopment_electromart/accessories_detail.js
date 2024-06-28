const products = [
    { id: 1, name: 'Galaxy 360 degrees flip tablet cover', price: 499, category: 'tab cover', popularity: 5, img: 'tab cover1.png',description:'CEDO 360 degrees rotating swivel allows the tab to rotate both flexible vertically and horizontally while in the case' },
    { id: 2, name: 'Galaxy flip cover', price: 299, category: 'tab cover', popularity: 3, img: 'tab cover 2.png',description:'SmartLike Flip Cover with Anti-Shock Cushion Technology for protection against small and accidental drops Easy to Install and remove' },
    { id: 3, name: 'Galaxt flip cover (cream)', price: 299, category: 'tab cover', popularity: 5, img: 'tab cover 3.png', description:'SmartLike Flip Cover with Anti-Shock Cushion Technology for protection against small and accidental drops Easy to Install and remove' },
    { id: 4, name: 'Strap LT laptop bag', price: 699, category: 'laptop bags', popularity: 4, img: 'lappy bag1.png',description:'StrapLt laptop case is made of premium nylon fabric and soft puffy fabric inside which protects your device from scratches' },
    { id: 5, name: 'Gizga Essenatials', price: 650, category: 'laptop bags', popularity: 5, img: 'lappy bag 2.png',description:'14 Inch Laptop Sleeve Extra soft, The anti-static, Featuring three layers protection with water repellent layer, shockproof layer and fluffy fabric inner layer' },
    { id: 6, name: 'Clear mag safe case', price: 1200, category: 'phone cover', popularity: 4, img: 'iphone cover.png',description:'Seize for your phone, accessories that just click. Stride 2.0 Clear MagSafe Phone Case can be one such accessory for you' },
    { id: 7, name: 'Mobile Pouch A05', price: 1000, category: 'phone cover', popularity: 4, img: 'samsung cover1.png',description:'Mobile case cover for Premium quality case cover to protect and make your mobile look even more stylish.' },
    { id: 8, name: 'Universal watch bands', price: 300, category: 'watch straps', popularity: 4, img: 'wast.png',description:'Grey-Orange Rim Snap On Universal WatchBand for Samsung/OnePlus/Fitbit Smartwatches (20mm)' },
    { id: 9, name: 'Watch bands', price: 500, category: 'watch straps', popularity: 4, img: 'wast2.png',description:'Black-Lime Annex Silicone Universal WatchBand for Samsung/OnePlus/Fitbit Smartwatches (20mm)' },
    { id: 10, name: 'Ojos Earpods case', price: 1500, category: 'earpods covers', popularity: 4, img: 'ojos.png',description:'OJOS Earpods Case, Soft Silicone Shockproof Armor Protective Lightweight Carrying EarpodsAccessories Case Cover for Apple Airpod Charging Box - Black' },
    { id: 11, name: 'Scalebee Case', price: 1200, category: 'earpods covers', popularity: 4, img: 'scal.png',description:'Scalebee Case Compatible with Samsung Galaxy Buds 2 Pro/Galaxy Buds 2/ Galaxy Buds Pro/Galaxy Buds Live Case Hard Case Cover (Clear) (EARPOD NOT Included)' },

]

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
        document.getElementById('product-price').textContent = `Rs${product.price.toFixed(2)}`;
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
