const products = [
  { name: "Laptop", category: "electronics" },
  { name: "Smartphone", category: "electronics" },
  { name: "Headphones", category: "electronics" },
  { name: "T-shirt", category: "clothing" },
  { name: "Jeans", category: "clothing" },
  { name: "Jacket", category: "clothing" },
  { name: "Book - JavaScript", category: "books" },
  { name: "Book - CSS", category: "books" },
  { name: "Shoes", category: "clothing" },
  { name: "Tablet", category: "electronics" }
];

const productList = document.getElementById("productList");
const filterButtons = document.querySelectorAll(".filter-btn");
const searchBox = document.getElementById("searchBox");

function displayProducts(items) {
  productList.innerHTML = "";
  if (items.length === 0) {
    productList.innerHTML = "<li>No products found</li>";
    return;
  }
  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.name + " (" + item.category + ")";
    productList.appendChild(li);
  });
}
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.getAttribute("data-category");
    let filtered = category === "all" ? products : products.filter(p => p.category === category);
    
    const searchText = searchBox.value.toLowerCase();
    if (searchText) {
      filtered = filtered.filter(p => p.name.toLowerCase().includes(searchText));
    }

    displayProducts(filtered);
  });
});

searchBox.addEventListener("input", () => {
  const searchText = searchBox.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(searchText));
  displayProducts(filtered);
});

displayProducts(products);
