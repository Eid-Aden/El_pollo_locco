class Character extends MoveableObject {
  width = 250;
  height = 90;
  position_Y = 150;
  warkingImag = ['images/2_character_pepe/2_walk/W-21.png', 'images/2_character_pepe/2_walk/W-22.png', 'images/2_character_pepe/2_walk/W-23.png', 'images/2_character_pepe/2_walk/W-24.png', 'images/2_character_pepe/2_walk/W-25.png', 'images/2_character_pepe/2_walk/W-26.png'];
  carruntImage = 0;
  world;
  speed = 10;
  constructor() {
    super();
    this.loadImage('images/2_character_pepe/2_walk/W-21.png');
    this.loadImages(this.warkingImag);
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (this.world.keyboard.RIGHT) {
        this.position_X += this.speed;
        this.otherDerections = false;
      }
      if (this.world.keyboard.LEFT) {
        this.position_X -= this.speed;
        this.otherDerections = true;
      }
      this.world.camara_X = -this.position_X;
    }, 1000 / 60);

    setInterval(() => {
      if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        let i = this.carruntImage % this.warkingImag.length;
        //Sawirada  Character  iyo  Animations  ku Xeeran  waa farsamada lagu Dhaqaajiyo!
        let path = this.warkingImag[i];
        this.img = this.imageCache[path];
        this.carruntImage++;
      }
    }, 200);
  }

  jamp() {}
}
