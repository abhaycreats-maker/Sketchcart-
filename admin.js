function addProduct(){
  let name = document.getElementById("name").value;
  let img = document.getElementById("img").value;
  let price = document.getElementById("price").value;

  let products = JSON.parse(localStorage.getItem("products")) || [];

  products.push({name, img, price});

  localStorage.setItem("products", JSON.stringify(products));

  alert("Product Added!");
}
