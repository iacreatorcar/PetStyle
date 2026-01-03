const products = [
  { 
        id: 1, 
        name: "Maglioncino Invernale Beige", 
        price: 28.99, 
        img: "assets/maglioncino_beige.jpg",
        description: "Morbido maglioncino in lana per cani di taglia media.",
        details: `
            <div class="modal-body-content">
                <h2>Maglioncino Invernale Beige</h2>
                <p>Realizzato con filato caldo e confortevole, questo maglioncino beige è perfetto per proteggere il tuo amico a quattro zampe durante le giornate più fredde. Il design semplice ed elegante si adatta facilmente a ogni tipo di pelo e colore, garantendo libertà di movimento e un tocco di stile.</p>
                <h3>Caratteristiche:</h3>
                <ul>
                    <li><strong>Materiale:</strong> 100% lana morbida</li>
                    <li><strong>Colore:</strong> Beige neutro</li>
                    <li><strong>Taglia:</strong> Ideale per cani di taglia media</li>
                    <li>Facile da indossare e lavabile a mano</li>
                </ul>
                <p><em>Un capo essenziale per l’inverno, che unisce comfort, calore e raffinatezza.</em></p>
            </div>
        `
    },
    // ... altri prodotti con img: "assets/nome_foto.jpg"
];
    { 
        id: 2, 
        name: "Pettorina Regolabile Blu", 
        price: 34.50, 
        img: "https://images.unsplash.com/photo-1627916694380-a61f52d2fcd9?auto=format&fit=crop&w=400&q=80",
        description: "Confortevole e sicura per le passeggiate."
    },
    { 
        id: 3, 
        name: "Cappottino Giallo", 
        price: 39.99, 
        img: "https://images.pexels.com/photos/17621980/pexels-photo-17621980/free-photo-of-cucciolo-cane-cappotto-impermeabile.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=1",
        description: "Impermeabile e antivento con stile."
    },
    { 
        id: 4, 
        name: "Collare in Pelle Marrone", 
        price: 19.00, 
        img: "https://images.unsplash.com/photo-1596707328114-f5dd50d69455?auto=format&fit=crop&w=400&q=80",
        description: "Vera pelle resistente e rifinita."
    },
    { 
        id: 5, 
        name: "Gioco per Morso", 
        price: 12.50, 
        img: "https://images.unsplash.com/photo-1558222212-ab79f993683f?auto=format&fit=crop&w=400&q=80",
        description: "Divertimento assicurato per taglie medie."
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
    document.getElementById('cart-count').innerText = cartCount;
    alert("Prodotto aggiunto al carrello!");
}
function openModal(productId) {
    const product = products.find(p => p.id === productId);
    if (product && product.details) {
        document.getElementById('modal-body').innerHTML = product.details;
        document.getElementById('product-modal').style.display = "block";
    }
}

function closeModal() {
    document.getElementById('product-modal').style.display = "none";
}

// Chiudi la modale cliccando fuori dal contenuto
window.onclick = function(event) {
    let modal = document.getElementById('product-modal');
    if (event.target == modal) {
        closeModal();
    }
}

document.addEventListener('DOMContentLoaded', displayProducts);

document.addEventListener('DOMContentLoaded', displayProducts);
