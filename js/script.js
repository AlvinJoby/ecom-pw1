const products = [
    { id: 1, name: "Product 1", price: 50, image: "images/product1.jpg" },
    { id: 2, name: "Product 2", price: 30, image: "images/product2.jpg" }
];

function displayProducts() {
    let productList = document.getElementById("product-list");
    productList.innerHTML = "";
    products.forEach(product => {
        productList.innerHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <p>${product.name} - $${product.price}</p>
                <a href="product-details.html?id=${product.id}">View Details</a>
            </div>`;
    });
}

function searchProducts() {
    let searchInput = document.getElementById("search").value.toLowerCase();
    let filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchInput));
    document.getElementById("product-list").innerHTML = filteredProducts.map(product => 
        `<div class="product">
            <img src="${product.image}" alt="${product.name}">
            <p>${product.name} - $${product.price}</p>
            <a href="product-details.html?id=${product.id}">View Details</a>
        </div>`).join('');
}

function addToCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let product = { id: 1, name: "Product 1", price: 50 };
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
}

function submitOrder(event) {
    event.preventDefault();
    localStorage.removeItem("cart");
    window.location.href = "order-confirmation.html";
}

document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("product-list")) displayProducts();
});
