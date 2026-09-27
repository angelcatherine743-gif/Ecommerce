const products = [

{
name:"Smartphone",
category:"electronics",
image:"Samsun_smartphonecityke_167272b117d3a8.png",
description:"A powerful smartphone with a great camera."
},

{
name:"Laptop",
category:"electronics",
image:"hp1.jpg",
description:"Lightweight laptop perfect for work and study."
},

{
name:"Sneakers",
category:"fashion",
image:"SPT533-9.jpg",
description:"Comfortable sneakers for everyday wear."
},

{
name:"T-Shirt",
category:"fashion",
image:"Calvin-Klein_SP2025_BEH_J30J326683BEH_5.webp",
description:"Stylish cotton T-shirt."
},

{
name:"Coffee Maker",
category:"home",
image:"shopping.webp",
description:"Brew delicious coffee at home."
},

{
name:"Desk Lamp",
category:"home",
image:"Inoleds-Spiral-Table-Lamp-2-768x768.png",
description:"Modern LED desk lamp."
}

];

const productList = document.getElementById("product-list");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

function displayProducts(list){

productList.innerHTML = "";

list.forEach(product => {

const col = document.createElement("div");
col.className = "col-md-4 mb-4 product-item";
col.setAttribute("data-category", product.category);

col.innerHTML = `
<div class="card product-card">
<img src="${product.image}" class="card-img-top">
<div class="card-body">
<h5 class="product-title">${product.name}</h5>
<p class="text-muted">${product.category}</p>
</div>
</div>
`;

col.addEventListener("click", () => openModal(product));

productList.appendChild(col);

});

}

displayProducts(products);


searchInput.addEventListener("keyup", function(){

let filter = this.value.toLowerCase();

let filtered = products.filter(p =>
p.name.toLowerCase().includes(filter)
);

displayProducts(filtered);

});


categoryFilter.addEventListener("change", function(){

let category = this.value;

if(category === "all"){
displayProducts(products);
}else{

let filtered = products.filter(p =>
p.category === category
);

displayProducts(filtered);

}

});


function openModal(product){

document.getElementById("modalTitle").textContent = product.name;
document.getElementById("modalImage").src = product.image;
document.getElementById("modalDescription").textContent = product.description;

let modal = new bootstrap.Modal(document.getElementById("productModal"));
modal.show();

}
