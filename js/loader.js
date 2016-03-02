var modules = [
	'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js',
	'https://code.jquery.com/jquery-1.12.0.min.js',
	'https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars.js',
	'js/plugins.js',
	'js/class.js',
	'js/templater.js',
	'js/main.js'
];

var templates = [
	{
		id: 'test',
		file: 'templates/test.htm'
	}
];

modules.forEach( function( src ) {
  var script = document.createElement( 'script' );
  script.src = src;
  script.async = false;
  document.head.appendChild( script );
} );

templates.forEach( function( scriptDefinition ) {
	var script = document.createElement( 'script' );
	script.src = scriptDefinition.file;
	script.id = scriptDefinition.id;
	script.type = 'text/x-handlebars-template';
	document.head.appendChild( script );
} );

window.CyberBrain = {};
