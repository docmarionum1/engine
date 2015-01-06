//Define the player module
gizmo.define(
	//Imports
	[
		'gizmo/object', 
		'gizmo/net', 
		'gizmo/drawable', 
		'gizmo/input', 
		'gizmo/wasd',
		'bullet'
	], 
	function(object, net, drawable, input, wasd, bullet) {

		//Create a class mixing in object, net, drawable, input and wasd (default controls)
		return gizmo.class([object, net, drawable, input, wasd], {
			x: 0, y: 0,
			h: 25, w: 25,
			velocity: 10, 
			sprite: "player.png",
			health: 100,

			onKeyPress: function(key) {
				if (key == input.SPACE) {
					this.environment.add(new bullet({
						owner: this,
						x: this.x,
						y: this.y,
						direction: this.direction
					}));
				}

				this.parent(key);
			}
		});
	}
);