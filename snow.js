class Snow{

    constructor(x,y,r,angle){

        var options = {
        'friction':1.0,
        'density':1.0
        }
        this.body = Bodies.circle(x,y,r,options);
        this.r=r;
        this.image = loadImage("snow5.webp");
        World.add(world,this.body);
    }

    display(){

        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(this.image, 0, 0, this.r);
        pop();
    }
}