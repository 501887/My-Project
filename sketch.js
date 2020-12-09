
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,side0,side1,side2;

function preload(){
   
	binImg = loadImage("Images/dustbin.png");
}

function setup() {
	createCanvas(1200,600);
 
   
	engine = Engine.create();
	world = engine.world;

	paper = new Paper(250,540,70);

	ground = new Ground(600,600,1200,120);
 
	dustbin = createSprite(965,450,20,20);
	dustbin.addImage(binImg);
	dustbin.scale = 0.45;

	side0 = new Dustbin(902,450,10,150);
	side1 = new Dustbin(965,535,140,20);
	side2 = new Dustbin(1030,450,10,150);


	Engine.run(engine);
 
}


function draw() {

 rectMode(CENTER);
 background("white");

 Engine.update(engine);

 paper.display();

 ground.display();

 side0.display();
 side1.display();
 side2.display();

 drawSprites();

}

function keyPressed(){
   if(keyCode === UP_ARROW)  {
	  Matter.Body.applyForce(paper.body, paper.body.position, {x:85, y: -85})
   }

 }
