const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;

function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;

    box1=new Box(200,200,50,50);   
    box2=new Box(230,50,70,90);  
    gr = new ground(200,500,800,15)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    gr.display()
}

