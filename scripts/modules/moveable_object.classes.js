class MoveableObject {
  position_X = 120;
  position_Y = 280;
  img;
  height = 150;
  width = 150;
  speed = 0.15;
  imageCache = {};
  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }
  /**
   *
   * @param {Array} arr = [img.png, img2.png, img3.png, img4.png]
   */
  // Socod siinta  Character  Pepe!!
  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  moveRight() {}
  moveLeft() {
    setInterval(() => {
      this.position_X -= this.speed;
    }, 1000 / 60);
  }
}
