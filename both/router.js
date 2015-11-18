FlowRouter.route("/", {
	name:'landing',
	action:function(params,queryParams){
		//mwcLayout.render('card',{main: "about"});
		console.log('reached /');
	}
});

