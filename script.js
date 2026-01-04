const products = [
    { 
        id: 1, 
        name: "Maglioncino Invernale Beige - Mod. 1", 
        price: 28.99, 
        img: "assets/beige_maglioncino1.jpg",
        description: "Morbido maglioncino in lana per cani di taglia media.",
        details: `
            <div class="modal-body-content">
                <h2>Maglioncino Invernale Beige - Mod. 1</h2>
                <p>Realizzato con filato caldo e confortevole, questo maglioncino beige è perfetto per proteggere il tuo amico a quattro zampe durante le giornate più fredde.</p>
                <h3>Caratteristiche:</h3>
                <ul>
                    <li><strong>Materiale:</strong> 100% lana morbida</li>
                    <li><strong>Taglia:</strong> Ideale per cani di taglia media</li>
                    <li>Facile da indossare e lavabile a mano</li>
                </ul>
            </div>`
    },
    { 
        id: 2, 
        name: "Maglioncino Invernale Beige - Mod. 2", 
        price: 32.50, 
        img: "assets/beige_maglioncino2.jpg",
        description: "Design a trecce classico per uno stile intramontabile.",
        details: `<div class="modal-body-content"><h2>Modello 2</h2><p>Versione con lavorazione a trecce classica.</p></div>`
    },
    { 
        id: 3, 
        name: "Maglioncino Invernale Beige - Mod. 3", 
        price: 34.99, 
        img: "assets/beige_maglioncino3.jpg",
        description: "Modello con collo alto protettivo.",
        details: `<div class="modal-body-content"><h2>Modello 3</h2><p>Protezione extra per il collo.</p></div>`
    },
    { 
        id: 4, 
        name: "Maglioncino Invernale Beige - Mod. 4", 
        price: 29.00, 
        img: "assets/beige_maglioncino4.jpg",
        description: "Leggero e flessibile, ideale per il gioco.",
        details: `<div class="modal-body-content"><h2>Modello 4</h2><p>Massima libertà di movimento.</p></div>`
    },
    { 
        id: 5, 
        name: "Gioco da morso professionale", 
        price: 12.50, 
        img: "assets/gioco_da_morso.jpg",
        description: "Corda intrecciata e pallina per il massimo divertimento.",
        details: `
            <div class="modal-body-content">
                <h2>Set Giochi da Morso</h2>
                <p><strong>1. Corda intrecciata in cotone naturale</strong></p>
                <ul>
                    <li><strong>Materiale:</strong> 100% cotone resistente e atossico</li>
                    <li><strong>Dimensioni:</strong> Circa 35–40 cm</li>
                    <li><strong>Caratteristiche:</strong> Aiuta a pulire i denti durante il gioco.</li>
                </ul>
                <p><strong>2. Gioco con maniglia e pallina</strong></p>
                <ul>
                    <li><strong>Materiale:</strong> Corda di cotone con pallina centrale</li>
                    <li><strong>Caratteristiche:</strong> Maniglia ergonomica, stimola l’attività fisica.</li>
                </ul>
            </div>`
    },
    { 
        id: 6, 
        name: "Ciotola da Viaggio Pieghevole", 
        price: 9.99, 
        img: "assets/ciotola_daviaggio.jpg",
        description: "Pratica, leggera e resistente in gomma flessibile.",
        details: `
            <div class="modal-body-content">
                <h2>Ciotola da Viaggio Pieghevole – Marrone e Giallo</h2>
                <p>Pratica, leggera e resistente, questa ciotola è l’accessorio ideale per chi ama portare il proprio cane ovunque. Realizzata in gomma flessibile e atossica, si apre e si richiude facilmente, occupando pochissimo spazio.</p>
                <h3>Caratteristiche principali:</h3>
                <ul>
                    <li><strong>Materiale:</strong> Gomma morbida e resistente</li>
                    <li><strong>Colore:</strong> Marrone con bordo giallo vivace</li>
                    <li><strong>Design:</strong> Pieghevole, salvaspazio</li>
                    <li><strong>Capacità:</strong> Ideale per acqua o crocchette (taglie S/M)</li>
                </ul>
                <p><em>Un accessorio indispensabile per comfort e idratazione ovunque tu vada.</em></p>
            </div>`
    }
];

let cartCount = 0;

function displayProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    grid.innerHTML = products.map(p => `
        <div class="product-card">
            <img src="${p.img}" alt="${p.name}" onclick="openModal(${p.id})" style="cursor:pointer">
            <h3>${p.name}</h3>
            <p>€${p.price.toFixed(2)}</p>
            <button class="btn" onclick="addToCart()">Aggiungi al Carrello</button>
        </div>
    `).join('');
}

function addToCart() {
    cartCount++;
    const cartDisplay = document.getElementById('cart-count');
    if (cartDisplay) cartDisplay.innerText = cartCount;
    alert("Prodotto aggiunto al carrello!");
}

function openModal(productId) {
    // Cerchiamo il prodotto nell'array usando l'ID
    const product = products.find(p => p.id === productId);
    
    const modal = document.getElementById('product-modal');
    const modalBody = document.getElementById('modal-body');
    
    if (product && modal && modalBody) {
        // Se il prodotto non ha "details", mostriamo almeno la descrizione breve
        modalBody.innerHTML = product.details ? product.details : `<h2>${product.name}</h2><p>${product.description}</p>`;
        modal.style.display = "block";
        console.log("Modale aperta per il prodotto:", productId); // Questo ti aiuta a vedere se funziona nella console (F12)
    } else {
        console.error("Errore: Modale o prodotto non trovati!", {product, modal, modalBody});
    }
}
function openModal(productId) {
    console.log("Hai cliccato sul prodotto ID:", productId); // AGGIUNGI QUESTA RIGA
    const product = products.find(p => p.id === productId);
    // ... resto del codice

function closeModal() {
    const modal = document.getElementById('product-modal');
    if (modal) modal.style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById('product-modal');
    if (event.target == modal) {
        closeModal();
    }
}

document.addEventListener('DOMContentLoaded', displayProducts);
// Ottieni il bottone
const backToTopBtn = document.getElementById("backToTop");

// Mostra il bottone quando si scende di 300px
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

// Quando l'utente clicca, torna in cima con animazione fluida
backToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Funzione per visualizzare i prodotti
function displayProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    
    grid.innerHTML = products.map(p => `
        <div class="product-card">
            <div class="img-container" onclick="openModal(${p.id})">
                <img src="${p.img}" alt="${p.name}">
            </div>
            <h3 onclick="openModal(${p.id})" style="cursor:pointer">${p.name}</h3>
            <p>€${p.price.toFixed(2)}</p>
            <button class="btn" onclick="addToCart(event)">Aggiungi al Carrello</button>
        </div>
    `).join('');
}

// Funzione modificata per il carrello
function addToCart(event) {
    event.stopPropagation(); // Impedisce l'apertura della modale quando clicchi sul bottone
    cartCount++;
    const cartDisplay = document.getElementById('cart-count');
    if (cartDisplay) cartDisplay.innerText = cartCount;
    alert("Prodotto aggiunto al carrello!");
}

// Funzione per aprire la modale
function openModal(productId) {
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('product-modal');
    const modalBody = document.getElementById('modal-body');
    
    if (product && product.details && modal && modalBody) {
        modalBody.innerHTML = product.details;
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Blocca lo scroll della pagina sotto
    } else if (product && !product.details) {
        // Se non ci sono dettagli specifici, mostra una descrizione base
        modalBody.innerHTML = `<h2>${product.name}</h2><p>${product.description}</p>`;
        modal.style.display = "block";
    }
}

// Funzione per chiudere la modale
function closeModal() {
    const modal = document.getElementById('product-modal');
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Riattiva lo scroll
    }
}
// Nota l'onclick sull'immagine
grid.innerHTML = products.map(p => `
    <div class="product-card">
        <img src="${p.img}" alt="${p.name}" onclick="openModal(${p.id})" style="cursor:pointer">
        <h3>${p.name}</h3>
        <p>€${p.price.toFixed(2)}</p>
        <button class="btn" onclick="addToCart()">Aggiungi al Carrello</button>
    </div>
`).join('');
