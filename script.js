emailjs.init("1hVCrwEuQoblV8pJ2"); // Replace

let products = [
  {id:1, name:"Devi Art", price:599, img:"images/art1.jpg"},
  {id:2, name:"Anime Art", price:599, img:"images/art2.jpg"},
  {id:3, name:"Skull Art", price:599, img:"images/art3.jpg"},
];

let cart = [];

function loadProducts(){
  let html = "";
  products.forEach(p=>{
    html += `
    <div class="card">
      <img src="${p.img}">
      <h3>${p.name}</h3>
      <p>₹599</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    </div>`;
  });
  document.getElementById("product-list").innerHTML = html;
}
loadProducts();

function addToCart(id){
  let item = products.find(p=>p.id==id);
  cart.push(item);
  document.getElementById("cart-count").innerText = cart.length;
}

function openCart(){
  document.getElementById("cart").classList.add("open");
  displayCart();
}

function closeCart(){
  document.getElementById("cart").classList.remove("open");
}

function displayCart(){
  let html = "";
  let total = 0;

  cart.forEach(item=>{
    html += `<p>${item.name} - ₹${item.price}</p>`;
    total += item.price;
  });

  document.getElementById("cart-items").innerHTML = html;
  document.getElementById("total").innerText = total;
}

function placeOrder(){
  let name = document.getElementById("name").value;
  let address = document.getElementById("address").value;
  let phone = document.getElementById("phone").value;

  let orderDetails = cart.map(c=>c.name).join(", ");

  emailjs.send("service_uvpzdmr","template_muwg7ga",{
    name:name,
    address:address,
    phone:phone,
    order:orderDetails
  }).then(()=>{
    alert("Order Sent!");
    cart = [];
    location.reload();
  });
    }
