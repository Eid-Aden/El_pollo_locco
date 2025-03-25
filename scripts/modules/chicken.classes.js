class Chicken extends MoveableObject {
  width = 100;
  height = 80;
  position_Y = 320;

  constructor() {
    super().loadImage('images/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
    this.position_X = 200 + Math.random() * 500;

    this.anmate();
  }

  anmate() {
    setInterval(() => {
      this.position_X -= 0.6;
    }, 1000 / 60);
  }
}
