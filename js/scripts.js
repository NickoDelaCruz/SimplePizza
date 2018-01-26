function Pizza(){
  this.price = 0;
  this.toppings = [];
  this.size = [];
  //this.tempPrice = 0;
}

Pizza.prototype.pickSize = function() {
  if(this.size === 1){
    this.price + 7;
  } else {
    this.price + 10;
  }
}

Pizza.prototype.pickTop = function() {
  if(this.topping = 3){
    this.price + 3
  } else {
    this.price = 12
  }
}


$(document).ready(function() {
var customer = new Pizza();
  $("button#order1").click(function(event) {
  event.preventDefault();
  Pizza.size = pickSize();
  Pizza.toppings =
  })
