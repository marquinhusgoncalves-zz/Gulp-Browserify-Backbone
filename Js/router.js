Backbone = require('backbone')
ViewQualquer = require('./viewQualquer')
$ = require('jquery')
Backbone.$ = $

module.exports = Backbone.Router.extend({

	routes: {
		"":"home"   
	},
	start:function(){
		Backbone.history.start();
	},
	home: function() {  	
		view = new ViewQualquer({el:$("#conteudo")});		
	}

});