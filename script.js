const products = [
    { id: 1, name: "Maglioncino Invernale Beige - Mod. 1", price: 28.99, img: "assets/beige_maglioncino1.jpg", details: `<div class="modal-body-content"><h2>Modello 1</h2><p>100% lana morbida, ideale per taglie medie.</p></div>` },
    { id: 2, name: "Maglioncino Invernale Beige - Mod. 2", price: 32.50, img: "assets/beige_maglioncino2.jpg", details: `<div class="modal-body-content"><h2>Modello 2</h2><p>Lavorazione a trecce classica.</p></div>` },
    { id: 3, name: "Maglioncino Invernale Beige - Mod. 3", price: 34.99, img: "assets/beige_maglioncino3.jpg", details: `<div class="modal-body-content"><h2>Modello 3</h2><p>Collo alto protettivo.</p></div>` },
    { id: 4, name: "Maglioncino Invernale Beige - Mod. 4", price: 29.00, img: "assets/beige_maglioncino4.jpg", details: `<div class="modal-body-content"><h2>Modello 4</h2><p>Leggero e flessibile.</p></div>` },
    { id: 5, name: "Gioco da morso professionale", price: 12.50, img: "assets/gioco_da_morso.jpg", details: `<div class="modal-body-content"><h2>Set Giochi</h2><p>Corda in cotone naturale atossico.</p></div>` },
    { id: 6, name: "Ciotola da Viaggio Pieghevole", price: 9.99, img: "assets/ciotola_daviaggio.jpg", details: `<div class="modal-body-content"><h2>Ciotola</h2><p>Gomma atossica pieghevole.</p></div>` }
];

let cartCount = 0;

function displayProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    grid.innerHTML = products.map(p => `
        <div class="product-card">
            <img src="${p.img}" alt="${p.name}" onclick="openModal(${p.id})" style="cursor:pointer">
            <h3 onclick="openModal(${p.id})" style="cursor:pointer">${p.name}</h3>
            <p>€${p.price.toFixed(2)}</p>
            <button class="btn" onclick="addToCart(event)">Aggiungi al Carrello</button>
        </div>
    `).join('');
}

function addToCart(event) {
    if(event) event.stopPropagation();
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert("Prodotto aggiunto al carrello!");
}

function openModal(productId) {
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('product-modal');
    const modalBody = document.getElementById('modal-body');
    if (product && modal && modalBody) {
        modalBody.innerHTML = product.details;
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }
}

function closeModal() {
    const modal = document.getElementById('product-modal');
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

window.onclick = function(event) {
    const modal = document.getElementById('product-modal');
    if (event.target == modal) closeModal();
}

// Back to Top Logic
window.onscroll = function() {
    const btn = document.getElementById("backToTop");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

document.getElementById("backToTop")?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener('DOMContentLoaded', displayProducts);
