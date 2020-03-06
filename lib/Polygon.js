class Polygon {
  constructor(points, color) {
    this.points = points;
    this.color = color;
  }

  draw() {

    console.log("JA");
    context.beginPath();
    context.fillStyle = this.color;
    for (let i = 0; i < this.points; i++) {
      context.lineTo(getRandomInt(50, width - 50), getRandomInt(50, height - 50));
    }
    context.stroke();
    context.fill();

  }
}
