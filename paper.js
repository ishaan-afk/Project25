class paper {
    constructor (x,y,r){
     var options= {
         isStatic : false,
         restitution:0.3,
         friction:0,
         density:1.2

     }
     this.x=x;
     this.y=y;
     this.r=r;
     this.r2 = 70;
     this.image = loadImage ("paper.png");
     this.body=Bodies.circle(this.x,this.y,this.r,options);
      World.add(world,this.body);
      fill("white");
      ellipse(20,20,this.r);
    }
    display() {
        var BallPos = this.body.position;
        push()
        translate (BallPos.x,BallPos.y);
        ellipseMode(RADIUS);
        imageMode(RADIUS);
        fill("white");
      image(this.image,0,0,this.r2,this.r2);
        pop()

    }
}