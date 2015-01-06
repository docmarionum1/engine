//Define the bullet module
gizmo.define(
	//Imports
	[
		'gizmo/object', 
		'gizmo/net', 
		'gizmo/drawable'
	], 
	function(object, net, drawable) {

		//Create a class mixing in object, net, drawable, input and wasd (default controls)
		return gizmo.class([object, net, drawable], {
			h: 5, w: 5,
			velocity: 30, 
			sprite: "bullet.png"

			collides: function(obj) {
				if (obj.instanceOf('player') && obj != this.owner) {
					obj.damage(10);
				}
			}
		});
	}
);