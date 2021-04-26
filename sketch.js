const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImage;
var snow;


function preload(){
  backgroundImage = loadImage("snow2.jpg");

}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  
  snow = new Snow(100,150,20,20);
}

function draw() {
  if(background)
  background(backgroundImage);  
  Engine.update(engine);

  snow.velocityX = 2;

  drawSprites();

  if(frameCount%60 === 0){
   snow.display();
  
  }

 
}