class MoveableObject {
  position_X = 20;
  position_Y = 200;
  img;
  height = 150;
  width = 150;
  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }
  moveRight() {}
  moveLeft() {}
}
