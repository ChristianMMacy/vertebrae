import Backbone from 'backbone';

export default Backbone.View.extend( {
	template : require( './accountDetails.template.hbs' ),
	
	render : function ( ) {
		this.$el.html( this.template() )
	}
} );