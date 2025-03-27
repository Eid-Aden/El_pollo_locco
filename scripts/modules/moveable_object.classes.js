class MoveableObject {
  position_X = 120;
  position_Y = 200;
  img;
  height = 150;
  width = 150;
  speed = 0.15;
  otherDerections = false;
  imageCache = {};
  currentImage = 0; // Korrekte Schreibweise hinzufügen!
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
  playAnimation(images) {
    /*   let i = this.carruntImage % this.walkingImage.length; */
    let i = this.currentImage % images.length;
    //Sawirada  Character  iyo  Animations  ku Xeeran  waa farsamada lagu Dhaqaajiyo!
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  moveRight() {}
  moveLeft() {
    setInterval(() => {
      this.position_X -= this.speed;
    }, 1000 / 60);
  }
}
