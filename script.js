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
                <p>Realizzato con filato caldo e confortevole, questo maglioncino beige è perfetto per proteggere il tuo amico a quattro zampe durante le giornate più fredde. Il design semplice ed elegante si adatta facilmente a ogni tipo di pelo.</p>
                <h3>Caratteristiche:</h3>
                <ul>
                    <li><strong>Materiale:</strong> 100% lana morbida</li>
                    <li><strong>Colore:</strong> Beige neutro</li>
                    <li><strong>Taglia:</strong> Ideale per cani di taglia media</li>
                    <li>Facile da indossare e lavabile a mano</li>
                </ul>
                <p><em>Un capo essenziale per l’inverno, che unisce comfort e raffinatezza.</em></p>
            </div>`
    },
    { 
        id: 2, 
        name: "Maglioncino Invernale Beige - Mod. 2", 
        price: 32.50, 
        img: "assets/beige_maglioncino2.jpg",
        description: "Design a trecce classico per uno stile intramontabile.",
        details: `
            <div class="modal-body-content">
                <h2>Maglioncino Invernale Beige - Mod. 2</h2>
                <p>Versione con lavorazione a trecce, più spessa e calda. Ideale per le passeggiate serali o per cani che soffrono particolarmente il freddo.</p>
                <h3>Caratteristiche:</h3>
                <ul>
                    <li><strong>Materiale:</strong> Misto lana rinforzato</li>
                    <li><strong>Stile:</strong> Lavorazione a trecce</li>
                    <li><strong>Colore:</strong> Crema/Beige</li>
                    <li>Altamente traspirante</li>
                </ul>
            </div>`
    },
    { 
        id: 3, 
        name: "Maglioncino Invernale Beige - Mod. 3", 
        price: 34.99, 
        img: "assets/beige_maglioncino3.jpg",
        description: "Modello con collo alto protettivo.",
        details: `
            <div class="modal-body-content">
                <h2>Maglioncino Invernale Beige - Mod. 3</h2>
                <p>Questo modello presenta un collo alto risvoltabile per proteggere anche la gola e la nuca del cane, zone molto sensibili agli sbalzi di temperatura.</p>
                <h3>Caratteristiche:</h3>
                <ul>
                    <li><strong>Protezione:</strong> Collo alto risvoltabile</li>
                    <li><strong>Materiale:</strong> Lana elasticizzata</li>
                    <li><strong>Vestibilità:</strong> Slim fit per taglie medie</li>
                </ul>
            </div>`
    },
    { 
        id: 4, 
        name: "Maglioncino Invernale Beige - Mod. 4", 
        price: 29.00, 
        img: "assets/beige_maglioncino4.jpg",
        description: "Leggero e flessibile, ideale per il gioco.",
        details: `
            <div class="modal-body-content">
                <h2>Maglioncino Invernale Beige - Mod. 4</h2>
                <p>Il modello più sportivo della collezione. Leggero ma termico, permette al cane di correre e giocare senza alcun impedimento.</p>
                <h3>Caratteristiche:</h3>
                <ul>
                    <li><strong>Materiale:</strong> Lana sintetica anallergica</li>
                    <li><strong>Peso:</strong> Ultra-light</li>
                    <li>Resistente ai graffi e ai morsi</li>
                </ul>
            </div>`
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
                <p><strong>1. Corda intrecciata in cotone naturale con nodi doppi</strong></p>
                <ul>
                    <li><strong>Materiale:</strong> 100% cotone resistente e atossico</li>
                    <li><strong>Colore:</strong> Combinazione di beige e verde o blu</li>
                    <li><strong>Dimensioni:</strong> Circa 35–40 cm di lunghezza</li>
                    <li><strong>Ideale per:</strong> Cani di taglia media e grande</li>
                    <li><strong>Caratteristiche:</strong> Aiuta a pulire i denti, perfetta per il tiro alla fune.</li>
                </ul>
                <hr style="margin: 15px 0; border: 0; border-top: 1px solid #eee;">
                <p><strong>2. Gioco da morso con maniglia e pallina in corda</strong></p>
                <ul>
                    <li><strong>Materiale:</strong> Corda di cotone intrecciata con pallina centrale</li>
                    <li><strong>Colore:</strong> Rosso e bianco o giallo e blu</li>
                    <li><strong>Dimensioni:</strong> Circa 30 cm</li>
                    <li><strong>Ideale per:</strong> Cani di taglia media</li>
                    <li><strong>Caratteristiche:</strong> Maniglia ergonomica per il padrone, stimola l’attività fisica.</li>
                </ul>
            </div>`
    },
    { 
        id: 6, 
        name: "Ciotola da Viaggio", 
        price: 9.99, 
        img: "https://images.unsplash.com/photo-1628178044733-652f75ef294f?auto=format&fit=crop&w=400&q=80",
        description: "In silicone, pratica e leggera."
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
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('product-modal');
    const modalBody = document.getElementById('modal-body');
    
    if (product && product.details && modal && modalBody) {
        modalBody.innerHTML = product.details;
        modal.style.display = "block";
    }
}

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
