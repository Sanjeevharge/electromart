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
    { id: 10, name: 'Galaxy 360 degrees flip tablet cover', price: 499, category: 'tab cover', popularity: 5, img: 'tab cover1.png',description:'CEDO 360 degrees rotating swivel allows the tab to rotate both flexible vertically and horizontally while in the case' },
    { id: 11, name: 'Galaxy flip cover', price: 299, category: 'tab cover', popularity: 3, img: 'tab cover 2.png',description:'SmartLike Flip Cover with Anti-Shock Cushion Technology for protection against small and accidental drops Easy to Install and remove' },
    { id: 12, name: 'Galaxt flip cover (cream)', price: 299, category: 'tab cover', popularity: 5, img: 'tab cover 3.png', description:'SmartLike Flip Cover with Anti-Shock Cushion Technology for protection against small and accidental drops Easy to Install and remove' },
    { id: 13, name: 'Strap LT laptop bag', price: 699, category: 'laptop bags', popularity: 4, img: 'lappy bag1.png',description:'StrapLt laptop case is made of premium nylon fabric and soft puffy fabric inside which protects your device from scratches' },
    { id: 14, name: 'Gizga Essenatials', price: 650, category: 'laptop bags', popularity: 5, img: 'lappy bag 2.png',description:'14 Inch Laptop Sleeve Extra soft, The anti-static, Featuring three layers protection with water repellent layer, shockproof layer and fluffy fabric inner layer' },
    { id: 15, name: 'Clear mag safe case', price: 1200, category: 'phone cover', popularity: 4, img: 'iphone cover.png',description:'Seize for your phone, accessories that just click. Stride 2.0 Clear MagSafe Phone Case can be one such accessory for you' },
    { id: 16, name: 'Mobile Pouch A05', price: 1000, category: 'phone cover', popularity: 4, img: 'samsung cover1.png',description:'Mobile case cover for Premium quality case cover to protect and make your mobile look even more stylish.' },
    { id: 17, name: 'Universal watch bands', price: 300, category: 'watch straps', popularity: 4, img: 'wast.png',description:'Grey-Orange Rim Snap On Universal WatchBand for Samsung/OnePlus/Fitbit Smartwatches (20mm)' },
    { id: 18, name: 'Watch bands', price: 500, category: 'watch straps', popularity: 4, img: 'wast2.png',description:'Black-Lime Annex Silicone Universal WatchBand for Samsung/OnePlus/Fitbit Smartwatches (20mm)' },
    { id: 19, name: 'Ojos Earpods case', price: 1500, category: 'earpods covers', popularity: 4, img: 'ojos.png',description:'OJOS Earpods Case, Soft Silicone Shockproof Armor Protective Lightweight Carrying EarpodsAccessories Case Cover for Apple Airpod Charging Box - Black' },
    { id: 20, name: 'Scalebee Case', price: 1200, category: 'earpods covers', popularity: 4, img: 'scal.png',description:'Scalebee Case Compatible with Samsung Galaxy Buds 2 Pro/Galaxy Buds 2/ Galaxy Buds Pro/Galaxy Buds Live Case Hard Case Cover (Clear) (EARPOD NOT Included)' },
    { id: 21, name: 'Alienware m16', price: 150099, category: 'laptops', popularity: 4, img: 'alienware m16.png',description:'Featuring Intel® Core™ Ultra H Processors with built-in AI for endurance gaming. The redesigned chassis with updated thermals and Stealth Mode let you seamlessly transitions from gaming to productivity to anything you love to do.'},
    { id: 22, name: 'Alienware x16', price: 250099, category: 'laptops', popularity: 4, img: 'alienware x16.png',description:'Our latest and most premium laptop combines our streamlined Legend 3 design, exclusive AlienFX lighting and a full metal chassis. Features AI power efficiency using Intel Core Ultra processors'},
    { id: 23, name: 'Alienware m18', price: 350099, category: 'laptops', popularity: 4, img: 'alienware m18.png',description:'Dell Alienware m18 18 Laptop Core i9 FHD 13th Generation RTX 4090 16GB RAM 6'},
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
        document.getElementById('product-price').textContent = `Rs${product.price.toFixed(2)}`;
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
        document.getElementById('product-price').textContent = `Rs${product.price.toFixed(2)}`;
        document.getElementById('product-description').textContent = product.description;

        document.getElementById('add-to-cart').addEventListener('click', () => addToCart(product));
    } else {
        document.querySelector('.product-detail').innerHTML = '<p>Product not found</p>';
    }
}

document.addEventListener('DOMContentLoaded', loadProductDetails);

