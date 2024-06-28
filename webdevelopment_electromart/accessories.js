const products = [
    { id: 1, name: 'Galaxy 360 degrees flip tablet cover', price: 499, category: 'tab cover', popularity: 5, img: 'tab cover1.png' },
    { id: 2, name: 'Galaxy flip cover', price: 299, category: 'tab cover', popularity: 3, img: 'tab cover 2.png' },
    { id: 3, name: 'Galaxt flip cover (cream)', price: 299, category: 'tab cover', popularity: 5, img: 'tab cover 3.png' },
    { id: 4, name: 'Strap LT laptop bag', price: 699, category: 'laptop bags', popularity: 4, img: 'lappy bag1.png' },
    { id: 5, name: 'Gizga Essenatials', price: 650, category: 'laptop bags', popularity: 5, img: 'lappy bag 2.png' },
    { id: 6, name: 'Clear mag safe case', price: 1200, category: 'phone cover', popularity: 4, img: 'iphone cover.png' },
    { id: 7, name: 'Mobile Pouch A05', price: 1000, category: 'phone cover', popularity: 4, img: 'samsung cover1.png' },
    { id: 8, name: 'Universal watch bands', price: 300, category: 'watch straps', popularity: 4, img: 'wast.png' },
    { id: 9, name: 'Watch bands', price: 500, category: 'watch straps', popularity: 4, img: 'wast2.png'},
    { id: 10, name: 'Ojos Earpods case', price: 1500, category: 'earpods covers', popularity: 4, img: 'ojos.png' },
    { id: 11, name: 'Scalebee Case', price: 1200, category: 'earpods covers', popularity: 4, img: 'scal.png' },

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
        <a href="accessories_detail.html?id=${product.id}">
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₹${product.price.toFixed(2)}</p>
    </a>
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
            <a href="accessories_detail.html?id=${product.id}">
                <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>₹${product.price.toFixed(2)}</p>
            </a>
            
        `;
        productGrid.appendChild(productElement);
    });

    renderPagination();
}
