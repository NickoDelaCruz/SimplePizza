function Pizza(){
  this.type = 0;
  this.price = 0;
}

Pizza.prototype.newOrder = function() {
  if(this.type === 1){
    this.price = this.price + 5;

  }
  if(this.type === 2){
    this.price = this.price + 7;

  }
}

$(document).ready(function() {
  var customer = new Pizza();
  $("form#order").submit(function(event) {
  $("input:checkbox[name=pizza]:checked").val();
    customer.newOrder();
    $("#price").text(customer.price);
    event.preventDefault();

});
})
