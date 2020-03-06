class Linear {

    constructor(slope,intercept) {
        //slop is p
        this.slope = slope;
        this.intercept = intercept;
    }

    draw(context){
        context.beginPath();
        context.lineWidth = 5;
        context.moveTo(0, this.intercept);
        context.lineTo(width, this.y(width));
        context.closePath();
        context.stroke();
    }
    y(x){
        // y = a * x + b
        let y = this.slope * x + this.intercept;
        return y;
    }

    defineByTwoPoints(a,b){
    let dy = b.y - a.y;
    let dx = b.x - a.x;
    this.slope = dy / dx;
    this.intercept = a.y - this.slope*a.x;
    }
}