class Chicken extends MoveableObject {
  constructor() {
    super().loadImage('images/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
    this.position_X = 200 + Math.random() * 500;
  }
}
