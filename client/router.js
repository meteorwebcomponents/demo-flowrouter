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

console.log('%cEnjoy the %cM %cW %cC %cgoodness','', 'color:red;font-size:100px;font-weight:bold;font-family:sans-serif;','color:green;font-size:100px;font-weight:bold;font-family:sans-serif;','color:blue;font-size:100px;font-weight:bold;font-family:sans-serif;',"");
