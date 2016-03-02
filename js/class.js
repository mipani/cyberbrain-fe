CyberBrain.Class = function() {};

CyberBrain.Class.extend = function( proto, static ) {
	var parent = this, child;

	if( proto && _.has( proto, 'constructor' ) ) {
		child = proto.constructor
	} else {
		child = function() {
			return parent.apply( this, arguments );
		};
	}

	_.extend( child, parent, static );

	var Surrogate = function() {
		this.constructor = child;
	};
	Surrogate.prototype = parent.prototype;
	child.prototype = new Surrogate;

	if( proto ) {
		_.extend( child.prototype, proto );
	}

	child.__super__ = parent.prototype;

	return child;
};
