class Dustbin{
constructor(x,y){
    this.boxPosition=width/2-100
	this.boxY=610
	this.leftWall=createSprite(boxPosition,boxY,20,100);
	this.leftWall.shapeColor="red"
	this.LeftWallBody=Bodies.rectangle(boxPosition+20,boxY,20,100,{isStatic:true})
	this.World.add(world, LeftWallBody);

	this.boxPosition=width/2-100
	this.boxY=610
	this.rightWall=createSprite(500,boxY,20,100);
	this.rightWall.shapeColor="red"
	this.rightWallBody=Bodies.rectangle(boxPosition+20,boxY,20,100,{isStatic:true})
	this.World.add(world, rightWallBody);

	this.boxPosition=width/2-100
	this.bottomWall=createSprite(400,650,200,20)
	this.bottomWall.shapeColor="red"
	this.bottomWallBody=Bodies.rectangle(400,650,200,20,{isStatic:true})
	this.World.add(world, bottomWallBody);
}

}
   