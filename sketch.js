const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground1=new Ground(200,200,20,20);
}

function draw(){
    background(0);
    Engine.update(engine);
      
    ground1.display();
}
