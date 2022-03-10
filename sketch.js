
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var omnom, omnomImg


function preload(){
  omnomImg = loadAnimation("omnom_hungry.gif");

  

}

function setup() {
  createCanvas(400,700);

  engine = Engine.create();
  world = engine.world;
  
  omnom = createSprite(50,50,200,700);
  omnom = addAnimation("omnom",omnomImg);
}

function draw() 
{
  background(51);
  Engine.update(engine);

}
