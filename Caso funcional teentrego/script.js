

function searchProducts() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value;

    const productList = document.getElementById('productList');
    productList.innerHTML = ''; // Limpiamos la lista de resultados

    products.forEach(product => {
        if (categoryFilter === 'all' || product.category === categoryFilter) {
            if (product.name.toLowerCase().includes(query)) {
                const li = document.createElement('li');
                li.textContent = product.name;
                li.addEventListener('click', () => showProductDetails(product));
                productList.appendChild(li);
            }
        }
    });
}

function showProductDetails(product) {
    const productDetails = document.getElementById('productDetails');
    productDetails.innerHTML = `
        <h2>${product.name}</h2>
        <p>Categoría: ${product.category}</p>
        <p>Precio: ${product.price}</p>
        <p>${product.description}</p>
    `;
}
const products = [
    { name: 'Zapatillas deportivas', category: 'calzado', price: '$49.99', description: 'Zapatillas deportivas de alta calidad.', image: 'shoes.jpg' },
    { name: 'Botas de senderismo', category: 'calzado', price: '$59.99', description: 'Botas resistentes para senderismo.', image: 'hiking_boots.jpg' },
    { name: 'Camiseta de algodón', category: 'ropa', price: '$19.99', description: 'Camiseta de algodón suave y cómoda.', image: 'tshirt.jpg' },
    { name: 'Pantalones vaqueros', category: 'ropa', price: '$39.99', description: 'Pantalones vaqueros de moda.', image: 'jeans.jpg' },
    { name: 'Smartphone', category: 'electrónica', price: '$299.99', description: 'Teléfono inteligente con cámara de alta resolución.', image: 'smartphone.jpg' },
    { name: 'Tableta', category: 'electrónica', price: '$199.99', description: 'Tableta con pantalla táctil de alta definición.', image: 'tablet.jpg' },
];

function searchProducts() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value;

    const productList = document.getElementById('productList');
    productList.innerHTML = ''; // Limpiamos la lista de resultados

    products.forEach(product => {
        if (categoryFilter === 'all' || product.category === categoryFilter) {
            if (product.name.toLowerCase().includes(query)) {
                const li = document.createElement('li');
                li.textContent = product.name;
                li.addEventListener('click', () => showProductDetails(product));
                productList.appendChild(li);
            }
        }
    });
}

function showProductDetails(product) {
    const productDetails = document.getElementById('productDetails');
    productDetails.innerHTML = `
        <h2>${product.name}</h2>
        <p>Categoría: ${product.category}</p>
        <p>Precio: ${product.price}</p>
        <img src="${product.image}" alt="${product.name}">
        <p>${product.description}</p>
    `;
}