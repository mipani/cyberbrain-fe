CyberBrain.Templater = {
	getTemplate: function( templateId ) {
		debugger;

		var source = $( 'script#' + templateId ).html();

		if( !source.length ) {
			throw new Error( 'Handlebars template ' + templateId + ' not found' );
		}

		return Handlebars.compile( source );
	}
};

