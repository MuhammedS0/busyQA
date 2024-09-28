let shoppingCart = {
    items : [],
    addItem: function(item) {
        this.items.push(item)
    }
  
  };
  
  function Item(name, price){
    this.name = name;
    this.price = price
  }
  
  let firstItem = new Item('Shirt', 20);
  let secondItem = new Item('Pants', 30);
  
  shoppingCart.addItem(firstItem);
  shoppingCart.addItem(secondItem);
  
  // check to see if the shoppingCart added two objects
  console.log(shoppingCart)
  
  // function to remove item
  shoppingCart.removeItem = function(index) {
    this.items.splice(index, 1)
  }
  
  // function to calculate total price of all items in the shopping cart
  shoppingCart.calculateTotal = function() {
  let total = 0;
  for (let i = 0; i < this.items.length; i++) {
    total += this.items[i].price;
  }
    return total;
  };
  
  //method that returns a discount code to total price
  shoppingCart.applyDiscountCode = function(code) {
    if (code === 'SAVE10') {
      return this.calculateTotal()*0.9;
    } else if (code === 'SAVE20') {
      return this.calculateTotal()*0.8;
    } else {
      return this.calculateTotal();
    }
  };
  
  //this method gets the names of all items in the cart
  shoppingCart.getCurrentItems = function(){
    return this.items.map(item => item.name)
  }
  
  //...............................test cases.............................
  //returns the current items name in an array
  console.log(shoppingCart.getCurrentItems());
  
  //removes the first item, this will make the only pants available
  shoppingCart.removeItem(0);
  console.log(shoppingCart.getCurrentItems());
  
  // returns the total value of item prices. Since there is only pants available it will be 30
  console.log(shoppingCart.calculateTotal());
  
  // with the application of the dicount of 10 percent, we take a way 3 dollars to make the price 27
  console.log(shoppingCart.applyDiscountCode('SAVE10'));
  
  
