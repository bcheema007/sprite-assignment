var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./gZ3c5.png");

ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	let pokeman = new Pokeman(gameEngine, 360, 150);
	let pokeman1 = new Pokeman(gameEngine, 390, 150);
	let pokeman2 = new Pokeman(gameEngine, 420, 150);
	let pokeman3 = new Pokeman(gameEngine, 450, 150);
	let pokeman4 = new Pokeman(gameEngine, 480, 150);
	let pokeman5 = new Pokeman(gameEngine, 510, 150);
	let pokeman6 = new Pokeman(gameEngine, 540, 150);
	gameEngine.addEntity(pokeman); // add ninja to game engine
	gameEngine.addEntity(pokeman1);
	gameEngine.addEntity(pokeman2);
	gameEngine.addEntity(pokeman3);
	gameEngine.addEntity(pokeman4);
	gameEngine.addEntity(pokeman5);
	gameEngine.addEntity(pokeman6);

	gameEngine.init(ctx);

	gameEngine.start();
});
