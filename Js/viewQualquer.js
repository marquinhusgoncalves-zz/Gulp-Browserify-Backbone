Backbone = require('backbone')
module.exports = Backbone.View.extend({	


	events : {

		"click #btnTeste":"botao"
	},

	botao : function(){
		alert("Clicado");
	},
	initialize:function(options) {
		el = options.el;
		this.render(); 
	},

	render: function() {
		return $(this.el).append("<h1>Gulp + Browserify!</h1>");		
	}

});