let canvas;
let world;

function init() {
  canvas = document.getElementById('canvas');
  /* canvas.width = 800;
  canvas.height = 600; */

  world = new World(canvas);

  console.log('meine Characte  ist MoveableObject', world.character);
}
