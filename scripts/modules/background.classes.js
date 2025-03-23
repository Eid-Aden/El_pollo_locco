class Background extends MoveableObject {
  constructor(imagePath, position_X, position_Y, width, height) {
    super().loadImage(imagePath);
    this.position_X = 0;
    this.position_Y = 420;
    this.width = -420;
    this.height = 720;
  }
}
