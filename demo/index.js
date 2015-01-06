var gizmo = require('gizmo/server'); //Import the gizmo Server

//Run the gizmo server.  
//Port is the port to serve on, 
//url is the url to serve the game from
//game_module is the path to the main game js file,
//in this case game.js
//This will result in the game being available at http://<domain>:1337/
//Which could then simply be put in an iframe within another page.
gizmo.runServer({
	port: 1337,
	url: '/',
	game_module: 'game'
});