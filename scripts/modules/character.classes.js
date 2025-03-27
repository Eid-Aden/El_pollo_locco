class Character extends MoveableObject {
  width = 250;
  height = 90;
  position_Y = 150;
  walkingImage = ['images/2_character_pepe/2_walk/W-21.png', 'images/2_character_pepe/2_walk/W-22.png', 'images/2_character_pepe/2_walk/W-23.png', 'images/2_character_pepe/2_walk/W-24.png', 'images/2_character_pepe/2_walk/W-25.png', 'images/2_character_pepe/2_walk/W-26.png'];
  carruntImage = 0;
  world;
  speed = 10;
  constructor() {
    super();
    this.loadImage('images/2_character_pepe/2_walk/W-21.png');
    this.loadImages(this.walkingImage);
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
      this.world.camara_X = -this.position_X + 100;
    }, 1000 / 60);

    setInterval(() => {
      this.playAnimation(this.walkingImage);
    }, 200);
  }

  jamp() {}
}
