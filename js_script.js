const products = [{ id: 1, name: "Product 1", price: 50, image: "images/product1.jpg" }];

function displayProducts() {
    let productList = document.getElementById("product-list");
    productList.innerHTML = "";
    products.forEach(product => {
        productList.innerHTML += `<div class="product"><img src="${product.image}" alt="${product.name}"><p>${product.name} - $${product.price}</p><a href="product-details.html?id=${product.id}">View Details</a></div>`;
    });
}

function addToCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let product = { id: 1, name: "Product 1", price: 50 };
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
}

document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("product-list")) displayProducts();
});
