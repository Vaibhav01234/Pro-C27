
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;

function preload(){

	
}

function setup() {
	createCanvas(800, 700);

  
	engine = Engine.create(); 
	world = engine.world;

	//Create the Bodies Here.

 bob1=new Bob(100,200,50,50)
 bob2=new Bob(200,200,50,50)
 bob3=new Bob(300,200,50,50)
 bob4=new Bob(400,200,50,50)

  roof = new Roof(400,200,200,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
    
  drawSprites();
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 roof.display();
}



