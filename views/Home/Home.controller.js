import HomeView from './Home.view';

export default function (options) {
	const ctrl = this;
	
	//add our options to the controller
	ctrl.View = HomeView;
	ctrl.models = options.models;
	ctrl.router = options.router;
	ctrl.container = options.container;
	
	//add the route for this controller
	ctrl.router.route('(/)', function () {
		ctrl.view = new ctrl.View;
		ctrl.view.render();
		//render the view then append its node to the appContainer
		ctrl.container.empty().append(ctrl.view.el);
	});
}