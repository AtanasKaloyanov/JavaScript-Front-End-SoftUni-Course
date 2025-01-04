function solve() {
   // 1. Getting the addButtons and adding to every one button an event:
   let addButtons = document.getElementsByClassName('add-product');
   for (let addButton of addButtons) {
      addButton.addEventListener('click', addProduct);
   }

   // 2. The event's goal is to add the name and the price of the selected product to the textArea. We should also add the productName to a Set and the productPrice to an array:
   let textArea = document.getElementsByTagName('textarea')[0];
   let productNames = new Set();
   let productPrices = [];

   function addProduct(event) {
      // 2.1. Getting the button that was clicked:
      let button = event.currentTarget;
      // 2.2. Getting the name and the price of the 
      // product that is connected to the button: 
      let container = button.parentElement.parentElement;
      let productName = container.children[1].children[0].textContent;
      let price = parseFloat(container.children[3].textContent);
      // 2.3. Adding the name and the price to the arrays and to the textarea
      productNames.add(productName);
      productPrices.push(price);
      textArea.disabled = false;
      textArea.value += `Added ${productName} for ${price.toFixed(2)} to the cart.\n`;
   }

   // 3. Adding another event to the checkOut button:
   let checkOutButton = document.getElementsByClassName('checkout')[0];
   checkOutButton.addEventListener('click', check);

   // 4. The second event displays the products and the sum (we should calculate it) as a final row of the textarea and disables both buttons and the textarea:
   function check(event) {
      let products = Array.from(productNames).join(', ');
      let sum = productPrices.reduce( (a, b) => a + b, 0).toFixed(2);
      textArea.value += `You bought ${products} for ${sum}.`
      Array.from(addButtons).forEach( (addButton) => addButton.disabled = true);
      textArea.disabled = true;
      checkOutButton.disabled = true;
   }
      
}

/*

<body onload="solve()">
    <h1>Shopping Cart</h1>
    <div class="shopping-cart">

        <div class="column-labels">
            <label class="product-image">Image</label>
            <label class="product-details">Product</label>
            <label class="product-add">Add</label>
            <label class="product-price">Price</label>
        </div>

        <div class="product">
            <div class="product-image">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6yxJDgVjW3k5pxNUX6Nz94n6Pj2kCOUZ_GWBdorEs9LhOYd97">
            </div>
            <div class="product-details">
                <div class="product-title">Bread</div>
                <p class="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="product-add">
                <button class="add-product">
                    Add
                </button>
            </div>
            <div class="product-line-price">0.80</div>
        </div>

        <div class="product">
            <div class="product-image">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf2Fv5x9chdUzzR0VUxoKAOXO91SE8u5F6CmZmoAHfHkPBjM4r0A">
            </div>
            <div class="product-details">
                <div class="product-title">Milk</div>
                <p class="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <div class="product-add">
                <button class="add-product">
                    Add
                </button>
            </div>
            <div class="product-line-price">1.09</div>
        </div>

        <div class="product">
            <div class="product-image">
                <img src="https://www.freepngimg.com/thumb/tomato/3-tomato-png-image-picture-download-thumb.png">
            </div>
            <div class="product-details">
                <div class="product-title">Tomatoes</div>
                <p class="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="product-add">
                <button class="add-product">
                    Add
                </button>
            </div>
            <div class="product-line-price">0.99</div>
        </div>

        <textarea rows="5" cols="50" disabled></textarea>

        <button class="checkout">Checkout</button>

    </div>
    <script src="solution.js"></script>
</body>

*/