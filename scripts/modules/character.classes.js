class Character extends MoveableObject {
  width = 250;
  height = 90;
  position_Y = 140;
  warkingImag = ['images/2_character_pepe/2_walk/W-21.png', 'images/2_character_pepe/2_walk/W-22.png', 'images/2_character_pepe/2_walk/W-23.png', 'images/2_character_pepe/2_walk/W-24.png', 'images/2_character_pepe/2_walk/W-25.png', 'images/2_character_pepe/2_walk/W-26.png'];
  carruntImage = 0;
  constructor() {
    super();
    this.loadImage('images/2_character_pepe/2_walk/W-21.png');
    this.loadImages(this.warkingImag);
    this.animate();
  }
  animate() {
    setInterval(() => {
      let i = this.carruntImage % this.warkingImag.length;
      // markasta waxay  kusoo celinaysaa 0---6  hada hada 0---6 sidaas ayayn uwadaysa w aligeed!!
      let path = this.warkingImag[i];
      this.img = this.imageCache[path];
      this.carruntImage++;
    }, 1000);
  }

  jamp() {}
}
