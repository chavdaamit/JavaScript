let products = [
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

function showProduct() {
  const productlist = document.getElementById("product-list");

  productlist.innerHTML = "";
  products.forEach((p) => {
    productlist.innerHTML += `
  
    
    <div class="col-md-4 mt-4">
    <div class="card product-card shadow rounded-4">
  <img src="${p.image}" class="card-img-top img-fluid rounded-4 " alt="${p.name}">
  <div class="card-body text-center ">
    <h5 class="card-title">${p.name}</h5>
    <h4 class="card-text">${p.price}</h4>
    <button class=" btn btn-outline-primary text-white" onclick="addToCart(${p.id})" >Add to cart</button>
    <button class="btn btn-outline-warning" onclick="updateproductmodal(${p.id})" >✏️</button>
    <button class="btn btn-outline-danger" onclick="deletproduct(${p.id})" >🗑️</button>
  </div>
</div>    
</div>
    `;
  });
}

showProduct();

// const data = { name: "amit", age: 22 };

// localStorage.setItem("cartdata",JSON.stringify(data))

// const productdata= localStorage.getItem("cartdata")

// console.log("productdata",JSON.parse(productdata));

let cartitems = JSON.parse(localStorage.getItem("cartData")) || [];

console.log("cartitems", cartitems);

function addToCart(id) {
  try {
    let product = cartitems.find((prod) => prod.id === id);

    if (product) {
      product.qty++;
    } else {
      product = products.find((prod) => prod.id === id);
      cartitems.push({ ...product, qty: 1 });
    }

    localStorage.setItem("cartData", JSON.stringify(cartitems));
  } catch (error) {
    console.log(error);
  }
}

function showModal() {
  const cartModal = document.getElementById("cartitem-list");

  let modal = new bootstrap.Modal(cartModal);

  modal.show();
  updateLatestData();
  showcartData();
}

function showcartData() {
  try {
    const cartlist = document.getElementById("cartTable");

    cartlist.innerHTML = "";

    cartitems.forEach((p) => {
      cartlist.innerHTML += `
      
      <tr>

      <td>
      <img src="${p.image}" style="width:50px " >
      </td>

      <td>${p.name}</td>      
    

      <td>

      <div class="d-flex gap-2" >
      
      <button class="btn btn-success" onclick="increase(${p.id})"  >+</button>

      <h5>${p.qty}</h5>

       <button class="btn btn-danger" onclick="decrease(${p.id})" >-</button>

      </div>
</td>

<td>${p.qty * p.price}</td>

<td>        <button class="btn btn-danger" onclick="remove(${p.id})" >Remove</button></td>

  </tr>

      `;
    });
  } catch (error) {}
}

function increase(id) {
  const product = cartitems.find((p) => p.id === id);

  if (product) {
    product.qty++;
  }

  updateLatestData();
}

function updateLatestData() {
  localStorage.setItem("cartData", JSON.stringify(cartitems));

  showcartData();
  total();
}

function decrease(id) {
  const product = cartitems.find((p) => p.id === id);

  if (product) {
    product.qty--;
  }

  if (product.qty <= 0) {
    cartitems = cartitems.filter((p) => p.id !== id);
  }

  updateLatestData();
}

function remove(id) {
  cartitems = cartitems.filter((p) => p.id !== id);

  updateLatestData();
}

function total() {
  const total = document.getElementById("Grand-total");

  total.innerHTML = "";

  const totalAmount = cartitems.reduce((acc, curr) => {
    return (acc += curr.price * curr.qty);
  }, 0);

  total.innerHTML += `

<h5>₹${totalAmount}</h5>
`;
}

function CheckOut() {
  if (cartitems.length === 0) {
    alert(
      "there is currently no items in cart please add some item to checkout",
    );
  } else {
    alert("order placed successfully");

    cartitems = [];
    updateLatestData();
  }
}

document.getElementById("productform").addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("pname").value;
  let price = Number(document.getElementById("pprice").value);
  let img = document.getElementById("pimg").value;

  let newProduct = {
    id: products.length + 1,
    name: name,
    price: price,
    image: img,
  };

  products.push(newProduct);

  addProductToUI(newProduct);

  e.target.reset();

  const addProductModal = document.getElementById("Add-list");
  const modal = bootstrap.Modal.getInstance(addProductModal);
  modal.hide();
});

function showModal1() {
  const cartModal = document.getElementById("Add-list");

  let modal = new bootstrap.Modal(cartModal);

  modal.show();
  updateLatestData();
  showcartData();
}

function addProductToUI(p) {
  const productlist = document.getElementById("product-list");

  productlist.innerHTML += `
    <div class="col-md-4 mt-4">
      <div class="card   product-card shadow rounded-4" > 
        <img src="${p.image}" class="card-img-top" >
        <div class="card-body text-center">
          <h5>${p.name}</h5>
          <p>₹${p.price}</p>
          <button class="btn btn-primary" onclick="addToCart(${p.id})">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  `;
}

// function deletproduct(id) {
//   let product = products.find((p) => p.id === id);

//   if (!product) {
//     alert("product is not found");
//   }

//   products = products.filter((p) => p.id !== id);

//   showProduct();
// }

// function updateproductmodal(id) {
//   const updateproductmodal = document.getElementById("updateProductModal");

//   let modal = new bootstrap.Modal(updateproductmodal);

//   modal.show();
// }

function deletproduct(id) {
  let product = products.find((p) => p.id === id);

  if (!product) {
    alert("product is not found");
  }

  products = products.filter((p) => p.id !== id);

  showProduct();
}

function updateproductmodal(id) {
  const updateproductmodal = document.getElementById("updateProductModal");

  let modal = new bootstrap.Modal(updateproductmodal);

  modal.show();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return alert("product is not found");
  }

  let index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return alert("product is not found");
  }

  document.getElementById("updateProductName").value = products[index].name;
  document.getElementById("updateProductPrice").value = products[index].price;
  document.getElementById("updateProductImage").value = products[index].image;

  document
    .getElementById("updateProductForm")
    .addEventListener("submit", (e) => {
      e.preventDefault();

      let name = document.getElementById("updateProductName").value;

      let price = document.getElementById("updateProductPrice").value;

      let image = document.getElementById("updateProductImage").value;

      products[index] = {
        name,
        price,
        image,
      };

      modal.hide();

      showProduct();
    });
}
