import Backbone from 'backbone';

export default Backbone.View.extend( {
	template : require( './home.template.hbs' ),
	
	render : function ( ) {
		this.$el.html( this.template() )
	}
} );