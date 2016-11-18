FlowRouter.route(['/','/home'],{ // two choices for route
    subscriptions:function(){
    this.register('categorieslist',Meteor.subscribe('category'));
  },
  action:function(){
    console.log("Running Action to render templates into layouts");
    FlowLayout.render('layout',{sidebar:'sidebar',main:'home',cart:'cart'});
  }
});

FlowRouter.route('/admin',{
    subscriptions:function(){
    this.register('categorieslist',Meteor.subscribe('category'));
  },
  action:function(){
    if(Roles.userIsInRole(Meteor.userId(),'admin')){
      FlowLayout.render('layout',{sidebar:'',main:'admin',cart:''});
    } else{
      FlowLayout.render('layout',{sidebar:'',main:'unauthorized',cart:''});
     }
  }
});

FlowRouter.route('/register',{
  action:function(){
    FlowLayout.render('layout',{sidebar:'',main:'register',cart:''}); // empty out cart});
  }
});

FlowRouter.route('/signin',{
  action:function(){
    FlowLayout.render('layout',{sidebar:'',main:'signin',cart:''});
  }
});

FlowRouter.route('/profile',{
  action:function(){
    FlowLayout.render('layout',{sidebar:'',main:'profile',cart:''});
  }
});

FlowRouter.route('/signout',{
  action:function(){
      Meteor.logout(function(err){
        if(!err){
          FlowRouter.go('/signin')
        }
      })
  }
});


FlowRouter.route('/checkout',{
  action:function(){
    FlowLayout.render('layout',{sidebar:'',main:'checkout',cart:''}); // empty out cart});
  }
});

FlowRouter.route('/category/:categoryName',{
  // subscriptions callback
  subscriptions:function(params){
    Meteor.subscribe('category');
    // make sure substrictions are available
  },
  // triggersEnter callback
  triggersEnter:function(params){
    console.log("ENTER",params);
    // check that user is logged in
  },
  // trigersExit callback
  trigersExit:function(params){
    console.log("EXIT",params);
    // check that there is no unsaved data
  },
  action:function(){
    FlowLayout.render('layout',{sidebar:'sidebar',main:'category',cart:'cart'});
  }
});
