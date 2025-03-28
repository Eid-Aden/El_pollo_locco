class Character extends MoveableObject {
  width = 250;
  height = 90;
  position_Y = 80;
  walkingImage = [
    'images/2_character_pepe/2_walk/W-21.png',
    'images/2_character_pepe/2_walk/W-22.png',
    'images/2_character_pepe/2_walk/W-23.png',
    'images/2_character_pepe/2_walk/W-24.png',
    'images/2_character_pepe/2_walk/W-25.png',
    'images/2_character_pepe/2_walk/W-26.png',
  ];

  JumpingImages = [
    'images/2_character_pepe/3_jump/J-31.png',
    'images/2_character_pepe/3_jump/J-32.png',
    'images/2_character_pepe/3_jump/J-33.png',
    'images/2_character_pepe/3_jump/J-34.png',
    'images/2_character_pepe/3_jump/J-35.png',
    'images/2_character_pepe/3_jump/J-36.png',
    'images/2_character_pepe/3_jump/J-37.png',
    'images/2_character_pepe/3_jump/J-38.png',
    'images/2_character_pepe/3_jump/J-39.png',
  ];
  carruntImage = 0;
  world;
  speed = 10;
  constructor() {
    super();
    this.loadImage('images/2_character_pepe/2_walk/W-21.png');
    this.loadImages(this.walkingImage);
    this.loadImages(this.JumpingImages);
    this.appyCravity();
    this.animate();
  }

  animate() {
    setInterval(() => {
      console.log(this.world.level.level_endX);
      if (this.world.keyboard.RIGHT && this.position_X < this.world.level.level_endX) {
        this.position_X += this.speed;
        this.otherDerections = false;
      }
      if (this.world.keyboard.LEFT && this.position_X > 0) {
        this.position_X -= this.speed;
        this.otherDerections = true;
      }

      if (this.world.keyboard.UP) {
        this.speedY = 20;
      }

      this.world.camara_X = -this.position_X + 100;
    }, 1000 / 60);

    setInterval(() => {
      if (this.isaboveGround()) {
        this.playAnimation(this.JumpingImages);
      } else {
        if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
          this.playAnimation(this.walkingImage);
        }
      }
    }, 200);
  }

  jamp() {}
}
