const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var boy, boyAnimation;
var Stone1;
var mango1,mango2,mango3,mango4;
var constraint;

function preload()
{
	boyAnimation = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rectMode(CENTER);
	image(boy,300,450)
	scale.image(3);

	Stone1 = new STONE (150,380);

	mango1 = new MANGO();
	mango2 = new MANGO();
	mango3 = new MANGO();
	mango4 = new MANGO();

	constraint = new CONSTRAINT(Stone1,{x :250, y : 500})

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  Stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  constraint.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);

  drawSprites();
 
}

function mouseDragged() {
	Matter.bodsy.setPosition(STONE,{x : mouseX, y : mouseY});
}

function mouseReleased() {
	constraint.fly();
}

function detectCollision (lmango,lstone) {
	mangoBodyPosition = lmango.body.Position
	stoneBodyPosition = lstone.body.Position

	var distance =dist(stoneBodyPosition.xstoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if (distance<=lmango.r+lstone.r) {
		Matter.Body.setStatic(lmango.body,false);
	}

}

function keyPressed () {
	if (keyCode === 32) {
		Matter.Body.setPosition(stone.body,{x : 235, y : 420});
		launcher.Object.attach(stone.body);
	}
}