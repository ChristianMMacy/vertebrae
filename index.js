//Uninitialized Controllers
import HomeController from './views/Home.controller.js';

(function () {
	document.onreadystatechange = function () {
		if (document.readyState === "interactive") {
			const Backbone = require('backbone');
			const $ = require('jquery');
			
			initApp();
			
			//set pushState and start history
			const pushState = !!window.history.pushState;
			Backbone.history.start({
					pushState: pushState,
					root: '/'
				}
			);
			
			function initApp() {
				//declare our app and related objects
				let app = {
					router: new Backbone.Router,
					container: $('#app-container'), //get the node we're using as a container
				};
				
				//Init the router and provide the invalid route first so new routes will go on top
				app.router.route('*invalidroute', function () {
					Backbone.history.navigate('', {trigger: true})
				});
				
				// this comes last because it initializes our controllers and adds routes
				app.controllers = {
					homeController: new HomeController(
						{
							models: {user: app.user},
							router: app.router,
							container: app.container
						}
					)
				};
			}
		}
	};
})();