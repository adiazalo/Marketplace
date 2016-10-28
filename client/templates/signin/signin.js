Template.signin.events({
  'submit form':function(evt){
    evt.preventDefault();
    var email = evt.target.email.value;
    var password = evt.taget.password.value;
    Meteor.loginWithPassword(email,password);
    FlowRouter.go('/');
  }
});
