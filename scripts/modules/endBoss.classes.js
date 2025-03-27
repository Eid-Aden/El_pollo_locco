class EndBoss extends MoveableObject {
  height = 400;
  width = 450;
  position_Y = -35;

  walkingImage = ['images/4_enemie_boss_chicken/2_alert/G5.png', 'images/4_enemie_boss_chicken/2_alert/G6.png', 'images/4_enemie_boss_chicken/2_alert/G7.png', 'images/4_enemie_boss_chicken/2_alert/G8.png', 'images/4_enemie_boss_chicken/2_alert/G9.png', 'images/4_enemie_boss_chicken/2_alert/G10.png', 'images/4_enemie_boss_chicken/2_alert/G11.png', 'images/4_enemie_boss_chicken/2_alert/G12.png'];

  constructor() {
    super();
    this.loadImage(this.walkingImage[0]);
    this.loadImages(this.walkingImage);
    this.position_X = 1000;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.walkingImage);
    }, 1000);
  }
}
