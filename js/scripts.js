function Pizza(){
  this.type = 0;
  this.price = 0;
}

Pizza.prototype.newOrder = function() {
  if(this.type === 1){
    this.price = this.price + 5;
    return
  }
  // if(this.type === 2){
  //   this.price + 7;
  //   return
  // }
}

$(document).ready(function() {
  var customer = new Pizza();
  $("button#order").click(function(event) {
  $("input:checkbox[name=pizza]:checked").each(function(event){
    customer.newOrder();
    $("#price").append(customer.price);
  });
});
})
