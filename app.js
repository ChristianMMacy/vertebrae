import HomeController from './views/Home/Home.controller';
import LoginController from './views/Login/Login.controller';
import AccountDetailsController from './views/AccountDetails/AccountDetails.controller';

import Backbone from 'backbone';

export default function () {
	const $        = require( 'jquery' );
	
	const app = {
		router    : new Backbone.Router,
		container : $( '#app-container' ), //get the node we're using as a container
	};
	
	//Init the router and provide the invalid route first so new routes will go on top
	app.router.route( '*invalidroute', function () {
		Backbone.history.navigate( '', { trigger : true } )
	} );
	
	// this comes last because it initializes our controllers and adds routes
	app.controllers = {
		homeController           : new HomeController(
			{
				router    : app.router,
				container : app.container
			}
		),
		loginController          : new LoginController(
			{
				router    : app.router,
				container : app.container
			}
		),
		accountDetailsController : new AccountDetailsController(
			{
				router    : app.router,
				container : app.container
			}
		)
	};
	
	//set pushState and start history
	const pushState = !!window.history.pushState;
	Backbone.history.start( {
			pushState : pushState,
			root      : '/'
		}
	);
}