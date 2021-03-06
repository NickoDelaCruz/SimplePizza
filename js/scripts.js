function Pizza(){
  this.size = '';
  this.top = '';
  this.price = 0;
}

Pizza.prototype.sizeType = function(pizzaType) {
  this.size = pizzaType
  if(this.size === '1') {
    this.price = this.price + 7;
  }
  if(this.size === '2') {
    this.price = this.price + 10;
  }
}

Pizza.prototype.pickTop = function(pizzaTop) {
  this.top = pizzaTop
  if(this.top === '3') {
      this.price = this.price + 5;
  }
  if(this.top === '4') {
    this.price = this.price + 3;
  }
  if(this.top === '5') {
    this.price = this.price + 8;
  }
}

$(document).ready(function() {
  var customer = new Pizza();
  $("button#order").click(function(event) {
    customer.price = 0
    $("input:checkbox[name=size]:checked").each(function(index, checkbox){
      customer.sizeType(checkbox.value);
    });
    $("input:checkbox[name=topping]:checked").each(function(index, checkbox){
      customer.pickTop(checkbox.value);
    });
    $("#price").text(customer.price);
  });
});
