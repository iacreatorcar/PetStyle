const products = [
    { 
        id: 1, 
        name: "Maglioncino Invernale Beige - Mod. 1", 
        price: 28.99, 
        img: "assets/beige_maglioncino1.jpg",
        details: "Realizzato con filato caldo e confortevole in 100% lana morbida. Perfetto per proteggere il tuo amico a quattro zampe durante le giornate più fredde. Lavabile a mano." 
    },
    { 
        id: 2, 
        name: "Maglioncino Invernale Beige - Mod. 2", 
        price: 32.50, 
        img: "assets/beige_maglioncino2.jpg",
        details: "Design a trecce classico per uno stile intramontabile. La lavorazione spessa garantisce un isolamento termico superiore per cani freddolosi." 
    },
    { 
        id: 3, 
        name: "Maglioncino Invernale Beige - Mod. 3", 
        price: 34.99, 
        img: "assets/beige_maglioncino3.jpg",
        details: "Modello con collo alto protettivo. Ideale per proteggere la gola del cane dal vento gelido senza limitare i movimenti durante la passeggiata." 
    },
    { 
        id: 4, 
        name: "Maglioncino Invernale Beige - Mod. 4", 
        price: 29.00, 
        img: "assets/beige_maglioncino4.jpg",
        details: "Modello leggero e flessibile, studiato appositamente per i cani più attivi che amano correre e giocare anche in inverno." 
    },
    { 
        id: 5, 
        name: "Gioco da morso professionale", 
        price: 12.50, 
        img: "assets/gioco_da_morso.jpg",
        details: "Corda intrecciata in cotone naturale con nodi doppi (35-40cm). Aiuta a pulire i denti durante il gioco, perfetta per il tiro alla fune. Atossica e resistente." 
    },
    { 
        id: 6, 
        name: "Ciotola da Viaggio Pieghevole", 
        price: 9.99, 
        img: "assets/ciotola_daviaggio.jpg",
        details: "Ciotola in gomma flessibile e atossica, marrone e gialla. Design pieghevole salvaspazio, perfetta per escursioni e viaggi. Facile da pulire e resistente." 
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
    const cartDisplay = document.getElementById('cart-count');
    if (cartDisplay) cartDisplay.innerText = cartCount;
    alert("Prodotto aggiunto al carrello!");
}

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
