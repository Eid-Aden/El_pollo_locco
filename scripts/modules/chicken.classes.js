class Chicken extends MoveableObject {
  width = 65;
  height = 75;
  position_Y = 330;
  warkingImag = ['images/3_enemies_chicken/chicken_normal/1_walk/1_w.png', 'images/3_enemies_chicken/chicken_normal/1_walk/2_w.png', 'images/3_enemies_chicken/chicken_normal/1_walk/3_w.png'];
  carruntImage = 0;
  constructor() {
    super();
    this.loadImage('images/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
    this.loadImages(this.warkingImag);
    this.position_X = 200 + Math.random() * 500;
    this.speed = 0.15 + Math.random() * 0.8;

    this.animate();
  }

  animate() {
    this.moveLeft();
    setInterval(() => {
      let i = this.carruntImage % this.warkingImag.length;
      // markasta waxay  kusoo celinaysaa 0---6  hada hada 0---6 sidaas ayayn uwadaysa w aligeed!!
      let path = this.warkingImag[i];
      this.img = this.imageCache[path];
      this.carruntImage++;
    }, 1000);
  }
}
