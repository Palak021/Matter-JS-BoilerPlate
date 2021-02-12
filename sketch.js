
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	  hammer = new Hammer(600,350,20,10);
      plane = new Plane(600,350,1400,900);
      stone = new Stone(800,550,0,0);
      //rubber = new Rubber(1000,650,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  hammer.display();
  plane.display();
  stone.display();
  //rubber.display();
  drawSprites();
 
}



