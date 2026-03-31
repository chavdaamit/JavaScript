const products = [
  {
    id: 1,
    name: "Wireless Earbuds",
    price: 2499,
    image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 18999,
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg",
  },
  {
    id: 3,
    name: "Laptop",
    price: 54999,
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
  },
  {
    id: 4,
    name: "Smart TV",
    price: 39999,
    image: "https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg",
  },
  {
    id: 5,
    name: "Gaming Console",
    price: 45999,
    image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg",
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 1999,
    image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg",
  },
  {
    id: 7,
    name: "Mechanical Keyboard",
    price: 3499,
    image: "https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg",
  },
  {
    id: 8,
    name: "Gaming Mouse",
    price: 1499,
    image: "https://images.pexels.com/photos/5082566/pexels-photo-5082566.jpeg",
  },
  {
    id: 9,
    name: "Tablet",
    price: 22999,
    image: "https://images.pexels.com/photos/5082568/pexels-photo-5082568.jpeg",
  },
  {
    id: 10,
    name: "DSLR Camera",
    price: 47999,
    image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg",
  },
  {
    id: 11,
    name: "Smart Watch",
    price: 4999,
    image: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg",
  },
  {
    id: 12,
    name: "Power Bank",
    price: 999,
    image: "https://images.pexels.com/photos/4219862/pexels-photo-4219862.jpeg",
  },
  {
    id: 13,
    name: "Monitor",
    price: 13999,
    image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg",
  },
  {
    id: 14,
    name: "Webcam",
    price: 1799,
    image: "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg",
  },
  {
    id: 15,
    name: "Printer",
    price: 8999,
    image: "https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg",
  },
];

products.forEach((p) => {
  const productlist = document.getElementById("product-list");

  productlist.innerHTML += `
    
    <div class="col-md-4 mt-4">
    <div class="card product-card shadow rounded-4">
  <img src="${p.image}" class="card-img-top img-fluid rounded-4 " alt="${p.name}">
  <div class="card-body text-center">
    <h5 class="card-title">${p.name}</h5>
    <h4 class="card-text">${p.price}</h4>
    <button class="btn btn-primary" >Add to cart</button>
  </div>
</div>    
</div>
    `;
});

const data = { name: "amit", age: 22 };


localStorage.setItem("cartdata",JSON.stringify(data))


const productdata= localStorage.getItem("cartdata")

console.log("productdata",JSON.parse(productdata));
