Meteor.startup(function()[
  Accounts.onCreateUser(function(options,user){
    //is user has a profile
    if(!user.profile){
      user.profile = {};
    }
    user.profile.firstname = options.firstname;
    user.profile.lastname = options.lastname;
    return user;
  })
]);
