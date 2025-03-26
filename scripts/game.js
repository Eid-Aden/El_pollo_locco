let canvas;
let world;
let keyboard = new Keyboard();

function init() {
  canvas = document.getElementById('canvas');

  world = new World(canvas);

  console.log('meine Characte  ist MoveableObject', world.character);
}

window.addEventListener('keydown', (event) => {
  if ((KeyboardEvent.keyCode = 39)) {
    keyboard.Right = true;
  }
  if ((KeyboardEvent.keyCode = 38)) {
    keyboard.Up = true;
  }
  if ((KeyboardEvent.keyCode = 37)) {
    keyboard.Left = true;
  }
  if ((KeyboardEvent.keyCode = 40)) {
    keyboard.Down = true;
  }
  if ((KeyboardEvent.keyCode = 32)) {
    keyboard.Space = true;
  }

  console.log(event);
});
