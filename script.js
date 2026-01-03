const products = [
    { 
        id: 1, 
        name: "Maglioncino Invernale Beige", 
        price: 28.99, 
        img: "https://images.unsplash.com/photo-1543465134-934c89495c34?auto=format&fit=crop&w=400&q=80",
        description: "Morbido maglioncino in lana per cani di taglia media."
    },
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
    if(grid) {
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
}

function addToCart() {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert("Prodotto aggiunto al carrello!");
}

document.addEventListener('DOMContentLoaded', displayProducts);
