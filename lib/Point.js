/*
	23-2-2020
	klasse om punten op de 2d context van een canvas te tekenen

	eigenschappen
	* pos (positie van het middelpunt m.b.v. een Vector2d)
	* radius (grootte van de cirkel in pixels)
	* color (kleur van het punt, als String)
*/

class Point {

  constructor(x, y, radius, color, draggable) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color
    this.draggable = false || draggable;
    if (this.draggable) {
      this.drag();
    }
  }

  draw() {
    context.beginPath();
    context.lineWidth = 1;
    context.fillStyle = this.color;
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.stroke();
    context.fill();
  }


  drag() {
    this.dragging;
    addEventListener("mousemove", (e) => {
      if (this.dragging == true) {
        this.x = e.clientX;
        this.y = e.clientY;
      }
    });


    addEventListener("mousedown", (e) => {
      console.log("down");
      if (pointInCircle(e.pageX, e.pageY, this.x, this.y, this.radius)) {
        this.x = e.clientX;
        this.y = e.clientY;
        this.dragging = true;
      }
    });

    addEventListener("mouseup", (e) => {
      console.log("up");
      this.dragging = false;
    });

    function pointInCircle(x, y, cx, cy, radius) {
      var distancesquared = (x - cx) * (x - cx) + (y - cy) * (y - cy);
      return distancesquared <= radius * radius;
    }

  }


}
