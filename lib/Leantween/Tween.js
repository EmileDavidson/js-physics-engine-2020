class Tween {

    constructor(obj, targetpos, speed, type) {
        this.gameObject = obj;
        this.startpos = new Vector2d(this.gameObject.pos.dx, this.gameObject.pos.dy);
        this.targetpos = targetpos;
        this.direction = new Vector2d(  targetpos.dx - this.startpos.dx,  targetpos.dy - this.startpos.dy);
        this.speed = speed;
        this.percent = 0;

        this.easingType = type;
    }

    UpdateTween(timeMultiplier){
        this.percent += timeMultiplier / this.speed;
        if (this.percent < 1)
        {
            let easingstep = this.easingType(this.percent);
            this.gameObject.pos.dx = this.startpos.dx + (this.direction.dx * easingstep);
            this.gameObject.pos.dy = this.startpos.dy + (this.direction.dy * easingstep);
            return;
        }
        console.log("Finished");
        this.gameObject.pos = this.targetpos;
    }
}