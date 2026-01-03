const products = [
    { 
        id: 1, 
        name: "Maglioncino Invernale Beige", 
        price: 28.99, 
        img: "https://images.unsplash.com/photo-1543465134-934c89495c34?auto=format&fit=crop&w=400&q=80",
        description: "Morbido maglioncino in lana per tenere al caldo il tuo amico a quattro zampe durante l'inverno."
    },
    { 
        id: 2, 
        name: "Pettorina Regolabile Blu", 
        price: 34.50, 
        img: "https://images.unsplash.com/photo-1627916694380-a61f52d2fcd9?auto=format&fit=crop&w=400&q=80",
        description: "Pettorina confortevole e sicura, ideale per le passeggiate quotidiane."
    },
    { 
        id: 3, 
        name: "Cappottino Impermeabile Giallo", 
        price: 39.99, 
        img: "https://images.pexels.com/photos/17621980/pexels-photo-17621980/free-photo-of-cucciolo-cane-cappotto-impermeabile.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=1",
        description: "Proteggi il tuo cane dalla pioggia con stile. Facile da indossare e pulire."
    },
    { 
        id: 4, 
        name: "Collare in Pelle Marrone", 
        price: 19.00, 
        img: "https://images.unsplash.com/photo-1596707328114-f5dd50d69455?auto=format&fit=crop&w=400&q=80",
        description: "Collare elegante e resistente in vera pelle, con fibbia regolabile."
    },
    { 
        id: 5, 
        name: "Gioco per Morso Resistente", 
        price: 12.50, 
        img: "https://images.unsplash.com/photo-1558222212-ab79f993683f?auto=format&fit=crop&w=400&q=80",
        description: "Giocattolo indistruttibile per ore di divertimento e pulizia dei denti."
    },
    { 
        id: 6, 
        name: "Ciotola da Viaggio Pieghevole", 
        price: 9.99, 
        img: "https://images.unsplash.com/photo-1628178044733-652f75ef294f?auto=format&fit=crop&w=400&q=80",
        description: "Pratica ciotola in silicone, perfetta per l'acqua o il cibo quando sei fuori casa."
    }
];

let cartCount = 0;

function displayProducts() {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = products.map(p => `
        <div class="product-card">
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>${p.description}</p>
            <p class="price">€${p.price.toFixed(2)}</p>
            <button class="btn" onclick="addToCart()">Aggiungi al Carrello</button>
        </div>
    `).join('');
}

function addToCart() {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    // Qui potresti aggiungere una logica più complessa per aggiungere l'oggetto reale al carrello
    alert("Prodotto aggiunto al carrello!");
}

// Inizializza lo shop all'apertura della pagina
document.addEventListener('DOMContentLoaded', displayProducts);

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
