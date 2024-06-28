document.addEventListener('DOMContentLoaded', () => {
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-slide img');

    let counter = 0;
    const size = carouselImages[0].clientWidth;

    function updateCarousel() {
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    function autoSlide() {
        counter++;
        if (counter >= carouselImages.length) {
            counter = 0;
        }
        updateCarousel();
    }

    setInterval(autoSlide, 3000); // Change image every 3 seconds

    window.addEventListener('resize', () => {
        const newSize = carouselImages[0].clientWidth;
        carouselSlide.style.transition = "none";
        carouselSlide.style.transform = 'translateX(' + (-newSize * counter) + 'px)';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const slide = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-slide img, .carousel-slide video');

    let counter = 0;
    const size = images[0].clientWidth;

    setInterval(() => {
        if (counter >= images.length - 1) {
            counter = 0;
        } else {
            counter++;
        }
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }, 3000);

    // Add to cart functionality
    const cart = [];

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const product = button.getAttribute('data-product');
            cart.push(product);
            alert(`${product} added to cart`);
            console.log('Cart:', cart); // To see the current cart content
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Carousel Functionality
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-slide img, .carousel-slide video');

    let counter = 0;
    const size = carouselImages[0].clientWidth;

    function updateCarousel() {
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    function autoSlide() {
        counter++;
        if (counter >= carouselImages.length) {
            counter = 0;
        }
        updateCarousel();
    }

    setInterval(autoSlide, 3000); // Change image every 3 seconds

    window.addEventListener('resize', () => {
        const newSize = carouselImages[0].clientWidth;
        carouselSlide.style.transition = "none";
        carouselSlide.style.transform = 'translateX(' + (-newSize * counter) + 'px)';
    });

    // Add to cart functionality
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCartCount() {
        const cartCount = document.getElementById('cart-count');
        if (cartCount) {
            cartCount.textContent = cart.length;
        }
    }

    updateCartCount();

    const recommendedProducts = [
        { id: 1, name: 'Galaxy tab s8', price: 45000, category: 'tabs', popularity: 5, img: 'tab s8.png' },
        { id: 2, name: 'Galaxy tab s8 ultra', price: 60000, category: 'tabs', popularity: 3, img: 'tab s8 ultra.png' },
        { id: 3, name: 'Galaxy watch 6 classic', price: 35999, category: 'watches', popularity: 5, img: 'watch 1 a.png' },
        { id: 4, name: 'Galaxy watch 6', price: 29999, category: 'watches', popularity: 4, img: 'watch 6.png' }
    ];

    function renderRecommendedProducts() {
        const recommendedProductGrid = document.getElementById('recommended-product-grid');
        recommendedProductGrid.innerHTML = '';

        recommendedProducts.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <a href="product.html?id=${product.id}">
                    <img src="${product.img}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>₹${product.price.toFixed(2)}</p>
                </a>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            `;
            recommendedProductGrid.appendChild(productElement);
        });

        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = parseInt(e.target.getAttribute('data-id'), 10);
                const product = recommendedProducts.find(p => p.id === productId);
                if (product) {
                    cart.push(product);
                    localStorage.setItem('cart', JSON.stringify(cart));
                    updateCartCount();
                    alert(`${product.name} added to cart`);
                }
            });
        });
    }

    renderRecommendedProducts();
});
