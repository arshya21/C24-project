class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density=1.2
        }
        this.x=x
        this.y=y
        this.radius=radius
        this.ellipse=ellipse(200, 200, 50, 50);
        matter.bodies.circle(x,y,radius,[options],[maxSides]);
    }
    
      keyPressed(){
        if(keyCode===UP_ARROW){
            matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
    }
     }
     

} 

