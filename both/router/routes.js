FlowRouter.route('/',{
  action.function(){
    FlowLayout.render('layout',{sidebar:'sidebar',main:'home',cart:'cart'})
  }
})
