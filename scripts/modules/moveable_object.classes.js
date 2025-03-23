class MoveableObject {
  position_X = 120;
  position_Y = 280;
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
