function Pizza(){
  this.type = '';
  this.top = '';
  this.price = 0;
}

Pizza.prototype.sizeType = function(pizzaType) {
  this.type = pizzaType
  if(this.type === '1') {
    this.price = this.price + 5;
  }
  if(this.type === '2') {
    this.price = this.price + 7;
  }
}

Pizza.prototype.pickTop = function(pizzaTop) {
  this.top = pizzaTop
  if(this.top === '3') {
      this.price = this.price + 3;
  }
  if(this.top === '4') {
    this.price = this.price + 1;
  }
}

$(document).ready(function() {
  var customer = new Pizza();
  $("button#order").click(function(event) {
    customer.price = 0
    $("input:checkbox[name=pizza]:checked").each(function(index, checkbox){
      customer.sizeType(checkbox.value);
      customer.pickTop(checkbox.value);
    });
    $("#price").text(customer.price);
  });
})
