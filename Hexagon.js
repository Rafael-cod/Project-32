class Hexagon {
  constructor(x, y) {
    var options = {
         isStatic:false,
        'restitution':0.5,
        'friction':0.9,
        'density':0.5
    }
    this.body = Matter.Bodies.circle(x, y, 20, options);
    this.radius = 20;
    this.x = x;
    this.y = y;

    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    strokeWeight(3);
    stroke(255,10,10);
    fill(155);
    ellipse(0,0,this.radius,this.radius);
    pop();
  }
}

  