FlowRouter.route("/", {
  name:'landing',
  action:function(params,queryParams){
    mwcLayout.render('demo-landing',{"main":"demo-route1"});
    console.log('reached /');
  }
});
FlowRouter.route("/edit", {
  name:'edit',
  action:function(params,queryParams){
    mwcLayout.render('demo-edit',{"main":"demo-route2","footer":"demo-footer"});
    console.log('reached /edit');
  }
});

