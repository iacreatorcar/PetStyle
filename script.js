const products = [
    { id: 1, name: "Impermeabile Giallo", price: 25.99, img: "https://via.placeholder.com/200" },
    { id: 2, name: "Pettorina Ergonomica", price: 18.50, img: "https://via.placeholder.com/200" },
    { id: 3, name: "Maglioncino in Lana", price: 22.00, img: "https://via.placeholder.com/200" }
];

let cartCount = 0;

function displayProducts() {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = products.map(p => `
        <div class="product-card">
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>€${p.price.toFixed(2)}</p>
            <button class="btn" onclick="addToCart()">Aggiungi al Carrello</button>
        </div>
    `).join('');
}

function addToCart() {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert("Prodotto aggiunto al carrello!");
}

// Inizializza lo shop
displayProducts();
