class Background extends MoveableObject {
  width = 480;
  height = 720;
  constructor(imagePath, position_X) {
    super();
    this.loadImage(imagePath);
    this.position_X = position_X;
    this.position_Y = 430 - this.width;
  }
}
