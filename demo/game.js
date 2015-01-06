//Define the game module importing game, environment and net from the core engine,
//and a custom player class.
gizmo.define(
	['gizmo/game', 'gizmo/environment', 'gizmo/net', 'player'], //Imports
	function(game, environment, net, player) { //Local names for imports

		//Create a class mixing in game and net
		return gizmo.class([game, net], {

			//Override init in game to create an environment.
			//config is a dict/object, in this case with at least x/y
			init: function(config) {
				this.environment = new environment(config);
				this.parent();
			},

			//Override the connect in the net mixin to add the player to
			//the env when a player connects.
			connect: function(socket) {
				var p = new player({x:0, y:0, w:25, h:25, sprite:'sprite.png'});
				socket.player = p;
				this.environment.add(p);
				this.parent();
			},

			//Override the disconnect to remove the player.
			disconnect: function(socket) {
				this.environment.remove(socket.player);
			}
		});
});