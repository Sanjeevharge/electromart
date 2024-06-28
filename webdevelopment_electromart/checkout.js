document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('checkout-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Here you can collect form data and send it to your server if needed.
        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const paymentMode = document.getElementById('payment-mode').value;

        // Display order confirmation popup
        alert(`Order placed successfully!\nName: ${name}\nAddress: ${address}\nPayment Mode: ${paymentMode}`);
        
        // Clear the cart after placing the order
        localStorage.removeItem('cart');
        
        // Redirect to the home or product page
        window.location.href = 'index.html';
    });

    updateCartCount();
});

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}
