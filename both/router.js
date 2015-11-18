FlowRouter.route("/", {
	name:'landing',
	action:function(params,queryParams){
		mwcLayout.render('demo-landing',{region:{"main":"demo-route1"}});
		console.log('reached /');
	}
});
FlowRouter.route("/edit", {
	name:'edit',
	action:function(params,queryParams){
		mwcLayout.render('demo-landing',{region:{"main":"demo-route2"}});
		console.log('reached /edit');
	}
});

