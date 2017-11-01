class ProductCart {
  constructor() {
    this.products = JSON.parse(localStorage.getItem('PRODUCTS'));
    if(!this.products) {
      this.products = [];
     } 
   
    
    this.addEventListeners();

   // this.loadProducts();
   //  this.totalPricecalc();
    }

  loadProducts() {
    let productsHtml = this.products.reduce((html, product, index) => html +=  
    this.generateProductHtml(product, index), '');
    document.getElementById('cart').innerHTML = productsHtml;   
  }

  deleteCart() {
    $('#clear_button').click(function(e){
    this.products = [];
    localStorage.clear();
    loadProducts();
    });
  }

 addEventListeners() {
      let mi = this;
      $('.add_to_cart').click(function(e){
      let buttonPressed = e.target.parentElement;
      let product_title= $(buttonPressed).children(".good_title").text();
      let product_price= $(buttonPressed).children("input[name='product_price']").val();
      let product_quantity= $(buttonPressed).children("[name='product_quantity']").val();
      let product_image= $(buttonPressed).children(".good_picture").attr('src');
      let product_id = $(buttonPressed).children("[name='product_id']").val(); 

      let newProduct = {
      product_title: product_title,
      product_id: product_id,
      product_price: product_price, 
      product_quantity: product_quantity, 
      product_image: product_image,
       };

      let z = mi.checkDoubles(newProduct);
      mi.addProduct(newProduct, z);
       
       });
     
     }

  totalPricecalc() {
  let total_sum_blocks = $('.total_price');
    let sum =0;
      $.each(total_sum_blocks, function( index, value ) {
        let prices = Number($(total_sum_blocks[index]).text());
        sum += prices;
      });
     $('.total_sum').text(sum);

  }

  calculate_price(index) {
  let mi = this;  
  $('.products_in_cart').change((e) => {   
    var current = e.target;
    var current_block = e.target.parentElement.parentElement;
    var price = $(current_block).find('.product_price').text();
    var current_amount = $(current).val();
    var total_product_price = Number(price) * Number(current_amount);
    $(current_block).find('.total_price').text(total_product_price);
    mi.totalPricecalc();
  });
}

 generateProductHtml(product, index, e) {
   return `
   	<div class="container cart_section">
      <div class="row products_row">
      <div class="col-md-12">
        <div class="col-md-3">
        <p class="data_table"> ${this.products[index].product_title} </p><br>
         <span> за 1000 г </span>
         </div>
         <div class="col-md-3">
         <img class="product_in_cart" src= ${this.products[index].product_image} alt="Выбранный товар"/>
         </div>
         <div class="col-md-2">
         <span class="more_goods pluses2">+</span>
         <input class="products_in_cart" name="product_quantity" min="1" value=${Number(this.products[index].product_quantity)} type="number"
         onchange="cart.calculate_price(${index})">
         <span class="less_goods minus2">-</span>
         </div>
         <div class="col-md-2">
         <p class="data_table product_price"> ${Number(this.products[index].product_price)} </p>
         </div>
         <div class="col-md-2">
         <p class="data_table total_price"> ${Number(this.products[index].product_price) * Number(this.products[index].product_quantity)} </p>
         </div>
       </div> 
      </div>
  </div>
  `;
}

checkDoubles(newProduct, z) {
    let products = this.products;
    let newProductId = newProduct.product_id;   
      for (let z=0; z<products.length; z++) {
        if (products.length > 0 && products[z].product_id == newProductId ) {
        return z;     
        }//IF     
      } //for 
}// function

addProduct(newProduct, z) {
     let mi = this;
     let products = this.products;
     let newProductQuantity = newProduct.product_quantity;
     if (z >= 0) {
       let product_quantity = Number(products[z].product_quantity)+ Number(newProductQuantity);
       products[z].product_quantity = product_quantity;
       localStorage.setItem('PRODUCTS', JSON.stringify(this.products));
     }
      else {
      this.products.push(newProduct);
      localStorage.setItem('PRODUCTS', JSON.stringify(this.products));
      }        
  } // function     
}//constructor

let cart;

window.addEventListener("load", () => {
  cart = new ProductCart();
});























// class Carts {
//     constructor() {
//       // this.cart = JSON.parse(localStorage.getItem('Cart'));
//       if(!this.products) {
//         this.products = [];
        
//       }
//       else {
//       	this.products = [
//           {product_title: product_title, product_price: product_price},
          
//         ];
//       }

//       // this.loadCart();
//       this.addEventListeners();
//     }

//     addEventListeners() {
//       $(document).click(function(e){
//       var buttonPressed = e.target.parentElement;
//       var product_title= $(buttonPressed).children(".good_title").text();
//       var product_price= $(buttonPressed).children("input[name='product_price']").val();
//       var product_quantity= $(buttonPressed).children("[name='product_quantity']").val();
//       var good_picture= $(buttonPressed).children(".good_picture").attr('src');
//       var product_id = $(buttonPressed).children("[name='product_id']").val(); 
//       console.log(product_title);
//       console.log(product_price);
//       console.log(product_quantity);
//       console.log(good_picture);
//       console.log(product_id);     
//         });
//      }

          
//       // Add Task
//       // document.getElementsByClassName('.sc-add-to-cart').addEventListener("click", event => {
         
//           // var product_title= $(buttonPressed).children(".good_title").text();
//           // var product_price= $(buttonPressed).children("input[name='product_price']").val();
//           // var product_quantity= $(buttonPressed).children("[name='product_quantity']").val();
//           // var good_picture= $(buttonPressed).children(".good_picture").attr('src');
//           // var product_id = $(buttonPressed).children("[name='product_id']").val(); 
//           // console.log(product_title);
//           // console.log(product_price);
//           // console.log(product_quantity);
//           // console.log(good_picture);
//           // console.log(product_id);

//           // console.log(products);
//     //   });
//     // }

//    } 
  


// let Cart;

// window.addEventListener("load", () => {
//   Cart = new Carts();
// });




