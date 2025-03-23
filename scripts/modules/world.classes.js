class World {
  character = new Character();
  anamies = [new Chicken(), new Chicken(), new Chicken()];
  clouds = [new Cloud()];
  ctx;
  canvas;
  constructor(canvas) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    //Draw show juzt  image in the Canvas also its display the Canvas--
    this.ctx.drawImage(this.character.img, this.character.position_X, this.character.position_Y, this.character.height, this.character.width);
    for (let i = 0; i < this.anamies.length; i++) {
      let enemy = this.anamies[i];

      this.ctx.drawImage(enemy.img, enemy.position_X, enemy.position_Y, enemy.height, enemy.width);
    }

    this.clouds.forEach((cloud) => {
      this.ctx.drawImage(cloud.img, cloud.position_X, cloud.position_Y, cloud.height, cloud.width);
    });
    //this shows  every second more than 26 times  Images that so we cont able to see black  canvas--
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }
}
