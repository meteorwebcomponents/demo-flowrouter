FlowRouter.wait();

document.addEventListener("WebComponentsReady", function() {
  FlowRouter.initialize({
  });
});

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
    mwcLayout.render('demo-edit',{"main":"demo-route2","header":"demo-header"});
    console.log('reached /edit');
  }
});

console.log('%cEnjoy the %cM %cW %cC %cgoodness','color:#d61a7f;', 'color:red;font-size:50px;font-weight:bold;font-family:sans-serif;','color:green;font-size:50px;font-weight:bold;font-family:sans-serif;','color:blue;font-size:50px;font-weight:bold;font-family:sans-serif;','color:#d61a7f;');

