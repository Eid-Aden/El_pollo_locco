class World {
  character = new Character();
  level = level1;

  ctx;
  canvas;
  keyboard;
  camara_X = 0;
  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.keyboard = keyboard;

    this.draw();
    this.setWorld();
  }

  setWorld() {
    this.character.world = this;
  }

  draw() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.ctx.translate(this.camara_X, 0);

    this.addObjectsToMap(this.level.backgrounds);
    this.addMap(this.character);
    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.level.anamies);
    this.ctx.translate(-this.camara_X, 0);

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
    if (mo.otherDerections) {
      this.ctx.save();

      this.ctx.translate(mo.width, 0);
      mo.position_X = mo.position_X * -1;
      this.ctx.scale(-1, 1);
    }
    this.ctx.drawImage(mo.img, mo.position_X, mo.position_Y, mo.height, mo.width);
    if (mo.otherDerections) {
      this.ctx.restore();
      mo.position_X = mo.position_X * -1;
    }
  }
}
