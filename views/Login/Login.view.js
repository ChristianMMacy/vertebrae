import Backbone from 'backbone';

export default Backbone.View.extend( {
	template : require( './login.template.hbs' ),
	
	render : function ( ) {
		this.$el.html( this.template() )
	}
} );