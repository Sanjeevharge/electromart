
const products = [
    { id: 1, name: 'Galaxy tab s8', price:  45000, category: 'tabs', popularity: 5, img: 'tab s8.png' },
    { id: 2, name: 'Galaxy tab s8 ultra', price: 60000, category: 'tabs', popularity: 3, img: 'tab s8 ultra.png' },
    { id: 3, name: 'Galaxy watch 6 classic', price: 35999, category: 'watches', popularity: 5, img: 'watch 1 a.png' },
    { id: 4, name: 'Galaxy watch 6', price: 29999, category: 'watches', popularity: 4, img: 'watch 6.png'},
    { id: 5, name: 'Galaxy watch 5', price: 27999, category: 'watches', popularity: 5, img: 'watch 2.png'},
    { id: 6, name: 'Galaxy watch 5 classic', price:30999, category: 'watches', popularity: 4, img: 'watch 2 a.png'},
    { id: 7, name: 'Galaxy s23', price: 59999, category: 'phones', popularity: 4, img: 'phone s23.png'},
    { id: 8, name: 'Galaxy s23 ultra', price: 89999, category: 'phones', popularity: 4, img: 'phone s23 ultra.png'},
    { id: 9, name: 'WindFree Inverter Split 1.5 ton', price: 50099, category: 'AC', popularity: 4, img: 'ac.png'},
    { id: 10, name: 'Alienware m16', price: 150099, category: 'laptops', popularity: 4, img: 'alienware m16.png'},
    { id: 9, name: 'Alienware x16', price: 250099, category: 'laptops', popularity: 4, img: 'alienware x18.png'},
    { id: 9, name: 'Alienware m18', price: 350099, category: 'laptops', popularity: 4, img: 'alienware m18.png'},



    // Add more products here
];

const productsPerPage = 4;
let currentPage = 1;
let filteredProducts = [...products];
function filterProducts() {
    const category = document.getElementById('category').value;
    const priceRange = document.getElementById('price-range').value;

    filteredProducts = products.filter(product => {
        let inCategory = category === 'all' || product.category === category;
        let inPriceRange = true;

        if (priceRange !== 'all') {
            const [min, max] = priceRange.split('-').map(Number);
            inPriceRange = product.price >= min && product.price <= max;
        }

        return inCategory && inPriceRange;
    });

    sortProducts();
    renderProducts();
}

function sortProducts() {
    const sortOption = document.getElementById('sort').value;

    filteredProducts.sort((a, b) => {
        if (sortOption === 'price-low-high') {
            return a.price - b.price;
        } else if (sortOption === 'price-high-low') {
            return b.price - a.price;
        } else if (sortOption === 'popularity') {
            return b.popularity - a.popularity;
        } else if (sortOption === 'newest') {
            return b.id - a.id;
        }
        return 0;
    });
}

function renderProducts() {
    const productGrid = document.querySelector('.product-list .product-grid');
    productGrid.innerHTML = '';

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    paginatedProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price.toFixed(2)}</p>
            <button>Add to Cart</button>
        `;
        productGrid.appendChild(productElement);
    });

    renderPagination();
}

function renderPagination() {
    const pagination = document.querySelector('.pagination');
    pagination.innerHTML = '';

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    if (currentPage > 1) {
        const prevLink = document.createElement('a');
        prevLink.href = '#';
        prevLink.innerHTML = '&laquo; Previous';
        prevLink.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage--;
            renderProducts();
        });
        pagination.appendChild(prevLink);
    }

    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement('a');
        pageLink.href = '#';
        pageLink.textContent = i;
        pageLink.classList.toggle('active', i === currentPage);
        pageLink.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage = i;
            renderProducts();
        });
        pagination.appendChild(pageLink);
    }

    if (currentPage < totalPages) {
        const nextLink = document.createElement('a');
        nextLink.href = '#';
        nextLink.innerHTML = 'Next &raquo;';
        nextLink.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage++;
            renderProducts();
        });
        pagination.appendChild(nextLink);
    }
}

document.getElementById('category').addEventListener('change', filterProducts);
document.getElementById('price-range').addEventListener('change', filterProducts);
document.getElementById('sort').addEventListener('change', () => {
    sortProducts();
    renderProducts();
});

filterProducts();
function renderPagination() {
    const pagination = document.querySelector('.pagination');
    pagination.innerHTML = '';

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    if (currentPage > 1) {
        const prevLink = document.createElement('a');
        prevLink.href = '#';
        prevLink.innerHTML = '&laquo; Previous';
        prevLink.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage--;
            renderProducts();
        });
        pagination.appendChild(prevLink);
    }

    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement('a');
        pageLink.href = '#';
        pageLink.textContent = i;
        pageLink.classList.toggle('active', i === currentPage);
        pageLink.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage = i;
            renderProducts();
        });
        pagination.appendChild(pageLink);
    }

    if (currentPage < totalPages) {
        const nextLink = document.createElement('a');
        nextLink.href = '#';
        nextLink.innerHTML = 'Next &raquo;';
        nextLink.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage++;
            renderProducts();
        });
        pagination.appendChild(nextLink);
    }
}
function renderProducts() {
    const productGrid = document.querySelector('.product-list .product-grid');
    productGrid.innerHTML = '';

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    paginatedProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <a href="product_detail.html?id=${product.id}">
                <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
            </a>
            
        `;
        productGrid.appendChild(productElement);
    });

    renderPagination();
}
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    filterProducts();
});

