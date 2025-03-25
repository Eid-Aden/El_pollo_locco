class World {
  character = new Character();
  anamies = [new Chicken(), new Chicken(), new Chicken()];
  clouds = [new Cloud()];
  backgrounds = [new Background('images/5_background/layers/air.png'), new Background('images/5_background/layers/3_third_layer/1.png', 12, 50), new Background('images/5_background/layers/2_second_layer/1.png', 0, 560), new Background('images/5_background/layers/1_first_layer/1.png', 0, 490)];
  ctx;
  canvas;
  constructor(canvas) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;

    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.addObjectsToMap(this.backgrounds);
    this.addMap(this.character);
    this.addObjectsToMap(this.clouds);
    this.addObjectsToMap(this.anamies);

    //this shows  every second more than 26 times  Images that so we cont able to see black  canvas--
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }
  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addMap(o);
    });
  }

  addMap(mo) {
    this.ctx.drawImage(mo.img, mo.position_X, mo.position_Y, mo.height, mo.width);
  }
}
