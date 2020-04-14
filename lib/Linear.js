class Linear {

  constructor(slope, intercept) {
    //slop is p
    this.slope = slope;
    this.intercept = intercept;
  }

  draw() {
    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle = "black";
    context.moveTo(0, this.intercept);
    context.lineTo(width, this.y(width));
    context.closePath();
    context.stroke();
  }
  y(x) {
    // y = a * x + b
    let y = this.slope * x + this.intercept;
    return y;
  }

  defineByTwoPoints(a, b) {
    let dy = b.pos.dy - a.pos.dy;
    let dx = b.pos.dx - a.pos.dx;
    this.slope = dy / dx;
    this.intercept = a.pos.dy - this.slope * a.pos.dx;
  }

  intersection(m) {
    var ans = {};
    ans.x = (m.intercept - this.intercept) / (this.slope - m.slope);
    ans.y = (ans.x * this.slope) + this.intercept
    return ans;
  }

  throughPointAndPerpedicularToLine(A,l){
  this.slope = -1/l.slope;
  this.yIntercept = A.y - this.slope*A.x;
}
}
