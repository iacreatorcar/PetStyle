const products = [
    { 
        id: 1, 
        name: "Gioco da morso professionale", 
        price: 12.50, 
        img: "assets/gioco_da_morso.jpg",
        details: "Corda intrecciata in cotone naturale con nodi doppi (35-40cm). Aiuta a pulire i denti durante il gioco, perfetta per il tiro alla fune. Atossica e resistente." 
    },
    { 
        id: 2, 
        name: "Ciotola da Viaggio Pieghevole", 
        price: 9.99, 
        img: "assets/ciotola_daviaggio.jpg",
        details: "Realizzata in gomma flessibile e atossica. Design pieghevole salvaspazio, perfetta per escursioni. Colore marrone e giallo, facile da pulire." 
    },
    { 
        id: 3, 
        name: "Maglioncino Beige Mod. 1", 
        price: 28.00, 
        img: "assets/beige_maglioncino1.jpg",
        details: "Morbido maglioncino in lana per cani di taglia media. Protegge dal freddo con stile ed eleganza." 
    },
    { 
        id: 4, 
        name: "Maglioncino Beige Mod. 2", 
        price: 30.00, 
        img: "assets/beige_maglioncino2.jpg",
        details: "Versione con lavorazione a trecce. Comfort massimo per le passeggiate invernali." 
    }
];

function displayProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    
    grid.innerHTML = products.map(p => `
        <div class="product-card">
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p class="price">€${p.price.toFixed(2)}</p>
            <div class="product-description">${p.details}</div>
            <button class="btn" onclick="addToCart()">Aggiungi al Carrello</button>
        </div>
    `).join('');
}

let cartCount = 0;
function addToCart() {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert("Prodotto aggiunto al carrello!");
}

// Scroll Button Logic
window.onscroll = function() {
    const btn = document.getElementById("backToTop");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

document.getElementById("backToTop").onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};

document.addEventListener('DOMContentLoaded', displayProducts);
