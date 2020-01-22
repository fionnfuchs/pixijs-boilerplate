let app = new PIXI.Application({width: 512, height: 512});
document.body.appendChild(app.view);

let CAMERA = {
  x: -50,
  y: -50,
}

// CONTAINERS FOR GAME OBJECTS
let WORLD = new PIXI.Container();
let GUI = new PIXI.Container();

// LOADING SCREEN
let loadingScreen = new PIXI.Container();
let text = new PIXI.Text('Loading...',{fontFamily : 'Arial', fontSize: 12, fill : 0xFFFFFF, align : 'center'});
loadingScreen.addChild(text);
app.stage.addChild(loadingScreen);

// LOAD RESOURCES
const loader = PIXI.Loader.shared;
// -- loader.add(...)
loader.load(loadComplete);

function loadComplete() {
  console.log("Loaded");
  loadingScreen.visible = false;

  app.ticker.add(delta => update(delta));

  app.stage.addChild(WORLD);
  app.stage.addChild(GUI);
}

function update(delta) {
  WORLD.x = -CAMERA.x;
  WORLD.y = -CAMERA.y;
  console.log(delta);
}
