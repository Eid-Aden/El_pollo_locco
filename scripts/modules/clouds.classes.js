class Cloud extends MoveableObject {
  position_Y = 20;
  width = 150;
  height = 600;
  constructor() {
    super().loadImage('images/5_background/layers/4_clouds/full.png');
    this.position_X = 0 + Math.random() * 500;
  }
}
