Template.admin.helpers({
  categories:function(){
    return Category.find();
  ),
  products:function(){
    return Product.find();
  }
});
  
Template.admin.events({
  'click .addProduct':function(evt,tmpl){
    var product = {};
    product.name = tmpl.find('#productname').value;
    product.categoryId = tmpl.find('#category').value;
    product.description = tmpl.find('#description').value;
    product.price = tmpl.find('#price').value;
    product.rating = tmpl.find('#rating').value;
    Meteor.call('Product.insert',product,function(){
    })
  }
});
