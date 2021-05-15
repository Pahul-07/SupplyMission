var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var soldier1Img, soldier1Sprite,soldier2Img, soldier2Sprite;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png");
	soldier1Img= loadImage("soldier1.png");
	soldier2Img= loadImage("soldier2.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	soldier1Sprite=createSprite(290, height-110, 10,10);
	soldier1Sprite.addImage(soldier1Img)
	soldier1Sprite.scale=0.17;

	soldier2Sprite=createSprite(510, height-115, 10,10);
	soldier2Sprite.addImage(soldier2Img)
	soldier2Sprite.scale=0.227;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  
  drawSprites();
  
  
 
}

function keyPressed() {
   if (keyCode === LEFT_ARROW) {
	    helicopterSprite.x=helicopterSprite.x-5;
   }

   if (keyCode === LEFT_ARROW && packageBody.position.y<210) {
	    packageBody.position.x=packageBody.position.x-5;
   }

   if (keyCode === RIGHT_ARROW) {
		helicopterSprite.x=helicopterSprite.x+5;
   }

   if (keyCode === RIGHT_ARROW && packageBody.position.y<210) {
		packageBody.position.x=packageBody.position.x+5;
   }
	  
   if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody, false)
   }
}

